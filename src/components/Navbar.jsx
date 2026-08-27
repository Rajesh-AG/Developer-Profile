import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLoaded, setIsLoaded] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const raf = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    let currentScrolled = false
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== currentScrolled) {
        currentScrolled = isScrolled
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const handleEscape = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'))
          }
        })
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const isLinkActive = (linkTo) =>
    activeSection === linkTo || (linkTo === 'about' && activeSection === 'hero')

  const linkClass = (linkTo) =>
    `nav-link cursor-pointer ${isLinkActive(linkTo) ? 'active' : ''}`

  return (
    <header
      className={[
        'fixed top-0 left-0 w-full z-50 navbar-load transition-all duration-300',
        isLoaded ? 'page-loaded' : '',
        scrolled
          ? 'md:navbar-floating bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)] md:shadow-lg'
          : 'bg-transparent border-b border-transparent md:translate-y-0',
      ].join(' ')}
    >
      <nav
        className="section-inner flex h-[var(--nav-height)] md:h-14 items-center justify-between px-6 transition-all duration-300"
        aria-label="Main navigation"
      >
        <Link
          to="hero"
          href="#hero"
          smooth
          duration={500}
          offset={-72}
          className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-bright)] cursor-pointer tracking-tight"
        >
          Rajesh<span className="text-[var(--accent)]">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                smooth
                duration={500}
                offset={-72}
                className={linkClass(link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost text-xs py-1.5 px-3"
          >
            Resume
          </a>
          <Link
            to="contact"
            href="#contact"
            smooth
            duration={500}
            offset={-72}
            className="btn btn-primary text-xs py-1.5 px-3.5 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] text-[var(--text-bright)] bg-transparent border border-[var(--border)] cursor-pointer"
        >
          {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/75 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`md:hidden fixed top-0 right-0 h-full w-[260px] bg-[var(--surface)] border-l border-[var(--border)] z-50 p-5 flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="font-[family-name:var(--font-display)] font-bold text-[var(--text-bright)]">
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-[var(--text-muted)] hover:text-[var(--text-bright)] bg-transparent border-none cursor-pointer p-1"
          >
            <HiX size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 list-none flex-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                smooth
                duration={500}
                offset={-72}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-[var(--radius-sm)] font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                  isLinkActive(link.to)
                    ? 'text-[var(--accent-soft)] bg-[var(--accent-muted)]'
                    : 'text-[var(--text)] hover:text-[var(--text-bright)] hover:bg-white/[0.02]'
                } cursor-pointer`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn btn-ghost w-full text-center py-2"
          >
            Resume
          </a>
          <Link
            to="contact"
            href="#contact"
            smooth
            duration={500}
            offset={-72}
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary w-full text-center py-2 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
