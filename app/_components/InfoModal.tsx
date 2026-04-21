'use client'

import Link from "next/link"
import Image from "next/image"

export default function InfoModal({
  iconsrc,
  title,
  info,
  href
}:{
  iconsrc: string,
  title: string,
  info: string,
  href: string
}) {
  return (
    <Link href={href} target="_blank">
      <section className="backdrop-blur-sm bg-black/10 rounded-md flex items-center px-2 py-2 gap-2 transition-[scale] hover:scale-102 md:max-w-60">
        <div className="bg-(--green) rounded-4xl p-1">
          <Image 
            src={iconsrc}
            alt="Contact Info"
            width={24}
            height={24}
            className=""
          />
        </div>
        <div className="">
          <h4 className="text-sm font-medium">{title}</h4>
          <p className="text-sm font-light">{info}</p>
        </div>
      </section>
    </Link>
  )
}