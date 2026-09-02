import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiOfficeBuilding, HiLocationMarker } from 'react-icons/hi'

const ACHIEVEMENTS = [
  'Engineered LogicQ — a production cross-platform ed-tech application (iOS & Android) utilizing Provider state management across 7+ course domains.',
  'Built a 3-tier role-based access system (Student, Mentor, Institution) with dedicated dashboards, custom privileges, and real-time REST API exchange.',
  'Integrated Firebase Authentication, Firestore, and FCM push notifications to provide secure login, zero-downtime sync, and instant notifications.',
  'Created a reusable custom widget library and optimized render trees via lazy loading, improving frame rates on low-end mobile devices.',
  'Led sprint delivery across two-week iterations, contributing to daily standups, code reviews, and git-flow-based merges.',
]

export default function Experience() {
  const revealRef = useScrollReveal(0)

  return (
    <section id="experience" className="section-shell">
      <div className="section-kicker">07 / EXPERIENCE</div>
      
      <div ref={revealRef} className="experience-list">
        <article className="editorial-row">
          <div className="row-year">2025 <span style={{ color: '#9CA3AF', fontWeight: 500 }}>— JAN – DEC</span></div>
          
          <div className="row-role">
            <h3>Flutter Mobile App Developer</h3>
            <h4>Innolift Ventures · Internship</h4>
            <p style={{ color: '#9CA3AF' }}>
              Collaborated as a core mobile engineer to design, implement, and release cross-platform features for an enterprise-level mobile product.
            </p>
            <ul>
              {ACHIEVEMENTS.map((item, index) => (
                <li key={index} style={{ color: '#9CA3AF' }}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="row-meta-info">
            <div>
              <HiOfficeBuilding size={14} />
              <span style={{ color: '#9CA3AF' }}>Innolift Ventures</span>
            </div>
            <div>
              <HiLocationMarker size={14} />
              <span style={{ color: '#9CA3AF' }}>Chennai, India (Hybrid)</span>
            </div>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text)' }}>FEATURED PLATFORM</span>
              <strong style={{ color: 'var(--text)', fontSize: '0.82rem' }}>LogicQ — Ed-Tech App</strong>
            </div>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text)' }}>TECH STACK</span>
              <span style={{ lineHeight: '1.4', color: '#9CA3AF' }}>Flutter · Dart · Firebase · Provider · REST APIs · FCM · CI/CD</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}