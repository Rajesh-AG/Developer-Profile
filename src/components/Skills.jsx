const groups = [
  { title:'MOBILE ENGINEERING', items:['Flutter','Dart','Firebase','API Integration','Responsive UI','Performance'] },
  { title:'PRODUCT & UI/UX', items:['User Flows','Wireframing','Figma','Design Systems','Interaction Design','Accessibility'] },
  { title:'WEB ENGINEERING', items:['React','JavaScript','HTML / CSS','REST APIs','Responsive Web'] },
  { title:'DEVELOPMENT WORKFLOW', items:['Git','GitHub','Debugging','Architecture','Code Review','Technical Mentoring'] },
]

export default function Skills() {
  return <section id="skills" className="section-shell capabilities-section">
    <div className="section-kicker">06 / CAPABILITIES</div>
    <div className="capability-header"><h2 className="display-heading display-heading--medium">A toolkit built around outcomes.</h2><p className="body-copy">Technologies are implementation choices. The capability that matters is knowing when and why to use them.</p></div>
    <div className="capability-map">{groups.map((group, index) => <article className="capability-group" key={group.title}><span className="capability-index">0{index+1}</span><h3>{group.title}</h3><div className="capability-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
  </section>
}
