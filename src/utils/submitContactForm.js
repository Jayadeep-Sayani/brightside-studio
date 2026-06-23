const PACKAGE_LABELS = {
  basic: 'Basic Site ($500 CAD)',
  advanced: 'Advanced Site ($2,000 CAD)',
  unsure: 'Not sure yet',
}

export async function submitContactForm(form) {
  const email = import.meta.env.VITE_CONTACT_EMAIL

  if (!email) {
    throw new Error('Contact email is not configured.')
  }

  const packageLabel = PACKAGE_LABELS[form.package] ?? form.package

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
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
      _replyto: form.email,
      _template: 'table',
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to send your message right now.')
  }

  const data = await response.json()

  if (data.success !== 'true' && data.success !== true) {
    throw new Error('Unable to send your message right now.')
  }

  return data
}
