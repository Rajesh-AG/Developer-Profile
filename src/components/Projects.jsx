import { motion } from 'framer-motion'
import { FaGithub, FaLock } from 'react-icons/fa'

const projects = [
  { n:'01', title:'LogicQ', subtitle:'Enterprise Ed-Tech Platform', type:'Production / Team', desc:'A cross-platform course engine with role-based access, real-time Firestore sync, automated grading and push notifications.', tech:'Flutter · Dart · Firebase · Provider · REST · FCM', private:true },
  { n:'02', title:'TenantGuard', subtitle:'AI-Powered Tenancy Verification', type:'Final Year / Team', desc:'A mobile computer-vision workflow connecting Flutter to a Flask service and AWS S3 for rental inspection and defect assessment.', tech:'Flutter · Python · PyTorch · TFLite · Flask · Docker · AWS S3', github:'https://github.com/Kingfurious/tenantguard-frontend' },
  { n:'03', title:'SMAS', subtitle:'Institutional Academic Analytics', type:'Full Stack / Solo', desc:'Responsive academic dashboards backed by role-based APIs for attendance, performance and reporting workflows.', tech:'React · Flask · SQLite · REST APIs · Git', github:'https://github.com/Rajesh-AG/SMAS' },
  { n:'04', title:'Fintrack', subtitle:'Offline-First Expense Manager', type:'Product / Solo', desc:'A personal finance experience designed around local-first transaction capture, synchronized data and budget visualization.', tech:'Flutter · Dart · Firebase · Provider', github:'https://github.com/Rajesh-AG/expense_tracker' },
]

export default function Projects() {
  return <section id="projects" className="project-section">
    <div className="section-shell">
      <div className="section-kicker">03 / SELECTED WORK</div>
      <div className="project-intro"><h2 className="display-heading display-heading--medium">Work that starts with a problem, not a screenshot.</h2><p className="body-copy">Selected projects across mobile engineering, product interfaces and applied systems. Each one is presented around the problem, decisions and technology behind the build.</p></div>
      <div className="case-study-list">
        {projects.map((p, i) => <motion.article key={p.n} className="case-study" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-80px' }} transition={{ duration:.55, delay:i*.05 }}>
          <div className="case-number">{p.n}</div>
          <div className="case-content"><div className="case-meta">{p.type}</div><h3>{p.title}</h3><h4>{p.subtitle}</h4><p>{p.desc}</p><div className="case-tech">{p.tech}</div><div className="case-actions">{p.github ? <a href={p.github} target="_blank" rel="noreferrer"><FaGithub/> View source ↗</a> : <span><FaLock/> Private project</span>}</div></div>
          <div className="case-visual"><div className="visual-index">CASE / {p.n}</div><div className="visual-word">{p.title}</div><div className="visual-line"/></div>
        </motion.article>)}
      </div>
    </div>
  </section>
}
