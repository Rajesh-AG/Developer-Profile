import {
  FaMobileAlt,
  FaPaintBrush,
  FaChalkboardTeacher,
} from 'react-icons/fa'

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '1+', label: 'Year Experience' },
  { value: '50+', label: 'Students Mentored' },
  { value: '10+', label: 'Technologies Used' },
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

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ background: '#0C0D14' }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#6C63FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Who I Am
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4 leading-snug"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Building Digital Products with
            <br className="hidden sm:block" /> Code &amp; Design
          </h2>

          <div
            className="w-12 h-[3px] rounded-full"
            style={{ background: '#6C63FF' }}
          />
        </div>

        {/* Bio + Stats Row */}
        <div className="flex flex-col lg:flex-row gap-14 mb-20">

          {/* Bio */}
          <div className="flex-1 space-y-5">

            <p className="text-[#C8CADE] text-[0.95rem] leading-[1.85]">
              I&apos;m a{' '}
              <span className="text-[#A78BFA] font-medium">
                B.Tech Information Technology
              </span>{' '}
              graduate working as a Flutter Mobile App Developer. I build
              cross-platform mobile applications using{' '}
              <span className="text-[#A78BFA] font-medium">
                Flutter and Dart
              </span>
              , with hands-on experience in Firebase integration, REST API
              consumption, responsive UI development, and MVVM architecture.
            </p>

            <p className="text-[#C8CADE] text-[0.95rem] leading-[1.85]">
              Alongside mobile development, I work on{' '}
              <span className="text-[#A78BFA] font-medium">
                UI/UX development
              </span>{' '}
              — designing interfaces that prioritise usability, accessibility,
              and visual consistency. I apply the same design thinking to both
              product screens and web interfaces, including work with{' '}
              <span className="text-[#A78BFA] font-medium">
                React
              </span>
              .
            </p>

            <p className="text-[#C8CADE] text-[0.95rem] leading-[1.85]">
              I also work as a{' '}
              <span className="text-[#A78BFA] font-medium">
                Technical Trainer
              </span>
              , where I guide engineering students and interns through
              practical development — covering Flutter, web technologies,
              Git &amp; GitHub, and software engineering fundamentals. I focus
              on helping them build real skills, not just complete assignments.
            </p>

            {/* Resume CTA */}
            <div className="pt-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF, #A78BFA)',
                }}
              >
                Download Resume
                <span className="text-base leading-none">↓</span>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:w-72 lg:flex-shrink-0 self-start">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border text-center"
                style={{
                  background: '#13151F',
                  borderColor: 'rgba(108,99,255,0.15)',
                }}
              >
                <span
                  className="text-[2rem] font-bold mb-1 leading-none"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    background:
                      'linear-gradient(135deg, #6C63FF, #A78BFA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </span>

                <span className="text-[#C8CADE] text-xs font-medium leading-snug mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-6 rounded-2xl border transition-all duration-300 hover:border-[#6C63FF]/40 hover:-translate-y-1 group cursor-default"
              style={{
                background: '#13151F',
                borderColor: 'rgba(108,99,255,0.12)',
              }}
            >

              {/* Icon Box */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-[#6C63FF] group-hover:text-white transition-all duration-300"
                style={{
                  background: 'rgba(108,99,255,0.1)',
                }}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
              </div>

              <h3
                className="text-[#EEEEF2] text-[0.95rem] font-semibold mb-2"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {role.title}
              </h3>

              <p className="text-[#C8CADE] text-sm leading-relaxed opacity-80">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About