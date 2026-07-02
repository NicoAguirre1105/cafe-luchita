'use client'

import Image from "next/image"
import ScrollStory from "../_components/ScrollStory"
import { Container } from "../_components/Section"

const timeline = [
  {
    year: "1958",
    title: "Una familia, una tradición",
    description:
      "Se constituye la base económica y de unión de la familia alrededor del café en las tierras de Cararango.",
  },
  {
    year: "2024",
    title: "Café Luchita llega a tu mesa",
    description:
      "En julio de 2024 iniciamos la distribución del café molido, para que el sabor de la finca llegue a tu hogar.",
  },
  {
    year: "Hoy",
    title: "Cararango, San Pedro de Vilcabamba",
    description:
      "Continúa la tradición: cultivo, cuidado, cosecha, secado y venta del mismo café que cuidó a la familia.",
  },
]

export default function AboutUs() {
  return (
    <ScrollStory tone="green-dark" prevTone="milk" id="SobreNosotros"
      steps={[
        <Container size="wide" key="intro">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--orange)">
                Sobre nosotros
              </span>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.1] font-medium text-(--cream)">
                Una historia de{" "}
                <em className="not-italic italic text-(--orange) font-semibold">familia</em>,
                campo y sabor.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-(--cream)/80 max-w-xl">
                <strong className="text-(--cream)">Café Luchita</strong> nace para fortalecer
                una tradición familiar. Lo que empezó en 1958 como sustento, sigue siendo hoy
                el mismo gesto: cuidar el café que cuida a los nuestros.
              </p>
              <p className="mt-4 text-base leading-relaxed text-(--cream)/70 max-w-xl italic font-(family-name:--font-display)">
                &ldquo;Agradecemos a todos los caficultores de Cararango por su dedicación y
                esmero.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-(--cream)/15">
                <Image
                  src="/img/about_1.jpeg"
                  alt="Familia caficultora"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl border border-(--cream)/15">
                <Image
                  src="/img/about_2.jpeg"
                  alt="Cosecha de café"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>,

        <Container size="wide" key="timeline">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr] md:items-center md:gap-16">
            <ol className="flex flex-col gap-8 border-l-2 border-(--cream)/15 pl-8">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[42px] grid h-5 w-5 place-items-center rounded-full bg-(--orange) ring-4 ring-(--green-deep)" />
                  <p className="font-(family-name:--font-display) text-xl md:text-2xl text-(--orange)">
                    {t.year}
                  </p>
                  <p className="mt-1 font-semibold text-(--cream)">{t.title}</p>
                  <p className="mt-2 text-sm md:text-base text-(--cream)/70 leading-relaxed max-w-md">
                    {t.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl border border-(--cream)/15">
              <Image
                src="/img/about_3.jpeg"
                alt="Café de Cararango"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>,
      ]}
    />
  )
}
