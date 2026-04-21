'use client'

import Image from "next/image"

export default function AboutUs() {

  return (
    <section className="bg-(--green) px-5 py-20 text-(--cream) flex flex-col gap-10 items-center md:px-20 md:py-30" id="SobreNosotros">
      <h2 className="font-bold text-3xl md:text-4xl">Una <em className="text-(--orange)">historia</em> de familia, campo y sabor</h2>
      {/* <p className="text-base max-w-250 text-center">Somos una empresa familiar de Loja que cree en el poder del café de origen. Cada grano que seleccionamos cuenta la historia de nuestra tierra, de los agricultores que la cuidan y del amor con el que procesamos cada cosecha.</p> */}
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center"><em className="font-semibold not-italic">Café Luchita</em> es un emprendimiento que nace para fortalecer una tradición familiar, que desde los años 1958 se construyó en la base económica y unidad de una familia.</p>
      <Image 
        src="/img/about_1.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream) max-w-80"
      />
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center">En la actualidad en Cararango, (pequeño poblado de San Pedro de Vilcabamba) se continúa con esta tradición: cultivo, cuidado, cosecha, secado y venta de este exquisito producto, y desde julio del 2024 se inicia la distribución del sabroso café molido</p>
      <Image 
        src="/img/about_2.jpeg"
        alt="Cosecha de cafe"
        width={1080}
        height={1220}
        className="w-full h-auto rounded-sm border-3 border-(--cream) max-w-80"
      />
      <p className="text-base md:text-lg max-w-150 text-justify md:text-center">Agradecemos a todos los caficultores y agricultores en general de Cararango por su dedicación y esmero por producir este producto tradicional fundamental en nuestro día a día.</p>
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