'use client'
import Slide from "../_components/Slide"
import Image from "next/image"
import ProductCard from "../_components/Product_Card"

export default function Product() {

  return (
    <section className="relative">
      <Image 
        src="/img/cafe_natural.jpeg"
        alt="Cafe en grano"
        width={6000}
        height={4000}
        className="absolute min-h-dvh object-cover -z-1 opacity-50"
      />
      <Slide className="text-(--cream) gap-15 py-15 px-5">
        <h2 className="font-bold text-2xl">
          Conoce sobre <em className="text-(--orange)">nuestro</em> producto
        </h2>
        <p className="text-sm pr-20">
          Seleccionamos granos exclusivamente del sector Cararango, Loja. Nuestro proceso de tueste medio resalta la dulzura natural y la acidez vibrante del Arábigo de altura, molido con la precisión exacta para liberar su máximo potencial aromático.
        </p>
        <ul className="mt-10 text-sm">
          <li><em className="not-italic font-bold">Origen:</em> Cararango, Loja, Ecuador</li>
          <li><em className="not-italic font-bold">Tueste:</em> Medio — balance entre cuerpo y aroma</li>
          <li><em className="not-italic font-bold">Variedad:</em> Arabigo de altura</li>
        </ul>
      </Slide>
      <div className="bg-(--cream) px-5 py-20 text-(--green) flex flex-col gap-10">
        <h2 className="font-bold text-3xl">Empaque a la <em className="text-(--orange)">altura</em></h2>
        <p className="text-sm">Hemos seleccionado un empaque que protege la integridad de nuestro cafe y sostiene el compromiso de que cada taza conserve el cuerpo y la dulzura original.</p>
        <div className="flex flex-col gap-5 text-sm">
          <h3 className="font-bold">Valvula degasificadora</h3>
          <p>Permite la salida de CO₂ natural del grano sin permitir la entrada de oxígeno, manteniendo el aroma intacto.</p>
          <Image 
            src="/img/valvula.png"
            alt="Empaque Cafe Luchita"
            width={2100}
            height={3800}
            className="mt-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <h3 className="font-bold">Cierre hermetico</h3>
          <p className="text-sm">Sello de alta precisión que bloquea la humedad y el aire, preservando la frescura desde el tueste.</p>
          <Image 
            src="/img/sello.png"
            alt="Empaque Cafe Luchita"
            width={2100}
            height={3800}
            className="mt-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <h3 className="font-bold">Material especial</h3>
          <p className="text-sm">Laminado multicapa que protege contra luz UV, humedad y variaciones de temperatura.</p>
          <Image 
            src="/img/paquete_cafe.png"
            alt="Empaque Cafe Luchita"
            width={2100}
            height={3800}
            className="mt-10 w-full"
          />
        </div>
      </div>
      <div className="bg-(--orange) py-15 px-5 text-(--cream)">
        <h2 className="font-bold text-3xl">Escoge tu presentacion <em className="text-(--green)">favorita</em></h2>
        <div className="flex flex-col gap-10 mt-15 mb-10">
          <ProductCard price={7} photo_src="/img/cafe_molido.jpg">
            <h3 className="font-bold">Cafe molido</h3>
            <p className="text-sm">Tipo de molido fino. Listo para preparar directamente en tu cafetera o prensa francesa.</p>
            <p className="font-medium italic text-sm">450gr</p>
          </ProductCard>
          <ProductCard price={10} photo_src="/img/cafe_grano.jpg">
            <h3 className="font-bold">Cafe en grano</h3>
            <p className="text-sm">Granos seleccionados enteros para moler al momento y capturar el aroma más fresco.</p>
            <p className="font-medium italic text-sm">450gr</p>
          </ProductCard>
        </div>  
        <p className="text-(--green) font-medium text-sm">* Los precios pueden variar por el servicio a domicilio</p>
      </div>
    </section>
  )
}