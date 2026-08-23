import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About',      to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education',  to: 'education' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Contact',    to: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLoaded, setIsLoaded]         = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  // ─── Page-load animation trigger ────────────────────────────────────────────
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const raf = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  // ─── Scroll threshold (debounced via closure flag) ──────────────────────────
  useEffect(() => {
    let currentScrolled = false

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== currentScrolled) {
        currentScrolled = isScrolled
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // sync initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ─── Escape key closes mobile menu ──────────────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return // only attach when menu is open

    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  // ─── IntersectionObserver — active section highlight ────────────────────────
  useEffect(() => {
    const sectionIds = [
      'hero', 'about', 'experience', 'education',
      'skills', 'projects', 'contact',
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'))
          }
        })
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // FIX ✖ — disconnect() cleans up all observations in one call
    return () => observer.disconnect()
  }, [])

  // ─── Derived active state helper ────────────────────────────────────────────
  const isLinkActive = (linkTo) =>
    activeSection === linkTo ||
    (linkTo === 'about'      && activeSection === 'hero')

  // ─── Shared class builders ──────────────────────────────────────────────────
  const desktopLinkClass = (linkTo) =>
    [
      'nav-link text-sm font-medium cursor-pointer relative py-1.5',
      // FIX ⚠ — was transition-all; now only the properties that actually change
      'transition-[color,transform] duration-200',
      isLinkActive(linkTo)
        ? 'active text-[#A78BFA] font-bold scale-105'
        : 'text-[#C8CADE]/75 hover:text-[#A78BFA]',
    ].join(' ')

  const mobileLinkClass = (linkTo) =>
    [
      'text-base font-medium cursor-pointer block py-2 border-l-2 pl-4',
      // transition-colors is already scoped — kept as-is ✅
      'transition-colors duration-200',
      isLinkActive(linkTo)
        ? 'text-[#A78BFA] font-bold border-[#684BFF]'
        : 'text-[#C8CADE]/85 hover:text-[#A78BFA] border-transparent',
    ].join(' ')

  // ────────────────────────────────────────────────────────────────────────────

  return (
    <nav
      className={[
        'fixed top-0 left-0 w-full z-50 navbar-load',
        // FIX ⚠ — was transition-all; only bg, padding, shadow, border change
        'transition-[background-color,padding,box-shadow,border-color] duration-300',
        isLoaded ? 'page-loaded' : '',
        scrolled
          ? 'bg-[#0C0D14]/90 backdrop-blur-md border-b border-[#6C63FF]/15 py-3 shadow-lg'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between relative">

        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <Link
          to="hero"
          href="#hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-[1.4rem] font-bold text-[#EEEEF2] cursor-pointer"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Rajesh A.G.<span className="text-[#6C63FF]">.</span>
        </Link>

        {/* ── Desktop nav links ─────────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            // key uses link.to (stable string), not array index ✅
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                duration={500}
                offset={-80}
                className={desktopLinkClass(link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              // FIX ⚠ — was transition-all; only bg and color change on hover
              className="inline-block px-5 py-2 text-sm font-semibold text-[#6C63FF] border border-[#6C63FF] rounded-lg hover:bg-[#6C63FF] hover:text-white transition-[background-color,color] duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* ── Hamburger button ─────────────────────────────────────────────── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 z-55"
        >
          <span
            className={[
              'block w-6 h-0.5 bg-[#EEEEF2] rounded',
              // FIX ⚠ — was transition-all; only transform changes here
              'transition-transform duration-300',
              menuOpen ? 'rotate-45 translate-y-[7px]' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-0.5 bg-[#EEEEF2] rounded',
              // FIX ⚠ — was transition-all; only opacity changes here
              'transition-opacity duration-300',
              menuOpen ? 'opacity-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-0.5 bg-[#EEEEF2] rounded',
              // FIX ⚠ — was transition-all; only transform changes here
              'transition-transform duration-300',
              menuOpen ? '-rotate-45 -translate-y-[7px]' : '',
            ].join(' ')}
          />
        </button>
      </div>

      {/* ── Mobile backdrop overlay ─────────────────────────────────────────── */}
      <div
        className={[
          'md:hidden fixed inset-0 bg-[#0C0D14]/75 backdrop-blur-sm z-40',
          // transition-opacity is already scoped ✅
          'transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile slide-in drawer ──────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={[
          'md:hidden fixed top-0 right-0 h-screen w-[280px]',
          'bg-[#13151F] border-l border-[#6C63FF]/15 shadow-2xl z-50',
          'p-6 flex flex-col gap-8',
          // transition-transform is already scoped ✅
          'transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex justify-between items-center mt-4">
          <span
            className="text-lg font-bold text-[#EEEEF2]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Navigation
          </span>

          {/* FIX ⚠ — was icon-only with no label; aria-label added ✅ */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="text-[#C8CADE] hover:text-[#A78BFA] bg-transparent border-none cursor-pointer text-xl p-1 transition-colors duration-200"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <ul className="flex flex-col gap-5 list-none text-left mt-4">
          {navLinks.map((link) => (
            // key uses link.to (stable string), not array index ✅
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass(link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="pt-4 border-t border-white/5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              // FIX ⚠ — was transition-all; only bg and color change on hover
              className="w-full text-center block px-5 py-3 text-sm font-semibold text-[#6C63FF] border border-[#6C63FF] rounded-lg hover:bg-[#6C63FF] hover:text-white transition-[background-color,color] duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar