import './MockupPreviews.css'
import { assetUrl } from '../utils/paths'

export function MockupChrome({ url, variant }) {
  return (
    <div className={`mockup__browser mockup__browser--${variant}`}>
      <div className="mockup__dots">
        <span /><span /><span />
      </div>
      <div className="mockup__url">{url}</div>
    </div>
  )
}

function MockupMeta({ name, type }) {
  return (
    <div className="mockup__meta">
      <span className="mockup__meta-name">{name}</span>
      <span className="mockup__meta-type">{type}</span>
    </div>
  )
}

export function CafeMockup({ name, type }) {
  return (
    <div className="mockup mockup--cafe">
      <MockupChrome url="harborcafe.co" variant="cafe" />
      <div className="mockup__screen mockup__screen--flush">
        <div className="site-preview site-preview--cafe">
          <header className="site-preview__nav">
            <span className="site-preview__logo">Harbor Café</span>
            <nav className="site-preview__links">
              <span>Menu</span>
              <span>Hours</span>
              <span>Order</span>
            </nav>
          </header>
          <div className="site-preview__hero site-preview__hero--split">
            <div className="site-preview__copy">
              <p className="site-preview__eyebrow">Est. 2018 · Waterfront District</p>
              <h2 className="site-preview__headline">
                Morning light.<br />Harbor coffee.
              </h2>
              <p className="site-preview__text">
                Small-batch roasts, baked fresh daily, and a porch that faces the bay.
              </p>
              <span className="site-preview__btn site-preview__btn--cafe">
                See Today&apos;s Menu
              </span>
            </div>
            <div className="site-preview__visual site-preview__visual--cafe" aria-hidden="true">
              <img
                className="site-preview__photo"
                src={assetUrl('/CafeInterior.jpg')}
                alt=""
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <MockupMeta name={name} type={type} />
    </div>
  )
}

export function SalonMockup({ name, type }) {
  return (
    <div className="mockup mockup--salon">
      <MockupChrome url="lumensalon.com" variant="salon" />
      <div className="mockup__screen mockup__screen--flush">
        <div className="site-preview site-preview--salon">
          <div className="site-preview__hero site-preview__hero--salon">
            <div className="site-preview__visual site-preview__visual--salon" aria-hidden="true">
              <img
                className="site-preview__photo"
                src={assetUrl('/NailSalon.jpeg')}
                alt=""
                draggable={false}
              />
            </div>
            <header className="site-preview__nav site-preview__nav--salon">
              <span className="site-preview__logo">LUMEN</span>
              <nav className="site-preview__links">
                <span>Services</span>
                <span>Book</span>
              </nav>
            </header>
            <div className="site-preview__salon-body">
              <p className="site-preview__eyebrow">Hair · Skin · Nails</p>
              <h2 className="site-preview__headline">
                Illuminate your<br />everyday glow
              </h2>
              <div className="site-preview__booking-row">
                <div className="site-preview__slots">
                  <span>10:00</span>
                  <span className="site-preview__slot--active">2:30</span>
                  <span>4:15</span>
                </div>
                <span className="site-preview__btn site-preview__btn--salon">Book</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MockupMeta name={name} type={type} />
    </div>
  )
}

export function BistroMockup({ name, type }) {
  return (
    <div className="mockup mockup--bistro">
      <MockupChrome url="driftbistro.com" variant="bistro" />
      <div className="mockup__screen mockup__screen--flush">
        <div className="site-preview site-preview--bistro">
          <div className="site-preview__hero site-preview__hero--overlay">
            <div className="site-preview__visual site-preview__visual--bistro" aria-hidden="true">
              <img
                className="site-preview__photo"
                src={assetUrl('/EveningDining.webp')}
                alt=""
                draggable={false}
              />
            </div>
            <header className="site-preview__nav site-preview__nav--overlay">
              <span className="site-preview__logo">Drift Bistro</span>
              <nav className="site-preview__links">
                <span>Menu</span>
                <span>Reserve</span>
              </nav>
            </header>
            <div className="site-preview__overlay-copy">
              <p className="site-preview__eyebrow">Coastal California cuisine</p>
              <h2 className="site-preview__headline">
                Where the tide<br />meets the table
              </h2>
              <p className="site-preview__text">
                Seasonal plates, natural wines, and long dinners by the water.
              </p>
              <span className="site-preview__btn site-preview__btn--bistro">
                Reserve a Table
              </span>
            </div>
          </div>
        </div>
      </div>
      <MockupMeta name={name} type={type} />
    </div>
  )
}
