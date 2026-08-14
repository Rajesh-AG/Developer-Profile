import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About',    to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills',   to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = "text-[#C8CADE] text-sm font-medium cursor-pointer hover:text-[#A78BFA] transition-colors duration-200"
  const resumeClass = "inline-block px-5 py-2 text-sm font-semibold text-[#6C63FF] border border-[#6C63FF] rounded-lg hover:bg-[#6C63FF] hover:text-white transition-all duration-200"

  return (
    <nav
      className={[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0C0D14]/85 backdrop-blur-md border-b border-[#6C63FF]/15 py-3'
          : 'py-5',
      ].join(' ')}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <span
          className="text-[1.4rem] font-bold text-[#EEEEF2] cursor-default"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Rajesh A.G.<span className="text-[#6C63FF]">.</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={linkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={resumeClass}>
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        >
          <span className={[
            'block w-6 h-0.5 bg-[#EEEEF2] rounded transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-[7px]' : '',
          ].join(' ')} />
          <span className={[
            'block w-6 h-0.5 bg-[#EEEEF2] rounded transition-all duration-300',
            menuOpen ? 'opacity-0' : '',
          ].join(' ')} />
          <span className={[
            'block w-6 h-0.5 bg-[#EEEEF2] rounded transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-[7px]' : '',
          ].join(' ')} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 bg-[#13151F] border-b border-[#6C63FF]/15 list-none">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={resumeClass}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar