import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Moments of Marketing (MOM) — Everything Your Brand Needs to Grow',
  description:
    'Explore 10 full-service marketing capabilities for B2B enterprises and direct consumer brands: Digital Marketing, Performance Ads, Lead Gen. Connect on WhatsApp at +91 9226042236.',
  alternates: {
    canonical: 'https://momagency.com/services',
  },
  openGraph: {
    title: 'Services | Moments of Marketing (MOM) — Everything Your Brand Needs to Grow',
    description:
      'Explore 10 full-service marketing capabilities for B2B enterprises and direct consumer brands: Digital Marketing, Performance Ads, Lead Gen. Connect on WhatsApp at +91 9226042236.',
    url: 'https://momagency.com/services',
    siteName: 'Moments of Marketing (MOM)',
    images: [
      {
        url: 'https://momagency.com/mom-logo-moments-of-marketing.png',
        width: 1200,
        height: 630,
        alt: 'Moments of Marketing — Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Moments of Marketing (MOM)',
    description:
      'Explore 10 full-service marketing capabilities for B2B enterprises and direct consumer brands.',
    images: ['https://momagency.com/mom-logo-moments-of-marketing.png'],
  },
};

const serviceCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Moments of Marketing (MOM) Full-Service Capabilities',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Digital Marketing',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Reach the right audience with strategic digital marketing solutions designed to increase online visibility, attract relevant traffic, and support business objectives across B2B and B2C channels.',
      serviceType: 'B2B & B2C Digital Marketing',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Social Media Management',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Build a consistent, engaging social presence with creative content, strategic planning, and audience-focused communication that keeps your brand relevant and memorable across LinkedIn, Instagram, and Facebook.',
      serviceType: 'Social Media Marketing & Community Management',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Lead Generation',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Connect with potential customers through targeted campaigns and conversion-focused strategies designed to generate relevant enquiries, qualified sales pipelines, and direct customer registrations.',
      serviceType: 'B2B & B2C Lead Generation',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Branding & Creative Design',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Create a distinctive and consistent brand identity that communicates your value, builds recognition, and helps you stand apart from competitors in both corporate and retail markets.',
      serviceType: 'Corporate Identity & Retail Packaging Design',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Content Creation & Video Production',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Bring your brand to life with compelling visuals, product shoots, and purposeful video content that communicates your message, connects with your audience, and supports marketing goals.',
      serviceType: 'Commercial Video Production & Social Reels',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 6,
      name: 'Website Design & Development',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Turn your digital presence into a growth opportunity with modern, responsive, and performance-optimized websites built for user engagement, lead conversion, and e-commerce shopping.',
      serviceType: 'Web Development & Next.js Architecture',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 7,
      name: 'Performance Marketing & Paid Advertising',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Maximize marketing investment with data-driven paid advertising campaigns focused on delivering measurable results, qualified leads, and positive return on ad spend across Google, Meta, and LinkedIn.',
      serviceType: 'Performance Marketing & ROAS Scaling',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 8,
      name: 'Email & WhatsApp Marketing',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Nurture leads and stay connected with customers through personalized, direct communication that builds long-term relationships, automates broadcasts, and drives repeat business.',
      serviceType: 'WhatsApp Business Automation & Email Marketing',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 9,
      name: 'Influencer Marketing & Brand Activations',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Amplify brand reach and credibility by collaborating with relevant influencers and creators who can authentically connect your products with their audiences in B2B and B2C sectors.',
      serviceType: 'Influencer Collaborations & Brand Activations',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
    {
      '@type': 'Service',
      position: 10,
      name: 'Marketing Strategy & Consulting',
      provider: { '@id': 'https://momagency.com/#organization' },
      description:
        'Gain strategic clarity and a structured roadmap for growth with practical marketing guidance tailored to your industry, stage of business, and commercial objectives.',
      serviceType: 'Marketing Strategy Consulting & GTM Roadmaps',
      audience: { '@type': 'Audience', audienceType: 'B2B & B2C' },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      {children}
    </>
  );
}
