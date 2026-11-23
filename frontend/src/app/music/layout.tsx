import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'More of Music (MOM) | Artist Management & Sonic Studio',
  description:
    'More of Music (MOM) is an artist management, music tour management, and sonic creative studio connecting artists, events, and brands.',
  alternates: {
    canonical: 'https://momagency.com/music',
  },
  openGraph: {
    title: 'More of Music (MOM) | Artist Management & Sonic Studio',
    description:
      'More of Music (MOM) is an artist management, music tour management, and sonic creative studio connecting artists, events, and brands.',
    url: 'https://momagency.com/music',
    siteName: 'More of Music (MOM)',
    images: [
      {
        url: 'https://momagency.com/mom-logo-more-of-music.png',
        width: 1200,
        height: 630,
        alt: 'More of Music (MOM)',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'More of Music (MOM) | Artist Management & Sonic Studio',
    description:
      'Artist management, music tour management, and sonic creative studio connecting artists, events, and brands.',
    images: ['https://momagency.com/mom-logo-more-of-music.png'],
  },
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
