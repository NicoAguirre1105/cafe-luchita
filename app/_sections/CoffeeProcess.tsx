'use client'

import { useState } from "react"
import Image from "next/image"
import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"

// TODO: reemplazar las imágenes con fotos reales de cada fase
const steps = [
  {
    number: "01",
    name: "Cosecha",
    description:
      "Los granos se seleccionan a mano, uno por uno, escogiendo solo los que llegaron a su punto exacto de madurez. En Cararango, la cosecha es un acto de paciencia.",
    image: "/img/about_1.jpeg",
    detail: "Selección manual · Grano a grano",
  },
  {
    number: "02",
    name: "Fermentación",
    description:
      "El grano es conservado durante horas controladas. Este proceso descompone la pulpa y activa los compuestos que dan carácter y complejidad a la taza.",
    image: "/img/cafe_natural.jpeg",
    detail: "Proceso controlado · 4-6 días",
  },
  {
    number: "03",
    name: "Secado",
    description:
      "Extendidos bajo el sol de Vilcabamba, los granos pierden humedad lentamente. El secado natural preserva los azúcares y aromas que el tueste luego revelará.",
    image: "/img/carrousel_1.jpeg",
    detail: "Secado solar · 15–20 días",
  },
  {
    number: "04",
    name: "Pilado",
    description:
      "Se retira la cáscara seca que protegió al grano durante el proceso. Lo que queda es el grano verde, listo para ser clasificado y enviado a tostar.",
    image: "/img/carrousel_2.jpeg",
    detail: "Trillado · Clasificación por tamaño",
  },
  {
    number: "05",
    name: "Tueste",
    description:
      "El grano verde entra al tostador y en minutos se transforma. Nuestro tueste medio preserva los sabores del origen — dulce, complejo, sin amargor.",
    image: "/img/carrousel_3.jpeg",
    detail: "Tueste medio",
  },
  {
    number: "06",
    name: "Molido",
    description:
      "El café molido se empaca de inmediato en nuestra bolsa con válvula degasificadora. Desde el tostador hasta tu puerta, sin perder su aroma.",
    image: "/img/cafe_molido.jpg",
    detail: "Molido medio · Empaque hermético",
  },
]

export default function CoffeeProcess() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <ScrollChapter tone="coffee" id="Proceso"
      steps={[
        <Container size="wide" key="header">
          <SectionHeader
            eyebrow="Del campo a tu taza"
            title={
              <>
                Cada taza cuenta{" "}
                <em className="not-italic italic text-(--orange) font-semibold">seis pasos</em>.
              </>
            }
            description="Detrás de cada funda hay un proceso largo y cuidadoso. Aquí puedes ver cómo el grano recorre el camino desde la finca hasta llegar a tu hogar."
            accentColor="var(--orange)"
          />
        </Container>,
        <Container size="wide" key="process">
          <h3 className="mb-8 md:mb-10 font-(family-name:--font-display) text-3xl md:text-5xl text-center text-(--cream)">
            Sigue el recorrido del{" "}
            <em className="not-italic italic text-(--orange) font-semibold">grano</em>.
          </h3>
          {/* Step tabs — horizontal scrollable row */}
          <div className="-mx-5 md:mx-0">
            <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-2 md:px-0 md:flex-wrap">
              {steps.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex-none flex items-center gap-3 rounded-2xl border px-5 py-3 transition-all duration-300 cursor-pointer ${
                    active === i
                      ? "bg-(--cream)/12 border-(--orange) shadow-[0_0_0_1px_rgba(245,149,103,0.3)]"
                      : "border-(--cream)/12 bg-(--cream)/4 hover:border-(--cream)/25 hover:bg-(--cream)/8"
                  }`}
                >
                  <span
                    className={`font-(family-name:--font-display) text-2xl tabular-nums leading-none transition-colors ${
                      active === i ? "text-(--orange)" : "text-(--cream)/25"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`text-sm font-medium whitespace-nowrap transition-colors ${
                      active === i ? "text-(--cream)" : "text-(--cream)/40"
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step — landscape card: image left, text right */}
          <div className="mt-6">
            <div
              className="overflow-hidden rounded-3xl border border-(--cream)/10 grid md:grid-cols-[1.1fr_1fr]"
              style={{ maxHeight: "56vh" }}
            >
              {/* Image */}
              <div className="relative min-h-[220px] md:min-h-0">
                <Image
                  src={step.image}
                  alt={step.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-(--coffee)/25" />
                <span className="absolute bottom-4 left-5 font-(family-name:--font-display) text-6xl text-(--cream)/12 font-bold leading-none select-none">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between p-6 md:p-8 bg-(--coffee) overflow-y-auto">
                <div>
                  <p className="text-xs uppercase tracking-widest text-(--orange) font-semibold">
                    {step.detail}
                  </p>
                  <h3 className="mt-3 font-(family-name:--font-display) text-3xl md:text-4xl text-(--cream) leading-tight">
                    {step.name}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-(--cream)/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Dot nav */}
                <div className="mt-8 flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        i === active
                          ? "bg-(--orange) w-6 h-2"
                          : "bg-(--cream)/20 w-2 h-2 hover:bg-(--cream)/40"
                      }`}
                      aria-label={`Ir a ${steps[i].name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>,
      ]}
    />
  )
}
