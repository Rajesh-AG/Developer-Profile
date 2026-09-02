import { motion } from 'framer-motion'
import { FaGithub, FaLock } from 'react-icons/fa'

const projects = [
  {
    n: '01',
    title: 'TenantGuard',
    subtitle: 'AI-Powered Tenancy Verification',
    category: 'Mobile / Machine Learning',
    role: 'Mobile Architect & CV Integration',
    tech: 'Flutter · Python · PyTorch · TFLite · Flask · Docker · AWS S3',
    problem: 'Manual rental property damage inspections are slow, subjective, and prone to disputes between tenants and landlords.',
    solution: 'Built a Flutter application that classifies rooms and automatically detects property defects in real-time on-device.',
    engineering: 'Integrated PyTorch models compiled to TFLite for local classification, minimizing API network latency. Heavy uploads are queued and synced asynchronously, ensuring zero data loss during poor network conditions.',
    outcome: 'An on-device AI inspection system demonstrating TFLite model execution on low-power devices with automated offline-first queue synchronization.',
    github: 'https://github.com/Kingfurious/tenantguard-frontend'
  },
  {
    n: '02',
    title: 'LogicQ',
    subtitle: 'Enterprise Ed-Tech Platform',
    category: 'Mobile / Backend Services',
    role: 'Flutter Developer Intern',
    tech: 'Flutter · Dart · Firebase · Provider · REST APIs · FCM',
    problem: 'Institutions lack a unified course engine that serves students, mentors, and administrators with secure role-based dashboard access.',
    solution: 'Co-engineered a 3-tier Flutter application that handles course domain delivery, dynamic quizzes, and grading.',
    engineering: 'Utilized Provider state architectures to isolate grading logic and state flows. Built real-time sync with Firestore and integrated FCM push notifications for instant class alerts.',
    outcome: 'Successfully shipped core UI and feature modules during a 12-month internship at Innolift Ventures, serving student, mentor, and administrator roles across 7+ functional areas.',
    private: true
  },
  {
    n: '03',
    title: 'SMAS',
    subtitle: 'Institutional Academic Analytics',
    category: 'Full Stack Web Platform',
    role: 'Solo Developer',
    tech: 'React · Flask · SQLite · REST APIs · Git',
    problem: 'Administrators struggle to forecast student attendance rates and coordinate performance indices across multiple departments.',
    solution: 'Developed a React frontend dashboard connected to Python Flask REST APIs for roster grading and data analysis.',
    engineering: 'Designed a lightweight database schema in SQLite. Built attendance forecast engines and reports generators utilizing custom backend routing tables.',
    outcome: 'A fully functional academic analytics platform featuring secure role-based dashboard panels and PDF progress reporting.',
    github: 'https://github.com/Rajesh-AG/SMAS'
  },
  {
    n: '04',
    title: 'Fintrack',
    subtitle: 'Offline-First Expense Manager',
    category: 'Mobile / Data Synced',
    role: 'Solo Developer',
    tech: 'Flutter · Dart · Firebase Realtime Database · Provider',
    problem: 'Expense tracking applications require stable internet connectivity, causing transaction logging failure in remote or poor signal areas.',
    solution: 'Created an offline-first transaction manager utilizing SQLite for local caching and real-time database sync upon reconnection.',
    engineering: 'Programmed custom Dart charts to render budget limits dynamically. Implemented background sync handlers and custom conflict resolution workflows.',
    outcome: 'Personal budget management application featuring local-first caching state cycles and Firebase sync (project in progress).',
    github: 'https://github.com/Rajesh-AG/expense_tracker'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="project-section">
      <div className="section-shell">
        <div className="section-kicker">03 / SELECTED WORK</div>
        
        <div className="project-intro">
          <h2 className="display-heading display-heading--medium">
            Work that starts with a problem, not a screenshot.
          </h2>
          <p className="body-copy">
            Selected projects across mobile engineering, product interfaces and applied systems. Each project is structured around the architectural decisions, design problems, and execution behind the build.
          </p>
        </div>

        <div className="case-study-list">
          {projects.map((p, i) => (
            <motion.article 
              key={p.title} 
              className="case-study" 
              initial={{ opacity: 0, y: 28 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: '-80px' }} 
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <div className="case-number">{p.n}</div>
              
              <div className="case-content">
                <div className="case-meta">{p.category}</div>
                <h3>{p.title}</h3>
                <h4>{p.subtitle}</h4>
                
                {/* Structural Case-Study Grid Details */}
                <div className="project-case-details">
                  <div className="detail-block">
                    <label>Problem &amp; Context</label>
                    <p>{p.problem}</p>
                  </div>
                  <div className="detail-block">
                    <label>Solution Approach</label>
                    <p>{p.solution}</p>
                  </div>
                  <div className="detail-block">
                    <label>Engineering Depth</label>
                    <p>{p.engineering}</p>
                  </div>
                  <div className="detail-block">
                    <label>Key Outcome</label>
                    <p>{p.outcome}</p>
                  </div>
                </div>

                <div className="case-tech" style={{ marginTop: '12px', color: '#9CA3AF' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', marginRight: '8px' }}>
                    TECH STACK:
                  </span>
                  {p.tech}
                </div>

                <div className="case-actions" style={{ marginTop: '20px' }}>
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-[#00D9A6] transition-colors">
                      <FaGithub /> View source ↗
                    </a>
                  ) : (
                    <span style={{ color: '#9CA3AF' }}>
                      <FaLock /> Private project
                    </span>
                  )}
                </div>
              </div>

              {/* Styled Placeholder for Case Mockup Panel */}
              <div className="case-visual" style={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: '8px' }}>
                <div className="visual-index">CASE / {p.n}</div>
                <div className="visual-word">{p.title}</div>
                <div style={{ color: '#4B5563', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 2 }}>
                  [ Mockup Coming Soon ]
                </div>
                <div className="visual-line" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
