'use client'

import Image from "next/image"
import Link from "next/link"
import { handleHashLinkClick } from "../_lib/scrollytelling"

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61565592500491&locale=es_LA", icon: "/icons/facebook_logo.svg", label: "Facebook" },
  { href: "https://www.instagram.com/cafe_luchita/", icon: "/icons/instagram_logo.svg", label: "Instagram" },
  { href: "https://api.whatsapp.com/send?phone=593984634581", icon: "/icons/whatsapp_logo.svg", label: "WhatsApp" },
]

const nav = [
  { href: "#Inicio",          label: "Inicio" },
  { href: "#ComoFunciona",    label: "Cómo funciona" },
  { href: "#Presentaciones",  label: "Producto" },
  { href: "#NuestroCafe",     label: "Nuestro café" },
  { href: "#Beneficios",      label: "Beneficios" },
  { href: "#SobreNosotros",   label: "Nosotros" },
]

export default function Footer() {
  return (
    <footer className="bg-(--espresso) text-(--cream) px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div className="flex flex-col gap-5 items-start">
            <Image
              src="/logos/logo_cream.svg"
              alt="Café Luchita"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-(--cream)/70">
              Café lojano de origen, cultivado a más de 1.700 m.s.n.m. en Cararango. Tostado al
              punto justo y enviado a todo el Ecuador.
            </p>
          </div>

          <nav>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-(--orange)">
              Navegación
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleHashLinkClick(e, l.href)}
                    className="hover:text-(--orange) transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-(--orange)">
              Síguenos
            </h3>
            <ul className="mt-4 flex gap-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-(--cream)/10 hover:bg-(--orange) transition-colors"
                  >
                    <Image src={s.icon} alt="" width={18} height={18} className="h-5 w-auto" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-(--cream)/60">
              Cararango · San Pedro de Vilcabamba, Loja
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-(--cream)/10 pt-6 text-center text-xs text-(--cream)/50">
          <p>Café Luchita © {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1.5">
            Sitio web realizado por 
            <a
              href="https://nicolasaguirre.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Nicolas Aguirre"
              className="inline-flex cursor-pointer text-(--cream)/60 transition-transform duration-200 hover:scale-102 hover:text-(--orange) underline"
            >
              Nicolas Aguirre Castillo
            </a>.
          </p>
          <p>v2.0.0</p>
        </div>
      </div>
    </footer>
  )
}
