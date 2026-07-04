'use client'

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { Button, ButtonLink } from "../_components/Button"
import BeanIcon from "../_components/BeanIcon"
import { gsap, useGSAP } from "../_lib/gsap"
import { handleHashLinkClick } from "../_lib/scrollytelling"

export default function Hero({
  handleContactModal,
  onImageLoad,
}: {
  handleContactModal: () => void
  onImageLoad?: () => void
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const registroRef = useRef<HTMLDivElement>(null)

  // Alinea el registro sanitario (horizontalmente) con el borde derecho del
  // bloque de stats (Altitud / Variedad / Perfil) — el contenido del Hero está
  // centrado dentro de max-w-5xl, así que ese borde no coincide con ningún
  // valor fijo en CSS, hay que medirlo.
  useLayoutEffect(() => {
    const sync = () => {
      if (!sectionRef.current || !statsRef.current || !registroRef.current) return
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const statsRect = statsRef.current.getBoundingClientRect()
      registroRef.current.style.right = `${sectionRect.right - statsRect.right}px`
    }

    sync()
    window.addEventListener("resize", sync)
    return () => window.removeEventListener("resize", sync)
  }, [])

  useGSAP(() => {
    const targets = [contentRef.current, indicatorRef.current, registroRef.current].filter(Boolean)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 0.65}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "power1.inOut" },
      // el contenido queda visible ~45% del tramo, luego se vacía antes de despinear
    }).to(targets, { autoAlpha: 0, y: -28, duration: 0.55 }, 0.45)
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="Inicio"
      className="relative w-full min-h-dvh overflow-hidden bg-(--espresso) flex items-center pb-16 md:pb-0"
    >
      <Image
        src="/img/landing-bg.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
        onLoad={onImageLoad}
        onError={onImageLoad}
      />
      <div className="absolute inset-0 bg-(--espresso)/40" />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-0 flex flex-col gap-6 md:gap-8"
      >

        {/* Eyebrow */}
        <div className="animate-fade-up flex items-center gap-3">
          <BeanIcon size={16} className="text-(--orange) flex-none" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--cream)/70">
            Cararango, San Pedro de Vilcabamba, Loja · desde 1958
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-(family-name:--font-display) text-(--cream) font-bold leading-none max-w-3xl"
          style={{ animationDelay: "0.08s", fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        >
          El sabor de{" "}
          <em className="not-italic text-(--orange) font-semibold">nuestra</em>{" "}
          tierra, en tu taza.
        </h1>

        {/* Descripción (izq) + Stats (der) */}
        <div
          className="animate-fade-up flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16"
          style={{ animationDelay: "0.18s" }}
        >
          <p className="max-w-md text-sm md:text-base leading-relaxed text-(--cream)/75">
            Café arábigo cultivado a 1.700 m.s.n.m., tostado al punto justo
            y con envío a todo el Ecuador.
          </p>

          <div ref={statsRef} className="border-t border-(--cream)/15 pt-5 grid grid-cols-3 gap-4 shrink-0 min-w-[260px]">
            <Stat value="1.700 m" label="Altitud" />
            <Stat value="Arábigo" label="Variedad" />
            <Stat value="Tueste medio" label="Perfil" />
          </div>
        </div>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-3 md:justify-start"
          style={{ animationDelay: "0.3s" }}
        >
          <Button variant="orange" size="lg" onClick={handleContactModal}>
            Hacer un pedido
          </Button>
          <ButtonLink
            href="#Presentaciones"
            onClick={(e) => handleHashLinkClick(e, "#Presentaciones")}
            variant="ghost"
            size="lg"
            className="text-(--cream)/80 hover:text-(--cream)"
          >
            Ver presentaciones →
          </ButtonLink>
        </div>
      </div>

      {/* Registro sanitario — abajo, alineado horizontalmente con el bloque de stats */}
      <div
        ref={registroRef}
        className="absolute bottom-14 right-4 md:bottom-16 md:right-10 z-10 text-[10px] md:text-xs text-(--cream)/80 tracking-wide"
      >
        Registro sanitario: RSA-58213-INHQC
      </div>

      {/* Scroll indicator — arrow */}
      <div
        ref={indicatorRef}
        className="hidden md:flex absolute bottom-8 right-10 flex-col items-center gap-2 text-(--cream)/40 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}>scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="mt-1">
          <line x1="8" y1="0" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="3,13 8,19 13,13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-(family-name:--font-display) text-base md:text-lg text-(--cream) font-semibold">{value}</p>
      <p className="text-[10px] md:text-xs text-(--cream)/55 uppercase tracking-wider mt-0.5">{label}</p>
    </div>
  )
}
