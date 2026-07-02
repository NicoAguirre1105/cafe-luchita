'use client'

import ScrollStory from "../_components/ScrollStory"
import { Container } from "../_components/Section"
import { ButtonLink } from "../_components/Button"
import BeanIcon from "../_components/BeanIcon"

const WHATSAPP_OFFICE =
  "https://api.whatsapp.com/send?phone=593984634581&text=Hola%20Caf%C3%A9%20Luchita,%20me%20interesa%20conocer%20sus%20convenios%20para%20oficinas%20y%20espacios%20de%20trabajo."

const benefits = [
  "Entregas periódicas sin que tengas que recordar",
  "Precios preferenciales según volumen mensual",
  "Café ecuatoriano de origen para tu equipo o tus clientes",
]

export default function OfficeCTA() {
  return (
    <ScrollStory tone="green-dark" prevTone="cream"
      steps={[
        <Container key="office">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-(--cream)/30 px-4 py-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-(--orange)">
                <BeanIcon size={12} />
                Para tu oficina
              </span>
              <h2 className="font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.1] font-medium">
                ¿Coworking, oficina o cafetería?{" "}
                <em className="not-italic italic font-semibold text-(--orange)">
                  Hablemos.
                </em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-(--cream)/80 max-w-xl">
                Tenemos convenios pensados para equipos de 5 a 30 personas y para
                barras de especialidad, en cualquier ciudad del país. Entregas regulares, factura, y un café que
                ya ofrece algo distinto sin que tengas que explicar mucho.
              </p>

              <ul className="mt-2 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm md:text-base text-(--cream)/90">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <ButtonLink
                  href={WHATSAPP_OFFICE}
                  target="_blank"
                  rel="noreferrer"
                  variant="orange"
                  size="lg"
                >
                  <WhatsAppIcon />
                  Cotiza ahora
                </ButtonLink>
              </div>
            </div>

            {/* Decorative side panel */}
            <div className="hidden md:block">
              <div className="relative aspect-square rounded-3xl border border-(--cream)/15 bg-(--cream)/5 p-10">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <Stat number="5–30" label="personas por convenio" />
                  <Stat number="Sem." label="o quincenal" />
                  <Stat number="Nacional" label="cobertura de envíos" />
                  <Stat number="100%" label="café ecuatoriano" />
                </div>
                <BeanIcon
                  size={120}
                  className="absolute -bottom-6 -right-6 text-(--orange)/20 -rotate-12"
                />
              </div>
            </div>
          </div>
        </Container>,
      ]}
    />
  )
}

function Check() {
  return (
    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-(--orange) text-(--coffee)">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.8-1.5.1-.2.1-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
    </svg>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl bg-(--cream)/5 p-5">
      <span className="font-(family-name:--font-display) text-3xl text-(--orange)">{number}</span>
      <span className="mt-1 text-xs uppercase tracking-wider text-(--cream)/70 leading-tight">
        {label}
      </span>
    </div>
  )
}
