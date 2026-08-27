import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { FaCheckCircle } from 'react-icons/fa'

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

const Experience = () => {
  const ref = useScrollReveal(0)

  return (
    <section id="experience" className="section bg-[var(--bg)]" aria-labelledby="experience-heading">
      <div className="section-inner px-6">
        <header className="section-header">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading" className="section-title">Work experience</h2>
          <div className="section-accent" />
        </header>

        <div ref={ref} className="max-w-4xl mx-auto">
          <article className="card p-6 sm:p-8 hover:border-indigo-500/20 transition-all duration-300">
            {/* Header: Role, Duration, Company */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                  Internship
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-bright)] tracking-tight">
                  Flutter Mobile App Developer
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-muted)] mt-1">
                  <span className="flex items-center gap-1.5 text-indigo-400/90 font-medium">
                    <HiOfficeBuilding size={16} aria-hidden="true" />
                    Innolift Ventures
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker size={16} aria-hidden="true" />
                    Chennai
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] bg-[var(--surface-2)] border border-[var(--border)] px-3 py-1.5 rounded-md self-start md:self-auto">
                <HiCalendar size={14} aria-hidden="true" />
                <time dateTime="2025-01">Jan 2025</time>
                <span aria-hidden="true"> – </span>
                <time dateTime="2025-12">Dec 2025</time>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="h-px bg-[var(--border)] my-5" role="separator" />

            {/* Core Project Highlight */}
            <div className="p-4 sm:p-5 rounded-md bg-indigo-500/[0.02] border border-indigo-500/5 mb-6">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                Featured Project
              </p>
              <p className="text-sm font-bold text-[var(--text-bright)] mb-1">
                LogicQ — Ed-Tech Platform
              </p>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Production app on iOS &amp; Android · 3-tier role system · 7+ course domains · Real-time Firebase sync
              </p>
            </div>

            {/* Achievements List */}
            <div className="space-y-4 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Key Contributions &amp; Achievements
              </p>
              <ul className="space-y-3 list-none p-0" role="list">
                {ACHIEVEMENTS.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1 flex-shrink-0" aria-hidden="true">
                      <FaCheckCircle size={12} />
                    </span>
                    <span className="text-sm text-[var(--text)] leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Used */}
            <div className="pt-5 border-t border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Tech Stack
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0" role="list">
                {TECH_STACK.map((item) => (
                  <li
                    key={item}
                    className="pill text-xs px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
