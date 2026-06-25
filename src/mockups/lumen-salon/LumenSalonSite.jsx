import { useEffect, useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import { assetUrl } from '../../utils/paths'
import { scrollMockupSection } from '../../utils/scrollMockupSection'
import './LumenSalonSite.css'

const navLinks = [
  { label: 'Services', href: '#lumen-services' },
  { label: 'Book', href: '#lumen-book' },
  { label: 'Studio', href: '#lumen-studio' },
  { label: 'Visit', href: '#lumen-visit' },
]

const serviceCategories = [
  {
    index: '01',
    name: 'Hair',
    image: '/lumen/service-hair.jpg',
    alt: 'Stylist working on a client hairstyle',
    items: [
      { name: 'Cut & Style', detail: 'Consultation, wash, and finish', price: 'from $78' },
      { name: 'Color Refresh', detail: 'Gloss, tone, and shine treatment', price: 'from $120' },
      { name: 'Blowout', detail: 'Smooth finish with heat styling', price: 'from $55' },
    ],
  },
  {
    index: '02',
    name: 'Skin',
    image: '/lumen/service-skin.jpg',
    alt: 'Facial treatment in a calm treatment room',
    items: [
      { name: 'Signature Facial', detail: 'Cleanse, massage, and hydration', price: 'from $95' },
      { name: 'Brightening Peel', detail: 'Gentle resurfacing for dull skin', price: 'from $110' },
      { name: 'Brow & Lash', detail: 'Shaping with tint options', price: 'from $42' },
    ],
  },
  {
    index: '03',
    name: 'Nails',
    image: '/lumen/service-nails.jpg',
    alt: 'Manicure at a minimalist nail station',
    items: [
      { name: 'Classic Manicure', detail: 'Shape, cuticle care, polish', price: 'from $38' },
      { name: 'Gel Set', detail: 'Long-wear finish, removal included', price: 'from $52' },
      { name: 'Restorative Pedicure', detail: 'Soak, exfoliation, massage', price: 'from $62' },
    ],
  },
]

const bookSlots = ['10:00', '11:30', '2:30', '4:15', '5:45']

const hours = [
  { days: 'Tuesday – Friday', time: '9:00 am – 7:00 pm' },
  { days: 'Saturday', time: '9:00 am – 5:00 pm' },
  { days: 'Sunday – Monday', time: 'Closed' },
]

function LumenSalonSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('2:30')
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSectionNav = (event, href) => {
    scrollMockupSection(event, href)
    closeMenu()
  }

  const handleBookingSubmit = (event) => {
    event.preventDefault()
    if (guestName.trim() && guestPhone.trim()) {
      setBookingConfirmed(true)
    }
  }

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className={`lumen-site${menuOpen ? ' lumen-site--menu-open' : ''}`}>
      <header className="lumen-site__header">
        <div className="lumen-masthead">
          <button
            type="button"
            className={`lumen-site__menu-toggle${menuOpen ? ' lumen-site__menu-toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="lumen-site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <a
            href="#lumen-top"
            className="lumen-masthead__logo"
            onClick={(event) => handleSectionNav(event, '#lumen-top')}
          >
            LUMEN
          </a>

          <nav
            id="lumen-site-nav"
            className={`lumen-masthead__nav${menuOpen ? ' lumen-masthead__nav--open' : ''}`}
            aria-label="Lumen Salon"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleSectionNav(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="lumen-top">
        <section className="lumen-hero">
          <div className="lumen-hero__visual" aria-hidden="true">
            <img
              src={assetUrl('/lumen/hero.jpg')}
              alt=""
              className="lumen-hero__photo"
            />
          </div>

          <ScrollReveal className="lumen-hero__body">
            <p className="lumen-hero__eyebrow">Hair · Skin · Nails</p>
            <h1 className="lumen-hero__title">
              Illuminate your
              <span>everyday glow</span>
            </h1>
            <div className="lumen-hero__booking">
              <div className="lumen-hero__slots" role="group" aria-label="Available appointment times">
                {bookSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`lumen-hero__slot${selectedSlot === slot ? ' lumen-hero__slot--active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <a
                href="#lumen-book"
                className="lumen-btn lumen-btn--dark"
                onClick={(event) => handleSectionNav(event, '#lumen-book')}
              >
                Book
              </a>
            </div>
          </ScrollReveal>
        </section>

        <section id="lumen-services" className="lumen-services">
          <ScrollReveal as="header" className="lumen-services__intro">
            <p className="lumen-kicker">Our services</p>
            <h2 className="lumen-display">Care tailored to you</h2>
            <p className="lumen-lead">
              Every appointment begins with a consultation. Browse by category below.
            </p>
          </ScrollReveal>

          <div className="lumen-services__rows">
            {serviceCategories.map((category, rowIndex) => (
              <ScrollReveal
                key={category.name}
                className={`lumen-service-row${rowIndex % 2 === 1 ? ' lumen-service-row--reverse' : ''}`}
                delay={rowIndex * 70}
              >
                <div className="lumen-service-row__menu">
                  <p className="lumen-service-row__index">{category.index}</p>
                  <h3 className="lumen-service-row__title">{category.name}</h3>
                  <ul className="lumen-menu-list">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <span className="lumen-menu-list__name">{item.name}</span>
                        <span className="lumen-menu-list__dots" aria-hidden="true" />
                        <span className="lumen-menu-list__price">{item.price}</span>
                        <span className="lumen-menu-list__detail">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lumen-service-row__visual">
                  <img src={assetUrl(category.image)} alt={category.alt} loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="lumen-book" className="lumen-book-band">
          <ScrollReveal className="lumen-book-band__inner">
            <div className="lumen-book-band__copy">
              <p className="lumen-kicker lumen-kicker--light">Book</p>
              <h2 className="lumen-display lumen-display--light">Reserve your time</h2>
              <p>
                Choose a slot and leave your details. This is a sample booking flow for
                the mockup, not a live reservation system.
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="lumen-book-band__confirmed" role="status">
                <p className="lumen-book-band__confirmed-label">Booking confirmed</p>
                <p className="lumen-book-band__confirmed-name">{guestName}</p>
                <p className="lumen-book-band__confirmed-detail">
                  {selectedSlot} · {guestPhone}
                </p>
                <p className="lumen-book-band__confirmed-note">
                  We will text you a reminder the day before your appointment.
                </p>
              </div>
            ) : (
              <form className="lumen-book-band__form" onSubmit={handleBookingSubmit}>
                <div className="lumen-book-band__slots" role="group" aria-label="Appointment times">
                  {bookSlots.map((slot) => (
                    <button
                      key={`book-${slot}`}
                      type="button"
                      className={`lumen-book-band__slot${selectedSlot === slot ? ' lumen-book-band__slot--active' : ''}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      <span className="lumen-book-band__slot-time">{slot}</span>
                      <span className="lumen-book-band__slot-label">Open</span>
                    </button>
                  ))}
                </div>

                <div className="lumen-book-band__fields">
                  <label className="lumen-book-band__field">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={guestName}
                      onChange={(event) => setGuestName(event.target.value)}
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                    />
                  </label>
                  <label className="lumen-book-band__field">
                    <span>Phone number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={guestPhone}
                      onChange={(event) => setGuestPhone(event.target.value)}
                      placeholder="(555) 123-4567"
                      required
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <button type="submit" className="lumen-btn lumen-btn--accent lumen-book-band__submit">
                  Confirm reservation
                </button>
              </form>
            )}
          </ScrollReveal>
        </section>

        <section id="lumen-studio" className="lumen-bento">
          <ScrollReveal className="lumen-bento__grid">
            <div className="lumen-bento__quote">
              <p className="lumen-kicker">The studio</p>
              <blockquote>
                <p>
                  We designed Lumen to feel like a pause in your week: soft light,
                  thoughtful service, and room to breathe.
                </p>
              </blockquote>
            </div>

            <figure className="lumen-bento__tile lumen-bento__tile--tall">
              <img
                src={assetUrl('/lumen/bento-lounge.jpg')}
                alt="Salon lounge with soft seating and natural light"
                loading="lazy"
              />
            </figure>

            <div className="lumen-bento__copy">
              <h2 className="lumen-display">A quieter kind of beautiful</h2>
              <p>
                Our stylists and estheticians work in a calm, minimal space where
                the focus stays on you. Whether you are in for a quick polish or an
                afternoon of care, we want you to leave feeling lighter.
              </p>
            </div>

            <figure className="lumen-bento__tile lumen-bento__tile--wide">
              <img
                src={assetUrl('/lumen/bento-detail.jpg')}
                alt="Stylist preparing tools at a clean salon station"
                loading="lazy"
              />
            </figure>
          </ScrollReveal>
        </section>

        <section id="lumen-visit" className="lumen-visit-strip">
          <ScrollReveal className="lumen-visit-strip__inner">
            <div className="lumen-visit-strip__col">
              <p className="lumen-kicker">Hours</p>
              <ul className="lumen-visit-strip__hours">
                {hours.map((row) => (
                  <li key={row.days}>
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lumen-visit-strip__col lumen-visit-strip__col--divider">
              <p className="lumen-kicker">Visit</p>
              <p className="lumen-visit-strip__address">
                218 Bloom Street
                <br />
                Uptown District
              </p>
              <p className="lumen-visit-strip__note">
                Street parking on Bloom and side streets. Arrive five minutes early.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="lumen-site__footer">
        <p className="lumen-site__footer-logo">LUMEN</p>
        <p className="lumen-site__footer-note">
          Sample design mockup by Brightside Studio. Not a live business site.
        </p>
      </footer>
    </div>
  )
}

export default LumenSalonSite
