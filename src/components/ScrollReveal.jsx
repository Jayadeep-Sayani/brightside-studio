import { useEffect, useRef } from 'react'
import '../styles/scroll-reveal.css'

function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const show = () => element.classList.add('scroll-reveal--visible')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default ScrollReveal
