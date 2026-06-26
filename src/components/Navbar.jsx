import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { assetUrl, routeHref } from '../utils/paths'
import { studioContact } from '../data/studioContact'
import { EmailIcon, InstagramIcon, PhoneIcon } from './StudioContactIcons'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Past Work', to: '/work' },
  { label: 'Services', to: '/#services' },
]

const LOGO_SRC = assetUrl('/LOGO Image.png')

function isLinkActive(to, pathname, hash) {
  if (to === '/about') return pathname === '/about'
  if (to === '/work') return pathname === '/work'
  if (to === '/') return pathname === '/' && (!hash || hash === '#home')
  if (to.startsWith('/#')) {
    return pathname === '/' && hash === to.slice(1)
  }
  return false
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const pageNavigate = usePageNavigate()

  const closeMenu = () => setMenuOpen(false)

  const goTo = (to) => {
    pageNavigate(to)
    closeMenu()
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a
        href={routeHref('/')}
        className="navbar__logo"
        onClick={(event) => {
          event.preventDefault()
          goTo('/')
        }}
      >
        <span className="navbar__logo-mark">
          <img
            src={LOGO_SRC}
            alt="Brightside Studio"
            className="navbar__logo-img"
          />
        </span>
      </a>

      <button
        type="button"
        className="navbar__toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="navbar__links">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.to, pathname, hash)

            return (
              <li key={link.to}>
                <a
                  href={routeHref(link.to)}
                  className={isActive ? 'navbar__link--active' : undefined}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    goTo(link.to)
                  }}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="navbar__actions">
          <a
            href={routeHref('/#contact-form')}
            className="navbar__cta"
            onClick={(event) => {
              event.preventDefault()
              goTo('/#contact-form')
            }}
          >
            Start a Project
          </a>

          <div className="navbar__socials">
            <a
              href={studioContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @brightsidestudiovictoria"
              onClick={closeMenu}
            >
              <InstagramIcon />
            </a>
            <a
              href={`mailto:${studioContact.email}`}
              aria-label={`Email ${studioContact.email}`}
              onClick={closeMenu}
            >
              <EmailIcon />
            </a>
            <a
              href={`tel:${studioContact.phoneTel}`}
              aria-label={`Call ${studioContact.phoneDisplay}`}
              onClick={closeMenu}
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
