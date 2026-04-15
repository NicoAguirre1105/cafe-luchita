"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {

  return (
    <header 
      className="
      absolute top-0 left-0 w-full z-50
      px-6 py-4">
      {/* Header Mobile */}
      <div className="flex items-center justify-between">
      <Link href="#">
      <Image 
        src="/logos/logo_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className="h-10 w-auto"
      />
      </Link>
      <Image 
        src="/icons/menu_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className="h-10 w-auto cursor-pointer hover:scale-105"
      />
      </div>
      <nav className="hidden">
        <ul>
          <Link href="#"><li>Inicio</li></Link>
          <Link href="#Product"><li>Producto</li></Link>
          <Link href="#AboutUs"><li>Sobre Nosotros</li></Link>
          <button>Contáctanos</button>
        </ul>
      </nav>
      {/* Header Desktop */}
      <div className="hidden">
      <nav>
        <ul>
          <Link href="#"><li>Inicio</li></Link>
          <Link href="#Product"><li>Producto</li></Link>
          <Link href="#AboutUs"><li>Sobre Nosotros</li></Link>
        </ul>
      </nav>
      <Image 
        src="/logos/logo_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className=""
      />
      </div>
    </header>
  )
}