import './Hero.css'
import { CafeMockup, SalonMockup, BistroMockup } from './MockupPreviews'
import { useMockupExpand } from '../context/MockupExpandContext'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { routeHref } from '../utils/paths'

const mockups = [
  {
    id: 'harbor',
    name: 'Harbor Café',
    type: 'Café',
    rotate: '-5deg',
    zIndex: 1,
    theme: 'cafe',
    scale: '1',
    demoId: 'harbor',
  },
  {
    id: 'drift',
    name: 'Drift Bistro',
    type: 'Restaurant',
    rotate: '0deg',
    zIndex: 3,
    theme: 'bistro',
    scale: '1.04',
  },
  {
    id: 'lumen',
    name: 'Lumen Salon',
    type: 'Booking',
    rotate: '5deg',
    zIndex: 2,
    theme: 'salon',
    scale: '1',
    demoId: 'lumen',
  },
]

const mockupComponents = {
  cafe: CafeMockup,
  salon: SalonMockup,
  bistro: BistroMockup,
}

function Hero() {
  const pageNavigate = usePageNavigate()
  const { openDemo } = useMockupExpand()

  return (
    <section id="home" className="hero hero-band hero-band--home hero--enter">
      <div className="hero-band__mesh" aria-hidden="true" />
      <div className="hero-band__grain" aria-hidden="true" />
      <div className="hero-band__orb hero-band__orb--gold" aria-hidden="true" />
      <div className="hero-band__orb hero-band__orb--blue" aria-hidden="true" />
      <div className="hero-band__orb hero-band__orb--warm" aria-hidden="true" />
      <div className="hero-band__curve" aria-hidden="true" />

      <div className="hero-band__inner hero__inner">
        <div className="hero__content">
          <p className="hero-band__eyebrow">Web design for local businesses</p>

          <h1 className="hero__headline">
            Helping your business{' '}
            <em className="hero__shine">
              <span className="hero__shine-text">shine</span>
            </em>{' '}
            in your community
          </h1>

          <p className="hero__subtext">
            We craft warm, discoverable websites for cafés, salons, restaurants,
            and neighborhood shops, so the places people love are easier to find,
            visit, and share.
          </p>

          <div className="hero__ctas">
            <a
              href={routeHref('/#contact-form')}
              className="hero__cta hero__cta--primary"
              onClick={(event) => {
                event.preventDefault()
                pageNavigate('/#contact-form')
              }}
            >
              Start a Project
            </a>
            <a
              href={routeHref('/work')}
              className="hero__cta hero__cta--secondary"
              onClick={(event) => {
                event.preventDefault()
                pageNavigate('/work')
              }}
            >
              View Work
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__cards">
            {mockups.map((item) => {
              const Mockup = mockupComponents[item.theme]
              const mockup = <Mockup name={item.name} type={item.type} />

              return (
                <div
                  key={item.id}
                  className="hero__card"
                  style={{
                    '--card-rotate': item.rotate,
                    '--card-scale': item.scale,
                    zIndex: item.zIndex,
                  }}
                >
                  {item.demoId ? (
                    <button
                      type="button"
                      className="hero__mockup-trigger"
                      onClick={() => openDemo(item.demoId)}
                      aria-label={`Open ${item.name} mockup preview`}
                    >
                      {mockup}
                    </button>
                  ) : (
                    <div className="hero__mockup-static" aria-hidden="true">
                      {mockup}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <p className="hero__mockup-note">
            Snippets from design mockups I&apos;ve created. Sample work, not sold or
            live client sites. Click Harbor Café or Lumen Salon to explore a full mockup.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
