import { useMemo, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  SiFlutter, SiDart, SiFirebase, SiReact,
  SiFigma, SiGit, SiGithub,
  SiHtml5, SiJavascript,
  SiPython, SiMysql, SiPostgresql, SiFlask,
  SiAndroidstudio, SiNumpy, SiPandas,
} from 'react-icons/si'
import { FaCss3Alt, FaChartLine, FaCode } from 'react-icons/fa'

const skillCategories = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: <SiFlutter size={20} />, color: '#54C5F8' },
      { name: 'Dart', icon: <SiDart size={20} />, color: '#00B4AB' },
      { name: 'Firebase', icon: <SiFirebase size={20} />, color: '#FFA000' },
      { name: 'Android Studio', icon: <SiAndroidstudio size={20} />, color: '#3DDC84' },
    ],
  },
  {
    category: 'Frontend & UI/UX',
    skills: [
      { name: 'Figma', icon: <SiFigma size={20} />, color: '#F24E1E' },
      { name: 'React', icon: <SiReact size={20} />, color: '#61DAFB' },
      { name: 'HTML5', icon: <SiHtml5 size={20} />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt size={20} />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript size={20} />, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Python', icon: <SiPython size={20} />, color: '#3776AB' },
      { name: 'Flask', icon: <SiFlask size={20} />, color: '#B1B1B3' },
      { name: 'MySQL', icon: <SiMysql size={20} />, color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, color: '#336791' },
      { name: 'NumPy', icon: <SiNumpy size={20} />, color: '#4DABCF' },
      { name: 'Pandas', icon: <SiPandas size={20} />, color: '#E70488' },
      { name: 'Matplotlib', icon: <FaChartLine size={18} />, color: '#11557C' },
    ],
  },
  {
    category: 'Tools & Workflows',
    skills: [
      { name: 'Git', icon: <SiGit size={20} />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub size={20} />, color: '#C9C9CA' },
      { name: 'VS Code', icon: <FaCode size={20} />, color: '#007ACC' },
    ],
  },
]

const competencies = [
  'Clean Architecture', 'MVVM', 'State Management', 'Responsive Design',
  'API Integration', 'Performance Tuning', 'Agile/Scrum', 'Technical Mentoring',
]

const SkillItem = ({ name, icon, color, index }) => {
  const ref = useScrollReveal(index * 30)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card flex items-center gap-3 p-3.5 hover:border-indigo-500/20 transition-all duration-300 select-none"
    >
      <span
        style={{ color: hovered ? color : undefined }}
        className={`flex-shrink-0 transition-colors duration-300 ${hovered ? '' : 'text-[var(--text-muted)]'}`}
      >
        {icon}
      </span>
      <span className="font-[family-name:var(--font-display)] text-xs font-semibold text-[var(--text-bright)]">
        {name}
      </span>
    </div>
  )
}

const Skills = () => {
  const staggered = useMemo(() => {
    let index = 0
    return skillCategories.map((group) => ({
      ...group,
      skills: group.skills.map((skill) => ({ ...skill, staggerIndex: index++ })),
    }))
  }, [])

  const compRef = useScrollReveal(0)

  return (
    <section id="skills" className="section bg-[var(--bg)]">
      <div className="section-inner px-6">
        <header className="section-header section-header--center">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle mx-auto">
            Tools and frameworks from my production projects, internships, and mentoring work.
          </p>
          <div className="section-accent" />
        </header>

        {/* 2x2 Grid of Skill Categories for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {staggered.map((group) => (
            <div key={group.category} className="space-y-3.5">
              <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] pl-1">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} index={skill.staggerIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Row */}
        <div ref={compRef} className="mt-16 pt-10 border-t border-[var(--border)] max-w-3xl mx-auto">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-5 text-center">
            Core competencies
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {competencies.map((skill) => (
              <span
                key={skill}
                className="pill text-xs px-3 py-1 bg-white/[0.01] hover:bg-white/[0.03] transition-colors border border-[var(--border)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
