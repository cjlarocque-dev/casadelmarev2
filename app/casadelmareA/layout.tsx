import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Casa Del Mare - Design Variant A (Editorial Luxury)',
  description: 'Waterfront vacation rental in North Myrtle Beach with editorial luxury design theme.',
  alternates: {
    canonical: `${siteUrl}/casadelmareA`,
  },
};

export default function CasaDelMareALayout({ children }: { children: React.ReactNode }) {
  return children;
}
