import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiLocationMarker, HiAcademicCap } from 'react-icons/hi'
import { MdOutlineSchool } from 'react-icons/md'

// ─── Data ────────────────────────────────────────────────────────────────────

const EDUCATION_DATA = [
  {
    id: 1,
    type: 'college',
    period: '2022 – 2026',
    level: 'B.Tech Information Technology (with Honours)',
    institution: 'Adhiparasakthi Engineering College',
    location: 'Melmaruvathur',
    board: 'Anna University',
    score: '8.5 CGPA',
    scoreLabel: 'CGPA',
    extra: 'Bachelor of Technology in Information Technology with Honours',
  },
  {
    id: 2,
    type: 'school',
    period: '2021 – 2022',
    level: 'Higher Secondary (12th Standard)',
    institution: 'PRG Higher Secondary School',
    location: 'Kattumannarkoil',
    board: 'State Board',
    score: '85%',
    scoreLabel: 'Academic Score',
    extra: 'Higher Secondary education under the Tamil Nadu State Board',
  },
  {
    id: 3,
    type: 'school',
    period: '2019 – 2020',
    level: 'Secondary School (10th Standard)',
    institution: 'PRG Higher Secondary School',
    location: 'Kattumannarkoil',
    board: 'State Board',
    score: '89.2%',
    scoreLabel: 'Academic Score',
    extra: 'Secondary education under the Tamil Nadu State Board',
  },
]

// ─── Design tokens (matches portfolio dark theme) ─────────────────────────────

