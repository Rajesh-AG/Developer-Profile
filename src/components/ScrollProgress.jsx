import { useEffect, useRef } from 'react'

const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      if (barRef.current) barRef.current.style.display = 'none'
      return
    }

    let ticking = false

    const updateProgress = () => {
      if (!barRef.current) return
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = window.scrollY / totalHeight
        barRef.current.style.transform = `scaleX(${progress})`
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once initially
    updateProgress()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent)] z-[9999] transform origin-left scale-x-0"
      style={{ willChange: 'transform' }}
    />
  )
}

export default ScrollProgress
