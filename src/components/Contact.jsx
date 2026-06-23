import { useState } from 'react'
import './Contact.css'
import ScrollReveal from './ScrollReveal'

const packageOptions = [
  { value: 'basic', label: 'Basic Site', price: '$500 CAD' },
  { value: 'advanced', label: 'Advanced Site', price: '$2,000 CAD' },
  { value: 'unsure', label: 'Not sure yet', price: 'Happy to advise' },
]

const steps = [
  'Share a few details about your business and goals.',
  'We reply within two business days with ideas and timing.',
  'We align on scope, then design and build your site.',
]

const initialForm = {
  name: '',
  email: '',
  business: '',
  package: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />

      <div className="contact__inner">
        <ScrollReveal as="header" className="contact__header">
          <p className="contact__eyebrow">Contact</p>
          <h2 id="contact-title" className="contact__title">
            Let&apos;s build something bright
          </h2>
          <p className="contact__intro">
            Tell us about your business and what you want your site to do. The
            more context you share, the better we can shape a plan for you.
          </p>
        </ScrollReveal>

        <ScrollReveal className="contact__shell-wrap" delay={100}>
          <div className="contact__shell">
          <aside className="contact__aside">
            <h3 className="contact__aside-title">How it works</h3>
            <ol className="contact__steps">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="contact__aside-meta">
              <div className="contact__meta-item">
                <span className="contact__meta-label">Response time</span>
                <span className="contact__meta-value">Within 2 business days</span>
              </div>
              <div className="contact__meta-item">
                <span className="contact__meta-label">Based in</span>
                <span className="contact__meta-value">Canada</span>
              </div>
            </div>
          </aside>

          <div className="contact__panel">
            {submitted ? (
              <div className="contact__success" role="status" aria-live="polite">
                <span className="contact__success-icon" aria-hidden="true">
                  ✓
                </span>
                <p className="contact__success-title">Message sent</p>
                <p className="contact__success-text">
                  Thanks for reaching out. We will review your note and reply
                  soon.
                </p>
                <button
                  type="button"
                  className="contact__success-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row contact__row--2">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-business">Business name</label>
                  <input
                    id="contact-business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>

                <fieldset className="contact__fieldset">
                  <legend className="contact__fieldset-legend">Package interest</legend>
                  <div className="contact__package-grid">
                    {packageOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`contact__package-option${
                          form.package === option.value
                            ? ' contact__package-option--active'
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={option.value}
                          checked={form.package === option.value}
                          onChange={handleChange}
                          required
                        />
                        <span className="contact__package-name">{option.label}</span>
                        <span className="contact__package-price">{option.price}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="contact__field">
                  <label htmlFor="contact-message">Your message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What does your business do, and what would you like your site to achieve?"
                  />
                </div>

                <div className="contact__form-footer">
                  <p className="contact__fine-print">
                    No spam. Just a thoughtful reply about your project.
                  </p>
                  <button type="submit" className="contact__submit">
                    Start a Project
                  </button>
                </div>
              </form>
            )}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
