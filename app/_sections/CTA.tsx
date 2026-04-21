export default function CTA({
  handleContactModal
}:{
  handleContactModal: () => void
}) {

  return (
    <section className="bg-(--cream) min-h-dvh text-(--green) flex flex-col justify-center px-5 gap-5 items-center md:px-20 md:gap-10">
      <h2 className="text-3xl font-bold md:text-4xl">
        ¿Listo para elevar el <em className="text-(--orange)">estándar</em> de tu café?
      </h2>
      <p className="text-base md:text-lg text-center md:max-w-180">
        Estamos listos para atender tus pedidos personales, abastecer tu barra de café o coordinar logística de exportación de nuestro Arábigo de altura.
      </p>
      <button 
      className="bg-(--green) w-fit text-white px-4 py-2 rounded-md mt-8 
      cursor-pointer transition-[scale] duration-200 hover:scale-105 md:text-lg md:px-6 md:py-3 md:font-medium"
      onClick={handleContactModal}>
        Contáctanos
      </button>
    </section>
  )
}