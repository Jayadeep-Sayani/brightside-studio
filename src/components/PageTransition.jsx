import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

function PageTransition({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/' && location.hash) return
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  )
}

export default PageTransition
