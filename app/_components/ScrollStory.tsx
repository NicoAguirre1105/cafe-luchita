'use client'

import { useRef } from "react"
import { gsap, useGSAP } from "../_lib/gsap"

export type Tone = "milk" | "cream" | "green" | "green-dark" | "orange" | "coffee"

const textColorMap: Record<Tone, string> = {
  milk: "text-(--coffee)",
  cream: "text-(--coffee)",
  green: "text-(--cream)",
  "green-dark": "text-(--cream)",
  orange: "text-(--coffee)",
  coffee: "text-(--cream)",
}

const bgColorVar: Record<Tone, string> = {
  milk: "var(--milk)",
  cream: "var(--cream)",
  green: "var(--green)",
  "green-dark": "var(--green-deep)",
  orange: "var(--orange)",
  coffee: "var(--coffee)",
}

// Tonos de fondo claro usan grano oscuro; tonos de fondo oscuro usan grano claro.
const darkBgTones: Tone[] = ["green", "green-dark", "coffee"]

const FADE_VH = 28
const GAP_VH = 18
const BUFFER_VH = 30

interface ScrollStoryProps {
  id?: string
  tone?: Tone
  /** tono de la sección inmediatamente anterior, para el crossfade de color al entrar */
  prevTone?: Tone
  steps: React.ReactNode[]
  /** vh de scroll "de lectura" en el que cada paso se queda visible y estático */
  stepVh?: number
  className?: string
}

export default function ScrollStory({
  id,
  tone = "milk",
  prevTone,
  steps,
  stepVh = 65,
  className = "",
}: ScrollStoryProps) {
  const containerRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const overlayClass = darkBgTones.includes(tone) ? "bean-overlay-light" : "bean-overlay-dark"

  useGSAP(() => {
    // Crossfade de color de fondo mientras la sección entra por scroll normal
    // (antes de pinearse) — no agrega distancia de scroll extra.
    if (prevTone) {
      gsap.fromTo(
        containerRef.current,
        { backgroundColor: bgColorVar[prevTone] },
        {
          backgroundColor: bgColorVar[tone],
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )
    }

    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    if (els.length === 0) return

    // Todo empieza invisible: la sección arranca vacía.
    gsap.set(els, { autoAlpha: 0, y: 28 })

    const n = els.length
    // asoma vacía + fade-in/out de cada paso + gaps vacíos entre pasos + colchón final vacío
    const totalVh = BUFFER_VH * 2 + FADE_VH * 2 * n + GAP_VH * (n - 1)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (totalVh / 100)}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "power1.inOut" },
    })

    let cursor = BUFFER_VH

    // 1. asoma la sección vacía (nada programado antes de `cursor`) → 2. aparece contenido
    tl.fromTo(els[0], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: FADE_VH }, cursor)
    cursor += FADE_VH

    for (let i = 0; i < n; i++) {
      cursor += stepVh // tiempo de lectura, contenido estático

      if (i < n - 1) {
        // 3. sale contenido
        tl.to(els[i], { autoAlpha: 0, y: -28, duration: FADE_VH }, cursor)
        cursor += FADE_VH + GAP_VH // breve vacío entre pasos
        // 4. aparece siguiente
        tl.fromTo(els[i + 1], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: FADE_VH }, cursor)
        cursor += FADE_VH
      }
    }

    // 5. desaparece el último paso
    tl.to(els[n - 1], { autoAlpha: 0, y: -28, duration: FADE_VH }, cursor)
    cursor += FADE_VH

    // 6. colchón vacío final → se cambia de sección
    tl.to({}, { duration: BUFFER_VH }, cursor)
  }, { scope: containerRef, dependencies: [steps.length, stepVh, tone, prevTone] })

  return (
    <section
      ref={containerRef}
      id={id}
      className={["relative w-full min-h-dvh flex flex-col pt-[var(--header-h)] overflow-hidden", textColorMap[tone], className]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor: bgColorVar[tone] }}
    >
      <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
      <div className="relative flex-1">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => {
              stepRefs.current[i] = el
            }}
            className="absolute inset-0 flex flex-col justify-center px-5 md:px-10 py-12"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  )
}
