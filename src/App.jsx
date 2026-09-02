import { useEffect, useRef, useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
// import Header from './components/Header'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import EducationTimeline from './components/EducationTimeline'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import EngineeringThinking from './components/EngineeringThinking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    if (!media.matches) return () => media.removeEventListener('change', update)
    let x = -100; let y = -100; let rx = -100; let ry = -100; let frame
    const move = (event) => { 
      x = event.clientX; 
      y = event.clientY;
      if (!visible) setVisible(true);
    }
    const tick = () => {
      rx += (x - rx) * 0.14; ry += (y - ry) * 0.14
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px,${y}px,0)`
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move, { passive: true }); frame = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame); media.removeEventListener('change', update) }
  }, [visible])

  if (!enabled) return null
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  )
}

const BackToTop = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <button className={`back-top ${show ? 'is-visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
}

export default function App() {
  return <>
    <a href="#main-content" className="skip-to-main-content">Skip to main content</a>
    <ScrollProgress />
    <CustomCursor />
    {/* Header is now rendered inside the Hero component */}
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <EngineeringThinking />
      <Skills />
      <Experience />
      <EducationTimeline />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
  </>
}
