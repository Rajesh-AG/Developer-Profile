import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

const Stat = ({ value, suffix, label }) => {
  const [ref, count] = useCounter(value, 1200)
  return (
    <span ref={ref} className="stat-inline">
      <strong>{count}{suffix}</strong> {label}
    </span>
  )
}

export default function About() {
  const revealRef = useScrollReveal(0)

  return (
    <section id="about" className="section-shell">
      <div className="section-kicker">02 / INTERSECTION OF CODES & DESIGN</div>
      
      <div ref={revealRef} className="about-grid">
        <div className="about-intro-copy">
          <h2 className="display-heading display-heading--medium">I bridge application engineering and interaction systems.</h2>
          
          <p>
            I build mobile products that balance architecture stability with intuitive user experience. Drawing on a background in information technology, I work at the intersection of clean application code and clear UI/UX principles, compiling design systems into production-ready cross-platform systems.
          </p>
          
          <p>
            Rather than developing features in isolation, I evaluate products as systems — analyzing screen transitions, local caching strategies, database synchronization states, and user flows. I enjoy refining mobile interfaces that simplify transaction tracking and ed-tech product workflows.
          </p>

          <p>
            As a technical mentor, I believe in communicating complex engineering patterns simply, keeping codebases modular, and building collaboratively.
          </p>

          {/* Integrated Horizontal Statistics */}
          <div className="about-stats">
            <Stat value={10} suffix="+" label="Apps Shipped" />
            <span className="divider">|</span>
            <Stat value={50} suffix="+" label="Students Mentored" />
            <span className="divider">|</span>
            <Stat value={1} suffix=" Year" label="Experience" />
          </div>
        </div>

        <div className="about-details">
          <div className="about-row">
            <label>ROLE</label>
            <span>Mobile Product Engineer</span>
          </div>
          <div className="about-row">
            <label>BASE</label>
            <span>Chennai, India</span>
          </div>
          <div className="about-row">
            <label>SPECIALTY</label>
            <span>Flutter Development &amp; UI/UX</span>
          </div>
          <div className="about-row">
            <label>ACADEMICS</label>
            <span>B.Tech Information Technology (Honours)</span>
          </div>
          <div className="about-row">
            <label>MENTORING</label>
            <span>Flutter, React, Version Control</span>
          </div>
        </div>
      </div>
    </section>
  )
}