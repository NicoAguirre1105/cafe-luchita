'use client'

import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"

const steps = [
  {
    number: "01",
    title: "Escríbenos",
    description:
      "Cuéntanos cuánto café quieres y a qué dirección. Por WhatsApp, formulario o redes — como te resulte más fácil.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M8 14a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H20l-8 7v-7h-0a4 4 0 01-4-4V14z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Lo llevamos a tu puerta",
    description:
      "Entrega a domicilio en todo el Ecuador. Cuidamos cada paquete para que llegue fresco, como recién tostado.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M6 14h22v18H6zM28 20h10l4 6v6H28zM12 38a3 3 0 100-6 3 3 0 000 6zM34 38a3 3 0 100-6 3 3 0 000 6z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Disfruta",
    description:
      "Abres el empaque, sientes el aroma y lo preparas a tu manera. El resto lo hace el café — y la pausa que te das.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M10 18h26v14a8 8 0 01-8 8H18a8 8 0 01-8-8V18z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M36 22h4a4 4 0 010 8h-4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 10c0 2 2 2 2 4M22 8c0 2 2 2 2 4M28 10c0 2 2 2 2 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <ScrollChapter tone="milk" id="ComoFunciona"
      steps={[
        <Container key="header">
          <SectionHeader
            eyebrow="Cómo funciona"
            title={
              <>
                Tres pasos entre tú y la primera{" "}
                <em className="not-italic text-(--green) font-semibold">taza</em>.
              </>
            }
            description="Pedir café no debería ser un trámite. Por eso lo hacemos tan simple como pedirle al panadero del barrio."
          />
        </Container>,
        <Container key="cards">
          <h3 className="mb-10 md:mb-12 font-(family-name:--font-display) text-3xl md:text-5xl text-center text-(--coffee)">
            De tu mensaje a{" "}
            <em className="not-italic text-(--green) font-semibold">tu taza</em>.
          </h3>
          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <li key={step.number}>
                <article className="group relative h-full rounded-3xl border border-(--sand) bg-(--white)/40 p-8 transition-colors duration-300 hover:bg-(--cream) hover:border-(--green)">
                  <span className="font-(family-name:--font-display) text-5xl md:text-6xl text-(--orange) leading-none">
                    {step.number}
                  </span>
                  <div className="mt-6 text-(--green) transition-transform duration-300 group-hover:-translate-y-1">
                    {step.icon}
                  </div>
                  <h3 className="mt-5 font-(family-name:--font-display) text-2xl text-(--coffee)">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-(--coffee)/75 leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </Container>,
      ]}
    />
  )
}
