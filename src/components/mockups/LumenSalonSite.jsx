import { useEffect, useState } from 'react'
import './LumenSalonSite.css'
import { assetUrl } from '../../utils/paths'

const services = [
  {
    name: 'Hair',
    tag: 'Cuts & color',
    items: ['Cut & style from $68', 'Color & gloss from $120', 'Event styling from $95'],
  },
  {
    name: 'Skin',
    tag: 'Facials & brows',
    items: ['Express facial $85', 'Glow peel $110', 'Brow shaping $32'],
  },
  {
    name: 'Nails',
    tag: 'Mani & pedi',
    items: ['Classic manicure $45', 'Gel set $62', 'Soft gel removal $28'],
  },
]

const team = [
  { name: 'Maya Chen', role: 'Lead stylist', focus: 'Precision cuts & lived-in color' },
  { name: 'Jordan Ellis', role: 'Skin specialist', focus: 'Facials, peels & brow design' },
  { name: 'Aria Santos', role: 'Nail artist', focus: 'Gel sets & natural nail care' },
]

const testimonials = [
  {
    quote:
      'The space feels calm the second you walk in. Booking online took thirty seconds and my color turned out exactly how I described it.',
    name: 'Elena R.',
    detail: 'Balayage client',
  },
  {
    quote:
      'I come for the facials and stay for the team. Everyone remembers your preferences without making it feel over the top.',
    name: 'Sam K.',
    detail: 'Monthly facial',
  },
  {
    quote:
      'Best gel manicure I have had in Victoria. Clean lines, no rush, and the chairs are unbelievably comfortable.',
    name: 'Priya M.',
    detail: 'Gel manicure',
  },
]

const galleryItems = [
  { label: 'Soft layers', tone: 'warm', tall: true },
  { label: 'Glow facial', tone: 'blush', tall: false },
  { label: 'Neutral gel', tone: 'rose', tall: false },
  { label: 'Evening event', tone: 'mauve', tall: true },
]

const timeSlots = ['10:00', '11:30', '2:30', '4:15', '5:45']

