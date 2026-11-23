import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Company | Moments of Marketing (MOM) — More than Marketing',
  description:
    'Discover Moments of Marketing (MOM). We develop impactful brand identities and execute B2B & B2C strategies guided by speed, transparency, integrity, and performance.',
  alternates: {
    canonical: 'https://momagency.com/about',
  },
  openGraph: {
    title: 'The Company | Moments of Marketing (MOM) — More than Marketing',
    description:
      'Discover Moments of Marketing (MOM). We develop impactful brand identities and execute B2B & B2C strategies guided by speed, transparency, integrity, and performance.',
    url: 'https://momagency.com/about',
    siteName: 'Moments of Marketing (MOM)',
    images: [
      {
        url: 'https://momagency.com/mom-logo-moments-of-marketing.png',
        width: 1200,
        height: 630,
        alt: 'Moments of Marketing — The Company',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Company | Moments of Marketing (MOM)',
    description:
      'Discover Moments of Marketing (MOM). Impactful brand identities and B2B & B2C growth strategies.',
    images: ['https://momagency.com/mom-logo-moments-of-marketing.png'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
