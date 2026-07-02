export default function BeanIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer bean shape — oval */}
      <ellipse cx="16" cy="20" rx="11" ry="17" fill="currentColor" />
      {/* Center crease — sinuous line top to bottom */}
      <path
        d="M16 4 C11 10, 21 18, 16 36"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  )
}
