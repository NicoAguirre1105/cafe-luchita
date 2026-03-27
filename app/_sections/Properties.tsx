"use client"

import PropertyCard from "../_components/Property_Card"
import Image from "next/image"

export default function Properties() {

  return (
    <section>
      <PropertyCard>
        <Image 
          src="/icons/plant_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className=""
        />
        <p>Sin químicos ni conservantes</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/delivery_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className=""
        />  
        <p>Entrega a domicilio</p>
      </PropertyCard>
      <PropertyCard>
        <Image 
          src="/icons/coffee_bean_green.svg"
          alt="Planta"
          width={24}
          height={24}
          className=""
        />
        <p>Café 100% natural</p>
      </PropertyCard>
    </section>
  )
}