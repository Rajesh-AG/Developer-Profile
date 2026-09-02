import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rajesh-AG', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/rajesh-ag', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:rajesh@rajeshag.dev', label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1A1A1A', background: 'var(--surface)', padding: '32px 24px 40px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
      <div style={{ maxWidth: 'var(--container-w)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }} className="nav-inner">
        <div style={{ textAlign: 'left' }}>
          <Link to="hero" href="#hero" smooth duration={500} style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', cursor: 'pointer' }}>
            RAJESH<span style={{ color: '#00D9A6' }}>.</span>
          </Link>
          <p style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '4px', letterSpacing: '0.04em' }}>
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
                border: '1px solid var(--line-strong)',
                borderRadius: '4px',
                color: '#9CA3AF',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D9A6'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.background = 'rgba(0, 217, 166, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line-strong)'
                e.currentTarget.style.color = '#9CA3AF'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-w)', margin: '24px auto 0', paddingTop: '18px', borderTop: '1px solid #1A1A1A', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6B7280' }}>
        <span>© 2025 Rajesh A.G. All rights reserved.</span>
        <span>Designed &amp; Built by Rajesh A.G.</span>
      </div>
    </footer>
  )
}