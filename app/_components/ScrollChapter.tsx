'use client'

import { useContext, useLayoutEffect, useRef } from "react"
import { CoffeeSectionsContext } from "./CoffeeSections"
import { textColorMap, type Tone } from "./tones"

interface ScrollChapterProps {
  id?: string
  tone?: Tone
  steps: React.ReactNode[]
  /** vh de scroll "de lectura" en el que cada paso se queda visible y estático */
  stepVh?: number
}

/**
 * Un "capítulo" de contenido dentro de la secuencia pineada de CoffeeSections.
 * No pinea ni anima nada por sí mismo — solo registra sus pasos (y su tono, para
 * la transición de color de fondo) en el timeline maestro del padre.
 */
export default function ScrollChapter({ id, tone = "milk", steps, stepVh = 65 }: ScrollChapterProps) {
  const ctx = useContext(CoffeeSectionsContext)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    // Un paso puede marcar un tramo interno "scrubeable": un contenedor con
    // [data-scrub-viewport] (altura fija, overflow oculto) que envuelve un
    // [data-scrub-track] más alto que su contenido visible. Si existe, el
    // tiempo de lectura del paso (stepVh) se usa para desplazar el track hacia
    // arriba en vez de quedar estático — el "scroll interno" queda atado al
    // scroll de la sección en vez de a un contenedor con su propio overflow.
    const scrubEls = stepRefs.current.map((stepEl) => {
      if (!stepEl) return undefined
      const viewport = stepEl.querySelector<HTMLElement>("[data-scrub-viewport]")
      const track = viewport?.querySelector<HTMLElement>("[data-scrub-track]")
      if (!viewport || !track) return undefined
      const distance = track.scrollHeight - viewport.clientHeight
      if (distance <= 0) return undefined
      return { el: track, distance }
    })

    ctx?.register({
      tone,
      id,
      stepVh,
      stepEls: stepRefs.current.filter(Boolean) as HTMLDivElement[],
      scrubEls,
    })
    // Se registra una sola vez al montar — el orden de montaje (determinístico,
    // ya que el árbol de secciones es estático) define el orden de los capítulos.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {id && <span id={id} className="absolute top-0 left-0" aria-hidden />}
      {steps.map((step, i) => (
        <div
          key={i}
          ref={(el) => {
            stepRefs.current[i] = el
          }}
          className={["absolute inset-0 flex flex-col justify-center px-5 md:px-10 py-12", textColorMap[tone]].join(" ")}
        >
          {step}
        </div>
      ))}
    </>
  )
}
