import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'
import {
  FaMobileAlt,
  FaPaintBrush,
  FaChalkboardTeacher,
} from 'react-icons/fa'

const StatCard = ({ target, suffix, label, index }) => {
  const revealRef = useScrollReveal(index * 60)
  const [counterRef, count] = useCounter(parseInt(target, 10))

  return (
    <div
      ref={revealRef}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border text-center bg-[#13151F] border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent)]/5 cursor-default"
    >
      <span
        ref={counterRef}
        className="text-[48px] font-bold mb-1 leading-none text-[#EEEEF2]"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {count}{suffix}
      </span>

      <span className="text-[#C8CADE]/60 text-[13px] font-semibold leading-snug mt-1.5 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}

const RoleCard = ({ role, index }) => {
  const revealRef = useScrollReveal(index * 60)

  return (
    <div
      ref={revealRef}
      className="p-7 rounded-2xl border bg-[#13151F] border-[var(--border)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--accent)]/5 group cursor-default"
    >
      {/* Icon Container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#A78BFA] bg-[#6C63FF]/10 group-hover:bg-[#684BFF] group-hover:text-white transition-all duration-300"
      >
        <div className="group-hover:scale-110 transition-transform duration-300">
          {role.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-[#EEEEF2] text-[1.05rem] font-bold mb-3"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {role.title}
      </h3>

      {/* Description */}
      <p className="text-[#C8CADE]/75 text-sm leading-relaxed">
        {role.desc}
      </p>
    </div>
  )
}

const About = () => {
  const bioRef = useScrollReveal(0)

  const statsList = [
    { value: '10', suffix: '+', label: 'Apps Shipped' },
    { value: '1', suffix: '', label: 'Year in Production' },
    { value: '50', suffix: '+', label: 'Students Mentored' },
    { value: '15', suffix: '+', label: 'Technologies' },
  ]

  const roles = [
    {
      icon: <FaMobileAlt size={22} />,
      title: 'Flutter Developer',
      desc: 'Building scalable cross-platform mobile applications with Flutter, Dart, Firebase, REST APIs, state management, and maintainable MVVM architecture.',
    },
    {
      icon: <FaPaintBrush size={22} />,
      title: 'UI/UX Developer',
      desc: 'Creating clean, accessible, and responsive interfaces with strong attention to usability, visual hierarchy, consistency, and real-world user experience.',
    },
    {
      icon: <FaChalkboardTeacher size={22} />,
      title: 'Technical Mentor',
      desc: 'Guiding engineering students and interns through Flutter, React, web development, Git & GitHub, and practical software engineering workflows.',
    },
  ]

  return (
    <section
      id="about"
      className="py-12 md:py-16 px-6 overflow-hidden bg-[#0C0D14]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10 md:gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 text-[#684BFF]">
            Who I Am
          </p>

          <h2
            className="text-3xl md:text-[36px] font-bold text-[#EEEEF2] leading-tight max-w-xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Building Digital Products with Code &amp; Design
          </h2>
        </div>

        {/* 60/40 Split Grid: Bio & Stats */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column (60% width): Bio & Resume Button */}
          <div
            ref={bioRef}
            className="w-full lg:w-[60%] flex flex-col items-start text-left space-y-6"
          >
            <p className="text-[#9CA3AF] text-base leading-[1.8]">
              I am a mobile developer and B.Tech Information Technology graduate specializing in cross-platform development with{' '}
              <span className="text-[#A78BFA] font-semibold">
                Flutter and Dart
              </span>
              . Having worked as a Flutter Developer Intern at Innolift Ventures (concluding in Dec 2025), I build production mobile applications integrated with Firebase, RESTful APIs, and responsive design systems.
            </p>

            <p className="text-[#9CA3AF] text-base leading-[1.8]">
              My engineering approach is backed by hands-on{' '}
              <span className="text-[#A78BFA] font-semibold">
                UI/UX development
              </span>{' '}
              experience. I design interfaces in Figma and translate them directly into clean, responsive layouts, maintaining usability and visual consistency across both mobile and web frameworks like React.
            </p>

            <p className="text-[#9CA3AF] text-base leading-[1.8]">
              I also work as a{' '}
              <span className="text-[#A78BFA] font-semibold">
                Technical Trainer
              </span>
              , mentoring engineering students and interns through source control workflows, mobile patterns, and clean code architectures. This background reinforces my collaborative standards and technical communication.
            </p>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#684BFF]/30 bg-[#684BFF]"
              >
                Download Resume
                <span className="text-base leading-none">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column (40% width): Stats cards */}
          <div className="w-full lg:w-[40%] grid grid-cols-2 gap-4 self-stretch">
            {statsList.map((stat, idx) => (
              <StatCard
                key={idx}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>

        </div>

        {/* 3 Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {roles.map((role, idx) => (
            <RoleCard
              key={role.title}
              role={role}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default About