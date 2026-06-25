import { useEffect, useState } from 'react'
import './LumenSalonSite.css'
import { assetUrl } from '../../utils/paths'

const services = [
  {
    category: 'Hair',
    description: 'Cuts, gloss, and color with a lived-in finish.',
    items: [
      { name: 'Cut & style', price: '$68' },
      { name: 'Color & gloss', price: '$120' },
      { name: 'Event styling', price: '$95' },
    ],
  },
  {
    category: 'Skin',
    description: 'Facials and brow work that leave skin luminous.',
    items: [
      { name: 'Express facial', price: '$85' },
      { name: 'Glow peel', price: '$110' },
      { name: 'Brow shaping', price: '$32' },
    ],
  },
  {
    category: 'Nails',
    description: 'Classic and gel care with meticulous detail.',
    items: [
      { name: 'Classic manicure', price: '$45' },
      { name: 'Gel set', price: '$62' },
      { name: 'Soft gel removal', price: '$28' },
    ],
  },
]

const team = [
  { name: 'Maya Chen', role: 'Lead stylist' },
  { name: 'Jordan Ellis', role: 'Skin specialist' },
  { name: 'Aria Santos', role: 'Nail artist' },
]

const reviews = [
  {
    text: 'Booking took thirty seconds and my color turned out exactly how I described it.',
    author: 'Elena R.',
  },
  {
    text: 'Everyone remembers your preferences without making it feel over the top.',
    author: 'Sam K.',
  },
  {
    text: 'The calmest salon experience I have had in Victoria. I keep coming back.',
    author: 'Priya M.',
  },
]

const slots = ['10:00', '11:30', '2:30', '4:15', '5:45']

