import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Check Availability | Casa Del Mare North Myrtle Beach Rental',
  description:
    'View open dates for Casa Del Mare, a waterfront 5-bedroom North Myrtle Beach vacation rental that sleeps 14 near Cherry Grove Beach.',
  alternates: {
    canonical: `${siteUrl}/casadelmare/availability`,
  },
  openGraph: {
    title: 'Check Availability | Casa Del Mare North Myrtle Beach Rental',
    description:
      'View open dates for Casa Del Mare, a waterfront 5-bedroom North Myrtle Beach vacation rental that sleeps 14 near Cherry Grove Beach.',
    url: `${siteUrl}/casadelmare/availability`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function AvailabilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
