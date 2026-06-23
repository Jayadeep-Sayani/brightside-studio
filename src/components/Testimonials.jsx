import './Testimonials.css'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    id: 'harbor',
    quote:
      'Our new site finally feels like walking into the café. Customers mention the menu and hours page all the time, and we have seen more weekend reservations since launch.',
    name: 'Elena Marchetti',
    role: 'Owner, Harbor Café',
  },
  {
    id: 'lumen',
    quote:
      'The booking flow is so smooth that clients actually comment on it. The design captures our salon vibe perfectly without feeling fussy or overdone.',
    name: 'Priya Nair',
    role: 'Founder, Lumen Salon',
  },
  {
    id: 'drift',
    quote:
      'The animations and photography layout made our restaurant feel high end from the first scroll. We noticed more table inquiries within the first month.',
    name: 'Marcus Cole',
    role: 'Partner, Drift Bistro',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__inner">
        <ScrollReveal as="header" className="testimonials__header">
          <p className="testimonials__eyebrow">Testimonials</p>
          <h2 id="testimonials-title" className="testimonials__title">
            Loved by local businesses
          </h2>
          <p className="testimonials__intro">
            A few words from owners who wanted a site that felt as welcoming as
            their storefront.
          </p>
        </ScrollReveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className="testimonials__card-wrap"
              delay={index * 100}
            >
              <figure className="testimonials__card">
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
                <span className="testimonials__name">{item.name}</span>
                <span className="testimonials__role">{item.role}</span>
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
