import { Cairo_Play } from "next/font/google";

const cairoPlay = Cairo_Play({
  variable: "--font-cairo-play",
  subsets: ["latin"],
});

export default function Hero() {

  return(
    <section>
      <h1 className={`${cairoPlay.className} text-4xl font-bold text-(--cream)`}>
        Lo mejor de nuestra tierra, molido para tu hogar
      </h1>
      <p>Disfruta de un café con identidad. Grao cultivado artesanalmente para llevar el orgullo de nuestra tierra directo a tu mesa.</p>
      <button>Hacer un pedido</button>
    </section>
  )
}