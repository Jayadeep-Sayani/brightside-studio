import './PastWork.css'
import ScrollReveal from './ScrollReveal'
import { CafeMockup, SalonMockup, BistroMockup } from './MockupPreviews'
import { projects } from '../data/projects'
import { useMockupExpand } from '../context/MockupExpandContext'
import { usePageNavigate } from '../hooks/usePageNavigate'

const mockupMap = {
  cafe: CafeMockup,
  salon: SalonMockup,
  bistro: BistroMockup,
}

function PastWork() {
  const pageNavigate = usePageNavigate()
  const { openDemo } = useMockupExpand()

  return (
    <section className="past-work" aria-labelledby="past-work-title">
      <div className="hero-band hero-band--page past-work__hero">
        <div className="hero-band__mesh" aria-hidden="true" />
        <div className="hero-band__grain" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--gold" aria-hidden="true" />
        <div className="hero-band__orb hero-band__orb--blue" aria-hidden="true" />
        <div className="hero-band__inner past-work__hero-inner">
          <ScrollReveal as="header" className="hero-band__header past-work__header">
            <p className="hero-band__eyebrow">Past Work</p>
            <h1 id="past-work-title" className="hero-band__title past-work__title">
              Sites built for{' '}
              <em className="hero-band__accent">local personality</em>
            </h1>
            <p className="hero-band__lead past-work__lead">
              A selection of design mockups created for cafés, restaurants, and
              neighborhood businesses, each shaped around how the brand feels in
              person.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="past-work__body">
        <div className="past-work__inner">
          <ScrollReveal className="past-work__note-wrap" delay={60}>
            <p className="past-work__note">
              These are sample mockups from the studio, not live client sites.
              They show the range of layouts, tones, and industries we design for.
            </p>
          </ScrollReveal>

          <div className="past-work__list">
            {projects.map((project, index) => {
              const Mockup = mockupMap[project.theme]
              const reversed = index % 2 === 1
              const isExpandable = Boolean(project.demoId)

              return (
                <ScrollReveal
                  key={project.id}
                  className={`past-work__item-wrap${reversed ? ' past-work__item-wrap--reverse' : ''}`}
                  delay={80 + index * 80}
                >
                  <article className="past-work__item">
                    {isExpandable ? (
                      <button
                        type="button"
                        className="past-work__preview past-work__preview--expandable"
                        onClick={() => openDemo(project.demoId)}
                        aria-label={`Open ${project.name} mockup preview`}
                      >
                        <Mockup name={project.name} type={project.type} />
                      </button>
                    ) : (
                      <div className="past-work__preview">
                        <Mockup name={project.name} type={project.type} />
                      </div>
                    )}
                    <div className="past-work__copy">
                      <p className="past-work__item-type">{project.type}</p>
                      <h2 className="past-work__item-name">{project.name}</h2>
                      <p className="past-work__item-url">{project.url}</p>
                      <p className="past-work__item-desc">{project.description}</p>
                      <ul className="past-work__tags">
                        {project.highlights.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                      {isExpandable && (
                        <p className="past-work__demo-hint">Click the preview to explore the full mockup</p>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal className="past-work__cta-wrap" delay={120}>
            <div className="past-work__cta-bar">
              <div className="past-work__cta-copy">
                <p className="past-work__cta-title">Want something like this for your business?</p>
                <p className="past-work__cta-sub">
                  Tell us about your brand and we will shape a site that feels
                  unmistakably yours.
                </p>
              </div>
              <button
                type="button"
                className="past-work__cta"
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

export default PastWork
