import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import { assetUrl } from '../../utils/paths'
import { scrollMockupSection } from '../../utils/scrollMockupSection'
import './DriftBistroSite.css'

const navLinks = [
  { label: 'Menu', href: '#drift-menu' },
  { label: 'Reserve', href: '#drift-reserve' },
  { label: 'Visit', href: '#drift-visit' },
]

const menuChapters = [
  {
    id: 'raw-bar',
    index: '01',
    title: 'Raw Bar',
    subtitle: 'Ice, citrus, and the tide',
    image: '/drift/dish-1.jpg',
    imageAlt: 'Fresh oysters and seafood on ice',
    layout: 'image-right',
    items: [
      { name: 'Kusshi oysters', detail: 'Green apple mignonette, horseradish', price: '28' },
      { name: 'Dungeness crab cocktail', detail: 'Avocado, cucumber, chili oil', price: '26' },
      { name: 'Yellowtail crudo', detail: 'Citrus, fennel oil, sea salt', price: '22' },
      { name: 'Maine lobster bisque', detail: 'Sherry, chive, crème fraîche', price: '19' },
      { name: 'Sea scallop tartare', detail: 'Apple, celery, brown butter', price: '24' },
      { name: 'Shellfish plateau', detail: 'Chef\'s selection, serves two', price: '85' },
    ],
  },
  {
    id: 'small-plates',
    index: '02',
    title: 'Small Plates',
    subtitle: 'To begin the evening',
    layout: 'text-only',
    items: [
      { name: 'Charred shishito peppers', detail: 'Bonito salt, lime', price: '14' },
      { name: 'Wood-fired sourdough', detail: 'Cultured butter, sea salt', price: '12' },
      { name: 'Beef carpaccio', detail: 'Arugula, capers, parmesan', price: '21' },
      { name: 'Roasted beets', detail: 'Goat cheese, pistachio, chicories', price: '18' },
      { name: 'Crispy artichokes', detail: 'Lemon aioli, herbs', price: '16' },
      { name: 'Tuna conserva', detail: 'Olive oil, herbs, grilled bread', price: '19' },
      { name: 'Burrata', detail: 'Stone fruit, basil, aged balsamic', price: '20' },
    ],
  },
  {
    id: 'pasta',
    index: '03',
    title: 'Pasta',
    subtitle: 'Hand-rolled, slowly sauced',
    image: '/drift/dish-2.jpg',
    imageAlt: 'House-made pasta with seasonal garnish',
    layout: 'image-left',
    items: [
      { name: 'Tagliatelle bolognese', detail: 'Aged parmesan, herbs', price: '29' },
      { name: 'Squid ink linguine', detail: 'Shellfish, garlic, white wine', price: '34' },
      { name: 'Ricotta ravioli', detail: 'Brown butter, sage, lemon', price: '28' },
      { name: 'Cacio e pepe', detail: 'Pecorino, cracked pepper', price: '26' },
      { name: 'Wild mushroom risotto', detail: 'Parmesan, truffle oil', price: '31' },
      { name: 'Lobster maccheroni', detail: 'Tomato, basil, chili', price: '38' },
    ],
  },
  {
    id: 'from-the-sea',
    index: '04',
    title: 'From the Sea',
    subtitle: 'Line-caught and wood-grilled',
    layout: 'text-only',
    items: [
      { name: 'Grilled branzino', detail: 'Fennel, citrus, herbs', price: '36' },
      { name: 'Pan-seared halibut', detail: 'Spring peas, beurre blanc', price: '39' },
      { name: 'Salmon en papillote', detail: 'Dill, lemon, capers', price: '34' },
      { name: 'Cioppino', detail: 'San Francisco style, grilled bread', price: '42' },
      { name: 'Whole roasted snapper', detail: 'Charmoula, grilled lemon', price: '48' },
      { name: 'Diver scallops', detail: 'Cauliflower, golden raisins', price: '40' },
    ],
  },
  {
    id: 'from-the-land',
    index: '05',
    title: 'From the Land',
    subtitle: 'Fire, smoke, and patience',
    image: '/drift/dining-room.jpg',
    imageAlt: 'Candlelit table with wine glasses',
    layout: 'image-right',
    items: [
      { name: 'Wood-fired ribeye', detail: 'Charred onion, bone marrow butter', price: '58' },
      { name: 'Braised short rib', detail: 'Parsnip puree, gremolata', price: '36' },
      { name: 'Duck breast', detail: 'Cherry jus, farro, greens', price: '38' },
      { name: 'Roasted chicken', detail: 'Pan jus, seasonal vegetables', price: '32' },
      { name: 'Lamb chops', detail: 'Rosemary, grilled spring onion', price: '44' },
      { name: 'Vegetable tasting', detail: 'Six courses, garden-driven', price: '48' },
    ],
  },
  {
    id: 'desserts',
    index: '06',
    title: 'Desserts',
    subtitle: 'A quiet finish',
    layout: 'text-only',
    items: [
      { name: 'Chocolate fondant', detail: 'Salted caramel, crème fraîche', price: '14' },
      { name: 'Olive oil cake', detail: 'Macerated berries, mascarpone', price: '13' },
      { name: 'Lemon tart', detail: 'Toasted meringue, basil', price: '12' },
      { name: 'Affogato', detail: 'Espresso, vanilla gelato', price: '10' },
      { name: 'Seasonal sorbet', detail: 'Chef\'s selection', price: '9' },
    ],
  },
  {
    id: 'bar',
    index: '07',
    title: 'Bar',
    subtitle: 'Cocktails and wines by the glass',
    image: '/drift/hero.jpg',
    imageAlt: 'Bartender pouring a cocktail',
    layout: 'image-left',
    items: [
      { name: 'Harbor old fashioned', detail: 'Rye, coastal bitters, orange', price: '16' },
      { name: 'Salted rosemary gimlet', detail: 'Gin, lime, saline', price: '15' },
      { name: 'Drift spritz', detail: 'Aperitif, prosecco, grapefruit', price: '14' },
      { name: 'Zero-proof coastal tonic', detail: 'Citrus, herbs, soda', price: '9' },
      { name: 'Chardonnay, Sonoma Coast', detail: 'By the glass', price: '17' },
      { name: 'Pinot noir, Willamette', detail: 'By the glass', price: '18' },
      { name: 'Cabernet, Napa Valley', detail: 'By the glass', price: '19' },
      { name: 'Champagne, brut', detail: 'By the glass', price: '22' },
    ],
  },
]

