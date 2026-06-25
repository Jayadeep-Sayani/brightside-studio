import { useState } from 'react'
import './LumenSalonSite.css'
import { assetUrl } from '../../utils/paths'

const slots = ['10:00', '11:30', '2:30', '4:15', '5:45']

function LumenSalonSite() {
  const [slot, setSlot] = useState('2:30')

  return (
    <div className="lumen">
      <header className="lumen__top">
        <a className="lumen__brand" href="#top">
          LUMEN
        </a>
        <nav className="lumen__menu" aria-label="Lumen Salon">
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#studio">Studio</a>
        </nav>
      </header>

      <section className="lumen__hero" id="top">
        <div className="lumen__hero-copy">
          <div className="lumen__hero-tag">
            <span className="lumen__rule" aria-hidden="true" />
            <p>James Bay salon · Est. 2012</p>
          </div>

          <h1 className="lumen__title">
            Glow,
            <br />
            on your terms
          </h1>

          <p className="lumen__lede">
            Hair, skin, and nails in a space built to feel slow and intentional —
            warm light, soft textures, and stylists who actually listen.
          </p>

          <div className="lumen__hero-book" id="book">
            <p className="lumen__hero-book-label">Openings today</p>
            <div className="lumen__times" role="group" aria-label="Available times">
              {slots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={time === slot ? 'lumen__time is-selected' : 'lumen__time'}
                  aria-pressed={time === slot}
                  onClick={() => setSlot(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <a className="lumen__cta" href="#book">
              Reserve {slot}
            </a>
          </div>
        </div>

        <div className="lumen__hero-visual">
          <div className="lumen__arch">
            <img
              src={assetUrl('/NailSalon.jpeg')}
              alt=""
              draggable={false}
              fetchPriority="high"
            />
          </div>
          <div className="lumen__hero-note">
            <span>124 Fairfield Rd</span>
            <span>Victoria, BC</span>
          </div>
        </div>
      </section>

      <div className="lumen__hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="lumen__hero-scroll-line" />
      </div>
    </div>
  )
}

export default LumenSalonSite
