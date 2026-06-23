import './Hero.css'
import { CafeMockup, SalonMockup, BistroMockup } from './MockupPreviews'

const mockups = [
  {
    id: 'harbor',
    name: 'Harbor Café',
    type: 'Café',
    rotate: '-5deg',
    zIndex: 1,
    theme: 'cafe',
    scale: '1',
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
  },
]

const mockupComponents = {
  cafe: CafeMockup,
  salon: SalonMockup,
  bistro: BistroMockup,
}

import { usePageNavigate } from '../hooks/usePageNavigate'

function Hero() {
  const pageNavigate = usePageNavigate()
  return (
    <section id="home" className="hero hero--enter">
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Web design for local businesses</p>

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
              href="/#contact"
              className="hero__cta hero__cta--primary"
              onClick={(event) => {
                event.preventDefault()
                pageNavigate('/#contact')
              }}
            >
              Start a Project
            </a>
            <a
              href="/#work"
              className="hero__cta hero__cta--secondary"
              onClick={(event) => {
                event.preventDefault()
                pageNavigate('/#work')
              }}
            >
              View Work
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__cards" aria-hidden="true">
            {mockups.map((item) => {
              const Mockup = mockupComponents[item.theme]

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
                  <Mockup name={item.name} type={item.type} />
                </div>
              )
            })}
          </div>
          <p className="hero__mockup-note">
            Snippets from design mockups I&apos;ve created. Sample work, not sold or
            live client sites.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
