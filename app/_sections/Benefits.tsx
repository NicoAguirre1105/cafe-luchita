'use client'

import { useEffect, useRef, useState } from "react"
import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"

// ── SVG icon primitives ──────────────────────────────────────────────────────
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none mt-0.5">
    {children}
  </svg>
)

function Citation({ n, href }: { n: number; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="ml-0.5 text-[0.7em] align-super font-semibold text-(--green) underline decoration-(--green)/40 underline-offset-2 hover:text-(--orange)"
    >
      [{n}]
    </a>
  )
}

const icons = {
  bolt:       <Icon><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></Icon>,
  heartPulse: <Icon><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></Icon>,
  cycle:      <Icon><polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.5 9A9 9 0 005.6 5.6L1 10M23 14l-4.6 4.4A9 9 0 013.5 15" /></Icon>,
  brain:      <Icon><path d="M9.5 2a2.5 2.5 0 014.5 2A2.5 2.5 0 0118 6.5a2.5 2.5 0 01-2 4.5v1A2.5 2.5 0 0113.5 16h-3A2.5 2.5 0 018 13.5v-1A2.5 2.5 0 016 8a2.5 2.5 0 013.5-6z" /></Icon>,
  gitBranch:  <Icon><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" /></Icon>,
  lightbulb:  <Icon><path d="M9 21h6" /><path d="M10 19h4" /><path d="M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" /></Icon>,
  smile:      <Icon><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></Icon>,
  sunrise:    <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /><path d="M4 20h16" /></Icon>,
  shuffle:    <Icon><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></Icon>,
  dna:        <Icon><path d="M2 4c6.667 8 13.333 8 20 0M2 20c6.667-8 13.333-8 20 0M2 12h20" /><circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="17" cy="16" r="1" fill="currentColor" stroke="none" /></Icon>,
  users:      <Icon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></Icon>,
}

const reasons = [
  {
    title: "El sabor del origen, intacto",
    description:
      "El tueste medio es el único punto donde el grano todavía habla. Sientes Loja en la taza: dulce, redondo, con ese sabor suave que no necesita azúcar.",
  },
  {
    title: "Bien por dentro, rico por fuera",
    description:
      "Antioxidantes, cafeína equilibrada y una acidez amigable que no le cae mal al estómago. El café que te hace bien sin pedirte que sacrifiques nada.",
  },
  {
    title: "Para toda la familia",
    description:
      "Ni demasiado fuerte, ni demasiado suave. El tueste que le gusta al abuelo, a tu pareja y al vecino que siempre aparece a la hora del café.",
  },
]

type ProfileKey = "deportistas" | "empresarios" | "casa"

const profiles: Record<
  ProfileKey,
  { label: string; subtitle: string; points: { icon: React.ReactNode; title: string; desc: React.ReactNode }[]; tip: string }
> = {
  deportistas: {
    label: "Deportistas",
    subtitle: "Pre y post entrenamiento",
    points: [
      {
        icon: icons.bolt,
        title: "Rendimiento medible",
        desc: (
          <>
            La Sociedad Internacional de Nutrición Deportiva (ISSN) respalda que dosis de 3–6 mg/kg de
            cafeína mejoran el rendimiento físico y la resistencia muscular.
            <Citation n={1} href="https://g-se.com/es/declaracion-de-posicion-de-la-sociedad-internacional-de-nutricion-deportiva-cafeina-y-rendimiento-1268-sa-f57cfb271e0442" />
          </>
        ),
      },
      {
        icon: icons.heartPulse,
        title: "Retrasa la fatiga",
        desc: (
          <>
            La cafeína bloquea los receptores de adenosina, lo que reduce la percepción de fatiga y puede
            permitir entrenamientos más intensos al mismo nivel percibido de esfuerzo.
            <Citation n={2} href="https://g-se.com/es/cafeina-y-ejercicio-metabolismo-resistencia-y-rendimiento-344-sa-l57cfb271375f1" />
          </>
        ),
      },
      {
        icon: icons.cycle,
        title: "Recuperación más rápida",
        desc: (
          <>
            Tomada junto con carbohidratos tras el ejercicio, la cafeína puede potenciar la resíntesis de
            glucógeno muscular en comparación con carbohidratos solos.
            <Citation n={3} href="https://pubmed.ncbi.nlm.nih.gov/18467543/" />
          </>
        ),
      },
      { icon: icons.smile,      title: "Amigable al estómago",      desc: "Acidez moderada que no provoca molestias gástricas en ayunas antes de entrenar." },
    ],
    tip: "30–45 min antes del entrenamiento, cuando la cafeína alcanza su pico máximo en sangre.",
  },
  empresarios: {
    label: "Empresarios",
    subtitle: "Rendimiento cognitivo",
    points: [
      { icon: icons.brain,     title: "Concentración sostenida",      desc: "Mejora la memoria de trabajo y la atención en tareas complejas. Ideal para jornadas largas." },
      { icon: icons.gitBranch, title: "Mejor toma de decisiones",     desc: "Contrarresta la fatiga de decisión que se acumula en reuniones y negociaciones." },
      {
        icon: icons.lightbulb,
        title: "Creatividad e innovación",
        desc: (
          <>
            Un estudio publicado por JAMA vincula el consumo moderado de café con cafeína con una mejor
            preservación de la función cognitiva.
            <Citation n={4} href="https://jamanetwork.com/journals/jama/article-abstract/2844764?utm_campaign=articlePDF&utm_medium=articlePDFlink&utm_source=articlePDF&utm_content=jama.2025.27259" />
          </>
        ),
      },
      { icon: icons.smile,     title: "Bienestar emocional",          desc: "Estimula dopamina y serotonina, mejorando el ánimo en entornos de alta presión." },
    ],
    tip: "1–2 tazas en la mañana y una tercera a media jornada maximizan la productividad sin afectar el sueño.",
  },
  casa: {
    label: "En casa",
    subtitle: "Ritual y bienestar diario",
    points: [
      { icon: icons.sunrise, title: "Ritual de bienestar",        desc: "El acto de preparar café activa la atención plena. Un ancla emocional para iniciar el día." },
      { icon: icons.shuffle, title: "Versatilidad doméstica",     desc: "Funciona en moka, prensa francesa, filtro o AeroPress. No necesita máquina profesional." },
      {
        icon: icons.dna,
        title: "Doble perfil antioxidante",
        desc: (
          <>
            Los ácidos clorogénicos y las melanoidinas del café contribuyen a su actividad antioxidante, y
            estudios experimentales sugieren potenciales efectos protectores frente al daño oxidativo
            celular.
            <Citation n={5} href="https://digital.csic.es/handle/10261/277415" />
          </>
        ),
      },
      { icon: icons.users,   title: "Para toda la familia",       desc: "Perfil accesible, sin la barrera del sabor ácido o amargo extremo." },
    ],
    tip: "Guárdalo en recipiente hermético, lejos de la luz. Consúmelo en 3–4 semanas tras el tueste.",
  },
}

