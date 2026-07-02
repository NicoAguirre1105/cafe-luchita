import type { MouseEvent } from "react"
import type { gsap } from "./gsap"

// Referencia al timeline maestro de CoffeeSections — solo hay una instancia de
// scrollytelling en la página, así que un singleton de módulo alcanza (evita
// tener que levantar un contexto compartido entre Header/Footer y CoffeeSections,
// que no son parientes en el árbol de componentes).
let masterTimeline: gsap.core.Timeline | null = null

export function setMasterTimeline(tl: gsap.core.Timeline | null) {
  masterTimeline = tl
}

// Usa las labels del timeline (una por capítulo, ubicada justo cuando termina
// su fade-in de entrada) para saltar directo al scroll donde ese contenido ya
// está visible — sin depender de que el usuario scrollee manualmente hasta ahí.
// Salto instantáneo (sin tween de scroll): animar el scroll compite con el
// scrub/inercia de las secciones pineadas (Hero y CoffeeSections), generando
// lento-rápido-lento en los bordes sin importar el ease elegido. Sin animación
// de scroll no hay velocidad que se sienta inconsistente — el único movimiento
// visible es el fade-in del contenido destino, que ya cae justo en la label.
function scrollToChapter(id: string): boolean {
  const trigger = masterTimeline?.scrollTrigger
  if (!trigger) return false

  const y = trigger.labelToScroll(id)
  if (!Number.isFinite(y)) return false

  window.scrollTo({ top: y, behavior: "auto" })
  return true
}

export function handleHashLinkClick(e: MouseEvent, href: string) {
  if (!href.startsWith("#")) return
  const id = href.slice(1)
  if (scrollToChapter(id)) {
    e.preventDefault()
  }
  // si el id no es un capítulo registrado (ej. "#Inicio", dentro del Hero),
  // se deja el comportamiento nativo del navegador (scroll normal al ancla).
}
