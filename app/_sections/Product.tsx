'use client'
import Slide from "../_components/Slide"
import Image from "next/image"
import ProductCard from "../_components/Product_Card"

export default function Product() {

  return (
    <section>
      <Slide>
        <h2>Conoce sobre nuestro producto</h2>
        <Image 
          src="/img/cafe_natural.jpeg"
          alt="Cafe en grano"
          width={24}
          height={24}
          className=""
        />
      </Slide>
      <Slide>
        <p>Seleccionamos granos exclusivamente del sector Cararango, Loja. Nuestro proceso de tueste medio resalta la dulzura natural y la acidez vibrante del Arábigo de altura, molido con la precisión exacta para liberar su máximo potencial aromático.</p>
        <ul>
          <li><em>Origen</em> Cararango, Loja, Ecuador</li>
          <li><em>Tueste</em> Medio — balance entre cuerpo y aroma</li>
          <li><em>Variedad</em> Arabigo de altura</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Empaque a la altura</h2>
        <p>Hemos seleccionado un empaque que protege la integridad de nuestro cafe y sostiene el compromiso de que cada taza conserve el cuerpo y la dulzura original.</p>
      </Slide>
      <Slide>
        <h3>Valvula degasificadora</h3>
        <p>Permite la salida de CO₂ natural del grano sin permitir la entrada de oxígeno, manteniendo el aroma intacto.</p>
        <Image 
          src="/img/paquete_cafe.png"
          alt="Empaque Cafe Luchita"
          width={24}
          height={24}
          className=""
        />
      </Slide>
      <Slide>
        <h3>Cierre hermetico</h3>
        <p>Sello de alta precisión que bloquea la humedad y el aire, preservando la frescura desde el tueste.</p>
        <Image 
          src="/img/paquete_cafe.png"
          alt="Empaque Cafe Luchita"
          width={24}
          height={24}
          className=""
        />
      </Slide>
      <Slide>
        <h3>Material especial</h3>
        <p>Laminado multicapa que protege contra luz UV, humedad y variaciones de temperatura.</p>
        <Image 
          src="/img/paquete_cafe.png"
          alt="Empaque Cafe Luchita"
          width={24}
          height={24}
          className=""
        />
      </Slide>
      <Slide>
        <h2>Escoge tu presentacion favorita</h2>
        <div className="">
          <ProductCard price={7} photo_src="/img/cafe_molido.jpg">
            <h3>Cafe molido</h3>
            <p>Tipo de molido fino. Listo para preparar directamente en tu cafetera o prensa francesa.</p>
            <p>450gr</p>
          </ProductCard>
          <ProductCard price={10} photo_src="/img/cafe_grano.jpg">
          <h3>Cafe en grano</h3>
            <p>Granos seleccionados enteros para moler al momento y capturar el aroma más fresco.</p>
            <p>450gr</p>
          </ProductCard>
          <p>* Los precios pueden variar por el servicio a domicilio</p>
        </div>
      </Slide>
    </section>
  )
}