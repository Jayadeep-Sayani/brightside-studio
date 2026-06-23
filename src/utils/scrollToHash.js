function getNavbarHeight() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-height')
    .trim()

  if (!value) return 0

  if (value.endsWith('rem')) {
    const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return parseFloat(value) * rootSize
  }

  return parseFloat(value) || 0
}

function scrollElementToViewportCenter(target) {
  const rect = target.getBoundingClientRect()
  const elementTop = window.scrollY + rect.top
  const navbarHeight = getNavbarHeight()
  const visibleHeight = window.innerHeight - navbarHeight
  const scrollTop =
    elementTop - navbarHeight - (visibleHeight - rect.height) / 2

  window.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: 'smooth',
  })
}

export function scrollToHash(hash) {
  if (!hash) return

  const target = document.querySelector(hash)
  if (!target) return

  const scroll = () => {
    if (hash === '#contact-form') {
      requestAnimationFrame(() => scrollElementToViewportCenter(target))
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (document.startViewTransition) {
    requestAnimationFrame(scroll)
  } else {
    scroll()
  }
}
