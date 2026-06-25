import { useEffect } from 'react'
import LumenSalonSite from '../../components/mockups/LumenSalonSite'
import { usePageNavigate } from '../../hooks/usePageNavigate'
import { routeHref } from '../../utils/paths'
import './LumenSalonPage.css'

function LumenSalonPage() {
  const pageNavigate = usePageNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }, [])

  return (
    <div className="mockup-demo">
      <div className="mockup-demo__chrome">
        <a
          href={routeHref('/work')}
          className="mockup-demo__back"
          onClick={(event) => {
            event.preventDefault()
            pageNavigate('/work')
          }}
        >
          ← Back to Brightside Studio
        </a>
        <p className="mockup-demo__note">Sample mockup · Not a live client site</p>
      </div>
      <LumenSalonSite />
    </div>
  )
}

export default LumenSalonPage
