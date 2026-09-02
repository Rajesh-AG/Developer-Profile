import { useState, useEffect, useCallback } from 'react'
import Navbar from './Navbar'
import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'
import TrustedBrands from './TrustedBrands'
import ScrollIndicator from './ScrollIndicator'

export default function Hero({ profilePhoto }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(media.matches)
    const listener = (e) => setIsDesktop(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section 
      id="hero" 
      style={{ backgroundColor: '#05070a' }}
      className="relative min-h-screen text-white flex flex-col justify-between pt-[100px] md:pt-[120px] overflow-hidden select-none"
    >
      {/* Keyframe & Animation Scoped Styles */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-line-reveal {
          opacity: 0;
          animation: fadeInUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes mouseWheel {
          0% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(7px); opacity: 0.2; }
          51% { transform: translateY(-4px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .animate-mouse-wheel {
          animation: mouseWheel 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes floatAnim1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatAnim2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-9px); }
        }
        @keyframes floatAnim3 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-7px); }
        }
        .animate-float-1 { animation: floatAnim1 3s ease-in-out infinite alternate; }
        .animate-float-2 { animation: floatAnim2 3.4s ease-in-out infinite alternate 0.5s; }
        .animate-float-3 { animation: floatAnim3 2.8s ease-in-out infinite alternate 1s; }
      `}</style>

      {/* Header Navigation */}
      <Navbar />

      {/* Hero Layout Container (min(92%, 1480px)) */}
      <div 
        style={{ width: 'min(92%, 1480px)', margin: '0 auto' }} 
        className="flex-grow flex items-center py-6 md:py-10"
      >
        <div 
          style={isDesktop ? { display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)', gap: '3.5rem', alignItems: 'center', width: '100%' } : { display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}
        >
          {/* Left Column Content */}
          <HeroContent />

          {/* Right Column Visual */}
          <HeroVisual mousePos={mousePos} profilePhoto={profilePhoto} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-full">
        <TrustedBrands />
        <ScrollIndicator />
      </div>
    </section>
  )
}
