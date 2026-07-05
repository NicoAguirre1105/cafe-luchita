interface IconProps {
  size?: number
  className?: string
}

export function ColdBrewIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M7 4h10v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4z" fill="currentColor" />
      <path d="M6.5 8h11l-1.2 11.3A2 2 0 0 1 14.3 21H9.7a2 2 0 0 1-2-1.7L6.5 8z" fill="currentColor" opacity="0.85" />
      <rect x="9.3" y="11.2" width="2.6" height="2.6" rx="0.4" fill="currentColor" opacity="0.4" transform="rotate(18 10.6 12.5)" />
      <path d="M15.5 3.5L18.5 0.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function FrenchPressIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* plunger knob + rod */}
      <rect x="10.8" y="1.3" width="2.4" height="2.4" rx="0.7" fill="currentColor" />
      <rect x="11.4" y="3.5" width="1.2" height="2.4" fill="currentColor" />
      {/* lid */}
      <rect x="5.5" y="5.6" width="11" height="2.2" rx="0.8" fill="currentColor" />
      {/* glass carafe */}
      <path d="M6.5 7.8h9v10.4a2.4 2.4 0 0 1-2.4 2.4H8.9a2.4 2.4 0 0 1-2.4-2.4V7.8z" fill="currentColor" opacity="0.8" />
      {/* brewed coffee */}
      <path d="M6.5 13.5h9v4.7a2.4 2.4 0 0 1-2.4 2.4H8.9a2.4 2.4 0 0 1-2.4-2.4v-4.7z" fill="currentColor" />
      {/* side handle */}
      <path d="M15.5 10.2h2a1.9 1.9 0 0 1 1.9 1.9v2.2a1.9 1.9 0 0 1-1.9 1.9h-2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function PotIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M6 8c0 6 1.2 11 6 11s6-5 6-11" fill="currentColor" opacity="0.85" />
      <ellipse cx="12" cy="8" rx="6.2" ry="2" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="5.5" r="1.3" fill="currentColor" />
      <path d="M4.2 9.5c-1.4.6-1.4 3 0 3.6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M19.8 9.5c1.4.6 1.4 3 0 3.6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function CoffeeMakerIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* machine head */}
      <path d="M3 2.5h18v5a1.2 1.2 0 0 1-1.2 1.2h-4.3l-1 2h-3l-1-2H4.2A1.2 1.2 0 0 1 3 7.5V2.5z" fill="currentColor" />
      {/* control light */}
      <circle cx="18.4" cy="5" r="0.9" fill="currentColor" opacity="0.45" />
      {/* water tower column */}
      <rect x="3" y="8.7" width="3.6" height="10.3" fill="currentColor" opacity="0.85" />
      {/* warming plate */}
      <rect x="3" y="19" width="16.5" height="2.2" rx="0.8" fill="currentColor" />
      {/* carafe */}
      <path d="M9.5 12.5h8l-.7 4.9A1.7 1.7 0 0 1 15.1 19h-4.2a1.7 1.7 0 0 1-1.7-1.6l-.7-4.9z" fill="currentColor" opacity="0.85" />
      {/* carafe handle */}
      <path d="M17.4 13.6h1.5a1.4 1.4 0 0 1 1.4 1.4v0.6a1.4 1.4 0 0 1-1.4 1.4h-1.3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function FilterIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* dripper rim */}
      <rect x="4.5" y="3.5" width="15" height="2.2" rx="0.8" fill="currentColor" />
      {/* cone filter */}
      <path d="M5.5 5.7h13l-5.2 7.3h-2.6L5.5 5.7z" fill="currentColor" opacity="0.85" />
      {/* drip */}
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      {/* cup catching the brew */}
      <path d="M7 16.6h10l-.8 3.6A1.7 1.7 0 0 1 14.5 21.6h-5a1.7 1.7 0 0 1-1.7-1.4L7 16.6z" fill="currentColor" />
    </svg>
  )
}

export function MokaIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* lid knob */}
      <circle cx="10.5" cy="2.4" r="1.1" fill="currentColor" />
      {/* upper chamber — wide rim tapering to the waist */}
      <path d="M7.3 3.9h6.4l-0.7 4.6H8L7.3 3.9z" fill="currentColor" opacity="0.85" />
      {/* pouring beak */}
      <path d="M13.7 4.6l3.6-0.6v1.9l-3.2 1z" fill="currentColor" />
      {/* waist band */}
      <rect x="7.6" y="8.5" width="6.4" height="1.4" rx="0.4" fill="currentColor" />
      {/* lower octagonal chamber */}
      <path d="M6.6 9.9h8.4l-1.1 8.3A1.6 1.6 0 0 1 12.3 19.6H9.3a1.6 1.6 0 0 1-1.6-1.4L6.6 9.9z" fill="currentColor" opacity="0.85" />
      {/* triangular handle */}
      <path d="M15 11.2h2.6a1.6 1.6 0 0 1 1.6 1.6v3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AeroPressIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="9" y="2" width="6" height="2" rx="0.6" fill="currentColor" />
      <rect x="11.2" y="4" width="1.6" height="7" fill="currentColor" />
      <rect x="7.7" y="11" width="8.6" height="1.6" rx="0.6" fill="currentColor" />
      <path d="M8.5 12.6h7l-1 8.4a1.3 1.3 0 0 1-1.3 1.2h-2.4a1.3 1.3 0 0 1-1.3-1.2l-1-8.4z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function EspressoIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M9.5 8.3c.6-.9-.6-1.2 0-2.2M12 8.3c.6-.9-.6-1.2 0-2.2M14.5 8.3c.6-.9-.6-1.2 0-2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M6 11h10l-.8 5.2A2.4 2.4 0 0 1 12.8 18H9.2a2.4 2.4 0 0 1-2.4-1.8L6 11z" fill="currentColor" opacity="0.85" />
      <path d="M16 12h1.3a1.7 1.7 0 0 1 0 3.4H15.6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="12" cy="19.3" rx="6.5" ry="1.3" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function TurkishPotIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* pouring lip */}
      <path d="M4 7.4l4 0.5-0.4 2-3.2-0.5z" fill="currentColor" />
      {/* body — narrow mouth widening to a bellied base */}
      <path d="M7 8h5.2l2 8.6a1.9 1.9 0 0 1-1.85 2.3H6.65A1.9 1.9 0 0 1 4.8 16.6L7 8z" fill="currentColor" opacity="0.9" />
      {/* rim */}
      <rect x="6.4" y="7.1" width="6.4" height="1.4" rx="0.5" fill="currentColor" />
      {/* long straight handle */}
      <rect x="12.4" y="8.2" width="9" height="1.8" rx="0.9" fill="currentColor" transform="rotate(-11 12.4 9.1)" />
    </svg>
  )
}
