import { useState, useEffect } from 'react'
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
      { name: 'Flutter',        icon: <SiFlutter       size={28} />, color: '#54C5F8' },
      { name: 'Dart',           icon: <SiDart          size={28} />, color: '#00B4AB' },
      { name: 'Firebase',       icon: <SiFirebase      size={28} />, color: '#FFA000' },
      { name: 'Android Studio', icon: <SiAndroidstudio size={28} />, color: '#3DDC84' },
    ],
  },
  {
    category: 'UI/UX & Web',
    skills: [
      { name: 'Figma',      icon: <SiFigma      size={28} />, color: '#F24E1E' },
      { name: 'React',      icon: <SiReact      size={28} />, color: '#61DAFB' },
      { name: 'HTML5',      icon: <SiHtml5      size={28} />, color: '#E34F26' },
      { name: 'CSS3',       icon: <FaCss3Alt    size={28} />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript size={28} />, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Python',     icon: <SiPython     size={28} />, color: '#3776AB' },
      { name: 'Flask',      icon: <SiFlask      size={28} />, color: '#EEEEF2' },
      { name: 'MySQL',      icon: <SiMysql      size={28} />, color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} />, color: '#336791' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git',     icon: <SiGit              size={28} />, color: '#F05032' },
      { name: 'GitHub',  icon: <SiGithub           size={28} />, color: '#EEEEF2' },
      { name: 'VS Code', icon: <FaCode             size={28} />, color: '#007ACC' },
    ],
  },
]

const additionalSkills = [
  { name: 'NumPy',      icon: <SiNumpy     size={28} />, color: '#4DABCF' },
  { name: 'Pandas',     icon: <SiPandas    size={28} />, color: '#E70488' },
  { name: 'Matplotlib', icon: <FaChartLine size={26} />, color: '#11557C' },
]

const softSkills = [
  'Clean Architecture',
  'MVVM Pattern',
  'State Management',
  'Responsive Design',
  'API Integration',
  'Performance Optimization',
  'Code Review',
  'Technical Mentoring',
  'Problem Solving',
  'Agile Workflow',
]

const SkillCard = ({ name, icon, color }) => (
  <div
    className="flex flex-col items-center justify-center gap-3.5 p-6 rounded-xl border bg-[#13151F] border-[var(--border)] transition-all duration-200 hover:scale-105 hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/10 group cursor-default"
  >
    <div
      className="transition-transform duration-200 group-hover:scale-110"
      style={{ color }}
    >
      {icon}
    </div>
    <span
      className="text-[#C8CADE]/90 text-[13px] font-semibold text-center leading-tight"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      {name}
    </span>
  </div>
)

const SkillCardWrapper = ({ skill, index }) => {
  const revealRef = useScrollReveal(index * 50)

  useEffect(() => {
    if (revealRef.current) {
      revealRef.current.style.setProperty('--reveal-y', '16px')
    }
  }, [revealRef])

  return (
    <div ref={revealRef}>
      <SkillCard {...skill} />
    </div>
  )
}

const Skills = () => {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)

  // Calculate cumulative stagger indices for all skills to achieve uniform stagger fade-in across categories
  let globalSkillIndex = 0

  return (
    <section
      id="skills"
      className="py-12 md:py-16 px-6 bg-[#0C0D14]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 text-[#684BFF]">
            What I Work With
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-[3px] rounded-full" style={{ background: '#684BFF' }} />
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col">
          {skillCategories.map((group) => (
            <div key={group.category} className="flex flex-col">
              
              {/* Category Heading Row */}
              <div 
                className="text-xs tracking-[0.2em] uppercase font-semibold text-[#6C63FF] pb-3 mt-8 w-full text-left"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {group.category}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {group.skills.map((skill) => {
                  const currentIdx = globalSkillIndex
                  globalSkillIndex++
                  return (
                    <SkillCardWrapper
                      key={skill.name}
                      skill={skill}
                      index={currentIdx}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Additional Skills Section */}
        <div className="mt-4">
          <div className="border border-[#6C63FF]/15 rounded-xl overflow-hidden bg-[#13151F] transition-all duration-300">
            <button
              onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
              className="w-full flex items-center justify-between p-5 text-[#EEEEF2] text-sm font-bold hover:bg-[#684BFF]/5 transition-colors duration-200"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-3 bg-[#684BFF] rounded-full" />
                <span className="tracking-wide">Additional Skills (Data &amp; Analytics)</span>
              </div>
              <span className={`text-xs transform transition-transform duration-300 ${isAdditionalOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isAdditionalOpen ? 'max-h-96 p-6 border-t border-[#6C63FF]/10' : 'max-h-0'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {additionalSkills.map((skill, idx) => (
                  <SkillCardWrapper
                    key={skill.name}
                    skill={skill}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competencies Section with Pill Tags */}
        <div className="mt-4">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#6C63FF]/20" />
            <span
              className="text-[#EEEEF2] text-xs font-bold px-4 py-2 border-l-[3px] border-[#684BFF] bg-[#13151F] uppercase tracking-widest rounded-r-md"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Competencies
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#6C63FF]/20" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-xs font-semibold rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/5 text-[#A78BFA] transition-all duration-300 hover:bg-[#684BFF]/15 hover:border-[#684BFF]/50 hover:scale-105 cursor-default"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
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