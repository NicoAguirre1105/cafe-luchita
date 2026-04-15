'use client'
import Image from "next/image"

export default function Footer() {

  return (
    <footer className="text-(--white) flex px-5 py-10 items-center text-xs">
      <Image 
        src="/logos/logo_large_black.jpeg"
        alt="Logo Cafe Luchita"
        width={100}
        height={100}
        className="h-30 w-auto"
      />
      <div className="text-center">
        <p>Siguenos en nuestras redes sociales:</p>
        <div className="flex w-full justify-center gap-1 my-2">
          <Image 
            src="/icons/facebook_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className=""
          />  
          <Image 
            src="/icons/whatsapp_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className=""
          />  
          <Image 
            src="/icons/instagram_logo.svg"
            alt="Logo Cafe Luchita"
            width={24}
            height={24}
            className=""
          />  
        </div>
        <p>CAFÉ LUCHITA © 2026. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}