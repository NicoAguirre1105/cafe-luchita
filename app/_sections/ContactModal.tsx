'use client'

import { useForm, ValidationError } from "@formspree/react"
import InfoModal from "../_components/InfoModal"

export default function ContactModal({
  isContactModalOpen
}:{
  isContactModalOpen: boolean
}){

  const [state, handleSubmit] = useForm("mrerpaww")

  return (
    <section className={`fixed h-full bg-(--cream) w-full z-45 border-b-3 border-x-3 border-(--green) text-(--green) overflow-y-auto
      flex flex-col gap-5 md:flex-row
      transition-all duration-300 ease-in-out  justify-center
      ${isContactModalOpen ? "left-0" : "left-full"}`}>
      <div className="flex flex-col w-full max-w-280 h-full px-5 pb-10 pt-30 md:pt-40 md:pb-30 md:px-20 md:flex-row gap-5">
      <div className="flex flex-col gap-3 md:flex-1 ">
        <h2 className="font-bold text-2xl md:text-3xl">Comunícate con nosotros</h2>
        <p className="text-sm md:text-base md:max-w-150">Puedes contactarnos mediante los siguientes canales. Nuestro equipo de ventas responderá lo más pronto posible.</p>
        <address className="not-italic flex flex-col gap-5 w-full">
          <h3 className="text-xl font-semibold md:text-2xl">Redes sociales</h3>
          <InfoModal href="https://www.facebook.com/profile.php?id=61565592500491&locale=es_LA" iconsrc="/icons/facebook_logo.svg" title="Facebook" info="Café Luchita"/>
          <InfoModal href="https://www.instagram.com/cafe_luchita/" iconsrc="/icons/instagram_logo.svg" title="Instagram" info="@cafe_luchita"/>
          <InfoModal href="https://api.whatsapp.com/send?phone=593984634581" iconsrc="/icons/whatsapp_logo.svg" title="WhatsApp" info="(+593) 984 634 581"/>
        </address>
      </div>
      <div className="flex flex-col gap-3 md:flex-1 md:max-w-100">

        <p className="text-sm md:hidden">O déjanos tu información y nos contactaremos contigo.</p>

        <form 
        onSubmit={handleSubmit}
        className="bg-(--green) text-(--white) rounded-md flex flex-col p-5 gap-1 md:p-10">
          <label htmlFor="full-name" className="font-medium">Nombre</label>
          <input type="text" name="full-name" id="full-name" placeholder="Ej: Juan Pérez" className="border-b-2 border-(--white) focus:outline-none pl-2 font-light focus:"/>
          <ValidationError field="name" prefix="Name" errors={state.errors}/>
          <label htmlFor="client-email" className="font-medium mt-2">Email</label>
          <input type="email" name="client-email" id="client-email" placeholder="tu-correo@gmail.com" className="border-b-2 border-(--white) focus:outline-none pl-2 font-light"/>
          <ValidationError field="email" prefix="Email" errors={state.errors}/>
          <label htmlFor="subject" className="font-medium mt-2">Título</label>
          <input type="text" name="subject" id="subject" placeholder="Solicitud de cotización" className="border-b-2 border-(--white) focus:outline-none pl-2 font-light"/>
          <ValidationError field="subject" prefix="Subject" errors={state.errors}/>
          <label htmlFor="message" className="font-medium mt-2 mb-1">Mensaje</label>
          <textarea
            rows={5}
            className="resize-none border-2 border-(--white) rounded-sm p-2 w-full  focus:outline-none"
            placeholder="Escribe tu mensaje aquí"
            ></textarea>
          <ValidationError field="message" prefix="Message" errors={state.errors}/>
          <button type="submit" disabled={state.submitting} className="bg-(--orange) w-fit text-white px-4 py-2 rounded-md mt-5 
            cursor-pointer transition-[scale] duration-200 hover:scale-105 self-center font-medium">Enviar</button>
        </form>
      </div>
      </div>
    </section>
  )
}