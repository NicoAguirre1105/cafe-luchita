export type Tone = "milk" | "cream" | "sand" | "green" | "green-dark" | "coffee"

export const bgColorVar: Record<Tone, string> = {
  milk: "var(--milk)",
  cream: "var(--cream)",
  sand: "var(--sand)",
  green: "var(--green)",
  "green-dark": "var(--green-deep)",
  coffee: "var(--coffee)",
}

export const textColorMap: Record<Tone, string> = {
  milk: "text-(--coffee)",
  cream: "text-(--coffee)",
  sand: "text-(--coffee)",
  green: "text-(--cream)",
  "green-dark": "text-(--cream)",
  coffee: "text-(--cream)",
}

// Tonos de fondo claro usan grano oscuro; tonos de fondo oscuro usan grano claro.
export const darkBgTones: Tone[] = ["green", "green-dark", "coffee"]
