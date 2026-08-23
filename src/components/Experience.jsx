import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'

// ─── Data ────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  'Flutter', 'Dart', 'Firebase', 'Provider',
  'RESTful APIs', 'FCM', 'CI/CD',
]

const ACHIEVEMENTS = [
  'Engineered LogicQ — a production cross-platform ed-tech app (iOS & Android) with Provider state management across 7+ course domains.',
  'Built a 3-tier role system — Student, Mentor, Institution — each with dedicated dashboards, permissions, and real-time data exchange via RESTful APIs.',
  'Implemented Firebase Auth, Firestore, and FCM push notifications for secure login, zero-downtime sync, and instant alerts; built a reusable custom widget library.',
  'Integrated in-app test engine with automated grading and instant performance analytics; optimised widget tree via lazy loading for low-end Android devices.',
  'Shipped all features within agile sprints — daily standups, sprint planning, and code reviews.',
]

const PROJECT_HIGHLIGHT = {
  emoji: '🚀',
  name: 'LogicQ — Ed-Tech Platform',
  tags: [
    'Production app on iOS & Android',
    '3-tier role system',
    '7+ course domains',
    'Real-time Firebase sync',
  ],
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeader = () => (
  <div className="mb-10 md:mb-12">
    <p className="experience-eyebrow">Work Experience</p>
    <h2 className="experience-heading">Experience</h2>
    <div className="experience-accent-bar" />
  </div>
)

const StatusBadge = ({ label, variant = 'default' }) => (
  <span className={`experience-badge experience-badge--${variant}`}>
    {label}
  </span>
)

const ProjectHighlight = ({ emoji, name, tags }) => (
  <div className="experience-project-highlight">
    <span className="experience-project-emoji" aria-hidden="true">
      {emoji}
    </span>
    <p className="experience-project-text">
      <span className="experience-project-name">{name} </span>
      <span className="experience-project-tags">
        {tags.join(' · ')}
      </span>
    </p>
  </div>
)

const AchievementList = ({ items }) => (
  <ul className="experience-achievements" role="list">
    {items.map((text, i) => (
      <li key={i} className="experience-achievement-item">
        <span className="experience-achievement-dot" aria-hidden="true" />
        <span className="experience-achievement-text">{text}</span>
      </li>
    ))}
  </ul>
)

const TechStack = ({ tech }) => (
  <div className="experience-tech-wrapper">
    <p className="experience-tech-label">Tech Used</p>
    <ul className="experience-tech-list" role="list">
      {tech.map((item) => (
        <li key={item} className="experience-tech-pill">{item}</li>
      ))}
    </ul>
  </div>
)

const TimelineDot = () => (
  <div className="experience-timeline-dot" aria-hidden="true">
    <div className="experience-timeline-dot-inner" />
  </div>
)

// ─── Main Component ───────────────────────────────────────────────────────────

const Experience = () => {
  return (
    <>
      <style>{styles}</style>

      <section id="experience" className="experience-section">
        <div className="experience-container">
          <SectionHeader />

          {/* Timeline */}
          <div className="experience-timeline">
            <div className="experience-timeline-line" aria-hidden="true" />

            <div className="experience-timeline-entry">
              <TimelineDot />

              {/* Card */}
              <article className="experience-card">

                {/* Card Header */}
                <header className="experience-card-header">
                  <div className="experience-card-meta">
                    <div className="experience-badges">
                      <StatusBadge label="Internship" variant="default" />
                    </div>
                    <h3 className="experience-role-title">
                      Flutter Mobile App Developer
                    </h3>
                    <div className="experience-company-row">
                      <span className="experience-company-name">
                        <HiOfficeBuilding size={14} aria-hidden="true" />
                        Innolift Ventures
                      </span>
                      <span className="experience-location">
                        <HiLocationMarker size={14} aria-hidden="true" />
                        Chennai
                      </span>
                    </div>
                  </div>

                  <div className="experience-duration">
                    <HiCalendar
                      size={14}
                      className="experience-duration-icon"
                      aria-hidden="true"
                    />
                    <time dateTime="2025-01">Jan 2025</time>
                    <span aria-label="to Dec 2025">– Dec 2025</span>
                  </div>
                </header>

                {/* Divider */}
                <div className="experience-divider" role="separator" />

                {/* Project highlight */}
                <ProjectHighlight {...PROJECT_HIGHLIGHT} />

                {/* Achievements */}
                <AchievementList items={ACHIEVEMENTS} />

                {/* Tech stack */}
                <TechStack tech={TECH_STACK} />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const PURPLE       = 'var(--accent)'
const PURPLE_LIGHT = 'var(--accent-soft)'
const BG_SECTION   = 'var(--bg)'
const BG_CARD      = 'var(--surface)'
const TEXT_PRIMARY = 'var(--text-bright)'
const TEXT_MUTED   = 'var(--text)'
const TEAL         = '#0F9B8E'
const FONT         = "var(--font-display)"

const styles = `
  /* ── Section ── */
  .experience-section {
    padding: 3rem 1.5rem;
    background: ${BG_SECTION};
  }

  @media (min-width: 768px) {
    .experience-section {
      padding: 4rem 1.5rem;
    }
  }

  .experience-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ── Header ── */
  .experience-eyebrow {
    font-family: ${FONT};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${PURPLE};
    margin-bottom: 0.75rem;
  }

  .experience-heading {
    font-family: ${FONT};
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 700;
    color: ${TEXT_PRIMARY};
    margin-bottom: 1rem;
  }

  .experience-accent-bar {
    width: 3rem;
    height: 3px;
    border-radius: 9999px;
    background: ${PURPLE};
  }

  /* ── Timeline ── */
  .experience-timeline {
    position: relative;
  }

  .experience-timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    width: 1px;
    background: rgba(108, 99, 255, 0.2);
    display: none;
  }

  @media (min-width: 640px) {
    .experience-timeline-line { display: block; }
  }

  .experience-timeline-entry {
    position: relative;
  }

  @media (min-width: 640px) {
    .experience-timeline-entry { padding-left: 3.5rem; }
  }

  /* ── Timeline dot ── */
  .experience-timeline-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid ${PURPLE};
    background: ${BG_SECTION};
    display: none;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 640px) {
    .experience-timeline-dot { display: flex; }
  }

  .experience-timeline-dot-inner {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background: ${PURPLE};
  }

  /* ── Card ── */
  .experience-card {
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid rgba(108, 99, 255, 0.15);
    background: ${BG_CARD};
    transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
  }

  .experience-card:hover {
    transform: translateY(-4px);
    border-color: rgba(108, 99, 255, 0.35);
    box-shadow: 0 0 0 1px rgba(108, 99, 255, 0.08),
                0 8px 32px rgba(108, 99, 255, 0.06);
  }

  /* ── Card header ── */
  .experience-card-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 640px) {
    .experience-card-header {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  /* ── Badges ── */
  .experience-badges {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .experience-badge {
    font-family: ${FONT};
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }

  .experience-badge--default {
    background: rgba(108, 99, 255, 0.12);
    color: ${PURPLE_LIGHT};
    border: 1px solid rgba(108, 99, 255, 0.25);
  }

  .experience-badge--active {
    background: rgba(15, 155, 142, 0.12);
    color: ${TEAL};
    border: 1px solid rgba(15, 155, 142, 0.25);
  }

  /* ── Role & company ── */
  .experience-role-title {
    font-family: ${FONT};
    font-size: 1.125rem;
    font-weight: 700;
    color: ${TEXT_PRIMARY};
    line-height: 1.3;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  .experience-company-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .experience-company-name {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${PURPLE_LIGHT};
  }

  .experience-location {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: ${TEXT_MUTED};
    opacity: 0.6;
  }

  /* ── Duration ── */
  .experience-duration {
    font-family: ${FONT};
    font-size: 0.875rem;
    color: ${TEXT_MUTED};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    background: rgba(108, 99, 255, 0.06);
    border: 1px solid rgba(108, 99, 255, 0.15);
    flex-shrink: 0;
    align-self: flex-start;
    white-space: nowrap;
  }

  .experience-duration-icon {
    color: ${PURPLE};
  }

  /* ── Divider ── */
  .experience-divider {
    width: 100%;
    height: 1px;
    background: rgba(108, 99, 255, 0.1);
    margin-bottom: 1.5rem;
  }

  /* ── Project highlight ── */
  .experience-project-highlight {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background: rgba(108, 99, 255, 0.06);
    border: 1px solid rgba(108, 99, 255, 0.12);
    margin-bottom: 1.5rem;
  }

  .experience-project-emoji {
    font-size: 1.125rem;
    margin-top: 0.125rem;
    flex-shrink: 0;
  }

  .experience-project-text {
    font-family: ${FONT};
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .experience-project-name {
    color: ${TEXT_PRIMARY};
    font-weight: 600;
  }

  .experience-project-tags {
    color: ${TEXT_MUTED};
    opacity: 0.8;
  }

  /* ── Achievements ── */
  .experience-achievements {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.75rem;
    list-style: none;
    padding: 0;
  }

  .experience-achievement-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .experience-achievement-dot {
    flex-shrink: 0;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background: ${PURPLE};
    margin-top: 0.5rem;
  }

  .experience-achievement-text {
    font-size: 0.875rem;
    line-height: 1.75;
    color: ${TEXT_MUTED};
    opacity: 0.85;
  }

  /* ── Tech stack ── */
  .experience-tech-wrapper {
    padding-top: 1.25rem;
    border-top: 1px solid rgba(108, 99, 255, 0.1);
  }

  .experience-tech-label {
    font-family: ${FONT};
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${TEXT_PRIMARY};
    margin-bottom: 0.75rem;
  }

  .experience-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }

  .experience-tech-pill {
    font-family: ${FONT};
    font-size: 0.6875rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    background: rgba(108, 99, 255, 0.08);
    color: ${PURPLE_LIGHT};
    border: 1px solid rgba(108, 99, 255, 0.2);
    transition: transform 175ms ease-out, background 175ms ease-out, border-color 175ms ease-out, box-shadow 175ms ease-out;
  }

  .experience-tech-pill:hover {
    transform: scale(1.02);
    background: rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.35);
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.15);
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .experience-card { transition: none; }
    .experience-tech-pill { transition: none; }
  }
`

export default Experience