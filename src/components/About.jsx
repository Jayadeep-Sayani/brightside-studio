import './About.css'
import ScrollReveal from './ScrollReveal'

const highlights = [
  { label: 'School', value: 'UVic · Computer Science' },
  { label: 'Experience', value: '4+ years building websites' },
  { label: 'Focus', value: 'Local brands & neighborhood spots' },
]

import { usePageNavigate } from '../hooks/usePageNavigate'

function About() {
  const pageNavigate = usePageNavigate()

  return (
    <main className="about-page" aria-labelledby="about-title">
      <div className="about__inner">
        <ScrollReveal as="header" className="about__header">
          <p className="about__eyebrow">About</p>
          <h2 id="about-title" className="about__title">
            Making the city more interesting, one business at a time
          </h2>
          <p className="about__lead">
            Brightside Studio exists to help local brands show up online with the
            same care they put into their storefronts. When neighborhood
            businesses shine, the whole city feels more alive.
          </p>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal className="about__panel-wrap" delay={80}>
            <article className="about__panel about__panel--mission">
              <h3 className="about__panel-title">Our mission</h3>
              <p>
                I believe great cities are built from great places to go. A
                polished website does more than look nice. It helps people find
                the café worth trying, the salon that fits their style, the
                restaurant they keep coming back to.
              </p>
              <p>
                Every site I build is one more local brand that feels
                professional, welcoming, and easy to trust. Those small wins
                stack up. More discovery. More foot traffic. More personality on
                every block. That is the kind of city I want to live in, and
                that is what I am working toward.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal className="about__panel-wrap" delay={160}>
            <article className="about__panel about__panel--values">
              <h3 className="about__panel-title">Our values</h3>
              <p>
                Your website should match the exact vibe you are going for. Not
                almost. Not close enough. The real thing.
              </p>
              <p>
                That might mean extra revisions, unusual layout ideas, or
                chasing a feeling that is hard to put into words. We lean in
                anyway. Nothing is inconvenient when our goal is the same as
                yours: a site that feels unmistakably like your business.
              </p>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal className="about__owner-wrap" delay={120}>
          <article className="about__owner">
            <div className="about__owner-mark" aria-hidden="true">
              <span>B</span>
            </div>
            <div className="about__owner-copy">
              <p className="about__owner-eyebrow">The owner</p>
              <h3 className="about__owner-name">Built by a local, for locals</h3>
              <p>
                I am a computer science student at the University of Victoria
                with four years of experience making websites for businesses
                around me. I started Brightside Studio because I kept seeing
                owners with something special in person and something forgettable
                online. I wanted to close that gap.
              </p>
              <p>
                I care about clean, reliable builds and design that feels right,
                but the part that matters most is helping owners feel proud when
                someone lands on their site for the first time.
              </p>
              <ul className="about__highlights">
                {highlights.map((item) => (
                  <li key={item.label}>
                    <span className="about__highlight-label">{item.label}</span>
                    <span className="about__highlight-value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal className="about__cta-wrap" delay={180}>
          <div className="about__cta-bar">
            <p>Ready to help your business shine in the community?</p>
            <button
              type="button"
              className="about__cta"
              onClick={() => pageNavigate('/#contact')}
            >
              Start a Project
            </button>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}

export default About
