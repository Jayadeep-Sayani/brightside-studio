import { PACKAGE_LABELS } from '../data/packages'

// FormSubmit delivers to this inbox — no API keys or env vars needed.
const INBOX_EMAIL = 'jayadeeps1101@gmail.com'

export async function submitContactForm(form, { honey = '' } = {}) {
  if (honey) {
    return { success: true }
  }

  const packageLabel = PACKAGE_LABELS[form.package] ?? form.package

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(INBOX_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      business: form.business || 'Not provided',
      package: packageLabel,
      message: form.message,
      _subject: `New project inquiry from ${form.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('Unable to send your message right now. Please try again in a moment.')
  }

  if (!response.ok) {
    throw new Error(data.message || 'Unable to send your message right now.')
  }

  return data
}
