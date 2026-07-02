'use client'

import { useEffect, useRef, useState, HTMLAttributes, createElement } from "react"

interface RevealProps extends HTMLAttributes<HTMLElement> {
  delay?: number
  as?: "div" | "section" | "article" | "li" | "header"
}

export default function Reveal({
  delay = 0,
  as = "div",
  className = "",
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "in-view" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms`, ...style },
      ...rest,
    },
    children,
  )
}
