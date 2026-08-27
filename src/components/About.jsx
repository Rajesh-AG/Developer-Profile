import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'
import { FaMobileAlt, FaPaintBrush, FaChalkboardTeacher } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaMobileAlt size={18} />,
    title: 'Flutter Development',
    desc: 'Building performant cross-platform mobile products with Dart, Firebase, state management, and clean architecture.',
  },
  {
    icon: <FaPaintBrush size={18} />,
    title: 'UI/UX Design',
    desc: 'Translating Figma design systems into responsive, accessible, and high-fidelity code bases.',
  },
  {
    icon: <FaChalkboardTeacher size={18} />,
    title: 'Technical Mentoring',
    desc: 'Guiding developers through mobile patterns, source control, and clean engineering practices.',
  },
]

const HighlightCard = ({ item, index }) => {
  const ref = useScrollReveal(index * 60)
  return (
    <div
      ref={ref}
      className="card p-6 flex gap-4 items-start hover:border-indigo-500/20 hover:bg-white/[0.01] transition-all"
    >
      <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center text-[var(--text-muted)] bg-[var(--surface-2)] flex-shrink-0 group-hover:text-[var(--accent-soft)] transition-colors">
        {item.icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[var(--text-bright)] mb-1.5">{item.title}</h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

const StatItem = ({ targetVal, suffix, label }) => {
  const [ref, count] = useCounter(targetVal, 1200)
  return (
    <div ref={ref} className="text-left">
      <span className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-extrabold text-[var(--text-bright)] tracking-tight">
        {count}{suffix}
      </span>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mt-1">
        {label}
      </p>
    </div>
  )
}

const About = () => {
  const bioRef = useScrollReveal(0)

  return (
    <section id="about" className="section bg-[var(--bg-elevated)]">
      <div className="section-inner px-6">
        <header className="section-header">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Building products with code and design</h2>
          <div className="section-accent" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          <div ref={bioRef} className="flex flex-col gap-6 text-[var(--text)] text-sm sm:text-base leading-relaxed">
            <p>
              I&apos;m a mobile developer and B.Tech Information Technology (Honours) graduate specializing in
              cross-platform development with <strong className="text-[var(--text-bright)] font-semibold">Flutter and Dart</strong>.
              During my internship at Innolift Ventures, I shipped production mobile applications integrated with 
              Firebase services, RESTful APIs, and pixel-perfect design systems.
            </p>
            <p>
              My expertise bridges <strong className="text-[var(--text-bright)] font-semibold">UI/UX development</strong> and
              system engineering. I design design-to-code workflows in Figma and compile them into clean, responsive, 
              and accessible interfaces.
            </p>
            <p>
              Additionally, as a <strong className="text-[var(--text-bright)] font-semibold">Technical Trainer</strong>, I enjoy
              mentoring junior engineers, helping them master Git version control, mobile application architecture, and 
              modular software design.
            </p>

            <div className="pt-2">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary hover:scale-[1.02] active:scale-[0.98] transition-all">
                Download Resume
              </a>
            </div>

            {/* Horizontal Animated Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--border)] max-w-md w-full mt-2">
              <StatItem targetVal={10} suffix="+" label="Apps Shipped" />
              <StatItem targetVal={50} suffix="+" label="Mentored" />
              <StatItem targetVal={1} suffix=" Yr" label="Experience" />
            </div>
          </div>

          {/* Highlights in Right Column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Core Focus areas
            </p>
            {highlights.map((item, idx) => (
              <HighlightCard key={item.title} item={item} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
