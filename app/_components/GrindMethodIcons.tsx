type IconProps = { className?: string; size?: number }

export function FrenchPressIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Plunger knob and rod */}
      <rect x="10.5" y="1" width="3" height="2.2" rx="1" fill="currentColor" />
      <rect x="11.3" y="3" width="1.4" height="3" fill="currentColor" />
      {/* Lid */}
      <rect x="6.5" y="5.8" width="11" height="1.8" rx="0.9" fill="currentColor" />
      {/* Carafe body */}
      <path
        d="M7 7.6h10l-0.9 12.2c-0.1 1.5-1.4 2.7-2.9 2.7h-2.4c-1.5 0-2.8-1.2-2.9-2.7L7 7.6Z"
        fill="currentColor"
      />
      {/* Handle */}
      <path
        d="M17 9.2c2.2 0.3 3.5 1.7 3.5 3.6 0 2-1.6 3.4-3.9 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function PotIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Lid knob */}
      <circle cx="12" cy="6.2" r="1.1" fill="currentColor" />
      <ellipse cx="12" cy="8.4" rx="6" ry="1.4" fill="currentColor" />
      {/* Body */}
      <path d="M5.3 9.6h13.4l-1.1 8.2c-0.3 2.2-2.2 3.8-4.4 3.8h-2.4c-2.2 0-4.1-1.6-4.4-3.8L5.3 9.6Z" fill="currentColor" />
      {/* Handles */}
      <path d="M4.5 11.6c-1.6 0.2-2.7 1.1-2.7 2.4 0 1.2 0.9 2.1 2.2 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M19.5 11.6c1.6 0.2 2.7 1.1 2.7 2.4 0 1.2-0.9 2.1-2.2 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function CoffeeMakerIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Water tank / top */}
      <rect x="8.5" y="1.2" width="7" height="4.2" rx="1.2" fill="currentColor" />
      {/* Body / brew head */}
      <path d="M6.5 5.4h11v3.2a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V5.4Z" fill="currentColor" />
      {/* Support column */}
      <rect x="10.7" y="10.4" width="2.6" height="6.4" fill="currentColor" />
      {/* Base plate */}
      <rect x="5.5" y="16.6" width="13" height="1.8" rx="0.9" fill="currentColor" />
      {/* Carafe */}
      <path d="M7.5 18.6h9l-0.6 2.9c-0.2 1.1-1.2 1.9-2.3 1.9h-3.2c-1.1 0-2.1-0.8-2.3-1.9l-0.6-2.9Z" fill="currentColor" />
      <path d="M16.3 19.2c1.2 0.2 2 0.9 2 1.8 0 0.9-0.8 1.6-2 1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function FilterIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Scalloped rim */}
      <path
        d="M3 4.4c1 0.9 2 0.9 3 0s2-0.9 3 0 2 0.9 3 0 2-0.9 3 0 2 0.9 3 0 2-0.9 3 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cone body */}
      <path d="M4 4.6h16L13 21.4c-0.5 1.1-2 1.1-2.5 0L4 4.6Z" fill="currentColor" />
    </svg>
  )
}

export function AeropressIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Plunger handle */}
      <rect x="10.6" y="1" width="2.8" height="2" rx="1" fill="currentColor" />
      <rect x="11.4" y="2.8" width="1.2" height="3.4" fill="currentColor" />
      <rect x="8.2" y="6" width="7.6" height="1.6" rx="0.8" fill="currentColor" />
      {/* Plunger inside chamber */}
      <rect x="8.8" y="7.6" width="6.4" height="2.4" fill="currentColor" opacity="0.55" />
      {/* Chamber (tall cylinder) */}
      <path d="M7.6 10h8.8l-1 9.4c-0.15 1.4-1.3 2.4-2.7 2.4h-1.4c-1.4 0-2.55-1-2.7-2.4L7.6 10Z" fill="currentColor" />
      {/* Funnel cap at bottom */}
      <path d="M9 20.6h6l-0.8 1.4c-0.3 0.5-0.9 0.9-1.5 0.9h-1.4c-0.6 0-1.2-0.4-1.5-0.9L9 20.6Z" fill="currentColor" />
    </svg>
  )
}

export function EspressoCupIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Light steam */}
      <path
        d="M9 2.2c0.9 1-0.9 1.7 0 2.7"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M12.5 1.6c0.9 1-0.9 1.7 0 2.7"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Cup body */}
      <path d="M4.5 8h11v5.4c0 2.9-2.4 5.3-5.3 5.3H9.8c-2.9 0-5.3-2.4-5.3-5.3V8Z" fill="currentColor" />
      {/* Handle */}
      <path d="M15.5 9.4c1.7 0.2 2.9 1.3 2.9 2.7 0 1.4-1.2 2.5-2.9 2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Saucer */}
      <ellipse cx="10" cy="20.2" rx="7" ry="1.4" fill="currentColor" />
    </svg>
  )
}

export function TurkishPotIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Long handle */}
      <path d="M9.5 12.5 1.5 11.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Narrow neck */}
      <path d="M9 5.2h5.4l0.6 2.6H8.4L9 5.2Z" fill="currentColor" />
      {/* Rounded body tapering to base */}
      <path
        d="M8.2 7.8h6.6c0.9 3 1.1 6-0.4 10.6-0.4 1.2-1.4 1.9-2.7 1.9h-0.4c-1.3 0-2.3-0.7-2.7-1.9C7.1 13.8 7.3 10.8 8.2 7.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ColdBrewIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Jar rim */}
      <rect x="6" y="1.4" width="12" height="2.2" rx="1.1" fill="currentColor" />
      {/* Jar body */}
      <path d="M6.6 3.6h10.8l-0.7 15.6c-0.1 2-1.8 3.6-3.8 3.6H11.1c-2 0-3.7-1.6-3.8-3.6L6.6 3.6Z" fill="currentColor" />
      {/* Handle */}
      <path d="M17.4 5.4c1.9 0.3 3.1 1.6 3.1 3.2 0 1.7-1.4 3-3.4 3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Ice cubes cut out of liquid */}
      <rect x="9" y="10.6" width="3" height="3" rx="0.5" fill="var(--cream, #fff)" opacity="0.85" />
      <rect x="12.6" y="13.4" width="3" height="3" rx="0.5" fill="var(--cream, #fff)" opacity="0.85" />
    </svg>
  )
}

export function getGrindIcons(uses: string) {
  if (uses.includes("Cold brew")) return [ColdBrewIcon]
  if (uses.includes("Prensa francesa")) return [FrenchPressIcon]
  if (uses.includes("Café de olla")) return [PotIcon]
  if (uses.includes("Cafetera")) return [CoffeeMakerIcon, FilterIcon]
  if (uses.includes("AeroPress")) return [AeropressIcon]
  if (uses.includes("Café turco")) return [TurkishPotIcon]
  if (uses === "Espresso") return [EspressoCupIcon]
  return []
}
