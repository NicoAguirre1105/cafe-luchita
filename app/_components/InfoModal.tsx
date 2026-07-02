'use client'

import Link from "next/link"
import Image from "next/image"

export default function InfoModal({
  iconsrc,
  title,
  info,
  href,
}: {
  iconsrc: string
  title: string
  info: string
  href: string
}) {
  return (
    <Link href={href} target="_blank" className="group">
      <article className="flex items-center gap-4 rounded-2xl border border-(--sand) bg-(--milk) px-5 py-4 transition-all duration-300 group-hover:border-(--green) group-hover:-translate-y-0.5">
        <div className="grid h-14 w-14 flex-none place-items-center rounded-full bg-(--green) text-(--cream) transition-colors group-hover:bg-(--coffee)">
          <Image src={iconsrc} alt="" width={28} height={28} className="h-7 w-auto" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-(--coffee)">{title}</h4>
          <p className="text-sm text-(--bark)/80">{info}</p>
        </div>
      </article>
    </Link>
  )
}
