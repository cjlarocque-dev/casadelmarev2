import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Casa Del Mare Variant C | North Myrtle Beach Waterfront Vacation Rental',
  description:
    'Explore Casa Del Mare Variant C, a 5-bedroom North Myrtle Beach vacation rental with a hot tub, private dock, and a short walk to Cherry Grove Beach.',
  alternates: {
    canonical: `${siteUrl}/casadelmareC`,
  },
  openGraph: {
    title: 'Casa Del Mare Variant C | North Myrtle Beach Waterfront Vacation Rental',
    description:
      'Explore Casa Del Mare Variant C, a 5-bedroom North Myrtle Beach vacation rental with a hot tub, private dock, and a short walk to Cherry Grove Beach.',
    url: `${siteUrl}/casadelmareC`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function CasaDelMareCLayout({ children }: { children: React.ReactNode }) {
  return children;
}
