import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiLocationMarker, HiAcademicCap } from 'react-icons/hi'

export default function EducationTimeline() {
  const revealRef = useScrollReveal(0)

  return (
    <section id="education" className="section-shell" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="section-kicker">08 / EDUCATION</div>
      
      <div ref={revealRef} className="education-list">
        {/* Primary Education: B.Tech Honours */}
        <article className="editorial-row">
          <div className="row-year">
            <span style={{ color: '#00D9A6', fontWeight: 700 }}>2022</span>{' '}
            <span style={{ color: '#9CA3AF', fontWeight: 500 }}>— 2026 (Expected)</span>
          </div>
          
          <div className="row-role">
            <h3>B.Tech Information Technology (Honours)</h3>
            <h4 style={{ color: '#9CA3AF' }}>Adhiparasakthi Engineering College · Anna University</h4>
            <p style={{ color: '#9CA3AF' }}>
              Focused on software engineering, database management, mobile networks, and cross-platform mobile patterns.
            </p>
            <div className="edu-score-badge">8.5 CGPA</div>
          </div>

          <div className="row-meta-info">
            <div>
              <HiAcademicCap size={14} />
              <span style={{ color: '#9CA3AF' }}>Anna University Affiliated</span>
            </div>
            <div>
              <HiLocationMarker size={14} />
              <span style={{ color: '#9CA3AF' }}>Melmaruvathur, India</span>
            </div>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text)' }}>HONOURS STATUS</span>
              <strong style={{ color: 'var(--text)', fontSize: '0.82rem' }}>First Class with Distinction</strong>
            </div>
          </div>
        </article>

        {/* Secondary Education: High School */}
        <article className="editorial-row">
          <div className="row-year">
            <span style={{ color: '#00D9A6', fontWeight: 700 }}>2019</span>{' '}
            <span style={{ color: '#9CA3AF', fontWeight: 500 }}>— 2022</span>
          </div>
          
          <div className="row-role">
            <h3 style={{ fontSize: '1.05rem', color: 'var(--text)' }}>Higher Secondary Education</h3>
            <h4 style={{ color: '#9CA3AF' }}>PRG Higher Secondary School · State Board</h4>
            <p style={{ fontSize: '0.86rem', color: '#9CA3AF' }}>
              Completed foundational education focusing on Physics, Chemistry, and Mathematics (12th Grade: 85% score; 10th Grade: 89.2% score).
            </p>
          </div>

          <div className="row-meta-info" style={{ alignSelf: 'center' }}>
            <div>
              <HiLocationMarker size={14} />
              <span style={{ color: '#9CA3AF' }}>Kattumannarkoil, India</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}