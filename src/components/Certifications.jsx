import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    id: '01',
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    link: 'https://www.linkedin.com/posts/rajeshaxiom_successfully-completed-the-basics-of-python-activity-7326484074678603776-viO9'
  },
  {
    id: '02',
    title: 'Software Engineering',
    issuer: 'Infosys Springboard',
    link: 'https://www.linkedin.com/posts/rajeshaxiom_to-learn-the-basics-of-software-engineering-activity-7326497390507556864-U3lt'
  },
  {
    id: '03',
    title: 'Data Analytics',
    issuer: 'Google — Naan Mudhalvan',
    link: 'https://www.linkedin.com/posts/rajeshaxiom_data-analytics-activity-7372553069055762432-v2MH'
  },
  {
    id: '04',
    title: 'Responsible AI',
    issuer: 'Simplilearn',
    link: 'https://www.linkedin.com/posts/rajeshaxiom_responsible-ai-activity-7328290907760259072-tIiC'
  },
  {
    id: '05',
    title: 'Salesforce Developer',
    issuer: 'Naan Mudhalvan',
    link: 'https://www.linkedin.com/posts/rajeshaxiom_salesforce-activity-7372553567175593984-YVlW'
  }
]

export default function Certifications() {
  const revealRef = useScrollReveal(0)

  return (
    <section id="certifications" className="section-shell" style={{ borderTop: '1px solid var(--line)', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="section-kicker">09 / CERTIFICATIONS</div>
      
      <div className="capability-header" style={{ marginBottom: '48px' }}>
        <h2 className="display-heading display-heading--medium">Continuous Learning &amp; Credentials.</h2>
        <p className="body-copy" style={{ color: '#9CA3AF' }}>
          Verified technical certifications and professional development coursework across software engineering, data analytics, and cloud platforms.
        </p>
      </div>

      <div ref={revealRef} className="experience-list">
        {certifications.map((cert) => (
          <article 
            key={cert.id} 
            className="editorial-row group" 
            style={{ 
              gridTemplateColumns: '80px 1.4fr 0.8fr',
              transition: 'background-color 0.25s ease',
              padding: '28px 12px'
            }}
          >
            <div className="row-year" style={{ fontSize: '0.75rem', color: '#00D9A6' }}>
              {cert.id}
            </div>
            
            <div className="row-role">
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', transition: 'color 0.2s ease' }} className="group-hover:text-[#00D9A6]">
                {cert.title}
              </h3>
              <h4 style={{ color: '#9CA3AF', marginBottom: '0', fontSize: '0.9rem', fontWeight: 500 }}>
                {cert.issuer}
              </h4>
            </div>

            <div className="row-meta-info" style={{ alignSelf: 'center', justifySelf: 'start' }}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#00D9A6',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(0, 217, 166, 0.4)',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  transition: 'all 0.25s ease'
                }}
                className="hover:bg-[#00D9A6]/10 hover:border-[#00D9A6] group-hover:translate-x-0.5"
              >
                <span>VIEW CREDENTIAL</span>
                <span style={{ fontSize: '0.85rem' }}>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
