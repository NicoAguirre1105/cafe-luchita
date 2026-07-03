'use client'

import { createContext, useEffect, useRef, useState } from "react"
import { gsap, useGSAP } from "../_lib/gsap"
import { setMasterTimeline } from "../_lib/scrollytelling"
import { bgColorVar, darkBgTones, type Tone } from "./tones"

const FADE_VH = 28
const GAP_VH = 18
const BUFFER_VH = 30
/** vh reservado en el timeline para el tramo sin contenido entre capítulos */
const TRANSITION_VH = 40

export interface ChapterData {
  tone: Tone
  id?: string
  stepVh: number
  stepEls: HTMLDivElement[]
  /** por índice de paso: tramo interno a desplazar durante el tiempo de lectura (ver ScrollChapter) */
  scrubEls?: ({ el: HTMLElement; distance: number } | undefined)[]
}

interface CoffeeSectionsContextValue {
  register: (data: ChapterData) => void
}

export const CoffeeSectionsContext = createContext<CoffeeSectionsContextValue | null>(null)

interface ScheduleOp {
  at: number
  duration: number
  kind: "stepIn" | "stepOut" | "chapterChange" | "scrub"
  el?: HTMLElement
  /** índice de capítulo al que se entra avanzando (el anterior es chapterIndex - 1) */
  chapterIndex?: number
  /** solo en el primer stepIn de un capítulo con id — para registrar la label de navegación */
  chapterId?: string
  /** solo en "scrub" — distancia en px a desplazar el tramo interno */
  distance?: number
}

// Recorre los capítulos y arma la línea de tiempo (en vh) del timeline maestro:
// entra paso 0 → lectura → sale/entra paso N → ... → cambio de capítulo → siguiente.
function buildSchedule(chapters: ChapterData[]) {
  const ops: ScheduleOp[] = []
  let cursor = BUFFER_VH

  chapters.forEach((chapter, ci) => {
    const els = chapter.stepEls
    const n = els.length
    if (n === 0) return

    ops.push({ at: cursor, duration: FADE_VH, kind: "stepIn", el: els[0], chapterId: chapter.id })
    cursor += FADE_VH

    for (let i = 0; i < n; i++) {
      const readStart = cursor
      cursor += chapter.stepVh // tiempo de lectura, contenido estático (salvo scrub)

      const scrub = chapter.scrubEls?.[i]
      if (scrub) {
        ops.push({ at: readStart, duration: chapter.stepVh, kind: "scrub", el: scrub.el, distance: scrub.distance })
      }

      if (i < n - 1) {
        ops.push({ at: cursor, duration: FADE_VH, kind: "stepOut", el: els[i] })
        cursor += FADE_VH + GAP_VH
        ops.push({ at: cursor, duration: FADE_VH, kind: "stepIn", el: els[i + 1] })
        cursor += FADE_VH
      }
    }

    ops.push({ at: cursor, duration: FADE_VH, kind: "stepOut", el: els[n - 1] })
    cursor += FADE_VH

    const isLast = ci === chapters.length - 1
    if (!isLast) {
      ops.push({ at: cursor, duration: 0, kind: "chapterChange", chapterIndex: ci + 1 })
      cursor += TRANSITION_VH
    } else {
      cursor += BUFFER_VH
    }
  })

  return { ops, total: cursor }
}

export default function CoffeeSections({ children }: { children: React.ReactNode }) {
  const pinRef = useRef<HTMLElement>(null)
  const chaptersRef = useRef<ChapterData[]>([])
  const [tones, setTones] = useState<Tone[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const register = (data: ChapterData) => {
    chaptersRef.current.push(data)
  }

  useGSAP(
    () => {
      const chapters = chaptersRef.current
      if (chapters.length === 0) return

      setTones(chapters.map((c) => c.tone))

      const allEls = chapters.flatMap((c) => c.stepEls)
      gsap.set(allEls, { autoAlpha: 0, y: 28 })

      const { ops, total } = buildSchedule(chapters)

      // Un único pin para todo el bloque: el fondo no se mueve con el scroll,
      // el scroll solo avanza el timeline (contenido) y el índice de capítulo activo.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (total / 100)}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "power1.inOut" },
      })

      ops.forEach((op) => {
        if (op.kind === "stepIn") {
          tl.fromTo(op.el!, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: op.duration }, op.at)
          // Label en el momento justo en que termina el fade-in — un link de
          // navegación puede saltar acá directo, ya con el contenido visible,
          // sin que el usuario tenga que scrollear manualmente hasta encontrarlo.
          if (op.chapterId) {
            tl.addLabel(op.chapterId, op.at + op.duration)
          }
        } else if (op.kind === "stepOut") {
          tl.to(op.el!, { autoAlpha: 0, y: -28, duration: op.duration }, op.at)
        } else if (op.kind === "scrub") {
          tl.fromTo(op.el!, { y: 0 }, { y: -op.distance!, duration: op.duration, ease: "none" }, op.at)
        } else {
          // GSAP solo decide CUÁNDO cambia el capítulo activo (según scroll y
          // dirección) — el color en sí lo interpola la transición CSS nativa
          // del div (mismo mecanismo que un prototipo con Tailwind), no GSAP.
          tl.call(
            () => {
              const forward = (tl.scrollTrigger?.direction ?? 1) === 1
              setActiveIndex(forward ? op.chapterIndex! : op.chapterIndex! - 1)
            },
            undefined,
            op.at
          )
        }
      })

      setMasterTimeline(tl)
    },
    { scope: pinRef, dependencies: [] }
  )

  useEffect(() => {
    return () => setMasterTimeline(null)
  }, [])

  const activeTone = tones[activeIndex] ?? "milk"
  const isDark = darkBgTones.includes(activeTone)

  return (
    <CoffeeSectionsContext.Provider value={{ register }}>
      <section ref={pinRef} className="relative w-full min-h-dvh overflow-hidden pt-[var(--header-h)]">
        <div
          className="absolute inset-0 transition-colors duration-500 ease-in-out"
          style={{ backgroundColor: bgColorVar[activeTone] }}
        />
        <div
          className={`absolute inset-0 pointer-events-none bean-overlay-dark transition-opacity duration-500 ease-in-out ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`absolute inset-0 pointer-events-none bean-overlay-light transition-opacity duration-500 ease-in-out ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative w-full h-full">{children}</div>
      </section>
    </CoffeeSectionsContext.Provider>
  )
}
