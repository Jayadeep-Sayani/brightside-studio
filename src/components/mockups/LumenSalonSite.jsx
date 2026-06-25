import './LumenSalonSite.css'
import { assetUrl } from '../../utils/paths'

const services = [
  {
    name: 'Hair',
    items: ['Cut & style from $68', 'Color & gloss from $120', 'Event styling from $95'],
  },
  {
    name: 'Skin',
    items: ['Express facial $85', 'Glow peel $110', 'Brow shaping $32'],
  },
  {
    name: 'Nails',
    items: ['Classic manicure $45', 'Gel set $62', 'Soft gel removal $28'],
  },
]

const timeSlots = ['10:00', '11:30', '2:30', '4:15', '5:45']

function LumenSalonSite() {
  return (
    <div className="lumen-site">
      <header className="lumen-site__header">
        <span className="lumen-site__logo">LUMEN</span>
        <nav className="lumen-site__nav" aria-label="Lumen Salon">
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="lumen-site__hero">
        <div className="lumen-site__hero-media" aria-hidden="true">
          <img src={assetUrl('/NailSalon.jpeg')} alt="" draggable={false} />
        </div>
        <div className="lumen-site__hero-content">
          <p className="lumen-site__eyebrow">Hair · Skin · Nails</p>
          <h1 className="lumen-site__headline">
            Illuminate your
            <br />
            everyday glow
          </h1>
          <p className="lumen-site__lead">
            A calm, elevated salon in James Bay for cuts, facials, and nails that
            feel as good as they look.
          </p>
          <div className="lumen-site__booking-pill" id="book">
            <div className="lumen-site__slots" role="list" aria-label="Available times">
              {timeSlots.map((slot) => (
                <span
                  key={slot}
                  role="listitem"
                  className={slot === '2:30' ? 'lumen-site__slot lumen-site__slot--active' : 'lumen-site__slot'}
                >
                  {slot}
                </span>
              ))}
            </div>
            <button type="button" className="lumen-site__btn lumen-site__btn--primary">
              Book appointment
            </button>
          </div>
        </div>
      </section>

      <section className="lumen-site__services" id="services">
        <div className="lumen-site__section-inner">
          <p className="lumen-site__section-label">Services</p>
          <h2 className="lumen-site__section-title">Treatments tailored to you</h2>
          <div className="lumen-site__service-grid">
            {services.map((group) => (
              <article key={group.name} className="lumen-site__service-card">
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-site__about" id="about">
        <div className="lumen-site__section-inner lumen-site__about-inner">
          <div className="lumen-site__about-copy">
            <p className="lumen-site__section-label">About</p>
            <h2 className="lumen-site__section-title">Light-filled, unhurried, welcoming</h2>
            <p>
              Lumen is designed to feel soft and intentional from the moment you walk
              in. Natural textures, warm light, and a team that listens before they
              recommend.
            </p>
            <p>
              Whether you are in for a quick refresh or a slow afternoon of care, we
              keep the experience calm and personal.
            </p>
          </div>
          <div className="lumen-site__about-stats">
            <div>
              <span className="lumen-site__stat-value">4.9</span>
              <span className="lumen-site__stat-label">Average rating</span>
            </div>
            <div>
              <span className="lumen-site__stat-value">12+</span>
              <span className="lumen-site__stat-label">Years in Victoria</span>
            </div>
            <div>
              <span className="lumen-site__stat-value">Same-week</span>
              <span className="lumen-site__stat-label">Booking available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lumen-site__quote">
        <blockquote>
          <p>
            &ldquo;The booking flow is so smooth that clients actually comment on it.
            The design captures our salon vibe perfectly without feeling fussy.&rdquo;
          </p>
          <footer>Priya Nair · Founder, Lumen Salon</footer>
        </blockquote>
      </section>

      <footer className="lumen-site__footer" id="contact">
        <div className="lumen-site__section-inner lumen-site__footer-inner">
          <div>
            <span className="lumen-site__logo">LUMEN</span>
            <p>124 Fairfield Road, Victoria BC</p>
            <p>Open Tue–Sat · 9am–6pm</p>
          </div>
          <div className="lumen-site__footer-links">
            <a href="#services">Services</a>
            <a href="#book">Book</a>
            <a href="#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LumenSalonSite
