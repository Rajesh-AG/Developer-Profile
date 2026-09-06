import { useState, useEffect, useRef } from 'react'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const toggleButtonRef = useRef(null)

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
      { rootMargin: '-30% 0px -60% 0px', threshold: 0.2 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false)
          toggleButtonRef.current?.focus()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [mobileMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#05070a]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent py-6 md:py-7'
      }`}
    >
      <div 
        style={{ width: 'min(92%, 1480px)', margin: '0 auto' }} 
        className="flex items-center justify-between"
      >
        {/* Logo "RJ." */}
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-white text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer group select-none"
          aria-label="Home"
        >
          RJ<span className="text-[#00D9A6] transition-colors duration-300 group-hover:text-[#38bdf8]">.</span>
        </Link>

        {/* Center Nav Links (Minimum 28px Gap & Active State Indicator) */}
        <nav className="hidden lg:flex items-center gap-[28px]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={`relative text-[14px] font-medium tracking-normal cursor-pointer transition-all duration-200 py-1 ${
                activeSection === link.to 
                  ? 'text-[#00D9A6] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00D9A6] after:rounded-full' 
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Visually Distinct Resume CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href="/A_Rajesh_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View Resume in a new tab"
            style={{ border: '1px solid rgba(0, 217, 166, 0.5)', padding: '6px 16px', borderRadius: '4px', color: '#00D9A6' }}
            className="relative inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider bg-white/[0.03] hover:bg-[#00D9A6]/10 hover:border-[#00D9A6] hover:shadow-[0_0_15px_rgba(0,217,166,0.3)] transition-all duration-300 group"
          >
            <span>VIEW RESUME</span>
            <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href="/A_Rajesh_Resume.pdf"
            download="A_Rajesh_Resume.pdf"
            aria-label="Download Resume PDF"
            style={{ border: '1px solid rgba(255, 255, 255, 0.2)', padding: '6px 16px', borderRadius: '4px', color: '#E5E7EB' }}
            className="relative inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300"
          >
            <span>DOWNLOAD</span>
            <span className="text-[10px]">↓</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          ref={toggleButtonRef}
          className="block lg:hidden text-[#9CA3AF] hover:text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          role="region"
          className="lg:hidden absolute top-full left-0 w-full bg-[#05070a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-medium py-1.5 transition-colors ${
                activeSection === link.to ? 'text-[#00D9A6] font-semibold' : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="/A_Rajesh_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="View Resume in a new tab"
            style={{ border: '1px solid rgba(0, 217, 166, 0.5)', padding: '8px 18px', borderRadius: '4px', color: '#00D9A6' }}
            className="inline-flex justify-center items-center gap-2 mt-2 text-xs font-semibold bg-[#00D9A6]/10"
          >
            <span>VIEW RESUME</span>
            <span>↗</span>
          </a>
          <a
            href="/A_Rajesh_Resume.pdf"
            download="A_Rajesh_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Download Resume PDF"
            style={{ border: '1px solid rgba(255, 255, 255, 0.2)', padding: '8px 18px', borderRadius: '4px', color: '#E5E7EB' }}
            className="inline-flex justify-center items-center gap-2 text-xs font-semibold bg-white/[0.03]"
          >
            <span>DOWNLOAD RESUME</span>
            <span>↓</span>
          </a>
        </div>
      )}
    </header>
  )
}
