import { useState } from 'react'
import './Contact.css'
import ScrollReveal from './ScrollReveal'
import { submitContactForm } from '../utils/submitContactForm'
import { contactPackageOptions } from '../data/packages'

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
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const honey = event.currentTarget.elements.namedItem('_honey')?.value
    if (honey) return

    setSubmitting(true)
    setError('')

    try {
      await submitContactForm(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Something went wrong sending your message. Please try again in a moment.')
    } finally {
      setSubmitting(false)
    }
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
          <div id="contact-form" className="contact__shell">
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
                <input
                  type="text"
                  name="_honey"
                  className="contact__honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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
                    {contactPackageOptions.map((option) => (
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
                  <div className="contact__submit-wrap">
                    {error && (
                      <p className="contact__error" role="alert">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="contact__submit"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Start a Project'}
                    </button>
                  </div>
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
