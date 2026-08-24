'use client'

import { FormEvent, useState } from "react"
import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"

const BREVO_URL =
  "https://0f067266.sibforms.com/serve/MUIFANhGZwGg9ln_Cl2IiCFdkFGBw-6Jd8HVjDPj1lqrTU11FbP2Lw7zpdEF0g3ADWzerS9-ShBmNiBAFj9sw-DQaM-jLIz9555ONSh5LBk4T2DZO2YEXj92282WpVrSYT4ZNwlEj_cwbby91S1fehkUAH2-hyPqWo2GjqCwexFUGOpEVMrvV5JxOAFQK-zdP45L-TlUVRcIipGrFA=="

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsSubmitting(true)
    setError("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(BREVO_URL, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("No se pudo completar la suscripción.")
      }

      setIsSuccess(true)
      form.reset()
    } catch {
      setError(
        "No pudimos completar la suscripción. Por favor, inténtalo nuevamente."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
  <ScrollChapter
    tone="green-dark"
    steps={[
      <Container key="newsletter">
        <div className="mx-auto w-full max-w-5xl">
          {isSuccess ? (
            <div className="w-full rounded-3xl bg-(--green) px-6 py-10 md:px-10 md:py-12 text-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-(--green-dark) hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-(--orange) text-white text-2xl">
                ✓
              </div>

              <h3 className="mt-6 font-(family-name:--font-display) text-3xl md:text-4xl font-medium text-(--cream)">
                ¡Bienvenido a Café Luchita!
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-(--cream)/80">
                Te has suscrito correctamente. Pronto recibirás nuestras
                novedades, promociones y noticias.
              </p>
            </div>
          ) : (
            <div className="w-full rounded-3xl bg-(--green) px-6 py-8 md:px-10 md:py-10">
              <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">

                {/* IMAGEN IZQUIERDA */}
                <div className="flex items-center justify-center">
                  <img
                    src="/img/Promo3.png"
                    alt="Café Luchita"
                    className="w-full max-w-[360px] rounded-3xl object-contain md:max-w-[530px]"
                  />
                </div>

                {/* CONTENIDO DERECHA */}
                <div>
                  <div className="text-center md:text-left">

                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-(--orange)">
                      Café Luchita
                    </span>

                    <h2 className="mt-2 font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.05] font-medium text-(--cream)">
                      ¡Sé parte de Café Luchita!
                    </h2>

                    <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed text-(--cream)/80">
                      Recibe promociones, novedades y todo lo nuevo de{" "}
                      <strong className="font-semibold text-(--cream)">
                        Café Luchita
                      </strong>{" "}
                      directamente en tu correo.
                    </p>

                  </div>

                  {/* FORMULARIO */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 w-full text-left"
                  >
                    <div>
                      <label
                        htmlFor="NOMBRE"
                        className="block text-sm font-semibold text-(--cream)"
                      >
                        Tu nombre
                      </label>

                      <input
                        id="NOMBRE"
                        name="NOMBRE"
                        type="text"
                        maxLength={200}
                        placeholder="Nombre"
                        required
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
                            ""
                          )
                        }}
                        className="mt-1.5 w-full rounded-xl border border-(--cream)/20 bg-white px-4 py-2.5 text-(--coffee) outline-none transition focus:border-(--orange)"
                      />

                      <p className="mt-1 text-[11px] text-(--cream)/60">
                        Ej. Roberto
                      </p>
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="APELLIDOS"
                        className="block text-sm font-semibold text-(--cream)"
                      >
                        Tu apellido
                      </label>

                      <input
                        id="APELLIDOS"
                        name="APELLIDOS"
                        type="text"
                        maxLength={200}
                        placeholder="Apellido"
                        required
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
                            ""
                          )
                        }}
                        className="mt-1.5 w-full rounded-xl border border-(--cream)/20 bg-white px-4 py-2.5 text-(--coffee) outline-none transition focus:border-(--orange)"
                      />

                      <p className="mt-1 text-[11px] text-(--cream)/60">
                        Ej. Suarez
                      </p>
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="EMAIL"
                        className="block text-sm font-semibold text-(--cream)"
                      >
                        Correo electrónico
                      </label>

                      <input
                        id="EMAIL"
                        name="EMAIL"
                        type="email"
                        placeholder="Email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-(--cream)/20 bg-white px-4 py-2.5 text-(--coffee) outline-none transition focus:border-(--orange)"
                      />

                      <p className="mt-1 text-[11px] text-(--cream)/60">
                        Ej. roberto@gmail.com
                      </p>
                    </div>

                    {error && (
                      <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-5 w-full rounded-full bg-(--orange) px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-(--orange-dark) hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "ENVIANDO..." : "SUSCRIBIRME"}
                    </button>

                    <p className="mt-3 text-center text-xs leading-relaxed text-(--cream)/60">
                      Recibirás nuestras promociones, novedades y noticias de
                      Café Luchita.
                    </p>

                    <input
                      type="text"
                      name="email_address_check"
                      value=""
                      readOnly
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <input
                      type="hidden"
                      name="locale"
                      value="es"
                    />
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>,
    ]}
  />
)
}