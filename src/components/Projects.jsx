import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'

const projectsData = [
  {
    id: 0,
    title: 'LogicQ — Enterprise Ed-Tech Platform',
    category: 'Flutter',
    badges: [
      { label: 'Featured Project', color: '#684BFF' },
      { label: 'Production App', color: '#10B981' },
      { label: 'Team Project', color: '#A78BFA' },
    ],
    description:
      'Delivers a cross-platform course engine (iOS & Android) featuring a 3-tier role-based access system (Student, Mentor, Institution) integrated with Provider state management and real-time Firestore sync. Shipped automated grading engines and push alerts via FCM, supporting 7+ course domains in live production.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'RESTful APIs', 'FCM'],
    github: null,
    live: null,
    isTeam: true,
    isFeatured: true,
  },
  {
    id: 1,
    title: 'TenantGuard — AI-Powered Tenancy Verification Platform',
    category: 'Flutter',
    badges: [
      { label: 'Final Year Project', color: '#FFA000' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'Automates rental inspections using mobile computer vision models (TFLite) for room classification and edge defect detection. Connects a Flutter frontend to a Dockerized Flask backend, routing cloud uploads securely to AWS S3 buckets.',
    tech: ['Flutter', 'Python', 'PyTorch', 'TFLite', 'Flask', 'Docker', 'AWS S3'],
    github: 'https://github.com/Kingfurious/tenantguard-frontend',
    live: null,
    isTeam: true,
  },
  {
    id: 2,
    title: 'SMAS — Institutional Academic Analytics Platform',
    category: 'Full Stack',
    badges: [
      { label: 'Full Stack', color: '#0F9B8E' },
      { label: 'Solo Project', color: '#6C63FF' },
    ],
    description:
      'Manages academic performance indexes and institutional grading rosters via role-based Flask APIs and SQLite databases. Features responsive dashboards in React for attendance forecasts and student report compiles.',
    tech: ['React', 'Flask', 'SQLite', 'REST APIs', 'Git'],
    github: 'https://github.com/Rajesh-AG/SMAS',
    live: null,
    isTeam: false,
  },
  {
    id: 3,
    title: 'Fintrack — Offline-First Expense Manager',
    category: 'Flutter',
    badges: [
      { label: 'In Progress', color: '#0F9B8E' },
      { label: 'Solo Project', color: '#6C63FF' },
    ],
    description:
      'Logs and analyzes personal financial transactions using offline-first local cache synchronization and real-time Firebase DB structures. Implements custom data visualization charts in Dart alongside state-driven budget limits.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'FCM'],
    github: 'https://github.com/Rajesh-AG/expense_tracker',
    live: null,
    isTeam: false,
  },
  {
    id: 4,
    title: 'AgroSense — Drone Evapotranspiration IoT Grid',
    category: 'Hackathon',
    badges: [
      { label: 'Smart India Hackathon 2024', color: '#B45309' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'Optimizes agricultural irrigation schedules by analyzing environmental evapotranspiration indexes via sensor fusion nodes and telemetry. Combines hardware sensors and Python data models to calculate spatial water requirements.',
    tech: ['Drones', 'IoT', 'Sensor Fusion', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },
  {
    id: 5,
    title: 'GeoGuard — Blockchain & AI Tourist Safety Network',
    category: 'Hackathon',
    badges: [
      { label: 'Smart India Hackathon 2025', color: '#B45309' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'Secures tourist identities and broadcasts geofenced emergency alerts via decentralized blockchain ledger registries and geocoordinate mapping. Routes automated distress dispatch calls using background thread location feeds.',
    tech: ['AI/ML', 'Geo-fencing', 'Blockchain', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },
]

const ProjectCard = ({ project }) => {
  const isPrivate = !project.github
  
  // Decide accent border top color based on primary tech/category
  const getAccentColor = () => {
    if (project.category === 'Flutter') return '#684BFF' // purple
    if (project.category === 'Full Stack') return '#3B82F6' // blue
    return '#10B981' // hackathon / green
  }

  const accentColor = getAccentColor()

  return (
    <div
      className={`flex flex-col p-6 rounded-xl border bg-[#13151F] border-[#6C63FF]/12 transition-all duration-300 hover:-translate-y-1 hover:border-[#684BFF]/40 hover:shadow-xl hover:shadow-[#684BFF]/5 group ${
        isPrivate ? 'opacity-[0.7] hover:opacity-95' : ''
      } ${
        project.isFeatured ? 'col-span-1 lg:col-span-3 lg:flex-row lg:gap-8 lg:items-center' : ''
      }`}
      style={{
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      {/* Visual content grouping wrapper for featured card horizontal layout */}
      <div className={`flex-1 flex flex-col h-full ${project.isFeatured ? 'lg:justify-between' : ''}`}>
        
        {/* Tags row at top */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Featured Badge */}
          {project.isFeatured && (
            <span
              className="px-3 py-1 text-[10px] font-bold rounded-full bg-[#684BFF]/20 text-[#A78BFA] border border-[#684BFF]/35 uppercase tracking-wide"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              ⭐ Featured
            </span>
          )}

          {project.badges.map((badge) => (
            <span
              key={badge.label}
              className="px-3 py-1 text-[10px] font-semibold rounded-full"
              style={{
                background: `${badge.color}15`,
                color: badge.color,
                border: `1px solid ${badge.color}35`,
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              {badge.label}
            </span>
          ))}

          {/* Team Indicator */}
          {project.isTeam && (
            <span
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold rounded-full bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/25"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <HiOutlineUserGroup size={11} />
              Team
            </span>
          )}

          {/* Private Repository Indicator */}
          {isPrivate && (
            <span
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold rounded-full bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/25"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <FaLock size={9} />
              Private Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-[#EEEEF2] text-[18px] font-bold mb-3 leading-snug group-hover:text-[#A78BFA] transition-colors duration-300 text-left"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#9CA3AF] text-[14px] leading-relaxed mb-5 text-left">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] font-semibold rounded-full bg-[#6C63FF]/5 text-[#A78BFA] border border-[#6C63FF]/15"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#6C63FF]/10">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-[#C8CADE] hover:text-[#684BFF] transition-colors duration-200"
            >
              <FaGithub size={15} />
              View Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#C8CADE]/30 cursor-default">
              <FaLock size={11} />
              Private Repo
            </span>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-[#C8CADE] hover:text-[#684BFF] transition-colors duration-200"
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

const ProjectCardWrapper = ({ project, index }) => {
  const revealRef = useScrollReveal(index * 100)

  return (
    <div
      ref={revealRef}
      className={project.isFeatured ? 'col-span-1 lg:col-span-3' : ''}
    >
      <ProjectCard project={project} />
    </div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')

  // Filter logic
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true
    return project.category === filter
  })

  // Sort featured project to top
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.isFeatured) return -1
    if (b.isFeatured) return 1
    return 0
  })

  const tabs = ['All', 'Flutter', 'Full Stack', 'Hackathon']

  return (
    <section
      id="projects"
      className="py-12 md:py-16 px-6 bg-[#0C0D14]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 text-[#684BFF]">
            What I&apos;ve Built
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Projects
          </h2>

          <div className="w-12 h-[3px] rounded-full bg-[#684BFF]" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {tabs.map((tab) => {
            const isActive = filter === tab
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#684BFF] text-white shadow-md shadow-[#684BFF]/25 scale-105'
                    : 'bg-transparent text-[#C8CADE] border border-[#6C63FF]/20 hover:border-[#684BFF]/50 hover:bg-[#684BFF]/5'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, idx) => (
            <ProjectCardWrapper
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* View All on GitHub Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/Rajesh-AG"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-[#EEEEF2] bg-transparent border border-[#684BFF]/50 hover:bg-[#684BFF]/10 hover:border-[#684BFF] transition-all duration-300 hover:scale-[1.03]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <FaGithub size={16} />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects