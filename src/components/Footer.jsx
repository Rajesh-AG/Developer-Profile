import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rajesh-AG', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/rajesh-ag', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:rajesh.ag.dev@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 'var(--container-w)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'between', gap: '24px' }} className="nav-inner">
        <div>
          <Link to="hero" href="#hero" smooth duration={500} style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', cursor: 'pointer' }}>
            RAJESH<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>
          <p style={{ fontSize: '0.72rem', color: 'var(--dim)', marginTop: '4px', letterSpacing: '0.04em' }}>
            MOBILE PRODUCT ENGINEER &amp; UI/UX DEVELOPER
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                color: 'var(--dim)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.background = 'rgba(91, 140, 255, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)'
                e.currentTarget.style.color = 'var(--dim)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-w)', margin: '24px auto 0', paddingTop: '18px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.68rem', color: 'var(--dim)', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} RAJESH A.G. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}