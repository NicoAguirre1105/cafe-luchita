'use client'

import { useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import Image from "next/image"
import InfoModal from "../_components/InfoModal"
import { Spinner } from "../_components/Spinner"
import { Button } from "../_components/Button"
import BeanIcon from "../_components/BeanIcon"

const inputClass =
  "rounded-xl border border-(--cream)/30 bg-(--green-dark)/40 px-3 py-2.5 text-sm text-(--cream) placeholder:text-(--cream)/50 focus:outline-none focus:border-(--orange) transition-colors"

export default function ContactModal({
  isContactModalOpen,
}: {
  isContactModalOpen: boolean
}) {
  const [state, handleSubmit, reset] = useForm("mrerpaww")

  useEffect(() => {
    if (state.succeeded) {
      const t = setTimeout(() => reset(), 4000)
      return () => clearTimeout(t)
    }
  }, [state.succeeded, reset])

  return (
    <aside
      aria-hidden={!isContactModalOpen}
      className={`fixed inset-0 z-40 overflow-y-auto bean-pattern transition-transform duration-500 ease-out ${
        isContactModalOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="min-h-dvh w-full px-5 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-(--green)">
              <BeanIcon size={12} />
              Contacto
            </span>
            <h2 className="font-(family-name:--font-display) text-3xl md:text-5xl leading-[1.05] font-medium text-(--coffee)">
              Cuéntanos qué{" "}
              <em className="not-italic italic text-(--green) font-semibold">necesitas</em>.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-(--coffee)/75 max-w-md">
              Respondemos personalmente. Escríbenos por el canal que prefieras o déjanos
              tu información y te contactamos.
            </p>

            <address className="not-italic mt-2 flex flex-col gap-3">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-(--bark)/70">
                Redes y canales
              </h3>
              <InfoModal
                href="https://api.whatsapp.com/send?phone=593984634581"
                iconsrc="/icons/whatsapp_logo.svg"
                title="WhatsApp"
                info="(+593) 984 634 581"
              />
              <InfoModal
                href="https://www.instagram.com/cafe_luchita/"
                iconsrc="/icons/instagram_logo.svg"
                title="Instagram"
                info="@cafe_luchita"
              />
              <InfoModal
                href="https://www.facebook.com/profile.php?id=61565592500491&locale=es_LA"
                iconsrc="/icons/facebook_logo.svg"
                title="Facebook"
                info="Café Luchita"
              />
            </address>
          </div>

          {/* Form */}
          <div className="md:sticky md:top-32 md:self-start">
            {!state.succeeded && !state.submitting && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-3xl bg-(--green) p-6 md:p-10 text-(--cream) border border-(--green-dark)"
              >
                <h3 className="font-(family-name:--font-display) text-xl md:text-2xl">
                  O escríbenos por aquí
                </h3>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="full-name" className="text-sm font-medium">Nombre*</label>
                  <input required type="text" id="full-name" name="full-name" placeholder="Ej: Juan Pérez" className={inputClass} />
                  <ValidationError field="full-name" prefix="full-name" errors={state.errors} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-phone" className="text-sm font-medium">Número de contacto*</label>
                  <input required type="tel" id="client-phone" name="client-phone" placeholder="0987654321" className={inputClass} />
                  <ValidationError field="client-phone" prefix="client-phone" errors={state.errors} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium">Asunto*</label>
                  <input required type="text" id="subject" name="subject" placeholder="Solicitud de cotización" className={inputClass} />
                  <ValidationError field="subject" prefix="Subject" errors={state.errors} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos qué necesitas..."
                    className={`${inputClass} resize-none`}
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={state.submitting} className="mt-2 self-start">
                  Enviar mensaje
                </Button>
              </form>
            )}

            {state.submitting && (
              <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-3xl bg-(--green) text-(--cream) p-10">
                <BeanIcon size={48} className="text-(--orange) animate-float" />
                <Spinner size="lg" variant="dots" />
                <p className="text-sm opacity-80">Enviando tu mensaje...</p>
              </div>
            )}

            {state.succeeded && (
              <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-(--green) text-(--cream) p-10 text-center">
                <Image
                  src="/icons/done_white.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <h3 className="font-(family-name:--font-display) text-2xl">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-sm md:text-base opacity-85 max-w-sm">
                  Gracias por escribirnos. Recibimos tus datos y nos pondremos en
                  contacto contigo muy pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
