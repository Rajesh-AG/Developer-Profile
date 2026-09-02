export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold tracking-[1.5px] uppercase text-[#8B9198] w-fit backdrop-blur-md shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20E6A8] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20E6A8] shadow-[0_0_8px_#20E6A8]" />
      </span>
      <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
    </div>
  )
}
