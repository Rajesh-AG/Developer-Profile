import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiLocationMarker, HiAcademicCap, HiCalendar } from 'react-icons/hi'

const PRIMARY_EDUCATION = {
  period: '2022 – 2026',
  level: 'B.Tech Information Technology (Honours)',
  institution: 'Adhiparasakthi Engineering College',
  location: 'Melmaruvathur',
  board: 'Anna University',
  score: '8.5 CGPA',
  extra: 'First Class with Distinction',
}

const SECONDARY_EDUCATION = [
  {
    id: 2,
    period: '2021 – 2022',
    level: 'Higher Secondary (12th)',
    institution: 'PRG Higher Secondary School',
    location: 'Kattumannarkoil',
    board: 'State Board',
    score: '85%',
  },
  {
    id: 3,
    period: '2019 – 2020',
    level: 'Secondary School (10th)',
    institution: 'PRG Higher Secondary School',
    location: 'Kattumannarkoil',
    board: 'State Board',
    score: '89.2%',
  },
]

const EducationTimeline = () => {
  const primaryRef = useScrollReveal(0)
  const secondaryRef = useScrollReveal(60)

  return (
    <section id="education" className="section bg-[var(--bg-elevated)]" aria-labelledby="education-heading">
      <div className="section-inner px-6">
        <header className="section-header section-header--center">
          <p className="eyebrow">Education</p>
          <h2 id="education-heading" className="section-title">Academic background</h2>
          <div className="section-accent" />
        </header>

        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Primary Featured Degree Card */}
          <article
            ref={primaryRef}
            className="card p-6 sm:p-8 border-indigo-500/20 bg-indigo-500/[0.01] hover:border-indigo-500/35 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400">
                    <HiAcademicCap size={18} />
                  </span>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                    Featured Degree
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-bright)] tracking-tight font-display">
                  {PRIMARY_EDUCATION.level}
                </h3>
                
                <p className="text-sm font-medium text-[var(--text-bright)] mt-1">
                  {PRIMARY_EDUCATION.institution}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[var(--text-muted)] pt-1">
                  <span className="flex items-center gap-1">
                    <HiLocationMarker size={14} aria-hidden="true" />
                    {PRIMARY_EDUCATION.location}
                  </span>
                  <span>·</span>
                  <span>{PRIMARY_EDUCATION.board}</span>
                </div>
              </div>

              {/* Score & Extra Badges */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 self-start md:self-auto min-w-[160px] md:items-end">
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] bg-[var(--surface-2)] border border-[var(--border)] px-2.5 py-1.5 rounded-md self-start md:self-auto">
                  <HiCalendar size={14} aria-hidden="true" />
                  <time>{PRIMARY_EDUCATION.period}</time>
                </div>
                
                <div className="space-y-2 text-left md:text-right">
                  <div className="inline-block text-xl font-extrabold text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1 rounded">
                    {PRIMARY_EDUCATION.score}
                  </div>
                  {PRIMARY_EDUCATION.extra && (
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)]">
                      {PRIMARY_EDUCATION.extra}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Secondary Education - Compact layout */}
          <div ref={secondaryRef} className="pt-6 border-t border-[var(--border)]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-5 text-center">
              Prior Education
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECONDARY_EDUCATION.map((item) => (
                <div
                  key={item.id}
                  className="card p-5 bg-[var(--surface)] border border-[var(--border)] hover:border-white/[0.04] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        {item.period}
                      </span>
                      <span className="tag text-[10px] px-2 py-0.5 font-bold bg-white/[0.03] text-[var(--text-muted)] border-none">
                        {item.score}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-[var(--text-bright)] leading-snug">
                      {item.level}
                    </h4>
                    
                    <p className="text-xs text-[var(--text-muted)] mt-1.5">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-3">
                    <HiLocationMarker size={10} aria-hidden="true" />
                    {item.location} · {item.board}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EducationTimeline
