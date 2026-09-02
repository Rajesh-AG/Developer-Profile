import { useScrollReveal } from '../hooks/useScrollReveal'

const achievementsData = [
  {
    id: '01',
    category: 'SMART INDIA HACKATHON',
    status: 'SIH Participant',
    year: '2024',
    title: 'SIH — Drone-Based ET Sensing',
    projectTitle: 'Drone-based Intelligent ET Sensing and Irrigation Water Use Accounting System',
    description: 'Designed to optimise irrigation management with real-time aerial sensing data.',
    domain: 'Robotics & Drones',
    technologies: ['Drones', 'IoT', 'Sensor Fusion', 'Python'],
    isSIH: true
  },
  {
    id: '02',
    category: 'SMART INDIA HACKATHON',
    status: 'SIH Participant',
    year: '2025',
    title: 'SIH — Smart Tourist Safety System',
    projectTitle: '',
    description: 'AI-powered tourist safety monitoring & incident response using Geo-fencing, Blockchain-based Digital ID, and real-time alert pipelines.',
    domain: 'Travel & Tourism',
    technologies: ['AI/ML', 'Geo-fencing', 'Blockchain', 'Python'],
    isSIH: true
  },
  {
    id: '03',
    category: 'COMPETITIVE EXAMINATION',
    status: 'First Class Pass',
    year: '',
    title: 'Typewriting — First Class Pass',
    context: 'Government Examination',
    description: '',
    isSIH: false
  },
  {
    id: '04',
    category: 'STUDENT LEADERSHIP',
    status: 'Student Coordinator',
    year: '',
    title: 'Student Coordinator',
    context: 'Intra-Department Symposium — IT Department',
    description: 'Coordinated student activities and supported the execution of an intra-department technical symposium.',
    isSIH: false
  },
  {
    id: '05',
    category: 'PROFESSIONAL COMMUNITY',
    status: 'ACM Member',
    year: '',
    title: 'ACM Member',
    context: 'College',
    description: 'Member during college',
    isSIH: false
  }
]

export default function Achievements() {
  const revealRef = useScrollReveal(0)

  return (
    <section id="achievements" className="section-shell" style={{ borderTop: '1px solid var(--line)', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="section-kicker">10 / ACHIEVEMENTS &amp; ACTIVITIES</div>
      
      <div className="capability-header" style={{ marginBottom: '48px' }}>
        <h2 className="display-heading display-heading--medium">Technical Engagement &amp; Leadership.</h2>
        <p className="body-copy" style={{ color: '#9CA3AF' }}>
          Hackathon participation, technical innovation projects, student leadership, competitive examinations, and professional community involvement.
        </p>
      </div>

      <div ref={revealRef} className="experience-list">
        {achievementsData.map((item) => (
          <article key={item.id} className="editorial-row" style={{ gridTemplateColumns: '180px 1.2fr 0.8fr', padding: '32px 0' }}>
            {/* Left Column: Year & Status Badge */}
            <div className="row-year">
              {item.year ? (
                <>
                  <span style={{ color: '#00D9A6', fontWeight: 700 }}>{item.year}</span>{' '}
                  <span style={{ color: '#9CA3AF', fontWeight: 500, fontSize: '0.75rem', display: 'block', marginTop: '4px' }}>
                    {item.status}
                  </span>
                </>
              ) : (
                <span style={{ color: '#00D9A6', fontWeight: 700, fontSize: '0.85rem' }}>
                  {item.status}
                </span>
              )}
            </div>
            
            {/* Center Column: Details */}
            <div className="row-role">
              <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#00D9A6', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                {item.category}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '6px' }}>
                {item.title}
              </h3>

              {item.projectTitle && (
                <h4 style={{ color: '#9CA3AF', fontSize: '0.9rem', fontWeight: 500, marginBottom: '12px' }}>
                  {item.projectTitle}
                </h4>
              )}

              {item.context && !item.projectTitle && (
                <h4 style={{ color: '#9CA3AF', fontSize: '0.9rem', fontWeight: 500, marginBottom: '12px' }}>
                  {item.context}
                </h4>
              )}

              {item.description && (
                <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '14px' }}>
                  {item.description}
                </p>
              )}

              {item.technologies && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: '#00D9A6', textTransform: 'uppercase', alignSelf: 'center', marginRight: '4px' }}>
                    TECHNOLOGIES:
                  </span>
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech}
                      style={{ 
                        fontSize: '0.72rem', 
                        color: '#9CA3AF', 
                        background: 'rgba(255, 255, 255, 0.03)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Metadata / Domain */}
            <div className="row-meta-info" style={{ alignSelf: 'flex-start' }}>
              {item.domain && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: '#9CA3AF', textTransform: 'uppercase' }}>
                    DOMAIN
                  </span>
                  <strong style={{ color: 'var(--text)', fontSize: '0.82rem', fontWeight: 600 }}>
                    {item.domain}
                  </strong>
                </div>
              )}
              {item.context && item.projectTitle && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: '#9CA3AF', textTransform: 'uppercase' }}>
                    CONTEXT
                  </span>
                  <span style={{ color: '#9CA3AF', fontSize: '0.82rem' }}>
                    {item.context}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
