export default function FloatingStatCards() {
  return (
    <>
      {/* CARD 1: Projects Delivered (Top-Left, Shifted Up & Right to Clear Face) */}
      <div 
        className="absolute -left-8 sm:-left-16 top-1 sm:top-2 z-30 flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-[#0c1114]/85 backdrop-blur-xl border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] select-none animate-float-1 hover:border-[#10b981]/50 transition-colors duration-300"
      >
        <div className="w-9 h-9 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-base font-bold">
          ⚡
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-[22px] font-extrabold tracking-tight">5+</span>
          <span className="text-[#94a3b8] text-[11px] font-medium leading-tight whitespace-pre-line">
            Projects{"\n"}Delivered
          </span>
        </div>
      </div>

      {/* CARD 2: Years Experience (Mid-Left, Adjusted Balance) */}
      <div 
        className="absolute -left-10 sm:-left-20 top-[52%] -translate-y-1/2 z-30 flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-[#0c1114]/85 backdrop-blur-xl border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] select-none animate-float-2 hover:border-[#10b981]/50 transition-colors duration-300"
      >
        <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-base font-bold">
          ★
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-[22px] font-extrabold tracking-tight">2+</span>
          <span className="text-[#94a3b8] text-[11px] font-medium leading-tight whitespace-pre-line">
            Years{"\n"}Experience
          </span>
        </div>
      </div>

      {/* CARD 3: Clean Code / Scalable Solutions (Bottom-Right) */}
      <div 
        className="absolute -right-6 sm:-right-10 bottom-8 sm:bottom-12 z-30 flex items-center gap-3.5 px-4.5 py-3.5 rounded-2xl bg-[#0c1114]/85 backdrop-blur-xl border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] select-none animate-float-3 hover:border-[#10b981]/50 transition-colors duration-300"
      >
        <div className="w-9 h-9 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] font-mono text-sm font-bold">
          &lt;/&gt;
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-[14px] font-bold">Clean Code</span>
          <span className="text-[#94a3b8] text-[12px] font-medium">Scalable Solutions</span>
        </div>
      </div>
    </>
  )
}
