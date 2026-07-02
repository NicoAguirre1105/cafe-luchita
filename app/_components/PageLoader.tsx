'use client'

import Image from "next/image"
import BeanIcon from "./BeanIcon"

export default function PageLoader({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 bg-(--espresso) transition-opacity duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/logos/logo_cream.svg"
        alt="Café Luchita"
        width={72}
        height={72}
        className="h-16 w-auto md:h-20"
        priority
      />
      <div className="flex items-center gap-4">
        {[-8, 6, -5, 9].map((rotation, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.15}s`, transform: `rotate(${rotation}deg)` }}
          >
            <BeanIcon size={24} className="text-(--cream)" />
          </span>
        ))}
      </div>
    </div>
  )
}
