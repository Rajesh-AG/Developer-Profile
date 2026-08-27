import { useState, useEffect } from 'react'
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

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let currentShow = false
    const handleScroll = () => {
      const isShow = window.scrollY > 400
      if (isShow !== currentShow) {
        currentShow = isShow
        setShow(isShow)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] shadow-lg transition-[opacity,transform,border-color,color] duration-200 hover:border-[var(--border-hover)] hover:text-[var(--accent-soft)] cursor-pointer ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-main-content">
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationTimeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
