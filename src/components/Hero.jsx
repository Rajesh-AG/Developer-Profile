import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImg from '../assets/profile.webp'

const FloatingParticle = ({ size, left, top, delay, duration }) => {
  const [key, setKey] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleStart = () => {
    setIsAnimating(true)
  }

  const handleEnd = () => {
    setIsAnimating(false)
    setKey((prev) => prev + 1)
  }

  return (
    <span
      key={key}
      onAnimationStart={handleStart}
      onAnimationEnd={handleEnd}
      className="absolute rounded-full bg-[#A78BFA] pointer-events-none animate-float-particle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        animationDelay: delay,
        animationDuration: duration,
        willChange: isAnimating ? 'transform' : 'auto',
      }}
    />
  )
}

const roles = ["Flutter Developer", "UI/UX Designer", "Technical Mentor"]

// Float particles configuration (max 25, optimized count of 20)
const particles = [
  { size: 5, left: '8%', top: '20%', delay: '0s', duration: '14s' },
  { size: 7, left: '22%', top: '55%', delay: '2s', duration: '18s' },
  { size: 4, left: '42%', top: '15%', delay: '1s', duration: '13s' },
  { size: 6, left: '58%', top: '78%', delay: '4s', duration: '20s' },
  { size: 5, left: '82%', top: '22%', delay: '1.5s', duration: '15s' },
  { size: 8, left: '90%', top: '70%', delay: '3.5s', duration: '17s' },
  { size: 4, left: '15%', top: '85%', delay: '6s', duration: '21s' },
  { size: 7, left: '48%', top: '48%', delay: '8s', duration: '24s' },
  { size: 5, left: '72%', top: '42%', delay: '10s', duration: '16s' },
  { size: 6, left: '30%', top: '85%', delay: '5s', duration: '14s' },
  { size: 5, left: '5%', top: '45%', delay: '3s', duration: '16s' },
  { size: 7, left: '12%', top: '65%', delay: '7s', duration: '19s' },
  { size: 4, left: '35%', top: '30%', delay: '9s', duration: '15s' },
  { size: 6, left: '65%', top: '10%', delay: '11s', duration: '22s' },
  { size: 5, left: '88%', top: '35%', delay: '13s', duration: '17s' },
  { size: 8, left: '50%', top: '85%', delay: '12s', duration: '25s' },
  { size: 4, left: '78%', top: '60%', delay: '14s', duration: '18s' },
  { size: 6, left: '25%', top: '12%', delay: '15s', duration: '20s' },
  { size: 5, left: '93%', top: '10%', delay: '16s', duration: '16s' },
  { size: 7, left: '40%', top: '90%', delay: '17s', duration: '23s' },
]

const Hero = () => {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  // Page load sequence state
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  // Page load trigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const raf = requestAnimationFrame(() => {
      setIsLoaded(true)
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  // Typewriter effect logic
  useEffect(() => {
    let timer
    const handleTyping = () => {
      const fullText = roles[roleIndex]
      if (!isDeleting) {
        // Typing letters
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(80) // Fast typing

        if (currentText === fullText) {
          // Pause at full word
          setTypingSpeed(1800)
          setIsDeleting(true)
        }
      } else {
        // Deleting letters
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(45) // Fast deletion

        if (currentText === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(400) // Pause before starting next word
        }
      }
    }

    timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, typingSpeed])

  // Media query & reduced motion state for particles rendering
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkRenderStatus = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isDesktop = window.innerWidth > 768
      setShouldRenderParticles(!prefersReducedMotion && isDesktop)
    }

    // Initial check
    checkRenderStatus()

    window.addEventListener('resize', checkRenderStatus)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkRenderStatus)

    return () => {
      window.removeEventListener('resize', checkRenderStatus)
      mediaQuery.removeEventListener('change', checkRenderStatus)
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-8 md:pt-28 md:pb-12 bg-[#0C0D14]"
    >
      {/* Subtle particle background animation */}
      {shouldRenderParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p, idx) => (
            <FloatingParticle
              key={idx}
              size={p.size}
              left={p.left}
              top={p.top}
              delay={p.delay}
              duration={p.duration}
            />
          ))}
        </div>
      )}

      {/* Decorative gradient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main 2-column content grid */}
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div
          className={`flex flex-col items-center md:items-start text-center md:text-left hero-text-load ${
            isLoaded ? 'page-loaded' : ''
          } order-2 md:order-1`}
        >
          {/* Opportunities Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 mb-6 hover:bg-[#10B981]/15 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-semibold text-[#10B981] tracking-wide uppercase">
              Available for Opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="text-[14px] text-[#C8CADE]/60 font-semibold tracking-widest uppercase mb-3">
            👋 Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#EEEEF2] leading-none mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Rajesh A
          </h1>

          {/* Typewriter role title */}
          <div
            className="text-2xl sm:text-3xl font-bold mb-5 min-h-[44px] flex items-center"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(90deg, #A78BFA, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <span>{currentText}</span>
            <span className="inline-block w-[3px] h-[1.1em] bg-[#A78BFA] ml-1.5 animate-blink" style={{ WebkitTextFillColor: '#A78BFA' }} />
          </div>

          {/* Description */}
          <p className="text-[#C8CADE]/85 text-base md:text-lg leading-relaxed max-w-lg mb-8">
            I craft high-performance, cross-platform mobile applications and intuitive digital experiences. Specializing in Flutter development, user-centric UI/UX design, and mentoring technical teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <Link
              to="projects"
              href="#projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#684BFF]/30 text-center bg-[#684BFF]"
            >
              View My Apps
            </Link>
            <Link
              to="contact"
              href="#contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#EEEEF2] bg-transparent border border-[#684BFF]/55 cursor-pointer transition-all duration-300 hover:bg-[#684BFF]/10 hover:border-[#684BFF] text-center"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#C8CADE]/40 uppercase tracking-widest font-semibold">
              Follow:
            </span>
            <a
              href="https://github.com/Rajesh-AG"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#C8CADE] hover:text-[#684BFF] transition-all duration-300 p-2.5 rounded-xl bg-[#13151F] border border-white/5 hover:border-[#684BFF]/30 hover:scale-105"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rajesh-ag"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#C8CADE] hover:text-[#684BFF] transition-all duration-300 p-2.5 rounded-xl bg-[#13151F] border border-white/5 hover:border-[#684BFF]/30 hover:scale-105"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile image with animated gradient ring */}
        <div
          className={`flex items-center justify-center hero-photo-load ${
            isLoaded ? 'page-loaded' : ''
          } order-1 md:order-2`}
        >
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center flex-shrink-0">
            {/* Soft back glow blob */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none opacity-45 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #684BFF 0%, #3B82F6 70%)',
              }}
            />

            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full p-[4px] overflow-hidden">
              <div
                className="w-full h-full rounded-full animate-rotate-ring"
                style={{
                  background: 'conic-gradient(from 0deg, #684BFF, #3B82F6, #A78BFA, #684BFF)',
                }}
              />
            </div>

            {/* Profile Image */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#0C0D14] flex items-center justify-center">
              <img
                src={profileImg}
                alt="Rajesh A.G. | Flutter Developer &amp; UI/UX Designer"
                className="w-full h-full object-cover object-top hover:scale-[1.04] transition-transform duration-500"
                loading="eager"
                width="384"
                height="384"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <Link
        to="about"
        href="#about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-[#C8CADE]/40 hover:text-[#684BFF] transition-all duration-300 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">
          Scroll
        </span>
        <HiArrowDown
          size={16}
          className="animate-bounce"
        />
      </Link>
    </section>
  )
}

export default Hero