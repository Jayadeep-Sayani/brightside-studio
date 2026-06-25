import { useEffect, useState } from 'react'
import './LumenSalonSite.css'
import { assetUrl } from '../../utils/paths'

const timeSlots = ['10:00', '11:30', '2:30', '4:15', '5:45']

const navLinks = ['Services', 'Book', 'About', 'Contact']

function LumenSalonSite() {
  const [selectedSlot, setSelectedSlot] = useState('2:30')
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const onScroll = () => setNavSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="lumen">
      <header className={`lumen__header${navSolid ? ' lumen__header--solid' : ''}`}>
        <span className="lumen__logo">LUMEN</span>
        <nav className="lumen__nav" aria-label="Lumen Salon">
          {navLinks.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="lumen__nav-cta" href="#book">
          Book now
        </a>
      </header>

      <section className="lumen__hero">
        <div className="lumen__hero-media" aria-hidden="true">
          <img
            src={assetUrl('/NailSalon.jpeg')}
            alt=""
            draggable={false}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="lumen__hero-content">
          <p className="lumen__eyebrow">Hair · Skin · Nails</p>
          <h1 className="lumen__title">
            Illuminate your
            <br />
            everyday glow
          </h1>
          <p className="lumen__lead">
            A calm, elevated salon in James Bay for cuts, facials, and nails that
            feel as good as they look.
          </p>

          <div className="lumen__booking" id="book">
            <div className="lumen__slots" role="group" aria-label="Available times today">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={
                    slot === selectedSlot ? 'lumen__slot lumen__slot--active' : 'lumen__slot'
                  }
                  aria-pressed={slot === selectedSlot}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button type="button" className="lumen__btn">
              Book {selectedSlot}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LumenSalonSite
