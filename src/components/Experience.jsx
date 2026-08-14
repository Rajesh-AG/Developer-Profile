import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

const tech = [
  'Flutter', 'Dart', 'Firebase', 'Provider',
  'RESTful APIs', 'FCM', 'CI/CD',
]

const achievements = [
  {
    text: 'Engineered LogicQ — a production cross-platform ed-tech app (iOS & Android) with Provider state management across 7+ course domains.',
  },
  {
    text: 'Built a 3-tier role system — Student, Mentor, Institution — each with dedicated dashboards, permissions, and real-time data exchange via RESTful APIs.',
  },
  {
    text: 'Implemented Firebase Auth, Firestore, and FCM push notifications for secure login, zero-downtime sync, and instant alerts; built a reusable custom widget library.',
  },
  {
    text: 'Integrated in-app test engine with automated grading and instant performance analytics; optimised widget tree via lazy loading for low-end Android devices.',
  },
  {
    text: 'Shipped all features within agile sprints — daily standups, sprint planning, and code reviews.',
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ background: '#0C0D14' }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#6C63FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Work Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#EEEEF2] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Experience
          </h2>
          <div className="w-12 h-[3px] rounded-full" style={{ background: '#6C63FF' }} />
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'rgba(108,99,255,0.2)', left: '15px' }}
          />

          {/* Experience Card */}
          <div className="sm:pl-14 relative">

            {/* Timeline dot */}
            <div
              className="absolute hidden sm:flex items-center justify-center w-8 h-8 rounded-full border-2 top-0"
              style={{
                left: '0px',
                background: '#0C0D14',
                borderColor: '#6C63FF',
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: '#6C63FF' }}
              />
            </div>

            {/* Card */}
            <div
              className="p-7 rounded-2xl border"
              style={{
                background: '#13151F',
                borderColor: 'rgba(108,99,255,0.15)',
              }}
            >
              {/* Top — Role + Company */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  {/* Role */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="px-3 py-1 text-[10px] font-semibold rounded-full"
                      style={{
                        background: 'rgba(108,99,255,0.12)',
                        color: '#A78BFA',
                        border: '1px solid rgba(108,99,255,0.25)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Internship
                    </span>
                    <span
                      className="px-3 py-1 text-[10px] font-semibold rounded-full"
                      style={{
                        background: 'rgba(15,155,142,0.12)',
                        color: '#0F9B8E',
                        border: '1px solid rgba(15,155,142,0.25)',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      Currently Active
                    </span>
                  </div>

                  <h3
                    className="text-[#EEEEF2] text-lg font-bold mt-2 leading-snug"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Flutter Mobile App Developer
                  </h3>

                  {/* Company + Location */}
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-[#A78BFA] text-sm font-medium">
                      <HiOfficeBuilding size={14} />
                      Innolift Ventures
                    </span>
                    <span className="flex items-center gap-1.5 text-[#C8CADE] text-sm opacity-60">
                      <HiLocationMarker size={14} />
                      Chennai
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm flex-shrink-0 self-start"
                  style={{
                    background: 'rgba(108,99,255,0.06)',
                    border: '1px solid rgba(108,99,255,0.15)',
                    color: '#C8CADE',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  <HiCalendar size={14} className="text-[#6C63FF]" />
                  Jan 2025 – Present
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{ background: 'rgba(108,99,255,0.1)' }}
              />

              {/* Project highlight */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl mb-6"
                style={{
                  background: 'rgba(108,99,255,0.06)',
                  border: '1px solid rgba(108,99,255,0.12)',
                }}
              >
                <span className="text-lg mt-0.5">🚀</span>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  <span className="text-[#EEEEF2] font-semibold">LogicQ — Ed-Tech Platform </span>
                  <span className="text-[#C8CADE] opacity-80">
                    · Production app on iOS &amp; Android · 3-tier role system ·
                    7+ course domains · Real-time Firebase sync
                  </span>
                </p>
              </div>

              {/* Achievements */}
              <ul className="flex flex-col gap-4 mb-7">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#6C63FF' }}
                    />
                    <p className="text-[#C8CADE] text-sm leading-relaxed opacity-85">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div
                className="pt-5 border-t"
                style={{ borderColor: 'rgba(108,99,255,0.1)' }}
              >
                <p
                  className="text-[#EEEEF2] text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Tech Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[11px] font-medium rounded-full"
                      style={{
                        background: 'rgba(108,99,255,0.08)',
                        color: '#A78BFA',
                        border: '1px solid rgba(108,99,255,0.2)',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience