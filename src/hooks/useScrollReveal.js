import { useEffect, useRef } from 'react'

export const useScrollReveal = (delay = 0) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal')
    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    let timeoutId = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.willChange = 'transform, opacity'
          el.classList.add('is-visible')

          timeoutId = setTimeout(() => {
            if (el) el.style.willChange = 'auto'
          }, 500 + delay)

          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [delay])

  return ref
}
