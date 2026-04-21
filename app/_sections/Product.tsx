'use client'
import Slide from "../_components/Slide"
import Image from "next/image"
import ProductCard from "../_components/Product_Card"

export default function Product() {

  return (
    <section className="relative" id="Producto">
      <Image 
        src="/img/cafe_natural.jpeg"
        alt="Cafe en grano"
        width={6000}
        height={4000}
        className="absolute min-h-dvh object-cover -z-1 opacity-50"
      />
      <Slide className="text-(--cream) gap-15 px-5 py-20 items-center">
        <div className="flex flex-col w-full max-w-250 gap-10 md:px-20 md:py-30">
        <h2 className="font-bold text-3xl md:text-4xl">
          Conoce sobre <em className="text-(--orange)">nuestro</em> producto
        </h2>
        <p className="text-sm pr-20 max-w-200 sm:text-base md:text-lg">
          Seleccionamos granos exclusivamente del sector Cararango, Loja. Nuestro proceso de tueste medio resalta la dulzura natural y la acidez vibrante del Arábigo de altura, molido con la precisión exacta para liberar su máximo potencial aromático.
        </p>
        <ul className="mt-10 text-sm sm:text-base md:text-lg">
          <li><em className="not-italic font-bold">Origen:</em> Cararango, Loja, Ecuador</li>
          <li><em className="not-italic font-bold">Tueste:</em> Medio — balance entre cuerpo y aroma</li>
          <li><em className="not-italic font-bold">Variedad:</em> Arábigo de altura</li>
        </ul>
        </div>
      </Slide>
      <div className="bg-(--cream) px-5 py-20 text-(--green) flex flex-col items-center">
        <div className="flex flex-col w-full max-w-250 gap-10 md:px-20 md:py-30">
        <h2 className="font-bold text-3xl md:text-4xl">Empaque a la <em className="text-(--orange)">altura</em></h2>
        <p className="text-sm sm:text-base md:text-lg">Hemos seleccionado un empaque que protege la integridad de nuestro cafe y sostiene el compromiso de que cada taza conserve el cuerpo y la dulzura original.</p>
          <div className="flex flex-col gap-5 text-sm md:text-base">
            <h3 className="font-bold text-lg md:text-xl">Válvula degasificadora</h3>
            <p className="max-w-170 text-base md:text-lg">Permite la salida de CO₂ natural del grano sin permitir la entrada de oxígeno, manteniendo el aroma intacto.</p>
            <Image 
              src="/img/valvula.png"
              alt="Empaque Cafe Luchita"
              width={2100}
              height={3800}
              className="mt-10 w-full max-w-100 self-center"
            />
          </div>
          <div className="flex flex-col gap-5 text-sm md:text-base">
            <h3 className="font-bold text-lg md:text-xl">Cierre hermético</h3>
            <p className="max-w-150 text-base md:text-lg">Sello de alta precisión que bloquea la humedad y el aire, preservando la frescura desde el tueste.</p>
            <Image 
              src="/img/sello.png"
              alt="Empaque Cafe Luchita"
              width={2100}
              height={3800}
              className="mt-10 w-full max-w-100 self-center"
            />
          </div>
          <div className="flex flex-col gap-5 text-sm md:text-base">
            <h3 className="font-bold text-lg md:text-xl">Material especial</h3>
            <p className="max-w-150 text-base md:text-lg">Laminado multicapa que protege contra luz UV, humedad y variaciones de temperatura.</p>
            <Image 
              src="/img/paquete_cafe.png"
              alt="Empaque Cafe Luchita"
              width={2100}
              height={3800}
              className="mt-10 w-full max-w-80 self-center"
            />
          </div>
        </div>
      </div>
      <div className="bg-(--orange) text-(--cream) justify-center flex">
        <div className="flex flex-col w-full max-w-250 gap-10 py-20 px-5 md:px-20 md:py-30">
        <h2 className="font-bold text-3xl md:text-4xl">Escoge tu presentación <em className="text-(--green)">favorita</em></h2>
        <div className="flex gap-10 mt-15 mb-10 flex-wrap justify-center md:text-lg">
          <ProductCard photo_src="/img/cafe_molido.jpg">
            <h3 className="font-bold">Café molido</h3>
            <p className="text-sm md:text-base">Tipo de molido medio. Listo para preparar directamente en tu cafetera o filtro.</p>
            <p className="font-semibold italic text-sm md:text-base">450gr</p>
          </ProductCard>
          <ProductCard photo_src="/img/cafe_grano.jpg">
            <h3 className="font-bold">Café en grano</h3>
            <p className="text-sm md:text-base">Granos seleccionados enteros para moler al momento y capturar el aroma más fresco.</p>
            <p className="font-semibold italic text-sm md:text-base">450gr</p>
          </ProductCard>
        </div> 
        </div>
      </div>
    </section>
  )
}