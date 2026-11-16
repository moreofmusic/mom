import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'MOM — Moments of Marketing | More of Music',
  description:
    'Moments of Marketing (MOM) & More of Music — Creating Moments. Building Brands. Driving Growth. Premium brand development, performance marketing, and sonic creative studio.',
  icons: {
    icon: '/favicon-circle.png',
    shortcut: '/favicon-circle.png',
    apple: '/favicon-circle.png',
  },
  keywords: [
    'Moments of Marketing',
    'MOM',
    'More of Music',
    'Creative Agency',
    'Branding',
    'Performance Marketing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-circle.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-circle.png" />
      </head>
      <body
        className="min-h-screen bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
