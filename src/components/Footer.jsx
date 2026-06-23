import './Footer.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { assetUrl, routeHref } from '../utils/paths'

const LOGO_SRC = assetUrl('/LOGO Image.png')

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Past Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/#privacy' },
  { label: 'Terms of Service', to: '/#terms' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const pageNavigate = usePageNavigate()

  return (
    <footer className="footer">
      <ScrollReveal className="footer__reveal scroll-reveal--fade">
        <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href={routeHref('/')}
              className="footer__logo"
              onClick={(event) => {
                event.preventDefault()
                pageNavigate('/')
              }}
            >
              <span className="footer__logo-mark">
                <img src={LOGO_SRC} alt="Brightside Studio" className="footer__logo-img" />
              </span>
            </a>
            <p className="footer__tagline">
              Warm, discoverable websites for local businesses across Canada.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-group">
              <h2 className="footer__nav-title">Explore</h2>
              <ul className="footer__links">
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <a
                      href={routeHref(link.to)}
                      onClick={(event) => {
                        event.preventDefault()
                        pageNavigate(link.to)
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-group">
              <h2 className="footer__nav-title">Legal</h2>
              <ul className="footer__links">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <a
                      href={routeHref(link.to)}
                      onClick={(event) => {
                        event.preventDefault()
                        pageNavigate(link.to)
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-group footer__nav-group--social">
              <h2 className="footer__nav-title">Connect</h2>
              <p className="footer__social-text">
                Follow along for launches, mockups, and studio updates.
              </p>
              <div className="footer__socials">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Brightside Studio. All rights reserved.
          </p>
          <p className="footer__fine-print">
            Sample mockups on this site are design work, not live client sites.
          </p>
        </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}

export default Footer
