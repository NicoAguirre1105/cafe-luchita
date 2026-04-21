"use client"

import PropertyCard from "../_components/Property_Card"
import Image from "next/image"

export default function Properties() {

  return (
    <>
    <section className="bg-(--cream) py-20 flex flex-wrap justify-center md:py-30">
      <h2 className="w-full text-3xl text-(--green) text-center font-bold mb-10 md:text-4xl">Beneficios</h2>
      <PropertyCard>
        <Image 
          src="/icons/plant_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />
        <p className="text-base md:text-lg">Sin químicos ni conservantes</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/delivery_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />  
        <p className="text-base md:text-lg">Entrega a domicilio</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/coffee_bean_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />
        <p className="text-base md:text-lg">Café 100% natural</p>
      </PropertyCard>
    </section>
    </>
  )
}