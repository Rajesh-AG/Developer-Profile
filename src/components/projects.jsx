import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'TenantGuard — Intelligent Tenancy System',
    badges: [
      { label: 'Final Year Project 2026', color: '#FFA000' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'AI-powered property inspection and tenant verification platform using computer vision for room classification and on-device defect detection. The system combines cloud and edge processing for practical property inspection workflows.',
    tech: [
      'Flutter',
      'Python',
      'PyTorch',
      'TFLite',
      'Flask',
      'Docker',
      'AWS S3',
    ],
    github: 'https://github.com/Kingfurious/tenantguard-frontend',
    live: null,
    isTeam: true,
  },

  {
    id: 2,
    title: 'Student Mark Analysis System',
    badges: [
      { label: 'Full Stack', color: '#0F9B8E' },
      { label: 'Solo Project', color: '#6C63FF' },
    ],
    description:
      'Full-stack role-based student management system for Admin, Teacher, and Student workflows. Teachers can manage attendance and marks, while students can access academic results and generate reports.',
    tech: ['React', 'Flask', 'SQLite', 'REST APIs', 'Git'],
    github: 'https://github.com/Rajesh-AG/SMAS',
    live: null,
    isTeam: false,
  },

  {
    id: 3,
    title: 'Expense Tracker App',
    badges: [
      { label: 'In Progress', color: '#0F9B8E' },
      { label: 'Solo Project', color: '#6C63FF' },
    ],
    description:
      'Cross-platform expense management application for recording, categorising, and monitoring personal transactions. Includes user-specific data, visual expense summaries, budget tracking, and real-time cloud synchronisation.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'FCM'],
    github: 'https://github.com/Rajesh-AG/expense_tracker',
    live: null,
    isTeam: false,
  },

  {
    id: 4,
    title: 'SIH — Drone-based ET Sensing System',
    badges: [
      { label: 'Smart India Hackathon 2024', color: '#B45309' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'Collaborative hackathon project focused on intelligent irrigation management using drone-based sensing and real-time environmental data to support efficient agricultural water usage.',
    tech: ['Drones', 'IoT', 'Sensor Fusion', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },

  {
    id: 5,
    title: 'SIH — Smart Tourist Safety System',
    badges: [
      { label: 'Smart India Hackathon 2025', color: '#B45309' },
      { label: 'Team Project', color: '#6C63FF' },
    ],
    description:
      'Collaborative hackathon solution designed to improve tourist safety through location-based monitoring, digital identity, and real-time incident alert mechanisms.',
    tech: ['AI/ML', 'Geo-fencing', 'Blockchain', 'Python'],
    github: null,
    live: null,
    isTeam: true,
  },
]

const ProjectCard = ({ project }) => (
  <div
    className="flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:border-[#6C63FF]/40 hover:-translate-y-1 group"
    style={{
      background: '#13151F',
      borderColor: 'rgba(108,99,255,0.12)',
    }}
  >
    {/* Badges */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.badges.map((badge) => (
        <span
          key={badge.label}
          className="px-3 py-1 text-[10px] font-semibold rounded-full"
          style={{
            background: `${badge.color}22`,
            color: badge.color,
            border: `1px solid ${badge.color}44`,
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
          className="flex items-center gap-1 px-3 py-1 text-[10px] font-semibold rounded-full"
          style={{
            background: 'rgba(167,139,250,0.1)',
            color: '#A78BFA',
            border: '1px solid rgba(167,139,250,0.25)',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          <HiOutlineUserGroup size={11} />
          Team
        </span>
      )}
    </div>

    {/* Title */}
    <h3
      className="text-[#EEEEF2] text-base font-semibold mb-3 leading-snug group-hover:text-[#A78BFA] transition-colors duration-300"
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
      }}
    >
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-[#C8CADE] text-sm leading-relaxed mb-5 flex-1 opacity-80">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.map((technology) => (
        <span
          key={technology}
          className="px-3 py-1 text-[10px] font-medium rounded-full"
          style={{
            background: 'rgba(108,99,255,0.08)',
            color: '#A78BFA',
            border: '1px solid rgba(108,99,255,0.2)',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {technology}
        </span>
      ))}
    </div>

    {/* Links */}
    <div
      className="flex items-center gap-4 mt-auto pt-3 border-t"
      style={{
        borderColor: 'rgba(108,99,255,0.1)',
      }}
    >
      {/* GitHub */}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-medium text-[#C8CADE] hover:text-[#6C63FF] transition-colors duration-200"
        >
          <FaGithub size={15} />
          View Code
        </a>
      ) : (
        <span
          className="flex items-center gap-2 text-xs font-medium"
          style={{
            color: 'rgba(200,202,222,0.3)',
          }}
        >
          <FaGithub size={15} />
          Private / No Repo
        </span>
      )}

      {/* Live Demo */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-medium text-[#C8CADE] hover:text-[#6C63FF] transition-colors duration-200"
        >
          <FaExternalLinkAlt size={12} />
          Live Demo
        </a>
      )}
    </div>
  </div>
)

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{
        background: '#0C0D14',
      }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#6C63FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What I&apos;ve Built
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Projects
          </h2>

          <div
            className="w-12 h-[3px] rounded-full"
            style={{
              background: '#6C63FF',
            }}
          />
        </div>

        {/* LogicQ Note */}
        <div
          className="flex items-start gap-3 p-4 rounded-xl mb-12 text-sm"
          style={{
            background: 'rgba(108,99,255,0.06)',
            border: '1px solid rgba(108,99,255,0.15)',
            color: '#A78BFA',
          }}
        >
          <span className="mt-0.5 text-base">💼</span>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            <span className="font-semibold text-[#EEEEF2]">
              LogicQ — Ed-Tech Platform
            </span>{' '}
            (internship project at Innolift) is featured in the Experience
            section below.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects