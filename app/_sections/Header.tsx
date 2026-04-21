"use client"

import { useState,} from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header({
  isContactModalOpen,
  handleContactModal
}:{
  isContactModalOpen: boolean,
  handleContactModal: () => void
}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <header 
      className="">
      {/* Header Mobile */}
      <div className={`fixed z-50 top-0 left-0 w-full flex items-center justify-between px-6 py-4 backdrop-blur-xs bg-black/30
        transition-opacity duration-300 ease-in-out md:hidden
        ${!isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
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
        alt="Abrir menu"
        width={24}
        height={24}
        className="h-10 w-auto cursor-pointer hover:scale-105"
        onClick={handleMenu}
      />
      </div>
      <div className={`${isMenuOpen || isContactModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"} flex fixed z-50 w-full transition-opacity duration-300 ease-in-out bg-(--cream) border-3 border-(--green) items-center justify-between px-6 py-4 md:hidden`}>
      <Link href="#">
      <Image 
        src="/logos/logo_green.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className="h-10 w-auto"
      />
      </Link>
      { isMenuOpen && !isContactModalOpen && 
      <Image 
        src='/icons/close_green.svg'
        alt='Cerrar menu'
        width={24}
        height={24}
        className="h-10 w-auto cursor-pointer hover:scale-105"
        onClick={handleMenu}
      />
      }
      { isContactModalOpen && 
      <Image 
        src='/icons/toggle_right_green.svg'
        alt='Regresar'
        width={24}
        height={24}
        className="h-10 w-auto cursor-pointer hover:scale-105"
        onClick={handleContactModal}
      />
      }
      </div>
      <nav className={`fixed top-0 z-40 mt-18 min-h-dvh bg-(--cream) w-full pt-10 text-center text-(--green) font-semibold
        transition-all duration-300 ease-in-out border-b-3 border-x-3 border-(--green)
        ${isMenuOpen ? "left-0" : "left-full"}`}>
        <ul className="flex flex-col gap-3 items-center w-full">
          <Link href="#Inicio" className="hover:underline" onClick={handleMenu}><li>Inicio</li></Link>
          <Link href="#Producto" className="hover:underline" onClick={handleMenu}><li>Producto</li></Link>
          <Link href="#SobreNosotros" className="hover:underline" onClick={handleMenu}><li>Sobre Nosotros</li></Link>
          <button 
          className="bg-(--green) w-fit text-white px-4 py-2 rounded-md mt-20 
          cursor-pointer transition-[scale] duration-200 hover:scale-105"
          onClick={handleContactModal}>
            Contáctanos
          </button>
        </ul>
      </nav>





      {/* Header Desktop */}
      <div className={`hidden md:flex fixed z-50 top-0 left-0 w-full items-center justify-between px-20 py-5 backdrop-blur-xs bg-black/30
        transition-opacity duration-300 ease-in-out
        ${!isContactModalOpen? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Image 
        src="/logos/logo_cream.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className="h-10 w-auto"
      />
      <nav className="flex items-center">
        <ul className="flex text-(--cream) gap-10 text-lg font-semibold">
        <Link href="#Inicio" className="hover:underline"><li>Inicio</li></Link>
        <Link href="#Producto" className="hover:underline"><li>Producto</li></Link>
        <Link href="#SobreNosotros" className="hover:underline"><li>Sobre Nosotros</li></Link>
        </ul>
        <button 
          className="bg-(--green) w-fit text-white px-4 py-2 rounded-md ml-10 text-lg font-medium
          cursor-pointer transition-[scale] duration-200 hover:scale-105"
          onClick={handleContactModal}>
          Contáctanos
        </button>
      </nav>
      </div>
      <div className={`hidden md:flex fixed z-50 top-0 left-0 w-full items-center justify-between px-20 py-5 border-b-3 border-(--green)
        transition-opacity duration-300 ease-in-out bg-(--cream)
        ${isContactModalOpen? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Image 
        src="/logos/logo_green.svg"
        alt="Logo de Café Luchita"
        width={24}
        height={24}
        className="h-10 w-auto"
      />
      <Image 
        src='/icons/close_green.svg'
        alt='Cerrar menu'
        width={24}
        height={24}
        className="h-10 w-auto cursor-pointer hover:scale-105"
        onClick={handleContactModal}
      />
        </div>
    </header>
  )
}