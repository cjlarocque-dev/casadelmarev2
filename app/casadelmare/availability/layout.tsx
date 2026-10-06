import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Vacation Rental Availability | Casa Del Mare North Myrtle Beach',
  description:
    'Check Casa Del Mare availability in North Myrtle Beach and view open dates for your Cherry Grove beach house stay.',
  alternates: {
    canonical: `${siteUrl}/casadelmare/availability`,
  },
  openGraph: {
    title: 'Vacation Rental Availability | Casa Del Mare North Myrtle Beach',
    description:
      'Check Casa Del Mare availability in North Myrtle Beach and view open dates for your Cherry Grove beach house stay.',
    url: `${siteUrl}/casadelmare/availability`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function AvailabilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
