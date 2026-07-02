export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  accentColor = "var(--orange)",
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  accentColor?: string
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold"
          style={{ color: accentColor }}
        >
          <span className="h-px w-6" style={{ backgroundColor: accentColor }} />
          {eyebrow}
        </span>
      )}
      <h2 className="font-(family-name:--font-display) text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
