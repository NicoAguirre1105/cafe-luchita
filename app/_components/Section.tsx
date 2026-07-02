import { HTMLAttributes } from "react"

type Tone = "milk" | "cream" | "green" | "green-dark" | "orange" | "coffee"

const toneMap: Record<Tone, string> = {
  milk: "bg-(--milk) text-(--coffee)",
  cream: "bg-(--cream) text-(--coffee)",
  green: "bg-(--green) text-(--cream)",
  "green-dark": "bg-(--green-deep) text-(--cream)",
  orange: "bg-(--orange) text-(--coffee)",
  coffee: "bg-(--coffee) text-(--cream)",
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone
  pattern?: boolean
  fullHeight?: boolean
}

export default function Section({
  tone = "milk",
  pattern = false,
  fullHeight = false,
  className = "",
  children,
  ...rest
}: SectionProps) {
  const patternClass = pattern
    ? tone === "green-dark" || tone === "coffee"
      ? "bean-pattern-dark"
      : tone === "cream"
        ? "bean-pattern-cream"
        : "bean-pattern"
    : ""

  return (
    <section
      className={[
        "relative w-full",
        toneMap[tone],
        patternClass,
        fullHeight
          ? "min-h-dvh flex flex-col pt-[var(--header-h)]"
          : "px-5 md:px-10 pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {fullHeight ? (
        <div className="flex-1 flex flex-col justify-center px-5 md:px-10 py-12">
          {children}
        </div>
      ) : children}
    </section>
  )
}

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: React.ReactNode
  className?: string
  size?: "narrow" | "default" | "wide"
}) {
  const widths = { narrow: "max-w-3xl", default: "max-w-6xl", wide: "max-w-7xl" }
  return (
    <div className={`mx-auto w-full ${widths[size]} ${className}`}>{children}</div>
  )
}
