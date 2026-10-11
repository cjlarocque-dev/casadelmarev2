import type { Metadata } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');
const title = 'Property Facts & Guest Rules | Casa Del Mare';
const description = 'Plan your Casa Del Mare stay: sleeping arrangements for up to 14 guests, parking, beach and dock access, check-in times, and guest rules in North Myrtle Beach.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/casadelmare/facts` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/casadelmare/facts`,
    siteName: 'Casa Del Mare',
    type: 'website',
  },
};

export default function FactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
