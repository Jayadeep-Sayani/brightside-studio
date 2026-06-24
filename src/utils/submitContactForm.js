import { PACKAGE_LABELS } from '../data/packages'

export async function submitContactForm(form) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      'Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
    )
  }

  const packageLabel = PACKAGE_LABELS[form.package] ?? form.package

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New project inquiry from ${form.name}`,
      from_name: 'Brightside Studio',
      name: form.name,
      email: form.email,
      replyto: form.email,
      business: form.business || 'Not provided',
      package: packageLabel,
      message: form.message,
      botcheck: false,
    }),
  })

  const data = await response.json()

  if (!data.success) {
    throw new Error(data.message || 'Unable to send your message right now.')
  }

  return data
}
