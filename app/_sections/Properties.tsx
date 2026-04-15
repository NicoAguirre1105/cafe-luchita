"use client"

import PropertyCard from "../_components/Property_Card"
import Image from "next/image"

export default function Properties() {

  return (
    <>
    <section className="bg-(--cream) py-20 flex flex-col items-center gap-15">
      <PropertyCard>
        <Image 
          src="/icons/plant_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />
        <p>Sin químicos ni conservantes</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/delivery_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />  
        <p>Entrega a domicilio</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/coffee_bean_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className="h-20 w-auto"
          />
        <p>Café 100% natural</p>
      </PropertyCard>
    </section>
    </>
  )
}