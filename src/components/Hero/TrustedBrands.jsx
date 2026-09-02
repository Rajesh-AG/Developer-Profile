import { SiFirebase, SiSupabase, SiStripe, SiVercel, SiGithub, SiFigma } from 'react-icons/si'

const brandLogos = [
  { name: 'Firebase', icon: SiFirebase },
  { name: 'supabase', icon: SiSupabase },
  { name: 'stripe', icon: SiStripe },
  { name: 'Vercel', icon: SiVercel },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
]

export default function TrustedBrands() {
  return (
    <div 
      style={{ width: 'min(92%, 1480px)', margin: '0 auto' }} 
      className="border-t border-white/10 pt-10 pb-12 mt-16 md:mt-20"
    >
      <div className="text-center text-[#9CA3AF] text-[11px] font-semibold tracking-[2px] uppercase mb-8 select-none px-4 whitespace-normal leading-relaxed">
        TRUSTED BY MODERN BUSINESSES &amp; STARTUPS
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto px-6">
        {brandLogos.map(({ name, icon: Icon }) => (
          <div 
            key={name}
            className="group flex items-center gap-2.5 text-white/40 hover:text-white transition-all duration-300 cursor-pointer text-base md:text-lg font-semibold tracking-tight"
            title={name}
          >
            <Icon className="text-xl md:text-2xl transition-colors duration-300 group-hover:text-white" />
            <span className="capitalize">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
