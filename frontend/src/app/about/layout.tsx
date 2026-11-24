import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Company | Moments of Marketing (MOM)',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
