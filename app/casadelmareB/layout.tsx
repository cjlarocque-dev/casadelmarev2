import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Casa Del Mare Variant B | North Myrtle Beach Waterfront Vacation Rental',
  description:
    'Explore Casa Del Mare Variant B, a 5-bedroom North Myrtle Beach vacation rental with a hot tub, private dock, and a short walk to Cherry Grove Beach.',
  alternates: {
    canonical: `${siteUrl}/casadelmareB`,
  },
  openGraph: {
    title: 'Casa Del Mare Variant B | North Myrtle Beach Waterfront Vacation Rental',
    description:
      'Explore Casa Del Mare Variant B, a 5-bedroom North Myrtle Beach vacation rental with a hot tub, private dock, and a short walk to Cherry Grove Beach.',
    url: `${siteUrl}/casadelmareB`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function CasaDelMareBLayout({ children }: { children: React.ReactNode }) {
  return children;
}
