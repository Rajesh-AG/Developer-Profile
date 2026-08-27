import { useState, useEffect, useRef } from 'react'

export const useCounter = (targetVal, duration = 1500) => {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return targetVal
    }
    return 0
  })
  const elementRef = useRef(null)
  const animationFrameRef = useRef(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const raf = requestAnimationFrame(() => {
        setCount(targetVal)
      })
      return () => cancelAnimationFrame(raf)
    }

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const startCounter = () => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true
      
      let startTime = null

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easedProgress = easeOutCubic(progress)
        
        setCount(Math.floor(easedProgress * targetVal))

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        } else {
          setCount(targetVal)
          isAnimatingRef.current = false
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter()
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      observer.disconnect()
    }
  }, [targetVal, duration])

  return [elementRef, count]
}
