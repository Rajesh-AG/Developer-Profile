import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rajesh-AG', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/rajesh-ag', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:rajesh.ag.dev@gmail.com', label: 'Email' },
]

const Footer = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-8">
    <div className="section-inner">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
        <div className="text-center sm:text-left">
          <p className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-bright)]">
            Rajesh<span className="text-[var(--accent)]">.</span>
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Flutter Developer · UI/UX · Mentor
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-5 list-none">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                smooth
                duration={500}
                offset={-72}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-bright)] transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-muted)] hover:text-indigo-400 hover:border-indigo-500/20 hover:bg-white/[0.01] transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-[var(--border)] text-center">
        <p className="text-[10px] text-[var(--text-muted)] tracking-wide">
          © {new Date().getFullYear()} Rajesh A.G. All rights reserved. Built with React &amp; Tailwind.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
