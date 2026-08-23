import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: 'https://github.com/Rajesh-AG',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={18} />,
    href: 'https://linkedin.com/in/rajesh-ag',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope size={18} />,
    href: 'mailto:rajesh.ag.dev@gmail.com',
    label: 'Email',
  },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full px-6 py-12"
      style={{
        background: '#13151F',
        borderTop: '1px solid rgba(108,99,255,0.12)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-10">

          {/* Logo + Tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span
              className="text-xl font-bold text-[#EEEEF2]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Rajesh<span className="text-[#6C63FF]">.</span>
            </span>

            <p className="text-[#C8CADE] text-xs opacity-60">
              Flutter Developer · UI/UX · Mentor
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  href={`#${link.to}`}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-[#C8CADE] text-sm cursor-pointer hover:text-[#A78BFA] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#C8CADE] border transition-all duration-200 hover:text-[#6C63FF] hover:border-[#6C63FF]/40 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(108,99,255,0.06)',
                  borderColor: 'rgba(108,99,255,0.15)',
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background: 'rgba(108,99,255,0.1)',
          }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          <p
            className="text-[#C8CADE] text-xs opacity-50 text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            © {year} Rajesh A.G. Built with React + Vite
          </p>

          <p
            className="text-[#C8CADE] text-xs opacity-50 text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Designed &amp; Built by{' '}
            <span className="text-[#A78BFA] opacity-100">
              Rajesh A.G.
            </span>
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer 