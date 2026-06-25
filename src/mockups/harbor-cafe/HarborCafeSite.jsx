import { assetUrl } from '../../utils/paths'
import './HarborCafeSite.css'

const menuItems = [
  {
    name: 'Harbor Latte',
    note: 'Espresso, steamed milk, touch of vanilla',
    price: '$5.50',
  },
  {
    name: 'Cinnamon Morning Bun',
    note: 'Baked before sunrise, cream cheese glaze',
    price: '$4.25',
  },
  {
    name: 'Bay Shore Avocado Toast',
    note: 'Sourdough, herbs, chili flakes, soft egg',
    price: '$12.00',
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
      <div className="harbor-site__grain" aria-hidden="true" />

      <header className="harbor-site__header">
        <div className="harbor-site__header-inner">
          <a href="#top" className="harbor-site__logo">
            Harbor Café
          </a>
          <nav className="harbor-site__nav" aria-label="Harbor Café">
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#visit">Visit</a>
            <a href="#visit" className="harbor-site__nav-cta">
              Order Pickup
            </a>
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
                src={assetUrl('/CafeInterior.jpg')}
                alt="Warm harbor café interior with morning light"
                className="harbor-hero__photo"
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

        <section id="menu" className="harbor-menu">
          <div className="harbor-menu__inner">
            <header className="harbor-section-head">
              <p className="harbor-section-head__eyebrow">Today at the café</p>
              <h2 className="harbor-section-head__title">A few favorites worth trying</h2>
              <p className="harbor-section-head__lead">
                The menu shifts with the season. These are the plates and pours
                people ask for most mornings by the water.
              </p>
            </header>

            <ul className="harbor-menu__list">
              {menuItems.map((item, index) => (
                <li key={item.name} className="harbor-menu__item">
                  <span className="harbor-menu__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="harbor-menu__details">
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                  </div>
                  <span className="harbor-menu__price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="story" className="harbor-story">
          <div className="harbor-story__inner">
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
                picking up something sweet for the walk home, we are glad you
                found your way here.
              </p>
            </div>
          </div>
        </section>

        <section id="visit" className="harbor-visit">
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
              <a href="#top" className="harbor-btn harbor-btn--primary">
                Order for Pickup
              </a>
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
