'use client'

import Image from "next/image"

export default function AboutUs() {

  return (
    <section>
      <h2>Una historia de campo, familia y sabor</h2>
      <p>Somos una empresa familiar de Loja que cree en el poder del café de origen. Cada grano que seleccionamos cuenta la historia de nuestra tierra, de los agricultores que la cuidan y del amor con el que procesamos cada cosecha.</p>
      <p>Nuestro compromiso es llevar el mejor café de altura a cada hogar, manteniendo la autenticidad del proceso artesanal y el respeto por el medio ambiente.</p>
      <Image 
        src="/img/about_1"
        alt="Cosecha de cafe"
        width={24}
        height={24}
        className=""
      />
    </section>
  )
}