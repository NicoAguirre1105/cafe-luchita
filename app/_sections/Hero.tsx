import { Cairo_Play } from "next/font/google";
import Image from "next/image";

const cairoPlay = Cairo_Play({
  variable: "--font-cairo-play",
  subsets: ["latin"],
});

export default function Hero({
  handleContactModal
}:{
  handleContactModal: () => void
}
) {

  return(
    <section 
      className="
        relative flex flex-col justify-center
        min-h-dvh w-full bg-container p-6 gap-3 text-(--cream) items-end md:py-10 md:px-20
      "
      id="Inicio"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h1 className={`${cairoPlay.className} text-4xl font-bold text-(--cream) z-10 text-right max-w-200 sm:text-5xl`}>
        Lo mejor de nuestra tierra, molido para tu hogar
      </h1>
      <p className="z-10 text-right text-sm mt-5 max-w-120 sm:text-base md:text-lg">
        Disfruta de un café con identidad. Grano cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.
      </p>
      <button 
      className="z-10 bg-(--orange) text-white px-4 py-2 rounded-md mt-8 
      cursor-pointer transition-[scale] duration-200 hover:scale-105 self-center sm:mt-20 md:text-lg md:font-medium md:px-6 md:py-3"
      onClick={handleContactModal}>
        Hacer un pedido
      </button>
    </section>
  )
}