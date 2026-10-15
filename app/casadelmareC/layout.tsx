import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Casa Del Mare - Design Variant C (Editorial Hybrid)',
  description: 'Waterfront vacation rental in North Myrtle Beach with editorial hybrid design theme.',
  alternates: {
    canonical: `${siteUrl}/casadelmareC`,
  },
};

export default function CasaDelMareCLayout({ children }: { children: React.ReactNode }) {
  return children;
}
