"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {

  return (
    <header>
      {/* Header Mobile */}
      <div className="">
      <Image 
        src="/logos/logo_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className=""
      />
      <Image 
        src="/icons/menu_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className=""
      />
      </div>
      <nav>
        <ul>
          <Link href="#"><li>Inicio</li></Link>
          <Link href="#Product"><li>Producto</li></Link>
          <Link href="#AboutUs"><li>Sobre Nosotros</li></Link>
          <button>Contáctanos</button>
        </ul>
      </nav>
      {/* Header Desktop */}
      <div className="">
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