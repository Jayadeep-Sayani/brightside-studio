import './Services.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { routeHref } from '../utils/paths'
import { basicFeatures, serviceTiers } from '../data/packages'

function ServiceCard({ tier, delay, pageNavigate }) {
  return (
    <ScrollReveal className="services__card-wrap" delay={delay}>
      <article
        className={`services__card${tier.featured ? ' services__card--featured' : ''}${tier.id === 'maintenance' ? ' services__card--maintenance' : ''}`}
      >
        {tier.featured && <span className="services__badge">Most impact</span>}

        <div className="services__card-top">
          <h3 className="services__card-name">{tier.name}</h3>
          <p className="services__price">
            <span className="services__price-amount">${tier.price.toLocaleString()}</span>
            {tier.interval ? (
              <span className="services__price-interval">{tier.interval}</span>
            ) : (
              <span className="services__price-currency">CAD</span>
            )}
          </p>
        </div>

        <p className="services__card-desc">{tier.description}</p>

        {tier.includesBasic ? (
          <div className="services__feature-groups">
            <div className="services__includes">
              <p className="services__includes-label">Includes Basic Site</p>
              <ul className="services__includes-list">
                {basicFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="services__plus-divider" aria-hidden="true">
              <span>Plus</span>
            </div>

            <ul className="services__features services__features--extra">
              {tier.extraFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="services__features">
            {tier.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <a
          href={routeHref('/#contact-form')}
          className="services__cta services__cta--primary"
          onClick={(event) => {
            event.preventDefault()
            pageNavigate('/#contact-form')
          }}
        >
          {tier.id === 'maintenance' ? 'Add Maintenance' : 'Start a Project'}
        </a>
      </article>
    </ScrollReveal>
  )
}

function Services() {
  const pageNavigate = usePageNavigate()
  const siteTiers = serviceTiers.filter((tier) => tier.id !== 'maintenance')
  const maintenanceTier = serviceTiers.find((tier) => tier.id === 'maintenance')

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <ScrollReveal as="header" className="services__header">
          <p className="services__eyebrow">Services</p>
          <h2 className="services__title">Choose your starting point</h2>
          <p className="services__intro">
            Whether you need a solid foundation, a site that stops people in
            their tracks, or ongoing help keeping things current, we have a
            package built for local businesses ready to show up online.
          </p>
        </ScrollReveal>

        <div className="services__layout">
          <div className="services__site-grid">
            {siteTiers.map((tier, index) => (
              <ServiceCard
                key={tier.id}
                tier={tier}
                delay={index * 120}
                pageNavigate={pageNavigate}
              />
            ))}
          </div>

          {maintenanceTier && (
            <div className="services__maintenance-row">
              <ServiceCard
                tier={maintenanceTier}
                delay={240}
                pageNavigate={pageNavigate}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
