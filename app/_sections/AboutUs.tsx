'use client'

import Image from "next/image"

export default function AboutUs() {

  return (
    <section className="bg-(--green) px-5 py-25 text-(--cream) flex flex-col gap-10 items-center">
      <h2 className="font-bold text-3xl">Una <em className="text-(--orange)">historia</em> de campo, familia y sabor</h2>
      <p className="text-base">Somos una empresa familiar de Loja que cree en el poder del café de origen. Cada grano que seleccionamos cuenta la historia de nuestra tierra, de los agricultores que la cuidan y del amor con el que procesamos cada cosecha.</p>
      <Image 
        src="/img/about_1.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream)"
      />
      <p className="text-base">Nuestro compromiso es llevar el mejor café de altura a cada hogar, manteniendo la autenticidad del proceso artesanal y el respeto por el medio ambiente.</p>
      <Image 
        src="/img/about_2.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream)"
      />
    </section>
  )
}