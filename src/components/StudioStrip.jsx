import './StudioStrip.css'
import ScrollReveal from './ScrollReveal'

const marqueeItems = [
  'Coastal craft',
  'Local character',
  'Thoughtful motion',
  'Editorial layout',
  'Discoverable by design',
  'Built for real places',
]

const stats = [
  {
    value: '3',
    label: 'Industries sampled',
    detail: 'Café, salon, restaurant',
  },
  {
    value: '2 days',
    label: 'Typical reply time',
    detail: 'Ideas, scope, and timing',
  },
  {
    value: '100%',
    label: 'Custom design',
    detail: 'No templates, no shortcuts',
  },
]

function StudioStrip() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <section className="studio-strip" aria-label="Studio approach">
      <div className="studio-strip__marquee" aria-hidden="true">
        <div className="studio-strip__marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="studio-strip__marquee-item">
              {item}
              <span className="studio-strip__marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      <div className="studio-strip__inner">
        <div className="studio-strip__grid">
          <ScrollReveal className="studio-strip__manifesto-wrap">
            <div className="studio-strip__manifesto">
              <p className="studio-strip__eyebrow">The Brightside way</p>
              <blockquote className="studio-strip__quote">
                <p>
                  Local businesses deserve sites that feel as considered as the
                  spaces they run, not another template with their logo dropped in.
                </p>
              </blockquote>
              <p className="studio-strip__body">
                We design for warmth, clarity, and the small details that make a
                neighborhood brand memorable. Every layout starts with how your
                business feels in person, then earns attention online.
              </p>
            </div>
          </ScrollReveal>

          <div className="studio-strip__stats">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={stat.label}
                className="studio-strip__stat-wrap"
                delay={80 + index * 80}
              >
                <div className="studio-strip__stat">
                  <p className="studio-strip__stat-value">{stat.value}</p>
                  <p className="studio-strip__stat-label">{stat.label}</p>
                  <p className="studio-strip__stat-detail">{stat.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioStrip
