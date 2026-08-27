import { useState, useMemo } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'

const projectsData = [
  {
    id: 0,
    title: 'LogicQ — Enterprise Ed-Tech Platform',
    category: 'Flutter',
    badges: ['Production App', 'Team Project'],
    description:
      'Cross-platform course engine (iOS & Android) with a 3-tier role-based access system, Provider state management, and real-time Firestore sync. Features automated grading and FCM push notifications across 7+ course domains.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'RESTful APIs', 'FCM'],
    github: null,
    live: null,
    isTeam: true,
    isFeatured: true,
  },
  {
    id: 1,
    title: 'TenantGuard — AI Tenancy Verification',
    category: 'Flutter',
    badges: ['Final Year Project', 'Team Project'],
    description:
      'Automates rental inspections using TFLite computer vision for room classification and defect detection. Flutter frontend connected to a Dockerized Flask backend with AWS S3 uploads.',
    tech: ['Flutter', 'Python', 'PyTorch', 'TFLite', 'Flask', 'Docker', 'AWS S3'],
    github: 'https://github.com/Kingfurious/tenantguard-frontend',
    live: null,
    isTeam: true,
  },
  {
    id: 2,
    title: 'SMAS — Academic Analytics Platform',
    category: 'Full Stack',
    badges: ['Full Stack', 'Solo Project'],
    description:
      'Manages academic performance indexes and grading rosters via role-based Flask APIs and SQLite. React dashboards for attendance forecasts and student report generation.',
    tech: ['React', 'Flask', 'SQLite', 'REST APIs', 'Git'],
    github: 'https://github.com/Rajesh-AG/SMAS',
    live: null,
    isTeam: false,
  },
  {
    id: 3,
    title: 'Fintrack — Offline-First Expense Manager',
    category: 'Flutter',
    badges: ['In Progress', 'Solo Project'],
    description:
      'Personal finance tracker with offline-first local cache sync and Firebase realtime database. Custom Dart charts with state-driven budget limits.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'FCM'],
    github: 'https://github.com/Rajesh-AG/expense_tracker',
    live: null,
    isTeam: false,
  },
  {
    id: 4,
    title: 'AgroSense — IoT Irrigation Grid',
    category: 'Hackathon',
    badges: ['Smart India Hackathon 2024', 'Team Project'],
    description:
      'Optimizes agricultural irrigation by analyzing evapotranspiration indexes via sensor fusion nodes and telemetry, combining hardware sensors with Python data models.',
    tech: ['Drones', 'IoT', 'Sensor Fusion', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },
  {
    id: 5,
    title: 'GeoGuard — Tourist Safety Network',
    category: 'Hackathon',
    badges: ['Smart India Hackathon 2025', 'Team Project'],
    description:
      'Secures tourist identities and broadcasts geofenced emergency alerts via blockchain ledger registries and geocoordinate mapping with automated distress dispatch.',
    tech: ['AI/ML', 'Geo-fencing', 'Blockchain', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },
]

const ProjectCard = ({ project }) => {
  const isPrivate = !project.github

  if (project.isFeatured) {
    return (
      <article
        className="card h-full p-6 sm:p-8 border-indigo-500/20 bg-indigo-500/[0.01] hover:border-indigo-500/35 transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 h-full">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="tag bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-bold">Featured Project</span>
                {project.badges.map((label) => (
                  <span key={label} className="tag">{label}</span>
                ))}
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[var(--text-bright)] mb-3 leading-snug tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--text)] leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)] mt-auto">
              <span className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
                <FaLock size={10} aria-hidden="true" className="opacity-80" />
                Private Repository
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-6 lg:pt-0 lg:pl-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Key Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-auto">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-[var(--text-muted)] font-medium">
                  Deployed internally for institution and institutional partners.
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className="card flex flex-col h-full p-5 sm:p-6 hover:border-indigo-500/10 transition-all duration-300"
    >
      <div className="flex flex-wrap items-center gap-2 mb-3.5">
        {project.badges.slice(0, 1).map((label) => (
          <span key={label} className="tag">{label}</span>
        ))}
        {project.isTeam && (
          <span className="tag flex items-center gap-1.5">
            <HiOutlineUserGroup size={11} aria-hidden="true" />
            Team
          </span>
        )}
        {isPrivate && (
          <span className="tag flex items-center gap-1.5 opacity-80">
            <FaLock size={8} aria-hidden="true" />
            Private
          </span>
        )}
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-[var(--text-bright)] mb-2 leading-snug tracking-tight">
        {project.title}
      </h3>

      <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="pill text-[11px] py-0.5 px-2">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-[var(--border)] mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            <FaGithub size={14} aria-hidden="true" />
            View Source
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)] opacity-50">
            <FaLock size={10} aria-hidden="true" />
            Private repo
          </span>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            <FaExternalLinkAlt size={10} aria-hidden="true" />
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}

const ProjectCardWrapper = ({ project, index }) => {
  const ref = useScrollReveal(index * 60)
  return (
    <div ref={ref} className={project.isFeatured ? 'sm:col-span-2' : ''}>
      <ProjectCard project={project} />
    </div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const tabs = ['All', 'Flutter', 'Full Stack', 'Hackathon']

  const filtered = useMemo(() => {
    return projectsData.filter((p) => filter === 'All' || p.category === filter)
  }, [filter])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (a.isFeatured) return -1
      if (b.isFeatured) return 1
      return 0
    })
  }, [filtered])

  return (
    <section id="projects" className="section bg-[var(--bg-elevated)]">
      <div className="section-inner px-6">
        <header className="section-header section-header--center">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle mx-auto">
            Production apps, academic projects, and hackathon builds from my development journey.
          </p>
          <div className="section-accent" />
        </header>

        {/* Tab filters with subtle border pill layout */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-[var(--surface)] border border-[var(--border)]" role="tablist" aria-label="Filter projects">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-md font-[family-name:var(--font-display)] text-xs font-medium transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-bright)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid layout with simple CSS fade-in keyframe animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-300">
          {sorted.map((project, idx) => (
            <ProjectCardWrapper key={`${filter}-${project.id}`} project={project} index={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Rajesh-AG"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FaGithub size={14} aria-hidden="true" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
