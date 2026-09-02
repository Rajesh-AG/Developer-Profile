import { SiFlutter, SiReact, SiFirebase, SiDart } from 'react-icons/si'
import { FaServer } from 'react-icons/fa'

const technologies = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Dart', icon: SiDart, color: '#0175C2' },
  { name: 'REST APIs', icon: FaServer, color: '#20E6A8' },
]

export default function TechStack() {
  return (
    <div className="mt-9 flex flex-col gap-3">
      <span className="text-[#20E6A8] text-[11px] font-bold tracking-[2px] uppercase">
        MY STACK
      </span>
      <div className="flex flex-wrap items-center gap-2.5">
        {technologies.map(({ name, icon: Icon, color }) => (
          <div 
            key={name}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-[#20E6A8]/[0.08] border border-white/10 hover:border-[#20E6A8]/50 text-[#8B9198] hover:text-white text-[13px] font-medium transition-all duration-300 cursor-default hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Icon 
              className="text-[15px] transition-colors duration-300"
              style={{ color }} 
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
