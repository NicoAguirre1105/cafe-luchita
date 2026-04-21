import Image from "next/image"

export default function ProductCard({
  children,
  photo_src,
}:{
  children: React.ReactNode,
  photo_src: string
}) {
  return (
    <article className=" relative bg-(--cream) w-full flex flex-col text-(--green) rounded-lg max-w-70">
      <Image 
        src={photo_src}
        alt="Empaque Cafe Luchita"
        width={210}
        height={380}
        className="h-60 w-auto rounded-t-lg"
      />
      <div className="px-3 py-3 flex flex-col gap-3">
        {children}
      </div>
    </article>
  )
}