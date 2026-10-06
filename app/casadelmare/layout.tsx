import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'North Myrtle Beach Vacation Rental (Sleeps 14) | Casa Del Mare',
  description:
    'Waterfront 5-bedroom North Myrtle Beach vacation rental with hot tub, dock access, and space for 14 guests near Cherry Grove Beach. Book direct.',
  alternates: {
    canonical: `${siteUrl}/casadelmare`,
  },
  openGraph: {
    title: 'North Myrtle Beach Vacation Rental (Sleeps 14) | Casa Del Mare',
    description:
      'Waterfront 5-bedroom North Myrtle Beach vacation rental with hot tub, dock access, and space for 14 guests near Cherry Grove Beach. Book direct.',
    url: `${siteUrl}/casadelmare`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function CasaDelMareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
