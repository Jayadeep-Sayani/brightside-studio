import './Footer.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { assetUrl, routeHref } from '../utils/paths'
import { studioContact } from '../data/studioContact'
import { EmailIcon, InstagramIcon, PhoneIcon } from './StudioContactIcons'

const LOGO_SRC = assetUrl('/LOGO Image.png')

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Past Work', to: '/work' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact-form' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

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
              <ul className="footer__contact-links">
                <li>
                  <a
                    href={studioContact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                    <span>@brightsidestudiovictoria</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${studioContact.email}`}>
                    <EmailIcon />
                    <span>{studioContact.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${studioContact.phoneTel}`}>
                    <PhoneIcon />
                    <span>{studioContact.phoneDisplay}</span>
                  </a>
                </li>
              </ul>
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
