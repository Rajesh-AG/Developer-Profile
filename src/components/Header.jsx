import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Work', to: 'projects' },
  { label: 'Process', to: 'thinking' },
  { label: 'Capabilities', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...navLinks.map(({ to }) => to)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const renderLink = (link) => (
    <Link
      to={link.to}
      href={`#${link.to}`}
      smooth={true}
      duration={500}
      offset={-70}
      onClick={() => setMenuOpen(false)}
      className={`nav-link ${activeSection === link.to ? 'is-active' : ''}`}
    >
      {link.label}
    </Link>
  )

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link
          to="hero"
          href="#hero"
          smooth={true}
          duration={500}
          className="brand-mark"
          onClick={() => setMenuOpen(false)}
          aria-label="Home"
        >
          RJ<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <span key={link.to}>{renderLink(link)}</span>
          ))}
          <a
            className="nav-cta"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="View Resume"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Full-Screen Navigation Overlay */}
      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-inner">
          {navLinks.map((link) => (
            <span key={link.to} className="mobile-nav-item">
              {renderLink(link)}
            </span>
          ))}
          <a
            className="nav-cta"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  )
}
