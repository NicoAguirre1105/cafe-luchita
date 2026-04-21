'use client'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {

  return (
    <footer className="text-(--white) flex px-5 py-10 items-center text-xs gap-1 justify-between md:px-40 md:text-sm">
      <Image 
        src="/logos/logo_large_black.jpeg"
        alt="Logo Cafe Luchita"
        width={100}
        height={100}
        className="h-30 w-auto md:h-40"
      />
      <div className="text-center">
        <p>Siguenos en nuestras redes sociales:</p>
        <div className="flex w-full justify-center gap-1 my-2">
          <Link href="https://www.facebook.com/profile.php?id=61565592500491&locale=es_LA" target="_blank">
          <Image 
            src="/icons/facebook_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className="h-6 w-auto md:h-10 transition-[scale] hover:scale-110 duration-200 ease-in-out"
          />  
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=593984634581" target="_blank">
          <Image 
            src="/icons/whatsapp_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className="h-6 w-auto md:h-10 transition-[scale] hover:scale-110 duration-200 ease-in-out"
           />  
          </Link>
          <Link href="https://www.instagram.com/cafe_luchita/" target="_blank">
          <Image 
            src="/icons/instagram_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className="h-6 w-auto md:h-10 transition-[scale] hover:scale-110 duration-200 ease-in-out"
           />  
          </Link>
        </div>
        <p>CAFÉ LUCHITA © 2026. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}