const partySizes = ['2', '3', '4', '5', '6+']

const reserveDates = [
  { label: 'Wed 6/25', value: 'Wed 6/25' },
  { label: 'Thu 6/26', value: 'Thu 6/26' },
  { label: 'Fri 6/27', value: 'Fri 6/27' },
  { label: 'Sat 6/28', value: 'Sat 6/28' },
]

const reserveTimes = ['5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm']

const hours = [
  { days: 'Wednesday – Thursday', time: '5:00 pm – 10:00 pm', service: 'Dinner' },
  { days: 'Friday – Saturday', time: '5:00 pm – 11:00 pm', service: 'Dinner & late bar' },
  { days: 'Sunday', time: '5:00 pm – 9:00 pm', service: 'Supper' },
  { days: 'Monday – Tuesday', time: 'Closed', service: 'Kitchen rest' },
]

const visitDetails = [
  { label: 'Valet', value: 'Friday and Saturday evenings' },
  { label: 'Parking', value: 'Harbor Walk garage, first hour complimentary' },
  { label: 'Phone', value: '(415) 555-0142' },
  { label: 'Email', value: 'hello@driftbistro.com' },
]

function DriftBistroSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState(menuChapters[0].id)
  const [partySize, setPartySize] = useState('2')
  const [reserveDate, setReserveDate] = useState('Fri 6/27')
  const [reserveTime, setReserveTime] = useState('7:00 pm')
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [reserveConfirmed, setReserveConfirmed] = useState(false)
  const chapterRefs = useRef({})

  const closeMenu = () => setMenuOpen(false)

  const handleSectionNav = (event, href) => {
    scrollMockupSection(event, href)
    closeMenu()
  }

  const scrollToChapter = (event, chapterId) => {
    handleSectionNav(event, `#drift-menu-${chapterId}`)
    setActiveChapter(chapterId)
  }

  const handleReserveSubmit = (event) => {
    event.preventDefault()
    if (guestName.trim() && guestPhone.trim()) {
      setReserveConfirmed(true)
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

  useEffect(() => {
    const scroller = document.querySelector('.mockup-expand__screen')
    if (!scroller) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          const id = visible[0].target.id.replace('drift-menu-', '')
          setActiveChapter(id)
        }
      },
      {
        root: scroller,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    menuChapters.forEach((chapter) => {
      const node = chapterRefs.current[chapter.id]
      if (node) {
        observer.observe(node)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`drift-site${menuOpen ? ' drift-site--menu-open' : ''}`}>
      <header className="drift-site__header">
        <div className="drift-site__header-inner">
          <button
            type="button"
            className={`drift-site__menu-toggle${menuOpen ? ' drift-site__menu-toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="drift-site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <a
            href="#drift-top"
            className="drift-site__logo"
            onClick={(event) => handleSectionNav(event, '#drift-top')}
          >
            Drift Bistro
          </a>

          <nav
            id="drift-site-nav"
            className={`drift-site__nav${menuOpen ? ' drift-site__nav--open' : ''}`}
            aria-label="Drift Bistro"
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

      <main id="drift-top">
        <section className="drift-hero">
          <div className="drift-hero__visual" aria-hidden="true">
            <img
              src={assetUrl('/drift/hero.jpg')}
              alt=""
              className="drift-hero__photo"
            />
          </div>
          <div className="drift-hero__grain" aria-hidden="true" />

          <ScrollReveal className="drift-hero__copy">
            <p className="drift-hero__eyebrow">Coastal California cuisine</p>
            <h1 className="drift-hero__title">
              Where the tide
              <span>meets the table</span>
            </h1>
            <p className="drift-hero__lead">
              Seasonal plates, natural wines, and long dinners by the water.
            </p>
            <a
              href="#drift-menu"
              className="drift-hero__scroll"
              onClick={(event) => handleSectionNav(event, '#drift-menu')}
            >
              Explore the menu
            </a>
          </ScrollReveal>
        </section>

        <section id="drift-menu" className="drift-menu-experience">
          <div className="drift-menu-experience__intro">
            <ScrollReveal as="header" className="drift-menu-experience__head">
              <p className="drift-kicker">The menu</p>
              <h2 className="drift-display drift-display--monument">
                A full menu.
                <span>One long evening.</span>
              </h2>
              <p className="drift-lead">
                A full dining menu built for browsing. Jump to a chapter or scroll
                the room at your own pace.
              </p>
            </ScrollReveal>
          </div>

          <div className="drift-menu-experience__body">
            <aside className="drift-menu-rail" aria-label="Menu chapters">
              <p className="drift-menu-rail__label">Chapters</p>
              <ol className="drift-menu-rail__list">
                {menuChapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a
                      href={`#drift-menu-${chapter.id}`}
                      className={`drift-menu-rail__link${activeChapter === chapter.id ? ' drift-menu-rail__link--active' : ''}`}
                      onClick={(event) => scrollToChapter(event, chapter.id)}
                    >
                      <span className="drift-menu-rail__index">{chapter.index}</span>
                      <span className="drift-menu-rail__name">{chapter.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="drift-menu-rail drift-menu-rail--mobile" aria-label="Menu chapters">
              <div className="drift-menu-rail__scroll">
                {menuChapters.map((chapter) => (
                  <a
                    key={`mobile-${chapter.id}`}
                    href={`#drift-menu-${chapter.id}`}
                    className={`drift-menu-rail__pill${activeChapter === chapter.id ? ' drift-menu-rail__pill--active' : ''}`}
                    onClick={(event) => scrollToChapter(event, chapter.id)}
                  >
                    {chapter.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="drift-menu-chapters">
              {menuChapters.map((chapter, chapterIndex) => (
                <article
                  key={chapter.id}
                  id={`drift-menu-${chapter.id}`}
                  ref={(node) => {
                    chapterRefs.current[chapter.id] = node
                  }}
                  className={`drift-menu-chapter drift-menu-chapter--${chapter.layout}${chapterIndex % 2 === 1 ? ' drift-menu-chapter--alt' : ''}`}
                >
                  <ScrollReveal className="drift-menu-chapter__inner">
                    <header className="drift-menu-chapter__head">
                      <p className="drift-menu-chapter__index">{chapter.index}</p>
                      <h3 className="drift-menu-chapter__title">{chapter.title}</h3>
                      <p className="drift-menu-chapter__subtitle">{chapter.subtitle}</p>
                    </header>

                    <div className="drift-menu-chapter__content">
                      {chapter.image ? (
                        <figure className={`drift-menu-chapter__visual drift-menu-chapter__visual--${chapter.layout}`}>
                          <img src={assetUrl(chapter.image)} alt={chapter.imageAlt} loading="lazy" />
                        </figure>
                      ) : null}

                      <ul className={`drift-menu-sheet${chapter.image ? '' : ' drift-menu-sheet--full'}`}>
                        {chapter.items.map((item) => (
                          <li key={item.name} className="drift-menu-sheet__item">
                            <div className="drift-menu-sheet__row">
                              <span className="drift-menu-sheet__name">{item.name}</span>
                              <span className="drift-menu-sheet__dots" aria-hidden="true" />
                              <span className="drift-menu-sheet__price">${item.price}</span>
                            </div>
                            <p className="drift-menu-sheet__detail">{item.detail}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  {chapterIndex === 2 ? (
                    <ScrollReveal className="drift-menu-interlude" delay={60}>
                      <blockquote>
                        <p>
                          We cook what the coast offers that week. The menu is long
                          because the season is generous.
                        </p>
                      </blockquote>
                    </ScrollReveal>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="drift-reserve" className="drift-reserve">
          <div className="drift-reserve__layout">
            <ScrollReveal className="drift-reserve__atmosphere">
              <figure className="drift-reserve__visual">
                <img
                  src={assetUrl('/drift/dining-room.jpg')}
                  alt="Candlelit dining room at Drift Bistro"
                  loading="lazy"
                />
              </figure>
              <div className="drift-reserve__atmosphere-copy">
                <p className="drift-kicker">The room</p>
                <h2 className="drift-display">An evening, unhurried</h2>
                <p className="drift-reserve__atmosphere-lead">
                  Most tables are allotted two hours. For parties of eight or more,
                  our team will reach out to shape the night with you.
                </p>
                <ul className="drift-reserve__policies">
                  <li>Smart casual dress</li>
                  <li>Bar seating on a first-come basis</li>
                  <li>Chef&apos;s counter by request</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal className="drift-reserve__experience" delay={80}>
              <div className="drift-reserve__experience-head">
                <p className="drift-kicker">Reserve</p>
                <h2 className="drift-display">Hold your table</h2>
                <p className="drift-reserve__experience-lead">
                  Select a date, time, and party size. This is a sample flow for the
                  mockup, not a live reservation system.
                </p>
              </div>

              {reserveConfirmed ? (
                <div className="drift-reserve__confirmed" role="status">
                  <p className="drift-reserve__confirmed-label">Reservation confirmed</p>
                  <p className="drift-reserve__confirmed-ref">Ref · DR-4821</p>
                  <p className="drift-reserve__confirmed-name">{guestName}</p>
                  <p className="drift-reserve__confirmed-detail">
                    {reserveDate} at {reserveTime}
                  </p>
                  <p className="drift-reserve__confirmed-detail">
                    Party of {partySize} · {guestPhone}
                  </p>
                  <p className="drift-reserve__confirmed-note">
                    A confirmation text will arrive shortly. Please reply if your plans change.
                  </p>
                </div>
              ) : (
                <form className="drift-reserve__form" onSubmit={handleReserveSubmit}>
                  <fieldset className="drift-reserve__group">
                    <legend>Date</legend>
                    <div className="drift-reserve__dates" role="group" aria-label="Reservation date">
                      {reserveDates.map((date) => (
                        <button
                          key={date.value}
                          type="button"
                          className={`drift-reserve__date${reserveDate === date.value ? ' drift-reserve__date--active' : ''}`}
                          onClick={() => setReserveDate(date.value)}
                        >
                          {date.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="drift-reserve__group">
                    <legend>Time</legend>
                    <div className="drift-reserve__times" role="group" aria-label="Reservation time">
                      {reserveTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`drift-reserve__time${reserveTime === time ? ' drift-reserve__time--active' : ''}`}
                          onClick={() => setReserveTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="drift-reserve__group">
                    <legend>Party size</legend>
                    <div className="drift-reserve__sizes" role="group" aria-label="Party size">
                      {partySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className={`drift-reserve__size${partySize === size ? ' drift-reserve__size--active' : ''}`}
                          onClick={() => setPartySize(size)}
                        >
                          <span className="drift-reserve__size-value">{size}</span>
                          <span className="drift-reserve__size-label">guests</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="drift-reserve__group drift-reserve__group--contact">
                    <legend>Your details</legend>
                    <div className="drift-reserve__fields">
                      <label className="drift-reserve__field">
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
                      <label className="drift-reserve__field">
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
                  </fieldset>

                  <div className="drift-reserve__submit-row">
                    <p className="drift-reserve__summary">
                      {reserveDate} · {reserveTime} · party of {partySize}
                    </p>
                    <button type="submit" className="drift-btn drift-btn--gold">
                      Confirm reservation
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>

        <section id="drift-visit" className="drift-visit">
          <div className="drift-visit__banner">
            <img
              src={assetUrl('/drift/hero.jpg')}
              alt=""
              className="drift-visit__banner-photo"
              aria-hidden="true"
            />
            <div className="drift-visit__banner-scrim" aria-hidden="true" />
            <div className="drift-visit__banner-overlay">
              <p className="drift-kicker">Visit</p>
              <h2 className="drift-display drift-display--monument drift-visit__banner-title">
                9 Harbor Walk
                <span>Coastal District</span>
              </h2>
            </div>
          </div>

          <div className="drift-visit__grid">
            <ScrollReveal className="drift-visit__panel drift-visit__panel--hours">
              <p className="drift-visit__panel-label">Hours</p>
              <ul className="drift-visit__schedule">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className={`drift-visit__schedule-row${row.time === 'Closed' ? ' drift-visit__schedule-row--closed' : ''}`}
                  >
                    <div className="drift-visit__schedule-marker" aria-hidden="true" />
                    <div className="drift-visit__schedule-copy">
                      <p className="drift-visit__schedule-days">{row.days}</p>
                      <p className="drift-visit__schedule-time">{row.time}</p>
                      <p className="drift-visit__schedule-service">{row.service}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal className="drift-visit__panel drift-visit__panel--details" delay={80}>
              <p className="drift-visit__panel-label">Practical details</p>
              <dl className="drift-visit__details">
                {visitDetails.map((item) => (
                  <div key={item.label} className="drift-visit__detail">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="drift-visit__note">
                Jackets are appreciated, never required. Please arrive ten minutes before
                your reservation so we can welcome you properly.
              </p>
            </ScrollReveal>

            <ScrollReveal className="drift-visit__panel drift-visit__panel--map" delay={120}>
              <p className="drift-visit__panel-label">Directions</p>
              <a
                className="drift-visit__map"
                href="https://www.openstreetmap.org/#map=16/37.8095/-122.4138"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Drift Bistro location in OpenStreetMap"
              >
                <img
                  src={assetUrl('/drift/dining-room.jpg')}
                  alt="Map preview showing Drift Bistro on the harbor walk"
                  loading="lazy"
                />
                <span className="drift-visit__map-cta">Open in maps</span>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="drift-site__footer">
        <p className="drift-site__footer-logo">Drift Bistro</p>
        <p className="drift-site__footer-note">
          Sample design mockup by Brightside Studio. Not a live business site.
        </p>
      </footer>
    </div>
  )
}

export default DriftBistroSite
