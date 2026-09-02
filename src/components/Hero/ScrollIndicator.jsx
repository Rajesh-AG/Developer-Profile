export default function ScrollIndicator() {
  return (
    <div className="hidden md:flex flex-col items-center gap-3 absolute bottom-8 right-8 lg:right-14 z-20 select-none">
      <span 
        style={{ color: 'rgba(255, 255, 255, 0.45)' }}
        className="text-[10px] font-semibold tracking-[2px] uppercase [writing-mode:vertical-lr]"
      >
        SCROLL TO EXPLORE
      </span>
      <svg 
        width="20" 
        height="32" 
        viewBox="0 0 20 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#20E6A8]"
      >
        <rect x="1" y="1" width="18" height="30" rx="9" stroke="#20E6A8" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx="10" cy="9" r="2" fill="#20E6A8" className="animate-mouse-wheel" />
      </svg>
    </div>
  )
}
