import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname === '/' && hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }, [pathname, hash])

  return null
}

export default ScrollToTop
