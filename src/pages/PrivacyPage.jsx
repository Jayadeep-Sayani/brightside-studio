import LegalPage from '../components/LegalPage'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    paragraphs: [
      'We collect information you choose to share when you reach out about a project, including your name, email address, business name, package interest, and message content.',
      'When you browse our website, we may automatically receive basic technical information such as your browser type, device type, and pages visited. This helps us keep the site running smoothly.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How we use your information',
    list: [
      'Respond to project inquiries and follow up on your request',
      'Discuss scope, pricing, and timelines for website work',
      'Improve our website and services',
      'Meet legal or regulatory obligations when required',
    ],
  },
  {
    id: 'how-we-share-information',
    title: 'How we share your information',
    paragraphs: [
      'We do not sell your personal information. We only share it when needed to operate the studio, such as with hosting or email providers that help us run our business, or when required by law.',
      'Any service providers we use are expected to handle your information responsibly and only for the purpose we hired them for.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep information',
    paragraphs: [
      'We keep inquiry details for as long as needed to respond, manage a project, or maintain business records. If you ask us to delete information that we are not required to keep, we will do so where reasonably possible.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    paragraphs: [
      'Depending on where you live, you may have the right to access, correct, or request deletion of your personal information. You may also withdraw consent for certain uses of your data, subject to legal or contractual limits.',
      'If you are in Canada, your information is handled in line with applicable privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) where it applies.',
    ],
    contactLink: true,
  },
  {
    id: 'cookies',
    title: 'Cookies and analytics',
    paragraphs: [
      'Our website may use essential cookies needed for basic functionality. We do not use invasive tracking for advertising purposes.',
      'If we add analytics tools in the future, we will update this policy to explain what is collected and why.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-party links',
    paragraphs: [
      'Our site may link to external websites, such as social media pages. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.',
    ],
  },
  {
    id: 'policy-changes',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the date at the top of this page. Continued use of the site after changes are posted means you accept the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'Questions about this Privacy Policy or how we handle your information? Reach out and we will be happy to help.',
    ],
    contactLink: true,
  },
]

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 23, 2025"
      intro="Brightside Studio respects your privacy. This policy explains what information we collect, how we use it, and the choices you have when you visit our website or contact us about a project."
      sections={sections}
    />
  )
}

export default PrivacyPage
