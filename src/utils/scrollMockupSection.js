export function scrollMockupSection(event, href) {
  if (event?.preventDefault) {
    event.preventDefault()
  }

  const id = href.replace(/^#/, '')
  if (!id) return

  const scroller = event?.currentTarget?.closest('.mockup-expand__screen')
  if (!scroller) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  if (id.endsWith('-top')) {
    scroller.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const target = document.getElementById(id)
  if (!target) return

  const scrollerRect = scroller.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const scrollMargin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  const top = scroller.scrollTop + targetRect.top - scrollerRect.top - scrollMargin

  scroller.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}
