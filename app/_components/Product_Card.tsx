import Image from "next/image"

export default function ProductCard({
  children,
  price,
  photo_src,
}:{
  children: React.ReactNode,
  price: number,
  photo_src: string
}) {
  return (
    <article className=" relative bg-(--cream) w-full flex flex-col text-(--green) rounded-lg">
      <Image 
        src={photo_src}
        alt="Empaque Cafe Luchita"
        width={210}
        height={380}
        className="w-full rounded-t-lg"
      />
      <span className="absolute bg-(--green) text-(--cream) w-15 h-15 flex justify-center items-center -right-4 -top-4 rounded-4xl text-lg">${price}<sup className="underline text-xs">00*</sup></span>
      <div className="px-3 py-3 flex flex-col gap-3">
        {children}
      </div>
    </article>
  )
}