import { Link } from 'react-scroll'

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 my-2">
      {/* Primary CTA */}
      <Link 
        to="projects" 
        smooth={true} 
        duration={500} 
        offset={-70}
        className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#20E6A8] to-[#20C8E8] text-[#050606] font-bold text-[13px] tracking-[1px] uppercase px-7 py-3.5 rounded-lg cursor-pointer shadow-[0_4px_20px_rgba(32,230,168,0.25)] hover:shadow-[0_6px_30px_rgba(32,230,168,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 select-none"
      >
        <span>VIEW MY WORK</span>
        <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </Link>

      {/* Secondary CTA */}
      <Link 
        to="contact" 
        smooth={true} 
        duration={500} 
        offset={-70}
        style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
        className="group relative inline-flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:border-white/70 font-semibold text-[13px] tracking-[1px] uppercase px-7 py-3.5 rounded-lg cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 select-none backdrop-blur-sm"
      >
        <span>LET'S CONNECT</span>
        <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </Link>
    </div>
  )
}
