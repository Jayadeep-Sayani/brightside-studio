import './HarborCafePage.css'
import { routeHref } from '../utils/paths'

function HarborCafePage() {
  return (
    <div className="harbor-mockup">
      <a href={routeHref('/work')} className="harbor-mockup__back">
        Back to Brightside Studio
      </a>
    </div>
  )
}

export default HarborCafePage
