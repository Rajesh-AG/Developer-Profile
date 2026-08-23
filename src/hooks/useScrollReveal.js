import { useEffect, useRef } from 'react'

export const useScrollReveal = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal-card')
    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    let timeoutId = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Temporarily enable will-change for compositor layer optimization
          el.style.willChange = 'transform, opacity'
          el.classList.add('is-visible')

          // Clean up will-change after transition completes (400ms duration + delay)
          timeoutId = setTimeout(() => {
            if (el) el.style.willChange = 'auto'
          }, 400 + delay)

          observer.unobserve(el)
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    )

    observer.observe(el)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [delay])

  return ref
}
