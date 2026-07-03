'use client'

import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"

const cards = [
  {
    title: "Cobertura",
    value: "Todo el Ecuador",
    description: "Enviamos a cualquier rincón del país. Coordinamos el despacho contigo para asegurarnos de que llegue en perfectas condiciones.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M16 28s10-8 10-16a10 10 0 10-20 0c0 8 10 16 10 16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="16" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Tiempos",
    value: "2–5 días hábiles",
    description: "Una vez confirmado el pedido, coordinamos la entrega directamente contigo. Nos encargamos del resto.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8v8l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Modalidades",
    value: "Bajo pedido o periódica",
    description: "Pídelo cuando esté por acabarse o configura entregas regulares para no quedarte sin café nunca.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M6 16a10 10 0 0118-6M26 16A10 10 0 018 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4v6h-6M10 28v-6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Delivery() {
  return (
    <ScrollChapter tone="green"
      steps={[
        <Container key="delivery">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-center md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--orange)">
                Envíos a domicilio
              </span>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.1] font-medium">
              <em className="font-bold">CAFÉ LUCHITA</em> va a tu{" "}
                <em className="not-italic text-(--orange) font-semibold">puerta</em>.
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-(--cream)/80 max-w-md">
                Envíos a nivel nacional. Coordinamos contigo y nos encargamos del
                resto — desde la finca a tu hogar.
              </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-3">
              {cards.map((c) => (
                <li key={c.title}>
                  <article className="h-full rounded-2xl border border-(--cream)/15 bg-(--cream)/5 p-6 transition-colors duration-300 hover:bg-(--cream)/10">
                    <div className="text-(--orange)">{c.icon}</div>
                    <p className="mt-5 text-xs uppercase tracking-widest text-(--cream)/60 font-semibold">
                      {c.title}
                    </p>
                    <p className="mt-2 font-(family-name:--font-display) text-xl md:text-2xl text-(--cream)">
                      {c.value}
                    </p>
                    <p className="mt-3 text-sm text-(--cream)/75 leading-relaxed">{c.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </Container>,
      ]}
    />
  )
}
