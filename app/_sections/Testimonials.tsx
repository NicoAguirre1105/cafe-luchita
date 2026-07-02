'use client'

import Section, { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"
import Reveal from "../_components/Reveal"

// PLACEHOLDER: reemplazar por testimonios reales cuando estén disponibles
const testimonials = [
  {
    quote:
      "Llevo años buscando un café que sepa a casa. Este me lo recordó desde el primer sorbo. Y que llegue a la puerta sin esfuerzo, mejor todavía.",
    author: "Andrea M.",
    role: "Cliente en Quito",
  },
  {
    quote:
      "Lo pedimos para el coworking y la gente preguntaba qué café era. Cambia el ambiente: el ritual del café por la mañana se siente distinto.",
    author: "Mateo R.",
    role: "Coworking · Quito",
  },
  {
    quote:
      "Mi mamá toma café desde siempre y me dijo: 'este sí es café'. No hay mejor crítica que esa.",
    author: "Carolina V.",
    role: "Cliente en Loja",
  },
]

export default function Testimonials() {
  return (
    <Section tone="milk">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Lo que dicen"
            accentColor="var(--green)"
            title={
              <>
                Una taza que se{" "}
                <em className="not-italic italic text-(--green) font-semibold">comparte</em>.
              </>
            }
            description="No vendemos café — acompañamos rituales. Esto nos cuentan quienes ya lo preparan en casa o en la oficina."
          />
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.author} delay={i * 120}>
              <article className="h-full rounded-3xl border border-(--sand) bg-(--cream) p-7 flex flex-col">
                <Quote />
                <p className="mt-6 text-base md:text-lg leading-relaxed text-(--coffee)/85 flex-1 italic font-(family-name:--font-display)">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-(--sand) pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-(--green) text-(--cream) font-(family-name:--font-display) text-lg">
                    {t.author[0]}
                  </span>
                  <div>
                    <p className="font-semibold text-(--coffee) text-sm">{t.author}</p>
                    <p className="text-xs text-(--bark)/70">{t.role}</p>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

function Quote() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      className="text-(--orange)"
      aria-hidden="true"
    >
      <path
        d="M0 28V18C0 12 1.4 7.5 4.2 4.2 7 .9 10.8-.5 15.6 0v6.5c-2.7.4-4.7 1.4-6 3-1.3 1.6-2 3.6-2 6h7.9V28H0zm20.4 0V18c0-6 1.4-10.5 4.2-13.8 2.8-3.3 6.6-4.7 11.4-4.2v6.5c-2.7.4-4.7 1.4-6 3-1.3 1.6-2 3.6-2 6H36V28H20.4z"
        fill="currentColor"
      />
    </svg>
  )
}
