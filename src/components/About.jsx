import './About.css'
import ScrollReveal from './ScrollReveal'
import { usePageNavigate } from '../hooks/usePageNavigate'

const impacts = [
  {
    title: 'Discovery',
    text: 'Help people find the café worth trying, the salon that fits their style, the restaurant they keep coming back to.',
  },
  {
    title: 'Foot traffic',
    text: 'A polished site turns curiosity into visits, bringing more walk-ins, bookings, and repeat customers to your block.',
  },
  {
    title: 'Personality',
    text: 'Every great local brand online makes the whole city feel more alive, interesting, and worth exploring.',
  },
]

const values = [
  {
    title: 'Exact vibe',
    text: 'Your website should match the feeling you are going for. Not almost. Not close enough. The real thing.',
  },
  {
    title: 'We lean in',
    text: 'Extra revisions, unusual layouts, chasing a hard-to-describe feeling. Nothing is inconvenient when the goal is right.',
  },
  {
    title: 'Shared goal',
    text: 'A site that feels unmistakably like your business. That is what we are both working toward.',
  },
]

function About() {
  const pageNavigate = usePageNavigate()

  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="hero-band hero-band--page about__hero">
        <div className="hero-band__mesh" aria-hidden="true" />
        <div className="hero-band__grain" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--gold" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--blue" aria-hidden="true" />
        <div className="hero-band__inner about__hero-inner">
          <ScrollReveal as="header" className="hero-band__header about__header">
            <p className="hero-band__eyebrow">About</p>
            <h1 id="about-title" className="hero-band__title about__title">
              Making the city more interesting,{' '}
              <em className="hero-band__accent">one business at a time</em>
            </h1>
            <p className="hero-band__lead about__lead">
              Brightside Studio helps local brands show up online with the same
              care they put into their storefronts.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="about__body">
        <div className="about__inner">
          <ScrollReveal className="about__quote-wrap" delay={60}>
            <blockquote className="about__quote">
              <p>
                Great cities are built from great places to go. Every site we
                build is one more local brand that feels professional, welcoming,
                and easy to trust.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal as="header" className="about__section-head" delay={80}>
            <p className="about__section-eyebrow">Why it matters</p>
            <h2 className="about__section-title">Small wins that stack up</h2>
          </ScrollReveal>

          <div className="about__impacts">
            {impacts.map((item, index) => (
              <ScrollReveal
                key={item.title}
                className="about__impact-wrap"
                delay={100 + index * 80}
              >
                <article className="about__impact">
                  <span className="about__impact-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="about__impact-title">{item.title}</h3>
                  <p className="about__impact-text">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal as="header" className="about__section-head" delay={60}>
            <p className="about__section-eyebrow">Our values</p>
            <h2 className="about__section-title">How we work with you</h2>
          </ScrollReveal>

          <div className="about__values">
            {values.map((item, index) => (
              <ScrollReveal
                key={item.title}
                className="about__value-wrap"
                delay={80 + index * 80}
              >
                <article className="about__value">
                  <h3 className="about__value-title">{item.title}</h3>
                  <p className="about__value-text">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="about__cta-wrap" delay={120}>
            <div className="about__cta-bar">
              <div className="about__cta-copy">
                <p className="about__cta-title">Ready to shine in your community?</p>
                <p className="about__cta-sub">
                  Tell us about your business and we will help you show up online
                  with confidence.
                </p>
              </div>
              <button
                type="button"
                className="about__cta"
                onClick={() => pageNavigate('/#contact-form')}
              >
                Start a Project
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
