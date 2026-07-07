'use client'

import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"

// PLACEHOLDER: reemplazar por testimonios reales cuando estén disponibles
const testimonials = [
  {
    quote:
      "Café LUCHITA es súper delicioso. Me encanta su aroma penetrante y delicado a la vez. Ideal para disfrutarlo a cualquier hora del día. Es, sin duda, un excelente producto y es Ecuatoriano!!",
    author: "Mercedes M.",
    role: "Cliente en Quito",
  },
  {
    quote:
      "Una caricia al alma en cada taza! Desde el primer sorbo, mi corazón se quedó con él para siempre. Su aroma inconfundible tiene la magia de llenar el hogar de calidez y paz. ¡Gracias por hacer un producto con tanto amor.",
    author: "Ruth",
    role: "Cliente en Loja",
  },
  {
    quote:
      "Café Luchita es, sin lugar a dudas, el mejor café que he probado. Tiene un aroma y sabor inigualable, que hace que disfrutes cada sorbo.",
    author: "Fanny R.",
    role: "Cliente en Loja",
  },
  {
    quote:
      "Un café que lleva el cariño y tradición familiar de Loja. Un sabor único y con mucho aroma. El mejor regalo al paladar",
    author: "Cristina D.",
    role: "Cliente en Quito",
  },
]

export default function Testimonials() {
  return (
    <ScrollChapter tone="milk"
      steps={[
        <div key="testimonials">
          <Container>
            <SectionHeader
              eyebrow="Lo que dicen"
              accentColor="var(--green)"
              maxWidth="max-w-4xl"
              title={
                <>
                  Una taza que se{" "}
                  <em className="not-italic text-(--green) font-semibold">comparte</em>.
                </>
              }
              description="No vendemos café — acompañamos rituales. Esto nos cuentan quienes ya lo preparan en casa o en la oficina."
            />
          </Container>
          <div className="mt-14 w-screen relative left-1/2 -translate-x-1/2">
            <Carousel />
          </div>
        </div>,
      ]}
    />
  )
}

function Carousel() {
  // Marquee infinito por CSS: el track duplica los testimonios y se desplaza
  // con una animación continua (más confiable que scrollLeft por JS).
  const looped = [...testimonials, ...testimonials]

  return (
    <div className="overflow-hidden">
      <ul className="animate-marquee flex w-max gap-6">
        {looped.map((t, i) => (
          <li key={`${t.author}-${i}`} className="w-[280px] sm:w-[340px] shrink-0">
            <article className="h-full rounded-3xl border border-(--sand) bg-(--cream) p-7 flex flex-col">
              <Quote />
              <p className="mt-6 text-base leading-relaxed text-(--coffee)/85 flex-1 italic font-(family-name:--font-display)">
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
          </li>
        ))}
      </ul>
    </div>
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
