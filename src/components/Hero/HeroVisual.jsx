import OrbitPath from './OrbitPath'
import FloatingStatCards from './FloatingStatCards'
import profileImg from '../../assets/profile.webp'

export default function HeroVisual({ mousePos = { x: 0, y: 0 }, profilePhoto }) {
  const cardTransform = `perspective(1000px) rotate(-5deg) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg) translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`
  const statTransform = `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`

  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[520px] aspect-[4/5] mx-auto flex items-center justify-center">
      
      {/* Ambient Green & Cyan Radial Glow Behind Card */}
      <div 
        className="absolute w-[130%] h-[130%] -top-[15%] -left-[15%] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 70%)',
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Orbit Curve Path with Glowing Cyan Dot */}
      <OrbitPath />

      {/* Tilted Card Frame (-5deg) */}
      <div 
        className="relative w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-br from-[#081814] via-[#041210] to-[#020706] border border-[#10b981]/30 shadow-[0_0_80px_rgba(16,185,129,0.22),_0_0_160px_rgba(16,185,129,0.08),_0_30px_60px_rgba(0,0,0,0.8)] z-10 transition-all duration-500 ease-out group"
        style={{
          transform: cardTransform,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Radial Ambient Glow Overlay inside Frame */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-90" 
          style={{
            background: 'radial-gradient(circle at 35% 30%, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 75%)'
          }}
        />

        {/* Bottom Vignette Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

        {/* Profile Image Asset with Radial Vignette Mask */}
        <img 
          src={profilePhoto || profileImg} 
          alt="Rajesh A.G." 
          style={{
            maskImage: 'radial-gradient(ellipse 85% 90% at 60% 40%, black 55%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 60% 40%, black 55%, transparent 100%)'
          }}
          className="relative w-full h-full object-cover object-top filter brightness-[1.08] contrast-[1.06] saturate-[1.05] z-0"
          loading="eager"
        />
      </div>

      {/* Floating Stat Cards */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-transform duration-500 ease-out"
        style={{ transform: statTransform }}
      >
        <div className="relative w-full h-full pointer-events-auto">
          <FloatingStatCards />
        </div>
      </div>

    </div>
  )
}