const nav = [
  { id: 'services', label: 'Services' },
  { id: 'studio', label: 'Studio' },
  { id: 'team', label: 'Team' },
  { id: 'book', label: 'Book' },
]

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function LumenSalonSite() {
  const [scrolled, setScrolled] = useState(false)
  const [slot, setSlot] = useState('2:30')
  const [service, setService] = useState('Hair')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pickSlot = (value) => {
    setSlot(value)
    setConfirmed(false)
    setError('')
  }

  const submitBooking = () => {
    if (!name.trim()) {
      setError('Add your name to confirm.')
      return
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Add a mobile number for your confirmation text.')
      return
    }
    setError('')
    setConfirmed(true)
  }

  return (
    <div className="lumen">
      <header className={`lumen__bar${scrolled ? ' lumen__bar--solid' : ''}`}>
        <a className="lumen__brand" href="#top">
          LUMEN
        </a>
        <nav className="lumen__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="lumen__cta" href="#book">
          Book
        </a>
      </header>

      <main id="top">
        <section className="lumen__hero">
          <div className="lumen__hero-copy">
            <p className="lumen__kicker">James Bay · Victoria</p>
            <h1 className="lumen__title">
              Hair, skin & nails
              <span>crafted with care</span>
            </h1>
            <p className="lumen__lede">
              A light-filled salon for people who want beautiful results without the
              rush. Thoughtful consultations, soft textures, and a team that listens.
            </p>
            <div className="lumen__hero-book">
              <p className="lumen__hero-book-label">Today&apos;s openings</p>
              <div className="lumen__slots" role="group" aria-label="Available times">
                {slots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={time === slot ? 'lumen__slot is-active' : 'lumen__slot'}
                    aria-pressed={time === slot}
                    onClick={() => pickSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <a className="lumen__btn lumen__btn--dark" href="#book">
                Reserve {slot}
              </a>
            </div>
          </div>
          <div className="lumen__hero-visual">
            <img
              src={assetUrl('/NailSalon.jpeg')}
              alt=""
              draggable={false}
              fetchPriority="high"
            />
            <div className="lumen__hero-badge">
              <span>New clients</span>
              <strong>Glow Welcome · $99</strong>
            </div>
          </div>
        </section>

        <section className="lumen__pillars" aria-label="Salon highlights">
          <div className="lumen__wrap lumen__pillars-grid">
            <article>
              <h2>Consult</h2>
              <p>Every appointment starts with listening — your hair, skin, schedule, and goals.</p>
            </article>
            <article>
              <h2>Craft</h2>
              <p>Precision techniques and products chosen for healthy, natural-looking results.</p>
            </article>
            <article>
              <h2>Care</h2>
              <p>A calm room, warm light, and stylists who make you feel looked after.</p>
            </article>
          </div>
        </section>

        <section className="lumen__services" id="services">
          <div className="lumen__wrap">
            <header className="lumen__section-head">
              <p className="lumen__label">Menu</p>
              <h2 className="lumen__heading">Services & pricing</h2>
            </header>
            <div className="lumen__menu">
              {services.map((group) => (
                <div key={group.category} className="lumen__menu-group">
                  <div className="lumen__menu-head">
                    <h3>{group.category}</h3>
                    <p>{group.description}</p>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="lumen__text-link" href="#book">
                    Book {group.category.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lumen__studio" id="studio">
          <div className="lumen__studio-grid">
            <div className="lumen__studio-photo lumen__studio-photo--a">
              <img src={assetUrl('/NailSalon.jpeg')} alt="" style={{ objectPosition: '20% 30%' }} />
            </div>
            <div className="lumen__studio-copy">
              <p className="lumen__label">The studio</p>
              <h2 className="lumen__heading">Designed to feel like a deep breath</h2>
              <p>
                Lumen sits on a quiet stretch of Fairfield Road — soft blush tones, natural
                wood, and windows that pull in afternoon light. It is the kind of place you
                notice slowing down the moment you walk in.
              </p>
              <p>
                We built the experience around unhurried appointments, intuitive booking,
                and stylists who remember the details that matter.
              </p>
            </div>
            <div className="lumen__studio-photo lumen__studio-photo--b">
              <img src={assetUrl('/NailSalon.jpeg')} alt="" style={{ objectPosition: '75% 40%' }} />
            </div>
          </div>
        </section>

        <section className="lumen__team" id="team">
          <div className="lumen__wrap">
            <header className="lumen__section-head lumen__section-head--center">
              <p className="lumen__label">Team</p>
              <h2 className="lumen__heading">Meet your stylists</h2>
            </header>
            <div className="lumen__team-grid">
              {team.map((member) => (
                <article key={member.name} className="lumen__team-card">
                  <div className="lumen__team-photo" aria-hidden="true">
                    <span>{member.name.charAt(0)}</span>
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lumen__book" id="book">
          <div className="lumen__wrap lumen__book-grid">
            <div className="lumen__book-copy">
              <p className="lumen__label">Book online</p>
              <h2 className="lumen__heading">Reserve your appointment</h2>
              <p>
                Pick a service and time, then leave your mobile number. We will text your
                confirmation within a few minutes.
              </p>
              <dl className="lumen__book-meta">
                <div>
                  <dt>Location</dt>
                  <dd>124 Fairfield Road, Victoria BC</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+12505550142">(250) 555-0142</a>
                  </dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>Tue–Fri 9–6 · Sat 9–5</dd>
                </div>
              </dl>
            </div>

            <div className="lumen__panel">
              {confirmed ? (
                <div className="lumen__confirm" role="status">
                  <p className="lumen__label">Confirmed</p>
                  <h3>You&apos;re booked, {name.split(' ')[0]}.</h3>
                  <p>
                    {service} on Tuesday, June 24 at {slot}.
                  </p>
                  <p>Confirmation heading to {phone}.</p>
                  <button
                    type="button"
                    className="lumen__btn lumen__btn--line"
                    onClick={() => setConfirmed(false)}
                  >
                    Edit booking
                  </button>
                </div>
              ) : (
                <form
                  className="lumen__form"
                  onSubmit={(event) => {
                    event.preventDefault()
                    submitBooking()
                  }}
                >
                  <p className="lumen__form-date">Tuesday, June 24</p>

                  <label className="lumen__field">
                    <span>Service</span>
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                      {services.map((group) => (
                        <option key={group.category} value={group.category}>
                          {group.category}
                        </option>
                      ))}
                    </select>
                  </label>

                  <fieldset className="lumen__field">
                    <legend>Time</legend>
                    <div className="lumen__slots lumen__slots--form">
                      {slots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={time === slot ? 'lumen__slot is-active' : 'lumen__slot'}
                          aria-pressed={time === slot}
                          onClick={() => pickSlot(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <label className="lumen__field">
                    <span>Name</span>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>

                  <label className="lumen__field">
                    <span>Mobile</span>
                    <input
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(250) 555-0142"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                    />
                  </label>

                  {error ? (
                    <p className="lumen__error" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button type="submit" className="lumen__btn lumen__btn--fill">
                    Confirm booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="lumen__reviews" aria-label="Reviews">
          <div className="lumen__wrap">
            <header className="lumen__section-head lumen__section-head--center">
              <p className="lumen__label">Reviews</p>
              <h2 className="lumen__heading">What clients say</h2>
            </header>
            <div className="lumen__reviews-grid">
              {reviews.map((item) => (
                <blockquote key={item.author}>
                  <p>&ldquo;{item.text}&rdquo;</p>
                  <footer>{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="lumen__footer">
        <div className="lumen__wrap lumen__footer-grid">
          <div>
            <span className="lumen__brand lumen__brand--light">LUMEN</span>
            <p>124 Fairfield Road, Victoria BC</p>
          </div>
          <nav aria-label="Footer">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default LumenSalonSite
