import Image from 'next/image';
import MobileMenu from '@/app/components/MobileMenu';
import { property } from '@/lib/propertyData';

const sections = [
  {
    id: 'sleeping',
    title: 'How many guests can stay, and what are the sleeping arrangements?',
    answer: `Casa Del Mare accommodates up to ${property.maxGuests} guests in ${property.bedrooms} bedrooms, with ${property.bathrooms} full bathrooms.`,
    facts: [
      ['Primary bedroom', 'One king bed.'],
      ['Guest bedrooms', 'Three bedrooms, each with a queen bed.'],
      ['Bunk room', 'Twin top bunks sleep one each; full-size bottom bunks sleep two each.'],
    ],
  },
  {
    id: 'beach-water',
    title: 'How close is the beach, and what water access is included?',
    answer: 'Cherry Grove Beach is less than a 5-minute walk away. The home also has a private dock on House Creek, a tidal waterway.',
    facts: [
      ['Beach access', 'Walk to Cherry Grove Beach in North Myrtle Beach.'],
      ['Private dock', 'House Creek dock access; tide heights limit boat access.'],
      ['Kayaks', 'Two kayaks are included.'],
    ],
  },
  {
    id: 'amenities',
    title: 'What amenities are available at the home?',
    answer: 'The home includes a fully equipped kitchen, indoor recreation spaces, and outdoor areas for relaxing between beach trips.',
    facts: [
      ['Kitchen', 'Ceramic flat-top electric range, granite countertops, full-size refrigerator, and dishwasher.'],
      ['Indoor living', 'Living room, dining area, game room, high-speed WiFi, and laundry facilities.'],
      ['Outdoor living', 'Private hot tub, large back deck, gas grill, and outdoor seating area with TV.'],
    ],
  },
  {
    id: 'parking-access',
    title: 'How much parking is available, and are stairs required?',
    answer: 'Four parking spaces are available. Stairs are required to enter the home, and there is no elevator.',
    facts: [
      ['Parking', 'Four parking spaces.'],
      ['Access', 'Stair access only; no elevator.'],
    ],
  },
  {
    id: 'guest-rules',
    title: 'Are pets, smoking, or vaping allowed?',
    answer: 'Pets are not allowed. Smoking and vaping are permitted outside only and are strictly prohibited inside.',
    facts: [
      ['Pets', 'No pets.'],
      ['Smoking and vaping', 'Outside only; strictly prohibited indoors.'],
    ],
  },
  {
    id: 'booking',
    title: 'What are the check-in times and minimum stay?',
    answer: 'Check-in is at 4 p.m. and checkout is at 10 a.m., local North Myrtle Beach time. The minimum stay is two nights.',
    facts: [
      ['Check-in', '4 p.m. Eastern Time.'],
      ['Checkout', '10 a.m. Eastern Time.'],
      ['Minimum stay', 'Two nights.'],
      ['Additional terms', 'Review the terms and conditions on our booking page or through the third-party booking partner you use before reserving.'],
    ],
  },
];

const links = [
  { href: '/casadelmare', label: 'Property' },
  { href: '/casadelmare/facts', label: 'Property Facts', className: 'text-amber-200' },
  { href: '/casadelmare/availability', label: 'Availability' },
  { href: '/casadelmare/book-now', label: 'Book Now' },
];

export default function FactsPage() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Casa Del Mare Property Facts & Guest Rules',
    url: `${siteUrl}/casadelmare/facts`,
    dateModified: '2026-10-11',
    about: { '@type': 'Thing', name: property.name, url: `${siteUrl}/casadelmare` },
    mainEntity: sections.map((section) => ({
      '@type': 'Question',
      name: section.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${section.answer} ${section.facts.map(([label, value]) => `${label}: ${value}`).join(' ')}`,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <header className="wave-header sticky top-0 w-full z-[120] shadow-2xl md:fixed isolate">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10" aria-label="Main navigation">
          <a href="/casadelmare" className="text-3xl font-bold text-white tracking-tight">Casa Del Mare</a>
          <ul className="hidden md:flex gap-8 text-white">
            {links.map((link) => (
              <li key={link.href}><a href={link.href} aria-current={link.href === '/casadelmare/facts' ? 'page' : undefined} className={`${link.className ?? ''} hover:text-amber-200 transition font-medium`}>{link.label}</a></li>
            ))}
          </ul>
          <MobileMenu links={links} />
        </nav>
      </header>

      <main className="md:pt-24">
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">Casa Del Mare Property Facts &amp; Guest Rules</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">Plan your stay at our {property.bedrooms}-bedroom, {property.bathrooms}-bathroom North Myrtle Beach vacation rental for up to {property.maxGuests} guests.</p>
            <p className="text-gray-600 mb-6">{property.address}</p>
            <p className="text-sm text-gray-600 mb-8">Last updated: <time dateTime="2026-10-11">October 11, 2026</time></p>
            <Image src="/pictures/general/08-front-exterior.jpg" alt="Front exterior of Casa Del Mare raised beach house in North Myrtle Beach" width={1600} height={900} sizes="(max-width: 1024px) 100vw, 976px" priority className="w-full h-auto rounded-2xl shadow-lg" />
            <nav aria-label="Property facts sections" className="flex flex-wrap gap-3 mt-8">
              {[
                ['sleeping', 'Sleeping arrangements'],
                ['beach-water', 'Beach & dock'],
                ['amenities', 'Amenities'],
                ['parking-access', 'Parking & stairs'],
                ['guest-rules', 'Guest rules'],
                ['booking', 'Stay requirements'],
              ].map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full bg-white border border-blue-200 px-4 py-2 text-blue-700 hover:bg-blue-100">{label}</a>)}
            </nav>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{section.answer}</p>
              <dl className="space-y-4">
                {section.facts.map(([label, value]) => (
                  <div key={label} className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-6">
                    <dt className="font-semibold text-gray-900">{label}</dt>
                    <dd className="text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>
              {section.id === 'booking' && <p className="mt-6"><a href="/casadelmare/book-now" className="text-blue-700 underline">Review booking terms and plan your stay</a></p>}
            </section>
          ))}
          <section className="text-center py-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Ready to plan your stay?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/casadelmare/availability" className="btn-primary inline-block">Check Availability</a>
              <a href="/casadelmare/book-now" className="btn-primary inline-block">Book Direct</a>
            </div>
            <p className="mt-6"><a href="/casadelmare#gallery" className="text-blue-700 underline">Explore the property photo gallery</a></p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-300 py-12 border-t-4 border-blue-600">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white text-xl font-bold mb-3">{property.name}</p>
          <p>{property.address}</p>
          <p className="mt-4"><a href="/casadelmare" className="underline hover:text-white">Return to the property overview</a></p>
        </div>
      </footer>
    </div>
  );
}
