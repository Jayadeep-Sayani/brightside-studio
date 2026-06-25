import { useEffect } from 'react'
import HarborCafeSite from '../mockups/harbor-cafe/HarborCafeSite'
import { routeHref } from '../utils/paths'
import './HarborCafePage.css'

function HarborCafePage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Harbor Café | Sample Mockup'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="harbor-mockup">
      <a href={routeHref('/work')} className="harbor-mockup__back">
        ← Back to Brightside Studio
      </a>
      <HarborCafeSite />
    </div>
  )
}

export default HarborCafePage
