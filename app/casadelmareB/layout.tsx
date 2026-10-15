import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Casa Del Mare - Design Variant B (Contemporary Minimal)',
  description: 'Waterfront vacation rental in North Myrtle Beach with contemporary minimal design theme.',
  alternates: {
    canonical: `${siteUrl}/casadelmareB`,
  },
};

export default function CasaDelMareBLayout({ children }: { children: React.ReactNode }) {
  return children;
}
