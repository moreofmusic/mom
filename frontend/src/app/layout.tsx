import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://momagency.com'),
  title: {
    default: 'Moments of Marketing (MOM) | Creating Moments. Building Brands. Driving Growth.',
    template: '%s | Moments of Marketing (MOM)',
  },
  description:
    'Partner with Moments of Marketing to build distinctive brands, create engaging digital experiences, and drive measurable growth through strategic marketing, creative execution, and performance insights. Reach us at +91 9226042236 or contact@momagency.com.',
  applicationName: 'Moments of Marketing',
  authors: [{ name: 'Moments of Marketing Team', url: 'https://momagency.com' }],
  generator: 'Next.js 15',
  keywords: [
    'Moments of Marketing',
    'MOM',
    'Moments of Marketing MOM',
    'MOM Agency',
    'B2B Marketing Agency India',
    'B2B Lead Generation',
    'Corporate Branding Agency',
    'Enterprise SEO Services',
    'LinkedIn Marketing Agency',
    'Go-To-Market Consulting',
    'B2C Marketing Agency India',
    'D2C Brand Marketing Agency',
    'Direct Customer Acquisition',
    'Instagram Reels Agency',
    'Meta Ads ROAS Optimization',
    'WhatsApp Marketing Automation',
    'Influencer Collaborations',
    'Digital Marketing Services',
    'Performance Marketing India',
    'Website Design & Development',
    'Commercial Video Production',
  ],
  creator: 'Moments of Marketing',
  publisher: 'Moments of Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://momagency.com',
  },
  openGraph: {
    title: 'Moments of Marketing (MOM) | Creating Moments. Building Brands. Driving Growth.',
    description:
      'Partner with Moments of Marketing to build distinctive brands, create engaging digital experiences, and drive measurable growth through strategic marketing, creative execution, and performance insights.',
    url: 'https://momagency.com',
    siteName: 'Moments of Marketing (MOM)',
    images: [
      {
        url: 'https://momagency.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Moments of Marketing (MOM) — Creating Moments. Building Brands. Driving Growth.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moments of Marketing (MOM) | Creating Moments. Building Brands. Driving Growth.',
    description:
      'Partner with Moments of Marketing to build distinctive brands, create engaging digital experiences, and drive measurable growth.',
    images: ['https://momagency.com/og-image.png'],
    creator: '@momagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-circle.png',
    shortcut: '/favicon-circle.png',
    apple: '/favicon-circle.png',
  },
};

const masterSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://momagency.com/#organization',
      name: 'Moments of Marketing',
      alternateName: [
        'MOM',
        'Moments of Marketing MOM',
        'MOM Agency',
        'More of Marketing',
      ],
      url: 'https://momagency.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://momagency.com/mom-logo-moments-of-marketing.png',
        caption: 'Moments of Marketing Logo',
      },
      image: 'https://momagency.com/mom-logo-moments-of-marketing.png',
      description:
        'Moments of Marketing (MOM) creates moments, builds distinctive brands, and drives measurable growth through strategic marketing, creative execution, and performance insights for B2B enterprises and B2C consumer brands.',
      telephone: '+91-9226042236',
      email: 'contact@momagency.com',
      priceRange: '$$',
      currenciesAccepted: 'INR, USD, EUR',
      paymentAccepted: 'Bank Transfer, UPI, Credit Card',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Global' },
      ],
      audience: [
        {
          '@type': 'BusinessAudience',
          name: 'B2B Enterprises, Startups, Corporate Decision-Makers',
        },
        {
          '@type': 'PeopleAudience',
          name: 'Direct Consumers, D2C Shoppers, Retail Audiences',
        },
      ],
      knowsAbout: [
        'B2B Lead Generation',
        'B2C Customer Acquisition',
        'D2C Brand Marketing',
        'Corporate Branding & Identity',
        'Digital Marketing & SEO',
        'Performance Marketing & ROAS',
        'Social Media Management & Reels',
        'Website Design & Next.js Development',
        'Email & WhatsApp Marketing Automation',
        'Commercial Video Production',
        'Influencer Marketing & Brand Activations',
        'Go-To-Market Strategy & Consulting',
      ],
      sameAs: [
        'https://instagram.com/momentsofmarketingofficial',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9226042236',
        contactType: 'customer service',
        email: 'contact@momagency.com',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
        contactOption: 'HearingImpairedSupported',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://momagency.com/#website',
      url: 'https://momagency.com',
      name: 'Moments of Marketing',
      publisher: { '@id': 'https://momagency.com/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-circle.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-circle.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('mom_theme');if(s==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-screen dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 antialiased transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
