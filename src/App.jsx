import { useState, useEffect, useRef } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import EducationTimeline from './components/EducationTimeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

// Custom lag-following purple cursor dot (desktop-only)
const CustomCursor = () => {
  const dotRef = useRef(null)
  const [shouldRender] = useState(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      return !prefersReducedMotion && !isTouchDevice
    }
    return false
  })

  useEffect(() => {
    if (!shouldRender) return

    const handleMouseMove = (e) => {
      if (!dotRef.current) return
      dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldRender])

  if (!shouldRender) return null

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-[#A78BFA] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-[75ms] ease-out shadow-sm shadow-[#684BFF]/50"
    />
  )
}

// Floating scroll-to-top button
const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let currentShow = false
    const handleScroll = () => {
      const isShow = window.scrollY > 300
      if (isShow !== currentShow) {
        currentShow = isShow
        setShow(isShow)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-[#684BFF] hover:bg-[#5E51F9] text-[#EEEEF2] flex items-center justify-center shadow-lg shadow-[#684BFF]/20 transition-all duration-300 z-40 border border-white/10 cursor-pointer ${
        show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      ▲
    </button>
  )
}

function App() {
  return (
    <>
      {/* Skip to Main Content Link for Keyboard Users */}
      <a href="#main-content" className="skip-to-main-content">
        Skip to main content
      </a>

      {/* High-performance scroll progress bar */}
      <ScrollProgress />

      {/* Custom lag cursor */}
      <CustomCursor />

      {/* Main navigation */}
      <Navbar />

      {/* Semantic Main Content Wrapper */}
      <main id="main-content">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <EducationTimeline />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Smooth scroll to top trigger */}
      <BackToTop />
    </>
  )
}

export default App