const TOKEN = {
  // Backgrounds
  bgSection:  'var(--bg)',
  bgCard:     'var(--surface)',

  // Text
  textPrimary: 'var(--text-bright)',
  textMuted:   'var(--text)',
  textFaint:   'rgba(200, 202, 222, 0.55)',

  // Borders
  borderDefault: 'var(--border)',
  borderHover:   'var(--border-hover)',

  // School accent — teal
  schoolDot:      '#1D9E75',
  schoolBar:      'linear-gradient(90deg, #1D9E75, #5DCAA5)',
  schoolPill:     'rgba(29, 158, 117, 0.1)',
  schoolPillText: '#5DCAA5',
  schoolPillBorder: 'rgba(29, 158, 117, 0.25)',
  schoolLabel:    '#5DCAA5',

  // College accent — purple
  collegeDot:      'var(--accent)',
  collegeBar:      'linear-gradient(90deg, var(--accent), var(--accent-soft))',
  collegePill:     'rgba(104, 75, 255, 0.1)',
  collegePillText: 'var(--accent-soft)',
  collegePillBorder: 'rgba(104, 75, 255, 0.25)',
  collegeLabel:    'var(--accent-soft)',

  // Honours
  honoursPill:      'rgba(234, 179, 8, 0.1)',
  honoursPillText:  '#FBBF24',
  honoursPillBorder:'rgba(234, 179, 8, 0.25)',

  font: "var(--font-display)",
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const isSchool = (type) => type === 'school'

const getDotColor   = (type) => isSchool(type) ? TOKEN.schoolDot   : TOKEN.collegeDot
const getBarColor   = (type) => isSchool(type) ? TOKEN.schoolBar   : TOKEN.collegeBar
const getLabelColor = (type) => isSchool(type) ? TOKEN.schoolLabel : TOKEN.collegeLabel

const getScorePillStyle = (type) => {
  const isS = isSchool(type)
  return {
    background:   isS ? TOKEN.schoolPill   : TOKEN.collegePill,
    color:        isS ? TOKEN.schoolPillText: TOKEN.collegePillText,
    border: `1px solid ${isS ? TOKEN.schoolPillBorder : TOKEN.collegePillBorder}`,
    borderRadius: '9999px',
    fontFamily:   TOKEN.font,
    letterSpacing: '0.02em',
    whiteSpace:   'nowrap',
  }
}

const TimelineDot = ({ type }) => (
  <div style={dotWrapper} aria-hidden="true">
    <div style={{ ...dotOuter, borderColor: getDotColor(type), background: TOKEN.bgCard }}>
      <div style={{ ...dotInner, background: getDotColor(type) }} />
    </div>
  </div>
)

const dotWrapper = {
  position:   'absolute',
  left:       '-22px',
  top:        '1.1rem',
  zIndex:     1,
}

const dotOuter = {
  width:        '14px',
  height:       '14px',
  borderRadius: '50%',
  border:       '2px solid',
  display:      'flex',
  alignItems:   'center',
  justifyContent: 'center',
}

const dotInner = {
  width:        '5px',
  height:       '5px',
  borderRadius: '50%',
}

const CardAccentBar = ({ type }) => (
  <div style={{ height: '3px', borderRadius: '2px', background: getBarColor(type), marginBottom: '14px' }} />
)

const TimelineCard = ({ item, index }) => {
  const scorePillStyle = getScorePillStyle(item.type)
  const revealRef = useScrollReveal(index * 60)

  return (
    <article ref={revealRef} style={cardStyle} className="edu-card">
      <CardAccentBar type={item.type} />

      {/* Period · Level */}
      <p style={{ ...metaLine, color: getLabelColor(item.type) }}>
        <time dateTime={item.period}>{item.period}</time>
        <span aria-hidden="true">&nbsp;·&nbsp;</span>
        <span>{item.level}</span>
      </p>

      {/* Institution */}
      <h3 style={institutionStyle}>{item.institution}</h3>

      {/* Location · Board */}
      <p style={locationStyle}>
        <HiLocationMarker size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
        {item.location}
        <span aria-hidden="true">&nbsp;·&nbsp;</span>
        {item.board}
      </p>

      {/* Pills */}
      <div style={pillRow} role="list">
        <Pill style={scorePillStyle} role="listitem">
          {item.scoreLabel}: {item.score}
        </Pill>

        {item.type === 'college' && (
          <Pill style={honoursStyle} role="listitem">
            First Class with Distinction
          </Pill>
        )}
      </div>

      {/* Extra info */}
      <p style={extraStyle}>{item.extra}</p>
    </article>
  )
}

const Pill = ({ children, style, ...props }) => (
  <span style={{ ...pillBase, ...style }} {...props}>
    {children}
  </span>
)

const SectionHeader = () => (
  <div style={headerStyle}>
    <p style={eyebrowStyle}>Education History</p>
    <h2 id="education-heading" style={headingStyle}>Education</h2>
    <div style={accentBar} />
  </div>
)

// ─── Inline Styles ────────────────────────────────────────────────────────────

const cardStyle = {
  background:   TOKEN.bgCard,
  border:       `1px solid ${TOKEN.borderDefault}`,
  borderRadius: '1rem',
  padding:      '1.5rem',
  display:      'flex',
  flexDirection:'column',
}

const metaLine = {
  fontSize:      '11px',
  fontWeight:    600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin:        0,
  fontFamily:    TOKEN.font,
}

const institutionStyle = {
  fontSize:   '16px',
  fontWeight: 700,
  color:      TOKEN.textPrimary,
  margin:     '8px 0',
  fontFamily: TOKEN.font,
}

const locationStyle = {
  fontSize:   '13px',
  color:      TOKEN.textMuted,
  opacity:    0.7,
  margin:     0,
  fontFamily: TOKEN.font,
}

const pillRow = {
  display:  'flex',
  flexWrap: 'wrap',
  gap:      '8px',
  margin:   '16px 0',
}

const pillBase = {
  fontSize:     '11px',
  fontWeight:   600,
  padding:      '3px 10px',
  borderRadius: '9999px',
  fontFamily:   TOKEN.font,
}

const honoursStyle = {
  background:   TOKEN.honoursPill,
  color:        TOKEN.honoursPillText,
  border:       `1px solid ${TOKEN.honoursPillBorder}`,
  whiteSpace:   'nowrap',
}

const extraStyle = {
  fontSize:   '13px',
  lineHeight: 1.6,
  color:      TOKEN.textMuted,
  margin:     0,
  fontFamily: TOKEN.font,
}

const headerStyle = {
  display:      'flex',
  flexDirection:'column',
  alignItems:   'center',
  textAlign:    'center',
  marginBottom: '2.5rem',
}

const eyebrowStyle = {
  fontFamily:   TOKEN.font,
  fontSize:     '11px',
  fontWeight:   600,
  letterSpacing:'0.25em',
  textTransform:'uppercase',
  color:         'var(--accent)',
  margin:        '0 0 12px 0',
}

const headingStyle = {
  fontFamily:   TOKEN.font,
  fontSize:     '32px',
  fontWeight:   700,
  color:        TOKEN.textPrimary,
  margin:        '0 0 16px 0',
}

const accentBar = {
  width:        '48px',
  height:       '3px',
  borderRadius: '2px',
  background:   'var(--accent)',
}

// ─── Main Component ───────────────────────────────────────────────────────────

const Education = () => {
  const schoolItems  = EDUCATION_DATA.filter((d) => d.type === 'school')
  const collegeItems = EDUCATION_DATA.filter((d) => d.type === 'college')

  return (
    <>
      <style>{css}</style>

      <section
        id="education"
        className="education-section"
        style={{ background: TOKEN.bgSection }}
        aria-labelledby="education-heading"
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionHeader />

          {/* Two-column layout on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* Left: School */}
            <div>
              <p style={columnLabel}>
                <MdOutlineSchool size={14} aria-hidden="true" style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
                School
              </p>
              <div style={timelineWrapper} role="list" aria-label="School education">
                <div style={timelineLine} aria-hidden="true" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {schoolItems.map((item, idx) => (
                    <div key={item.id} style={{ position: 'relative' }} role="listitem">
                      <TimelineDot type={item.type} />
                      <TimelineCard item={item} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Higher Education */}
            <div>
              <p style={columnLabel}>
                <HiAcademicCap size={14} aria-hidden="true" style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
                Higher Education
              </p>
              <div style={timelineWrapper} role="list" aria-label="Higher education">
                <div style={{ ...timelineLine, background: 'rgba(108, 99, 255, 0.2)' }} aria-hidden="true" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {collegeItems.map((item, idx) => (
                    <div key={item.id} style={{ position: 'relative' }} role="listitem">
                      <TimelineDot type={item.type} />
                      <TimelineCard item={item} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



const columnLabel = {
  fontSize:      '11px',
  fontWeight:    600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color:         TOKEN.textFaint,
  fontFamily:    TOKEN.font,
  marginBottom:  '1.25rem',
}

const timelineWrapper = {
  position:    'relative',
  paddingLeft: '28px',
}

const timelineLine = {
  position:    'absolute',
  left:        '7px',
  top:         '1.1rem',
  bottom:      '1.1rem',
  width:       '1.5px',
  background:  'rgba(29, 158, 117, 0.25)',
  borderRadius:'2px',
}

// ─── CSS (hover + responsive) ─────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

  .edu-card {
    transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
  }

  .edu-card:hover {
    transform: translateY(-4px);
    border-color: rgba(108, 99, 255, 0.35) !important;
    box-shadow: 0 0 0 1px rgba(108, 99, 255, 0.06),
                0 8px 24px rgba(108, 99, 255, 0.06);
  }

  .education-section {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 768px) {
    .education-section {
      padding: 4rem 1.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .edu-card { transition: none !important; }
  }
`

export default Education