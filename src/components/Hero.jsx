import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/profile.webp'

export default function Hero() {
  return <section id="hero">
    <div className="hero-editorial">
      <div className="hero-copy">
        <div className="hero-status"><span/> Available for opportunities</div>
        <p className="eyebrow">RAJESH A.G. — PRODUCT-MINDED SOFTWARE DEVELOPER</p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.16,1,.3,1] }}>I DESIGN AND BUILD<br/><em>DIGITAL PRODUCTS</em><br/>THAT SOLVE REAL PROBLEMS.</motion.h1>
        <p className="hero-description">I bridge engineering and design to build fast, intuitive digital experiences across mobile and web — from interface systems to Firebase-backed product workflows.</p>
        <div className="hero-actions"><Link to="projects" href="#projects" smooth duration={500} className="button button-primary">Explore selected work <span>↗</span></Link><Link to="contact" href="#contact" smooth duration={500} className="button button-secondary">Start a conversation</Link></div>
        <div className="hero-meta"><span>INDIA</span><span>FLUTTER / UIUX / PRODUCT ENGINEERING</span><span>2026</span></div>
        <div className="hero-socials"><a href="https://github.com/Rajesh-AG" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a><a href="https://linkedin.com/in/rajesh-ag" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a></div>
      </div>
      <div className="hero-product-stage" aria-label="Profile and product focus">
        <div className="stage-label">CURRENT FOCUS <span>01</span></div>
        <div className="profile-frame"><img src={profileImg} alt="Rajesh A.G." width="480" height="600" loading="eager"/></div>
        <div className="stage-card stage-card-top"><small>BUILD / SHIP</small><strong>Mobile-first<br/>product experiences</strong></div>
        <div className="stage-card stage-card-bottom"><small>STACK</small><strong>Flutter · React<br/>Firebase · APIs</strong></div>
      </div>
    </div>
  </section>
}
