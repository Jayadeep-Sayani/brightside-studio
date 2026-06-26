import { studioContact } from './studioContact'

export const SITE_URL = 'https://brightside-studio.ca'
export const SITE_NAME = 'Brightside Studio'

export const DEFAULT_DESCRIPTION =
  'Brightside Studio builds warm, custom websites for cafés, salons, restaurants, and local shops in Victoria, BC. View sample work and start your project.'

export const DEFAULT_KEYWORDS =
  'web design Victoria BC, website design Victoria, small business websites Victoria, local business web design, Brightside Studio'

export const OG_IMAGE = `${SITE_URL}/apple-touch-icon.png`

export const PAGE_SEO = {
  '/': {
    title: 'Brightside Studio | Web Design for Victoria, BC Businesses',
    description: DEFAULT_DESCRIPTION,
  },
  '/about': {
    title: 'About | Brightside Studio Victoria Web Design',
    description:
      'Learn how Brightside Studio helps Victoria and Vancouver Island businesses show up online with warm, custom website design.',
  },
  '/work': {
    title: 'Past Work & Sample Mockups | Brightside Studio',
    description:
      'Explore sample website mockups for cafés, salons, and restaurants created by Brightside Studio in Victoria, BC.',
  },
  '/privacy': {
    title: 'Privacy Policy | Brightside Studio',
    description: 'How Brightside Studio collects, uses, and protects your information.',
  },
  '/terms': {
    title: 'Terms of Service | Brightside Studio',
    description: 'Terms of service for using the Brightside Studio website and design services.',
  },
}

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: 'en-CA',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      image: OG_IMAGE,
      description: DEFAULT_DESCRIPTION,
      email: studioContact.email,
      telephone: studioContact.phoneTel,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Victoria',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      areaServed: {
        '@type': 'City',
        name: 'Victoria',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'British Columbia',
        },
      },
      sameAs: [studioContact.instagram],
      priceRange: '$$',
    },
  ],
}