export default function Benefits() {
  const [active, setActive] = useState<ProfileKey>("empresarios")
  const data = profiles[active]
  const profileScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    profileScrollRef.current?.scrollTo({ top: 0, behavior: "instant" })
  }, [active])

  return (
    <ScrollChapter tone="sand" id="Beneficios"
      steps={[
        <Container key="header">
          <SectionHeader
            eyebrow="Beneficios"
            accentColor="var(--green)"
            title={
              <>
                ¿Por qué{" "}
                <em className="not-italic text-(--green) font-semibold">tueste medio</em>?
              </>
            }
            description={
              <>
                <p>Hay café que se produce y hay café que se cuida.</p>
                <p>
                  <em className="not-italic font-semibold text-(--orange-dark) text-xl">CAFÉ LUCHITA</em> viene de fincas lojanas donde cada grano pasa por manos que llevan años
                  aprendiendo lo que hace único al café.
                </p>
              </>
            }
          />
        </Container>,
        <Container key="reasons">
          <div data-scrub-viewport className="no-scrollbar max-md:max-h-[calc(100dvh_-_var(--header-h)_-_6rem)] max-md:overflow-hidden md:max-h-none md:overflow-visible">
            <div data-scrub-track>
              <h3 className="mb-10 md:mb-12 font-(family-name:--font-display) text-3xl md:text-5xl text-center text-(--coffee)">
                Lo que hace especial a este{" "}
                <em className="not-italic text-(--green) font-semibold">tueste</em>.
              </h3>
              <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
                {reasons.map((r, i) => (
                  <li key={r.title}>
                    <article className="h-full rounded-3xl border border-(--sand) bg-(--milk) p-7">
                      <span className="font-(family-name:--font-display) text-4xl text-(--orange)">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-(family-name:--font-display) text-xl md:text-2xl text-(--coffee)">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-(--coffee)/75 leading-relaxed">
                        {r.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>,
        <Container key="profiles">
          <div
            ref={profileScrollRef}
            className="no-scrollbar max-md:max-h-[calc(100dvh_-_var(--header-h)_-_6rem)] max-md:overflow-y-auto max-md:overflow-x-hidden md:max-h-none md:overflow-visible"
          >
            <div>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--green)">
                    Para quién
                  </span>
                  <h3 className="mt-2 font-(family-name:--font-display) text-2xl md:text-3xl text-(--coffee) max-w-lg">
                    Un mismo café que se acomoda a tu día.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(profiles) as ProfileKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActive(key)}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                        active === key
                          ? "bg-(--green) text-(--cream)"
                          : "bg-(--milk) text-(--coffee) border border-(--sand) hover:border-(--green)/50"
                      }`}
                    >
                      {profiles[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 md:mt-8 rounded-3xl border border-(--sand) bg-(--milk) p-7 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-(--orange)">
                  {data.subtitle}
                </p>
                <ul className="mt-6 md:mt-8 grid gap-6 md:grid-cols-2">
                  {data.points.map((p) => (
                    <li key={p.title} className="flex gap-4 text-(--green)">
                      {p.icon}
                      <div>
                        <h4 className="font-(family-name:--font-display) text-lg text-(--coffee)">
                          {p.title}
                        </h4>
                        <p className="mt-1 text-sm text-(--coffee)/75 leading-relaxed">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8 rounded-2xl bg-(--green) px-5 py-4 text-(--cream)">
                  <p className="text-xs uppercase tracking-widest font-semibold text-(--orange)">Consejo</p>
                  <p className="mt-1 text-sm md:text-base leading-relaxed">{data.tip}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>,
      ]}
    />
  )
}
