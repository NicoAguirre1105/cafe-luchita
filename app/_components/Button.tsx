import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "outline" | "ghost" | "orange" | "cream"
type Size = "md" | "lg"

const variantMap: Record<Variant, string> = {
  primary:
    "bg-(--coffee) text-(--cream) hover:bg-(--bark)",
  secondary:
    "bg-(--green) text-(--white) hover:bg-(--green-dark)",
  orange:
    "bg-(--orange-dark) text-(--cream) hover:bg-(--orange-darker)",
  cream:
    "bg-(--cream) text-(--green) hover:bg-(--milk)",
  outline:
    "border-2 border-current bg-transparent hover:bg-current/10",
  ghost:
    "bg-transparent hover:underline underline-offset-4",
}

const sizeMap: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base md:text-lg",
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button className={`${base} ${variantMap[variant]} ${sizeMap[size]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return (
    <a className={`${base} ${variantMap[variant]} ${sizeMap[size]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
