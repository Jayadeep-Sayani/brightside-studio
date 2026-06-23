import LegalPage from '../components/LegalPage'

const sections = [
  {
    id: 'agreement',
    title: 'Agreement to these terms',
    paragraphs: [
      'By using the Brightside Studio website or engaging us for website design services, you agree to these Terms of Service. If you do not agree, please do not use the site or request our services.',
    ],
  },
  {
    id: 'services',
    title: 'Our services',
    paragraphs: [
      'Brightside Studio provides website design and development for local businesses. Packages, pricing, and deliverables are described on our website and may be confirmed in writing before work begins.',
      'We may update our service offerings or pricing at any time. Changes apply to new projects unless otherwise agreed in writing.',
    ],
  },
  {
    id: 'project-process',
    title: 'Project process',
    list: [
      'You share details about your business and goals through our contact form or direct communication.',
      'We respond with ideas, scope, and timing, usually within two business days.',
      'Once scope and pricing are agreed, we begin design and development work.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Your responsibilities',
    list: [
      'Provide accurate information about your business and project needs',
      'Supply content, images, and feedback within agreed timelines',
      'Review deliverables and share revision requests in a timely way',
      'Ensure you have rights to any materials you provide for use on your site',
    ],
  },
  {
    id: 'payment',
    title: 'Payment',
    paragraphs: [
      'Pricing is listed in Canadian dollars unless stated otherwise. Payment terms, deposits, and milestones will be confirmed before work starts.',
      'Late or missed payments may pause work until the account is brought current.',
    ],
  },
  {
    id: 'revisions-and-scope',
    title: 'Revisions and scope',
    paragraphs: [
      'Each project includes a defined scope of pages, features, and revision rounds based on the package selected. Requests outside that scope may require additional time or cost, which we will discuss with you before proceeding.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    paragraphs: [
      'Upon full payment, you receive the rights agreed to for your completed website, including custom design work created for your project. Brightside Studio may retain the right to display the work in our portfolio unless you request otherwise in writing.',
      'We may use third-party tools, fonts, libraries, or stock assets that are subject to their own licenses. We will let you know if any ongoing license fees apply.',
    ],
  },
  {
    id: 'site-content',
    title: 'Website content and launch',
    paragraphs: [
      'You are responsible for the accuracy of business information on your site, including hours, pricing, and legal notices. We are not liable for losses caused by outdated or incorrect content you approve.',
      'Launch timing may depend on hosting setup, domain access, and content delivery from your side.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of liability',
    paragraphs: [
      'We work carefully to deliver reliable websites, but the site and our services are provided on an as-available basis. To the fullest extent permitted by law, Brightside Studio is not liable for indirect, incidental, or consequential damages arising from use of the site or our services.',
      'Our total liability for any claim related to a project is limited to the amount you paid us for that project.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    paragraphs: [
      'Either party may end a project before completion with written notice. If a project ends early, you agree to pay for work completed up to that point, including any non-refundable deposits or third-party costs already incurred.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of Canada and the province in which Brightside Studio operates, without regard to conflict of law principles.',
    ],
  },
  {
    id: 'terms-changes',
    title: 'Changes to these terms',
    paragraphs: [
      'We may update these Terms of Service from time to time. The updated version will be posted on this page with a revised date. Your continued use of the site after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'Questions about these Terms of Service? Get in touch and we will clarify anything you need.',
    ],
    contactLink: true,
  },
]

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 23, 2025"
      intro="These terms govern your use of the Brightside Studio website and any website design services you request from us. Please read them before starting a project."
      sections={sections}
    />
  )
}

export default TermsPage
