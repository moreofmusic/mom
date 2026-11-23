import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Moments of Marketing (MOM) — Let's Make Your Next Moment Count",
  description:
    'Ready to boost visibility, drive qualified enquiries, or sharpen your digital presence? MOM is here to help you move forward with clarity. Reach us on WhatsApp at +91 9226042236 or contact@momagency.com.',
  alternates: {
    canonical: 'https://momagency.com/contact',
  },
  openGraph: {
    title: "Contact | Moments of Marketing (MOM) — Let's Make Your Next Moment Count",
    description:
      'Ready to boost visibility, drive qualified enquiries, or sharpen your digital presence? MOM is here to help you move forward with clarity. Reach us on WhatsApp at +91 9226042236 or contact@momagency.com.',
    url: 'https://momagency.com/contact',
    siteName: 'Moments of Marketing (MOM)',
    images: [
      {
        url: 'https://momagency.com/mom-logo-moments-of-marketing.png',
        width: 1200,
        height: 630,
        alt: 'Moments of Marketing — Contact',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Moments of Marketing (MOM)',
    description:
      'Contact Moments of Marketing. Reach us via phone/WhatsApp at +91 9226042236 or contact@momagency.com.',
    images: ['https://momagency.com/mom-logo-moments-of-marketing.png'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Moments of Marketing (MOM)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moments of Marketing (MOM) is a full-service brand strategy, creative execution, and performance marketing agency. MOM builds distinctive brands, develops high-speed websites, generates qualified B2B sales pipelines, and scales direct-to-consumer (B2C) sales through paid advertising, video production, and WhatsApp marketing automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Moments of Marketing help B2B businesses grow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For B2B enterprises, Moments of Marketing provides targeted lead generation funnels, corporate brand positioning, LinkedIn executive thought leadership, authoritative SEO, Next.js corporate website development, and Go-To-Market consulting to drive high-ticket sales conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Moments of Marketing scale direct-to-consumer (B2C & D2C) brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For B2C and D2C brands, Moments of Marketing drives rapid customer acquisition through high-ROAS Meta and Google Shopping ads, viral Instagram Reels production, automated WhatsApp broadcast campaigns, product packaging design, and micro-influencer creator activations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can businesses and direct clients contact Moments of Marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Moments of Marketing directly via WhatsApp or phone at +91 9226042236 or by email at contact@momagency.com. Client inquiries receive a strategic consultation response within 2 to 4 business hours.',
      },
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