const hours = [
  { day: 'Tuesday – Friday', time: '9:00 am – 6:00 pm' },
  { day: 'Saturday', time: '9:00 am – 5:00 pm' },
  { day: 'Sunday – Monday', time: 'Closed' },
]

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#book', label: 'Book' },
  { href: '#visit', label: 'Visit' },
]

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function LumenSalonSite() {
  const [navSolid, setNavSolid] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('2:30')
  const [selectedService, setSelectedService] = useState('Hair')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingError, setBookingError] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const onScroll = () => setNavSolid(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const selectSlot = (slot) => {
    setSelectedSlot(slot)
    setBookingConfirmed(false)
    setBookingError('')
  }

  const handleConfirmBooking = () => {
    const phoneDigits = clientPhone.replace(/\D/g, '')

    if (!clientName.trim()) {
      setBookingError('Please add your name to confirm.')
      return
    }

    if (phoneDigits.length < 10) {
      setBookingError('Please enter a mobile number for your confirmation text.')
      return
    }

    setBookingError('')
    setBookingConfirmed(true)
  }

  return (
    <div className="lumen-site">
      <header
        className={`lumen-site__header${navSolid ? ' lumen-site__header--solid' : ''}`}
      >
        <span className="lumen-site__logo">LUMEN</span>
        <nav className="lumen-site__nav" aria-label="Lumen Salon">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#book" className="lumen-site__nav-cta">
          Book now
        </a>
      </header>

      <section className="lumen-site__hero">
        <div className="lumen-site__hero-media" aria-hidden="true">
          <img
            src={assetUrl('/NailSalon.jpeg')}
            alt=""
            draggable={false}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="lumen-site__hero-body">
          <p className="lumen-site__eyebrow">Hair · Skin · Nails · James Bay</p>
          <h1 className="lumen-site__headline">
            Illuminate your
            <br />
            everyday glow
          </h1>
          <p className="lumen-site__lead">
            A calm, elevated salon for cuts, facials, and nails — soft light, warm
            textures, and stylists who listen before they recommend.
          </p>
          <div className="lumen-site__booking-pill">
            <div className="lumen-site__slots" role="group" aria-label="Available times today">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={
                    slot === selectedSlot
                      ? 'lumen-site__slot lumen-site__slot--active'
                      : 'lumen-site__slot'
                  }
                  aria-pressed={slot === selectedSlot}
                  onClick={() => selectSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
            <a href="#book" className="lumen-site__btn lumen-site__btn--book">
              Book {selectedSlot}
            </a>
          </div>
        </div>
      </section>

      <div className="lumen-site__stats" aria-label="Salon highlights">
        <div className="lumen-site__section-inner lumen-site__stats-inner">
          <div>
            <span className="lumen-site__stat-value">4.9</span>
            <span className="lumen-site__stat-label">Client rating</span>
          </div>
          <div>
            <span className="lumen-site__stat-value">12+</span>
            <span className="lumen-site__stat-label">Years in Victoria</span>
          </div>
          <div>
            <span className="lumen-site__stat-value">Same-week</span>
            <span className="lumen-site__stat-label">Appointments open</span>
          </div>
        </div>
      </div>

      <section className="lumen-site__promo" aria-label="New client offer">
        <div className="lumen-site__section-inner lumen-site__promo-inner">
          <p className="lumen-site__promo-label">New client offer</p>
          <p className="lumen-site__promo-title">The Glow Welcome — $99</p>
          <p className="lumen-site__promo-copy">
            Express facial, brow tidy, and a complimentary scalp massage with your first visit.
          </p>
        </div>
      </section>

      <section className="lumen-site__services" id="services">
        <div className="lumen-site__section-inner">
          <header className="lumen-site__section-header">
            <p className="lumen-site__section-label">Services</p>
            <h2 className="lumen-site__section-title">Treatments tailored to you</h2>
            <p className="lumen-site__section-intro lumen-site__section-intro--centered">
              Every visit starts with a short consultation so your stylist understands your
              hair, skin, and schedule before recommending a plan.
            </p>
          </header>
          <div className="lumen-site__service-grid">
            {services.map((group, index) => (
              <article key={group.name} className="lumen-site__service-card">
                <span className="lumen-site__service-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="lumen-site__service-tag">{group.tag}</p>
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#book" className="lumen-site__service-link">
                  Book {group.name.toLowerCase()} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-site__team" id="team">
        <div className="lumen-site__section-inner">
          <header className="lumen-site__section-header">
            <p className="lumen-site__section-label">Our team</p>
            <h2 className="lumen-site__section-title">Stylists who listen first</h2>
          </header>
          <div className="lumen-site__team-grid">
            {team.map((member) => (
              <article key={member.name} className="lumen-site__team-card">
                <div className="lumen-site__team-avatar" aria-hidden="true">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="lumen-site__team-role">{member.role}</p>
                <p className="lumen-site__team-focus">{member.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-site__gallery" id="gallery">
        <div className="lumen-site__section-inner">
          <header className="lumen-site__section-header">
            <p className="lumen-site__section-label">Gallery</p>
            <h2 className="lumen-site__section-title">Recent looks from the chair</h2>
          </header>
          <div className="lumen-site__gallery-grid">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className={`lumen-site__gallery-item lumen-site__gallery-item--${item.tone}${
                  item.tall ? ' lumen-site__gallery-item--tall' : ''
                }`}
              >
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-site__book" id="book">
        <div className="lumen-site__section-inner lumen-site__book-inner">
          <div className="lumen-site__book-copy">
            <p className="lumen-site__section-label">Book online</p>
            <h2 className="lumen-site__section-title">Reserve your chair</h2>
            <p>
              Choose a time, add your mobile number, and we will text your confirmation.
              Need help? Call <a href="tel:+12505550142">(250) 555-0142</a>.
            </p>
          </div>

          <div className="lumen-site__book-panel">
            {bookingConfirmed ? (
              <div className="lumen-site__booking-success" role="status">
                <p className="lumen-site__booking-success-eyebrow">Confirmed</p>
                <h3 className="lumen-site__booking-success-title">You are booked, {clientName.split(' ')[0]}.</h3>
                <p>
                  {selectedService} · Tuesday, June 24 at {selectedSlot}
                </p>
                <p>
                  A confirmation text is on its way to {clientPhone}.
                </p>
                <button
                  type="button"
                  className="lumen-site__btn lumen-site__btn--ghost-panel"
                  onClick={() => setBookingConfirmed(false)}
                >
                  Change booking
                </button>
              </div>
            ) : (
              <>
                <p className="lumen-site__book-date">Tuesday, June 24</p>

                <label className="lumen-site__field">
                  <span>Service</span>
                  <select
                    value={selectedService}
                    onChange={(event) => {
                      setSelectedService(event.target.value)
                      setBookingConfirmed(false)
                    }}
                  >
                    {services.map((group) => (
                      <option key={group.name} value={group.name}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="lumen-site__field">
                  <span>Available times</span>
                  <div className="lumen-site__slots lumen-site__slots--panel" role="group" aria-label="Available times">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={
                          slot === selectedSlot
                            ? 'lumen-site__slot lumen-site__slot--active'
                            : 'lumen-site__slot'
                        }
                        aria-pressed={slot === selectedSlot}
                        onClick={() => selectSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="lumen-site__field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    value={clientName}
                    onChange={(event) => setClientName(event.target.value)}
                  />
                </label>

                <label className="lumen-site__field">
                  <span>Mobile number</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(250) 555-0142"
                    value={clientPhone}
                    onChange={(event) => setClientPhone(formatPhone(event.target.value))}
                  />
                </label>

                {bookingError ? (
                  <p className="lumen-site__booking-error" role="alert">
                    {bookingError}
                  </p>
                ) : null}

                <button
                  type="button"
                  className="lumen-site__btn lumen-site__btn--primary lumen-site__btn--wide"
                  onClick={handleConfirmBooking}
                >
                  Confirm booking
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="lumen-site__testimonials" aria-label="Client reviews">
        <div className="lumen-site__section-inner">
          <header className="lumen-site__section-header">
            <p className="lumen-site__section-label">Reviews</p>
            <h2 className="lumen-site__section-title">Loved by our regulars</h2>
          </header>
          <div className="lumen-site__testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="lumen-site__testimonial-card">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite>{item.name}</cite>
                  <span>{item.detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-site__visit" id="visit">
        <div className="lumen-site__section-inner lumen-site__visit-inner">
          <div className="lumen-site__visit-copy">
            <p className="lumen-site__section-label">Visit us</p>
            <h2 className="lumen-site__section-title">James Bay, Victoria</h2>
            <p className="lumen-site__visit-address">124 Fairfield Road, Victoria BC</p>
            <p className="lumen-site__visit-phone">
              <a href="tel:+12505550142">(250) 555-0142</a>
            </p>
            <ul className="lumen-site__hours">
              {hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lumen-site__map" aria-hidden="true">
            <span>Map</span>
            <p>Fairfield Plaza · Street parking available</p>
          </div>
        </div>
      </section>

      <footer className="lumen-site__footer" id="contact">
        <div className="lumen-site__section-inner lumen-site__footer-inner">
          <div>
            <span className="lumen-site__logo">LUMEN</span>
            <p>124 Fairfield Road, Victoria BC</p>
            <p>Open Tue–Sat · 9am–6pm</p>
          </div>
          <div className="lumen-site__footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LumenSalonSite
