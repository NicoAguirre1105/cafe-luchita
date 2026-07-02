'use client'

import { useEffect, useState } from "react"
import { ScrollTrigger } from "./_lib/gsap"
import CoffeeSections from "./_components/CoffeeSections"
import PageLoader from "./_components/PageLoader"
import Header from "./_sections/Header"
import ContactModal from "./_sections/ContactModal"
import Hero from "./_sections/Hero"
import HowItWorks from "./_sections/HowItWorks"
import Presentations from "./_sections/Presentations"
import OfficeCTA from "./_sections/OfficeCTA"
import { OurCoffeeOrigin, RoastLevels, GrindTypes } from "./_sections/OurCoffee"
import CoffeeProcess from "./_sections/CoffeeProcess"
import Benefits from "./_sections/Benefits"
import Delivery from "./_sections/Delivery"
import Testimonials from "./_sections/Testimonials"
import AboutUs from "./_sections/AboutUs"
import FinalCTA from "./_sections/FinalCTA"
import Footer from "./_sections/Footer"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)
  const [minDelayPassed, setMinDelayPassed] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const handleContactModal = () => setIsContactModalOpen((v) => !v)

  // El loader se queda visible al menos 2s, sin importar qué tan rápido cargue
  // todo lo demás — evita que aparezca y desaparezca como un parpadeo.
  useEffect(() => {
    const id = setTimeout(() => setMinDelayPassed(true), 2000)
    return () => clearTimeout(id)
  }, [])

  // Salvavidas: si por lo que sea la imagen del Hero nunca dispara onLoad/onError,
  // no dejamos la página bloqueada para siempre detrás del loader.
  useEffect(() => {
    const id = setTimeout(() => setHeroImageLoaded(true), 4000)
    return () => clearTimeout(id)
  }, [])

  // Bloquea el scroll mientras el loader está visible, sin usar overflow:hidden
  // (eso saca la scrollbar y achica el viewport medido por GSAP; si ScrollTrigger.refresh()
  // corre en ese estado, fija un ancho de pin más ancho del real y aparece scroll
  // horizontal apenas se entra al área pineada). Bloqueando los eventos de scroll
  // en vez de la propiedad CSS, la scrollbar nunca desaparece y el ancho medido
  // es siempre el mismo, antes y después del reveal.
  useEffect(() => {
    if (isReady) return

    const preventWheelOrTouch = (e: Event) => e.preventDefault()
    const scrollKeys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "])
    const preventKeyScroll = (e: KeyboardEvent) => {
      if (scrollKeys.has(e.key)) e.preventDefault()
    }

    window.addEventListener("wheel", preventWheelOrTouch, { passive: false })
    window.addEventListener("touchmove", preventWheelOrTouch, { passive: false })
    window.addEventListener("keydown", preventKeyScroll, { passive: false })

    return () => {
      window.removeEventListener("wheel", preventWheelOrTouch)
      window.removeEventListener("touchmove", preventWheelOrTouch)
      window.removeEventListener("keydown", preventKeyScroll)
    }
  }, [isReady])

  // Solo se refresca ScrollTrigger (y se revela la página) una vez que pasaron
  // los 2s mínimos, cargó la imagen del Hero y las fuentes están listas, para
  // que el layout final (con el espacio de scroll del pin ya calculado) sea el
  // que el usuario ve desde el primer frame — evita el "doble render" del salto
  // de altura.
  useEffect(() => {
    if (!heroImageLoaded || !minDelayPassed) return

    let cancelled = false

    const settle = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready
      }
      // dos frames para que el layout se estabilice antes de medir
      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
      ScrollTrigger.refresh()
      if (!cancelled) setIsReady(true)
    }

    settle()
    return () => {
      cancelled = true
    }
  }, [heroImageLoaded, minDelayPassed])

  return (
    <>
      <PageLoader visible={!isReady} />
      <Header isContactModalOpen={isContactModalOpen} handleContactModal={handleContactModal} />
      <ContactModal isContactModalOpen={isContactModalOpen} />
      <main>
        <Hero handleContactModal={handleContactModal} onImageLoad={() => setHeroImageLoaded(true)} />
        <CoffeeSections>
          <HowItWorks />
          <Presentations handleContactModal={handleContactModal} />
          <OfficeCTA />
          <OurCoffeeOrigin />
          <RoastLevels />
          <GrindTypes />
          <CoffeeProcess />
          <Benefits />
          <Delivery />
          <Testimonials />
          <AboutUs />
          <FinalCTA handleContactModal={handleContactModal} />
        </CoffeeSections>
      </main>
      <Footer />
    </>
  )
}
