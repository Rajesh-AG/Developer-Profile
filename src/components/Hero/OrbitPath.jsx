export default function OrbitPath() {
  // Curved line path matching the reference image curve loop
  const pathD = "M 480,440 C 320,490 140,430 140,330 C 140,230 290,160 420,130"

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-10 overflow-visible">
      <svg 
        className="w-[125%] h-[125%] max-w-none overflow-visible" 
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbit-grad-ref" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="cyan-glow-dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="40%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Curved Path Stroke */}
        <path 
          d={pathD} 
          stroke="url(#orbit-grad-ref)" 
          strokeWidth="1.5" 
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Glowing Cyan Node under Card 2 (x=140, y=330) */}
        <g transform="translate(140, 330)">
          {/* Ambient Outer Aura */}
          <circle r="14" fill="url(#cyan-glow-dot)" opacity="0.6" className="animate-pulse" />
          {/* Bright Core Dot */}
          <circle r="4" fill="#ffffff" />
          <circle r="2.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  )
}
