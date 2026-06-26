import './Testimonials.css'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    id: 'harbor',
    featured: true,
    quote:
      'I wanted something that felt like walking into our café, not a generic template. This direction nailed the warmth and menu focus I had in mind.',
    context: 'Harbor Café mockup',
  },
  {
    id: 'lumen',
    quote:
      'The booking flow feels effortless, and the design captures our salon vibe without feeling fussy or overdone. Exactly what I pictured.',
    context: 'Lumen Salon mockup',
  },
  {
    id: 'drift',
    quote:
      'The photography layout and motion made the restaurant feel high-end from the first scroll. This is the tone I was hoping to see.',
    context: 'Drift Bistro mockup',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__glow" aria-hidden="true" />
      <div className="testimonials__mesh" aria-hidden="true" />

      <div className="testimonials__inner">
        <ScrollReveal as="header" className="testimonials__header">
          <p className="testimonials__eyebrow">Testimonials</p>
          <h2 id="testimonials-title" className="testimonials__title">
            What they asked for
          </h2>
          <p className="testimonials__intro">
            Notes from people who wanted a mockup shaped around their business.
            These are not live site owners, just the direction they had in mind.
          </p>
        </ScrollReveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className={`testimonials__card-wrap${
                item.featured ? ' testimonials__card-wrap--featured' : ''
              }`}
              delay={index * 100}
            >
              <figure
                className={`testimonials__card${
                  item.featured ? ' testimonials__card--featured' : ''
                }`}
              >
                <div className="testimonials__stars" aria-hidden="true">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <blockquote className="testimonials__quote">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="testimonials__attribution">
                  <span className="testimonials__context">{item.context}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
