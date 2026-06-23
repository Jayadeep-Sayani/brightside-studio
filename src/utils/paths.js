const base = import.meta.env.BASE_URL

export function assetUrl(path) {
  return `${base}${path.replace(/^\//, '')}`
}

export function routeHref(path) {
  if (path.startsWith('http')) return path
  const root = base.replace(/\/$/, '')
  return `${root}${path}`
}
