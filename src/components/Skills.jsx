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
    category: 'Data & Analytics',
    skills: [
      { name: 'NumPy',      icon: <SiNumpy     size={28} />, color: '#4DABCF' },
      { name: 'Pandas',     icon: <SiPandas    size={28} />, color: '#E70488' },
      { name: 'Matplotlib', icon: <FaChartLine size={26} />, color: '#11557C' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git',     icon: <SiGit              size={28} />, color: '#F05032' },
      { name: 'GitHub',  icon: <SiGithub           size={28} />, color: '#EEEEF2' },
      { name: 'VS Code', icon: <FaCode  size={28} />, color: '#007ACC' },
    ],
  },
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
    className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#6C63FF]/40 group cursor-default"
    style={{
      background: '#13151F',
      borderColor: 'rgba(108,99,255,0.12)',
    }}
  >
    <div
      className="transition-transform duration-300 group-hover:scale-110"
      style={{ color }}
    >
      {icon}
    </div>
    <span
      className="text-[#C8CADE] text-xs font-medium text-center leading-tight"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      {name}
    </span>
  </div>
)

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: '#0C0D14' }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#6C63FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What I Work With
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-[3px] rounded-full" style={{ background: '#6C63FF' }} />
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((group) => (
            <div key={group.category}>

              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[#EEEEF2] text-sm font-semibold whitespace-nowrap"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {group.category}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: 'rgba(108,99,255,0.15)' }}
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competencies */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[#EEEEF2] text-sm font-semibold whitespace-nowrap"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Competencies
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: 'rgba(108,99,255,0.15)' }}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 hover:border-[#6C63FF]/50 hover:text-[#A78BFA] cursor-default"
                style={{
                  background: '#13151F',
                  borderColor: 'rgba(108,99,255,0.15)',
                  color: '#C8CADE',
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