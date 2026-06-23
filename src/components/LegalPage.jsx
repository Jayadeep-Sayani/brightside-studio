import './LegalPage.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { routeHref } from '../utils/paths'

function LegalPage({ title, intro, updated, sections }) {
  const pageNavigate = usePageNavigate()

  return (
    <section className="legal-page" aria-labelledby="legal-page-title">
      <div className="hero-band hero-band--page legal-page__hero">
        <div className="hero-band__mesh" aria-hidden="true" />
        <div className="hero-band__grain" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--gold" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--blue" aria-hidden="true" />
        <div className="hero-band__inner">
          <ScrollReveal as="header" className="hero-band__header">
            <p className="hero-band__eyebrow">Legal</p>
            <h1 id="legal-page-title" className="hero-band__title">
              {title}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      <div className="legal-page__body">
        <ScrollReveal className="legal-page__content" delay={80}>
          <p className="legal-page__updated">Last updated: {updated}</p>
          <p className="legal-page__intro">{intro}</p>

          {sections.map((section) => (
            <section key={section.id} className="legal-page__section" aria-labelledby={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contactLink && (
                <p>
                  <a
                    href={routeHref('/#contact-form')}
                    onClick={(event) => {
                      event.preventDefault()
                      pageNavigate('/#contact-form')
                    }}
                  >
                    Contact us
                  </a>{' '}
                  through our project inquiry form.
                </p>
              )}
            </section>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

export default LegalPage
