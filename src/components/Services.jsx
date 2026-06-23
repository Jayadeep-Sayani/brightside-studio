import './Services.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'

const tiers = [
  {
    id: 'basic',
    name: 'Basic Site',
    price: 500,
    description:
      'A responsive, modern website that looks great on every device and covers everything your business needs to get online.',
    features: [
      'Responsive layout across phone, tablet, and desktop',
      'All essential pages for your business',
      'Clean, visually pleasing design',
      'Built on proven web design standards',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Site',
    price: 2000,
    description:
      'A standout site that goes beyond the usual playbook, built to capture attention and feel unmistakably like your brand.',
    features: [
      'Bold custom design that breaks from templates',
      'Animated elements and scroll interactions',
      'Tailored to your business vibe and personality',
      'Crafted to hook customers from the first second',
    ],
    featured: true,
  },
]

function Services() {
  const pageNavigate = usePageNavigate()

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <ScrollReveal as="header" className="services__header">
          <p className="services__eyebrow">Services</p>
          <h2 className="services__title">Choose your starting point</h2>
          <p className="services__intro">
            Whether you need a solid foundation or a site that stops people in
            their tracks, both packages are built to help local businesses show
            up online with confidence.
          </p>
        </ScrollReveal>

        <div className="services__grid">
          {tiers.map((tier, index) => (
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
                  <span className="services__price-amount">${tier.price}</span>
                  <span className="services__price-currency">CAD</span>
                </p>
              </div>

              <p className="services__card-desc">{tier.description}</p>

              <ul className="services__features">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                href="/#contact"
                className="services__cta services__cta--primary"
                onClick={(event) => {
                  event.preventDefault()
                  pageNavigate('/#contact')
                }}
              >
                Start a Project
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
