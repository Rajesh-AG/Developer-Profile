export default function HeroHeading() {
  return (
    <h1 
      style={{ color: '#ffffff' }} 
      className="font-['Space_Grotesk'] font-black text-[clamp(36px,7.5vw,48px)] sm:text-[clamp(44px,5.2vw,68px)] leading-[1.02] tracking-[-0.03em] my-5 flex flex-col text-white select-none"
    >
      <span className="hero-line-reveal block" style={{ animationDelay: '0.1s', color: '#ffffff' }}>
        I DESIGN & BUILD
      </span>
      <span className="hero-line-reveal block" style={{ animationDelay: '0.22s' }}>
        <span 
          style={{ 
            background: 'linear-gradient(90deg, #00D9A6 0%, #00BFFF 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}
        >
          DIGITAL PRODUCTS
        </span>
      </span>
      <span className="hero-line-reveal block" style={{ animationDelay: '0.34s', color: '#ffffff' }}>
        THAT SOLVE REAL
      </span>
      <span className="hero-line-reveal block" style={{ animationDelay: '0.46s', color: '#ffffff' }}>
        PROBLEMS.
      </span>
    </h1>
  )
}
