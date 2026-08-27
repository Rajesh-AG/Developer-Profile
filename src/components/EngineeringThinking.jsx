import { motion } from 'framer-motion'

const flow = [
  ['USER', 'Intent, context, feedback'],
  ['PRODUCT', 'UX flow and interaction model'],
  ['ENGINEERING', 'Flutter / React application layer'],
  ['SERVICES', 'Firebase / APIs / data'],
  ['OUTCOME', 'Reliable, usable product'],
]

export default function EngineeringThinking() {
  return (
    <section id="thinking" className="section-shell">
      <div className="section-kicker">05 / ENGINEERING THINKING</div>
      <div className="thinking-grid">
        <div>
          <h2 className="display-heading display-heading--medium">Design decisions should survive contact with real users.</h2>
          <p className="body-copy">I approach interfaces as systems: understand the user problem, model the flow, choose an appropriate architecture, then refine the experience through implementation and debugging.</p>
        </div>
        <div className="system-flow" aria-label="Product engineering flow">
          {flow.map(([title, detail], index) => (
            <motion.div key={title} className="flow-row" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .45, delay: index * .06 }}>
              <span className="flow-index">0{index + 1}</span>
              <div><strong>{title}</strong><span>{detail}</span></div>
              {index < flow.length - 1 && <span className="flow-arrow">↓</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
