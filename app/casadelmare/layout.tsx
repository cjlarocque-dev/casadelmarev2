import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'North Myrtle Beach Vacation Rental | Casa Del Mare',
  description:
    'Waterfront 5-bedroom North Myrtle Beach vacation rental near Cherry Grove Beach. View amenities, photos, and direct booking options.',
  alternates: {
    canonical: `${siteUrl}/casadelmare`,
  },
  openGraph: {
    title: 'North Myrtle Beach Vacation Rental | Casa Del Mare',
    description:
      'Waterfront 5-bedroom North Myrtle Beach vacation rental near Cherry Grove Beach. View amenities, photos, and direct booking options.',
    url: `${siteUrl}/casadelmare`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function CasaDelMareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
