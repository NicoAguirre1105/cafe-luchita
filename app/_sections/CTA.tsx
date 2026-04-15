export default function CTA() {

  return (
    <section className="bg-(--cream) min-h-dvh text-(--green) flex flex-col justify-center px-5 gap-5 items-center">
      <h2 className="text-3xl font-bold">¿Listo para elevar el <em className="">estándar</em> de tu café?</h2>
      <p>Estamos listos para atender tus pedidos personales, abastecer tu barra de café o coordinar logística de exportación de nuestro Arábigo de altura.</p>
      <button className="bg-(--green) w-fit text-white px-4 py-2 rounded-md mt-8 
      cursor-pointer transition-[scale] duration-200 hover:scale-105">Contactanos</button>
    </section>
  )
}