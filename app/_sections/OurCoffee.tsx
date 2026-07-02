'use client'

import { useState } from "react"
import Image from "next/image"
import Section, { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"
import Reveal from "../_components/Reveal"
import BeanIcon from "../_components/BeanIcon"

const roasts = [
  {
    name: "Claro",
    temp: "180–200 °C",
    body: "Cuerpo ligero · acidez alta · cafeína alta",
    description:
      "Conserva la mayoría de los sabores originales del grano. Ideal para catas y bebidas ligeras como cold brew suave.",
    uses: "Cataciones, cold brew light",
  },
  {
    name: "Medio",
    temp: "El nuestro",
    body: "Equilibrio perfecto entre acidez y cuerpo",
    description:
      "El más versátil. Es el que tostamos: deja hablar al origen sin perder dulzura ni redondez en la taza.",
    uses: "Cafeterías de especialidad, bebidas con leche, blends",
    highlight: true,
  },
  {
    name: "Medio oscuro",
    temp: "Cremoso",
    body: "Textura ligeramente cremosa · sabor más amargo",
    description:
      "Los aceites del grano empiezan a asomarse. Bueno para quien busca un espresso con cuerpo más marcado.",
    uses: "Espresso, cold brew concentrado",
  },
  {
    name: "Oscuro",
    temp: "Intenso",
    body: "Carácter del tueste · baja cafeína",
    description:
      "Los sabores de origen desaparecen y prevalece el tueste. Es el café que prepara la máquina automática del bar.",
    uses: "Café soluble, espresso comercial",
  },
]

const grinds = [
  { name: "Extra grueso", look: "Sal marina gruesa", time: "+1h", uses: "Cold brew" },
  { name: "Grueso", look: "Sal de grano", time: "4–10 min", uses: "Prensa francesa" },
  { name: "Medio grueso", look: "Arena gruesa", time: "3–4 min", uses: "Café de olla" },
  { name: "Medio", look: "Arena de playa", time: "2–4 min", uses: "Cafetera, café pasado" },
  { name: "Medio fino", look: "Azúcar común", time: "1–2 min", uses: "AeroPress" },
  { name: "Fino", look: "Sal de mesa", time: "20 s – 1 min", uses: "Espresso" },
  { name: "Extra fino", look: "Harina", time: "Hervido directo", uses: "Café turco" },
]

export default function OurCoffee() {
  return (
    <>
      {/* Origen */}
      <Section tone="milk" className="overflow-hidden" id="NuestroCafe">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal className="order-2 md:order-1">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-(--green)">
                <span className="h-px w-6 bg-(--green)" />
                Nuestro café
              </span>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.1] font-medium text-(--coffee)">
                Cararango, Loja —{" "}
                <em className="not-italic italic text-(--green) font-semibold">donde nace</em>{" "}
                nuestro café.
              </h2>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-(--coffee)/80">
                <p>
                  En el sur del Ecuador, entre los valles que rodean Vilcabamba, se eleva
                  el cerro de Cararango. Ahí, a más de <strong className="text-(--coffee)">1.700 m.s.n.m.</strong>,
                  nuestras fincas aprovechan un clima subtropical único: días cálidos, noches frescas
                  y la humedad justa.
                </p>
                <p>
                  A esa altura el cafeto crece más despacio. Y un café que madura despacio
                  concentra más azúcares y aromas antes de llegar a tu taza.
                </p>
                <p>
                  Nuestras fincas comparten tierra con <strong className="text-(--green)">guineos,
                  caña de azúcar y árboles frutales</strong>. La sombra protege al café, regula el
                  suelo y le da al grano un entorno más equilibrado. Menos estrés, más complejidad
                  de sabor.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-(--sand) pt-6">
                <Fact term="1.700+" desc="m.s.n.m." />
                <Fact term="Arábigo" desc="de altura" />
                <Fact term="Policultivo" desc="bajo sombra" />
              </dl>
            </Reveal>

            <Reveal delay={150} className="order-1 md:order-2">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-(--sand)">
                  <Image
                    src="/img/cafe_natural.jpeg"
                    alt="Café natural de Cararango"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 hidden md:block rounded-2xl bg-(--green) px-6 py-4 text-(--cream) shadow-[0_15px_40px_-15px_rgba(44,26,14,0.4)]">
                  <p className="text-xs uppercase tracking-widest opacity-70">Provincia</p>
                  <p className="font-(family-name:--font-display) text-2xl">Loja</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Grados de tueste */}
      <Section tone="cream" pattern>
        <Container size="wide">
          <Reveal>
            <SectionHeader
              eyebrow="Grados de tueste"
              accentColor="var(--green)"
              title={
                <>
                  Cada tueste cuenta una{" "}
                  <em className="not-italic italic text-(--green) font-semibold">historia</em> distinta.
                </>
              }
              description="Nosotros nos quedamos con el tueste medio porque es donde el origen todavía habla. Pero aquí está el mapa completo, por si quieres entender la diferencia."
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roasts.map((roast, i) => (
              <Reveal as="li" key={roast.name} delay={i * 80}>
                <article
                  className={`relative h-full rounded-3xl border p-6 transition-all duration-300 ${
                    roast.highlight
                      ? "bg-(--green) text-(--cream) border-(--green) -translate-y-2 md:-translate-y-3 shadow-[0_20px_50px_-20px_rgba(44,26,14,0.5)]"
                      : "bg-(--milk) text-(--coffee) border-(--sand) hover:border-(--green)/40"
                  }`}
                >
                  {roast.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-(--orange) px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--coffee)">
                      Nuestro punto
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <BeanIcon
                      size={32}
                      className={roast.highlight ? "text-(--orange)" : "text-(--green)"}
                    />
                    <span
                      className={`text-xs uppercase tracking-widest ${
                        roast.highlight ? "text-(--cream)/80" : "text-(--bark)/70"
                      }`}
                    >
                      {roast.temp}
                    </span>
                  </div>
                  <h3 className="mt-5 font-(family-name:--font-display) text-2xl">
                    {roast.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
                      roast.highlight ? "text-(--orange)" : "text-(--green)"
                    }`}
                  >
                    {roast.body}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      roast.highlight ? "text-(--cream)/85" : "text-(--coffee)/75"
                    }`}
                  >
                    {roast.description}
                  </p>
                  <p
                    className={`mt-4 border-t pt-3 text-xs ${
                      roast.highlight
                        ? "border-(--cream)/20 text-(--cream)/70"
                        : "border-(--sand) text-(--bark)/70"
                    }`}
                  >
                    <span className="font-semibold">Usos:</span> {roast.uses}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Tipos de molido */}
      <Section tone="milk">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Tipos de molido"
              accentColor="var(--green)"
              title={
                <>
                  El molido depende del{" "}
                  <em className="not-italic italic text-(--green) font-semibold">método</em>,
                  no del gusto.
                </>
              }
              description="Cada método de preparación tiene su molido ideal. Nuestro café molido viene en punto medio — el más versátil para cafetera, filtro y prensa francesa."
            />
          </Reveal>

          <Reveal delay={120}>
            <GrindTable />
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

function Fact({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="font-(family-name:--font-display) text-2xl md:text-3xl text-(--orange)">
        {term}
      </dt>
      <dd className="mt-1 text-xs md:text-sm text-(--bark) uppercase tracking-wider">{desc}</dd>
    </div>
  )
}

function GrindTable() {
  const [active, setActive] = useState(3) // Medio por defecto

  return (
    <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
      {/* Lista de molidos */}
      <ul className="flex flex-col gap-2">
        {grinds.map((g, i) => (
          <li key={g.name}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 cursor-pointer ${
                active === i
                  ? "border-(--green) bg-(--green) text-(--cream) -translate-x-1"
                  : "border-(--sand) bg-(--milk) text-(--coffee) hover:border-(--green)/40"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-(family-name:--font-display) text-2xl tabular-nums ${
                    active === i ? "text-(--orange)" : "text-(--green)"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{g.name}</span>
              </div>
              <span
                className={`text-xs uppercase tracking-wider ${
                  active === i ? "text-(--cream)/80" : "text-(--bark)/70"
                }`}
              >
                {g.time}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Detalle del molido activo */}
      <div className="sticky top-24 rounded-3xl border border-(--sand) bg-(--cream) p-8 md:p-10">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--green)">
          Molido seleccionado
        </span>
        <h3 className="mt-3 font-(family-name:--font-display) text-3xl md:text-4xl text-(--coffee)">
          {grinds[active].name}
        </h3>
        <p className="mt-4 text-base text-(--coffee)/75">
          Textura parecida a{" "}
          <em className="not-italic font-semibold text-(--coffee)">{grinds[active].look}</em>.
          Tiempo de contacto agua-café:{" "}
          <em className="not-italic font-semibold text-(--coffee)">{grinds[active].time}</em>.
        </p>

        <div className="mt-8 rounded-2xl bg-(--milk) p-5 border border-(--sand)">
          <p className="text-xs uppercase tracking-widest text-(--green) font-semibold">
            Ideal para
          </p>
          <p className="mt-2 font-(family-name:--font-display) text-2xl text-(--coffee)">
            {grinds[active].uses}
          </p>
        </div>

        {/* Visual: puntos que cambian de tamaño */}
        <div className="mt-8 flex items-end gap-1 h-12 justify-center">
          {grinds.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i === active ? "bg-(--orange)" : "bg-(--bark)/20"
              }`}
              style={{
                width: `${22 - i * 2.2}px`,
                height: `${22 - i * 2.2}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
