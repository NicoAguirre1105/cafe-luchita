'use client'
import Image from "next/image"

export default function Footer() {

  return (
    <footer>
      <Image 
        src="/logos/logo_large_black.jpeg"
        alt="Logo Cafe Luchita"
        width={24}
        height={24}
        className=""
      />
      <div className="">
        <p>Siguenos en nuestras redes sociales:</p>
        <div className="">
          <Image 
            src="/logos/logo_large_black.jpeg"
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