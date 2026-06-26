import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  OG_IMAGE,
  PAGE_SEO,
  SITE_NAME,
  SITE_URL,
  STRUCTURED_DATA,
} from '../data/siteSeo'

const STRUCTURED_DATA_ID = 'brightside-structured-data'

function upsertMeta(attribute, key, content) {
  if (!content) return

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertStructuredData() {
  let script = document.getElementById(STRUCTURED_DATA_ID)

  if (!script) {
    script = document.createElement('script')
    script.id = STRUCTURED_DATA_ID
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(STRUCTURED_DATA)
}

function PageSEO() {
  const { pathname } = useLocation()
  const page = PAGE_SEO[pathname] ?? PAGE_SEO['/']
  const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
  const title = page.title
  const description = page.description ?? DEFAULT_DESCRIPTION

  useLayoutEffect(() => {
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', DEFAULT_KEYWORDS)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta('name', 'geo.region', 'CA-BC')
    upsertMeta('name', 'geo.placename', 'Victoria')

    upsertLink('canonical', canonicalUrl)

    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:locale', 'en_CA')

    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)

    upsertStructuredData()
  }, [canonicalUrl, description, title])

  return null
}

export default PageSEO
