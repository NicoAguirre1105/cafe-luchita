'use client'

import Image from "next/image"

export default function AboutUs() {

  return (
    <section className="bg-(--green) px-5 py-20 text-(--cream) flex flex-col gap-10 items-center md:px-20 md:py-30" id="SobreNosotros">
      <h2 className="font-bold text-3xl md:text-4xl">Una <em className="text-(--orange)">historia</em> de familia, campo y sabor</h2>
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center"><em className="font-semibold not-italic">Café Luchita</em> es un emprendimiento que nace para fortalecer una tradición familiar. Desde 1958 se constituyó en la base económica y unidad de una familia.</p>
      <Image 
        src="/img/about_1.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream) max-w-80"
      />
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center">En la actualidad en Cararango (pequeño poblado de San Pedro de Vilcabamba), se continúa con esta tradición: cultivo, cuidado, cosecha, secado y venta de este exquisito producto. Desde julio del 2024 se inicia la distribución del sabroso café molido.</p>
      <Image 
        src="/img/about_2.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream) max-w-80"
      />
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center">Agradecemos a todos los caficultores de Cararango por su dedicación y esmero .</p>
      <Image 
        src="/img/about_3.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream) max-w-80"
      />
    </section>
  )
}