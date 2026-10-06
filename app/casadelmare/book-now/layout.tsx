import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Book Direct North Myrtle Beach Rental | Casa Del Mare',
  description:
    'Book Casa Del Mare direct and avoid OTA fees. Secure your stay at this waterfront 5-bedroom, 14-guest North Myrtle Beach vacation rental.',
  alternates: {
    canonical: `${siteUrl}/casadelmare/book-now`,
  },
  openGraph: {
    title: 'Book Direct North Myrtle Beach Rental | Casa Del Mare',
    description:
      'Book Casa Del Mare direct and avoid OTA fees. Secure your stay at this waterfront 5-bedroom, 14-guest North Myrtle Beach vacation rental.',
    url: `${siteUrl}/casadelmare/book-now`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return children;
}
