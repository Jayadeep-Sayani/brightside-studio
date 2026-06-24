import './Services.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'
import { routeHref } from '../utils/paths'
import { serviceTiers } from '../data/packages'

function Services() {
  const pageNavigate = usePageNavigate()

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

        <div className="services__grid">
          {serviceTiers.map((tier, index) => (
            <ScrollReveal
              key={tier.id}
              className="services__card-wrap"
              delay={index * 120}
            >
              <article
                className={`services__card${tier.featured ? ' services__card--featured' : ''}`}
              >
                {tier.featured && (
                  <span className="services__badge">Most impact</span>
                )}

                <div className="services__card-top">
                  <h3 className="services__card-name">{tier.name}</h3>
                  <p className="services__price">
                    <span className="services__price-amount">
                      ${tier.price.toLocaleString()}
                    </span>
                    {tier.interval ? (
                      <span className="services__price-interval">{tier.interval}</span>
                    ) : (
                      <span className="services__price-currency">CAD</span>
                    )}
                  </p>
                </div>

                <p className="services__card-desc">{tier.description}</p>

                <ul className="services__features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
