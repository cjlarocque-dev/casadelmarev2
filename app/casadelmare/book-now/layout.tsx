import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Book Direct | Casa Del Mare Vacation Rental',
  description:
    'Book Casa Del Mare direct for your North Myrtle Beach vacation rental stay, or send an inquiry through our secure booking form.',
  alternates: {
    canonical: `${siteUrl}/casadelmare/book-now`,
  },
  openGraph: {
    title: 'Book Direct | Casa Del Mare Vacation Rental',
    description:
      'Book Casa Del Mare direct for your North Myrtle Beach vacation rental stay, or send an inquiry through our secure booking form.',
    url: `${siteUrl}/casadelmare/book-now`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return children;
}
