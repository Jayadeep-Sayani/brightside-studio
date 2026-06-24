export const basicFeatures = [
  'Responsive layout across phone, tablet, and desktop',
  'All essential pages for your business',
  'Clean, visually pleasing design',
  'Built on proven web design standards',
]

export const advancedOnlyFeatures = [
  'Bold custom design that breaks from templates',
  'Animated elements and scroll interactions',
  'Tailored to your business vibe and personality',
  'Crafted to hook customers from the first second',
]

export const maintenanceFeatures = [
  'Change text, images, hours, and other existing content',
  'Updates to pages already on your site',
  'Request changes whenever you need them',
  'Available for sites we built and launched',
]

export const serviceTiers = [
  {
    id: 'basic',
    name: 'Basic Site',
    price: 750,
    description:
      'A responsive, modern website that looks great on every device and covers everything your business needs to get online.',
    features: basicFeatures,
  },
  {
    id: 'advanced',
    name: 'Advanced Site',
    price: 2000,
    description:
      'A standout site that goes beyond the usual playbook, built to capture attention and feel unmistakably like your brand.',
    includesBasic: true,
    extraFeatures: advancedOnlyFeatures,
    featured: true,
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    price: 75,
    interval: '/month',
    description:
      'Ongoing support after your site is live. Reach out anytime and we will update existing content, pages, and details on your site.',
    features: maintenanceFeatures,
  },
]

export const contactPackageOptions = [
  { value: 'basic', label: 'Basic Site', price: '$750 CAD' },
  { value: 'advanced', label: 'Advanced Site', price: '$2,000 CAD' },
  { value: 'maintenance', label: 'Maintenance', price: '$75/month CAD' },
  { value: 'unsure', label: 'Not sure yet', price: 'Happy to advise' },
]

export const PACKAGE_LABELS = {
  basic: 'Basic Site ($750 CAD)',
  advanced: 'Advanced Site ($2,000 CAD)',
  maintenance: 'Maintenance ($75/month CAD)',
  unsure: 'Not sure yet',
}
