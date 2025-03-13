import Link from "next/link"

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center">
      <div className="relative h-10 w-10 overflow-hidden">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="80" height="80" rx="10" fill="url(#logoGradient)" />
          <text x="50" y="65" fontSize="50" fontWeight="bold" textAnchor="middle" fill="white">
            A
          </text>
          <text x="65" y="75" fontSize="30" fontWeight="bold" textAnchor="middle" fill="white">
            Z
          </text>
        </svg>
      </div>
      <span className="ml-2 text-xl font-bold">Ambar Zara</span>
    </Link>
  )
}

