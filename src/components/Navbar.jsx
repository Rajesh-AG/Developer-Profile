import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Work', to: 'projects' },
  { label: 'Thinking', to: 'thinking' },
  { label: 'Capabilities', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...navLinks.map(({ to }) => to)]
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' })
    ids.forEach(id => document.getElementById(id) && observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = e => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const link = (item) => <Link to={item.to} href={`#${item.to}`} smooth duration={500} offset={-72} onClick={() => setMenuOpen(false)} className={`nav-link ${active === item.to ? 'is-active' : ''}`}>{item.label}</Link>

  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner">
      <Link to="hero" href="#hero" smooth duration={500} className="brand-mark">RJ<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navLinks.map(item => <span key={item.to}>{link(item)}</span>)}<a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span/><span/></button>
    </div>
    <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}><div className="mobile-nav-inner">{navLinks.map(item => <span key={item.to}>{link(item)}</span>)}<a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div>
  </header>
}
