import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImg from '../assets/profile.webp'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const raf = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" className="section relative overflow-hidden pt-[calc(var(--nav-height)+2rem)] pb-12 flex items-center min-h-[100vh]">
      {/* Premium background grid & glow detail (extremely low contrast) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="section-inner px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          
          <div className={`flex flex-col items-center lg:items-start text-center lg:text-left hero-load ${isLoaded ? 'page-loaded' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>

            <p className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-2">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-[var(--text-bright)] leading-[1.05] tracking-tight mb-4 font-display">
              Rajesh A.G.
            </h1>

            <p className="text-lg sm:text-2xl font-medium text-[var(--accent-soft)] tracking-wide mb-6">
              Flutter Developer &amp; UI/UX Designer
            </p>

            <p className="text-[var(--text)] text-sm sm:text-base leading-relaxed max-w-xl mb-8 text-pretty">
              I build production-ready cross-platform mobile apps with Firebase, REST APIs, and clean architecture.
              Currently mentoring engineers while shipping real-world mobile products.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8">
              <Link
                to="projects"
                href="#projects"
                smooth
                duration={500}
                offset={-72}
                className="btn btn-primary w-full sm:w-auto cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-indigo-500/10"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                href="#contact"
                smooth
                duration={500}
                offset={-72}
                className="btn btn-secondary w-full sm:w-auto cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Rajesh-AG"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-bright)] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-200"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/rajesh-ag"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-bright)] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-200"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Premium Layered Geometric Presentation for Profile Photo */}
          <div className={`flex justify-center lg:justify-end hero-photo-load ${isLoaded ? 'page-loaded' : ''}`}>
            <div className="relative group">
              {/* Decorative background shapes */}
              <div className="absolute -inset-1.5 rounded-[var(--radius-lg)] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-30 blur-lg transition duration-1000 group-hover:opacity-40 pointer-events-none" />
              
              {/* Outer offset frame */}
              <div className="absolute inset-0 border border-indigo-500/10 rounded-[var(--radius-lg)] translate-x-3 translate-y-3 -z-10 transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:translate-y-4" />
              
              {/* Image Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 ease-out group-hover:border-indigo-500/30 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Rajesh A.G., Flutter Developer and UI/UX Designer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  width="288"
                  height="288"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Link
        to="about"
        href="#about"
        smooth
        duration={500}
        offset={-72}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase tracking-widest font-semibold">Scroll</span>
        <HiArrowDown size={12} className="animate-bounce" />
      </Link>
    </section>
  )
}

export default Hero
