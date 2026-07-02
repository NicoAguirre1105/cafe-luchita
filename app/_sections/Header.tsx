"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../_components/Button"
import { handleHashLinkClick } from "../_lib/scrollytelling"

const links = [
  { href: "#Inicio",        label: "Inicio" },
  { href: "#ComoFunciona",  label: "Cómo funciona" },
  { href: "#Presentaciones", label: "Producto" },
  { href: "#NuestroCafe",   label: "Nuestro café" },
  { href: "#Beneficios",    label: "Beneficios" },
  { href: "#SobreNosotros", label: "Nosotros" },
]

export default function Header({
  isContactModalOpen,
  handleContactModal,
}: {
  isContactModalOpen: boolean
  handleContactModal: () => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [visible, setVisible]       = useState(true)
  const rafRef      = useRef<number | null>(null)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const current = window.scrollY
        const atTop   = current < 10
        setScrolled(current > 60)
        setVisible(atTop || current < prevScrollY.current)
        prevScrollY.current = current
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  // Always visible when modal or menu is open
  const shouldShow = visible || isContactModalOpen || isMenuOpen

  const closeMenu = () => setIsMenuOpen(false)

  const glassStyle: React.CSSProperties = isContactModalOpen
    ? {
        backgroundColor: "rgba(246,239,228,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(69,116,97,0.15)",
        transition: "background-color 0.4s ease",
      }
    : {
        backgroundColor: scrolled ? "rgba(10,9,8,0.42)" : "rgba(10,9,8,0.08)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "background-color 0.4s ease",
      }

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full"
      style={{
        transform: shouldShow ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div style={glassStyle}>
        <div className="grid grid-cols-[auto_1fr_auto] items-center max-w-7xl mx-auto px-5 py-3 md:px-10 md:py-4">

          {/* Logo */}
          <Link href="#Inicio" onClick={closeMenu}>
            <Image
              src={isContactModalOpen ? "/logos/logo_green.svg" : "/logos/logo_cream.svg"}
              alt="Café Luchita"
              width={40}
              height={40}
              className="h-9 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex gap-6 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleHashLinkClick(e, l.href)}
                    className="transition-colors duration-200 hover:text-(--orange)"
                    style={{ color: isContactModalOpen ? "var(--green)" : "var(--cream)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: CTA / close + burger */}
          <div className="flex items-center justify-end gap-3">
            {isContactModalOpen ? (
              /* X close icon — desktop */
              <button
                type="button"
                onClick={handleContactModal}
                aria-label="Cerrar contacto"
                className="hidden lg:grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-(--green)/10 text-(--green) cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            ) : (
              <Button
                variant="outline"
                size="md"
                onClick={handleContactModal}
                className="hidden lg:inline-flex border-(--cream)/60 text-(--cream) hover:bg-(--cream)/10"
              >
                Contáctanos
              </Button>
            )}

            {/* Mobile burger / close */}
            <button
              type="button"
              onClick={() => {
                if (isContactModalOpen) handleContactModal()
                else setIsMenuOpen((v) => !v)
              }}
              aria-label="Abrir menú"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full transition-colors cursor-pointer"
              style={{ color: isContactModalOpen || isMenuOpen ? "var(--green)" : "var(--cream)" }}
            >
              <BurgerIcon open={isMenuOpen || isContactModalOpen} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-(--milk) transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 py-10">
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => {
                    handleHashLinkClick(e, l.href)
                    closeMenu()
                  }}
                  className="block font-(family-name:--font-display) text-3xl py-3 text-(--coffee) hover:text-(--green) transition-colors"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Button variant="secondary" size="lg" onClick={() => { closeMenu(); handleContactModal() }}>
              Contáctanos
            </Button>
            <p className="text-xs text-(--bark)/60 text-center">Café Luchita · Cararango, Loja</p>
          </div>
        </div>
      </div>
    </header>
  )
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d={open ? "M5 5L17 17M17 5L5 17" : "M3 7h16M3 15h16"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
