import { assetUrl } from '../../utils/paths'
import './HarborCafeSite.css'

const menuItems = [
  {
    name: 'Harbor Latte',
    note: 'Espresso, steamed milk, touch of vanilla',
    price: '$5.50',
    image: '/harbor/menu-latte.jpg',
    alt: 'Steamed latte in a ceramic cup',
  },
  {
    name: 'Cinnamon Morning Bun',
    note: 'Baked before sunrise, cream cheese glaze',
    price: '$4.25',
    image: '/harbor/menu-bun.jpg',
    alt: 'Fresh cinnamon roll with icing',
  },
  {
    name: 'Bay Shore Avocado Toast',
    note: 'Sourdough, herbs, chili flakes, soft egg',
    price: '$12.00',
    image: '/harbor/menu-toast.jpg',
    alt: 'Avocado toast on sourdough with herbs',
  },
]

const galleryImages = [
  {
    src: '/harbor/gallery-pour.jpg',
    alt: 'Barista pouring steamed milk into espresso',
    caption: 'Poured to order',
    layout: 'tall',
  },
  {
    src: '/harbor/gallery-pastries.jpg',
    alt: 'Pastry case filled with morning bakes',
    caption: 'From the oven at dawn',
    layout: 'wide',
  },
  {
    src: '/harbor/gallery-porch.jpg',
    alt: 'Outdoor café seating with morning light',
    caption: 'Porch facing the bay',
    layout: 'square',
  },
  {
    src: '/harbor/gallery-table.jpg',
    alt: 'Coffee and pastry on a wooden café table',
    caption: 'A table for two',
    layout: 'square',
  },
]

const hours = [
  { days: 'Monday – Friday', time: '7:00 am – 4:00 pm' },
  { days: 'Saturday', time: '8:00 am – 5:00 pm' },
  { days: 'Sunday', time: '8:00 am – 5:00 pm' },
]

function HarborCafeSite() {
  return (
    <div className="harbor-site">
      <header className="harbor-site__header">
        <div className="harbor-site__header-inner">
          <a href="#top" className="harbor-site__logo">
            Harbor Café
          </a>
          <nav className="harbor-site__nav" aria-label="Harbor Café">
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Hours</a>
            <a href="#story">Our Story</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="harbor-hero">
          <div className="harbor-hero__copy">
            <p className="harbor-hero__eyebrow">Est. 2018 · Waterfront District</p>
            <h1 className="harbor-hero__title">
              Morning light.
              <span>Harbor coffee.</span>
            </h1>
            <p className="harbor-hero__lead">
              Small-batch roasts, pastries pulled warm from the oven, and a porch
              that faces the bay. The kind of place you slow down for.
            </p>
            <div className="harbor-hero__actions">
              <a href="#menu" className="harbor-btn harbor-btn--primary">
                See Today&apos;s Menu
              </a>
              <a href="#visit" className="harbor-btn harbor-btn--ghost">
                Hours &amp; Location
              </a>
            </div>
          </div>

          <div className="harbor-hero__visual">
            <div className="harbor-hero__frame">
              <img
                src={assetUrl('/HarborCafeHero.jpg')}
                alt="Warm harbor café interior with morning light"
                className="harbor-hero__photo"
                width={1600}
                height={1097}
                decoding="async"
              />
            </div>
            <p className="harbor-hero__caption">Open from first light</p>
          </div>
        </section>

        <div className="harbor-ticker" aria-hidden="true">
          <div className="harbor-ticker__track">
            <span>Small-batch roasts</span>
            <span>Baked fresh daily</span>
            <span>Waterfront porch seating</span>
            <span>Local honey &amp; seasonal fruit</span>
            <span>Small-batch roasts</span>
            <span>Baked fresh daily</span>
            <span>Waterfront porch seating</span>
            <span>Local honey &amp; seasonal fruit</span>
          </div>
        </div>

        <section id="menu" className="harbor-section harbor-menu">
          <div className="harbor-menu__inner">
            <header className="harbor-section-head">
              <p className="harbor-section-head__eyebrow">Today at the café</p>
              <h2 className="harbor-section-head__title">A few favorites worth trying</h2>
              <p className="harbor-section-head__lead">
                The menu shifts with the season. These are the plates and pours
                people ask for most mornings by the water.
              </p>
            </header>

            <ul className="harbor-menu__grid">
              {menuItems.map((item) => (
                <li key={item.name} className="harbor-menu__card">
                  <div className="harbor-menu__thumb">
                    <img src={assetUrl(item.image)} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="harbor-menu__body">
                    <div className="harbor-menu__top">
                      <h3>{item.name}</h3>
                      <span className="harbor-menu__price">{item.price}</span>
                    </div>
                    <p>{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="harbor-section harbor-gallery">
          <div className="harbor-gallery__inner">
            <header className="harbor-section-head harbor-section-head--center">
              <p className="harbor-section-head__eyebrow">Inside the café</p>
              <h2 className="harbor-section-head__title">Moments from the harbor</h2>
              <p className="harbor-section-head__lead">
                Warm light, fresh bakes, and the quiet hum of a morning by the water.
              </p>
            </header>

            <div className="harbor-gallery__grid">
              {galleryImages.map((item) => (
                <figure
                  key={item.src}
                  className={`harbor-gallery__item harbor-gallery__item--${item.layout}`}
                >
                  <div className="harbor-gallery__frame">
                    <img src={assetUrl(item.src)} alt={item.alt} loading="lazy" />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="harbor-section harbor-story">
          <div className="harbor-story__inner">
            <div className="harbor-story__media">
              <img
                src={assetUrl('/harbor/gallery-table.jpg')}
                alt="Coffee and pastry on a wooden table"
                className="harbor-story__photo"
                loading="lazy"
              />
              <p className="harbor-story__photo-caption">Where mornings linger</p>
            </div>
            <div className="harbor-story__content">
              <blockquote className="harbor-story__quote">
                <p>
                  We opened Harbor Café for the quiet hour before the city wakes,
                  when the bay is still and the room smells like fresh grounds.
                </p>
              </blockquote>
              <div className="harbor-story__copy">
                <p className="harbor-section-head__eyebrow">Our story</p>
                <h2 className="harbor-section-head__title">Built for slow mornings</h2>
                <p>
                  Every cup is roasted in small batches and every loaf is mixed by
                  hand before dawn. We wanted a space that felt like the porch at
                  your favorite house: warm wood, worn books, and nowhere you need
                  to be right away.
                </p>
                <p>
                  Whether you are meeting a friend, reading before work, or
                  lingering over one more cup, we are glad you found your way here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="harbor-section harbor-visit">
          <div className="harbor-visit__inner">
            <div className="harbor-visit__card harbor-visit__card--hours">
              <p className="harbor-section-head__eyebrow">Hours</p>
              <h2 className="harbor-visit__title">When we&apos;re open</h2>
              <ul className="harbor-visit__hours">
                {hours.map((row) => (
                  <li key={row.days}>
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="harbor-visit__card harbor-visit__card--location">
              <p className="harbor-section-head__eyebrow">Find us</p>
              <h2 className="harbor-visit__title">On the waterfront</h2>
              <p className="harbor-visit__address">
                14 Pier Lane
                <br />
                Waterfront District
              </p>
              <p className="harbor-visit__note">
                Street parking along the harbor walk. Patio seats fill quickly on
                sunny weekends.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="harbor-site__footer">
        <p className="harbor-site__footer-logo">Harbor Café</p>
        <p className="harbor-site__footer-note">
          Sample design mockup by Brightside Studio. Not a live business site.
        </p>
      </footer>
    </div>
  )
}

export default HarborCafeSite
