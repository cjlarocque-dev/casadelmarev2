import { Lato, Playfair_Display } from 'next/font/google';
import Image from 'next/image';

import MobileMenu from '@/app/components/MobileMenu';
import { property } from '@/lib/propertyData';

const headlineFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
  { href: '/casadelmare/facts', label: 'Property Facts', className: 'text-[#eedccd]' },
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
    <div className={`${bodyFont.className} min-h-screen bg-[#f7f4ef] text-slate-800`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      <header className="sticky top-0 z-[120] border-b border-[#d7dfe6]/60 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
          aria-label="Main navigation"
        >
          <a href="/casadelmare" className={`${headlineFont.className} text-3xl text-[#395066]`}>
            Casa Del Mare
          </a>

          <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-slate-600 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.href === '/casadelmare/facts' ? 'page' : undefined}
                  className={`${link.className ?? ''} transition hover:text-[#b46e53]`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/casadelmare/availability"
              className="rounded-full border border-[#cfd7df] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600 transition hover:border-[#395066] hover:text-[#395066]"
            >
              Check Dates
            </a>
            <a
              href="/casadelmare/book-now"
              className="rounded-full bg-[#b46e53] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#9e5f47]"
            >
              Book Now
            </a>
          </div>

          <MobileMenu
            links={links}
            buttonClassName="text-[#395066] hover:text-[#b46e53]"
            panelClassName={`${bodyFont.className} bg-[#395066] text-white`}
            linkClassName={`${bodyFont.className} text-sm uppercase tracking-[0.18em]`}
          />
        </nav>
      </header>

      <main>
        <section className="border-b border-[#e6ddd4] bg-[linear-gradient(180deg,#f7f4ef_0%,#fbf5ed_54%,#eef3f6_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b46e53]">Guest Planning Guide</p>
            <h1 className={`${headlineFont.className} mt-5 text-4xl leading-tight text-[#395066] md:text-6xl`}>
              Casa Del Mare Property Facts &amp; Guest Rules
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
              Plan your stay at our {property.bedrooms}-bedroom, {property.bathrooms}-bathroom
              North Myrtle Beach vacation rental for up to {property.maxGuests} guests.
            </p>
            <p className="mt-4 text-base text-slate-500">{property.address}</p>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: <time dateTime="2026-10-11">October 11, 2026</time>
            </p>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d7dfe6] shadow-[0_24px_60px_rgba(57,80,102,0.12)]">
              <Image
                src="/pictures/general/08-front-exterior.jpg"
                alt="Front exterior of Casa Del Mare raised beach house in North Myrtle Beach"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 976px"
                priority
                className="h-auto w-full"
              />
            </div>

            <nav aria-label="Property facts sections" className="mt-8 flex flex-wrap gap-3">
              {[
                ['sleeping', 'Sleeping arrangements'],
                ['beach-water', 'Beach & dock'],
                ['amenities', 'Amenities'],
                ['parking-access', 'Parking & stairs'],
                ['guest-rules', 'Guest rules'],
                ['booking', 'Stay requirements'],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-full border border-[#d7dfe6] bg-white px-4 py-2 text-sm text-[#395066] transition hover:border-[#b46e53] hover:text-[#b46e53]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:py-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-[2rem] border border-[#e6ddd4] bg-white p-6 shadow-[0_18px_44px_rgba(57,80,102,0.08)] md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#b46e53]">Property facts</p>
              <h2 className={`${headlineFont.className} mt-3 text-3xl text-[#395066] md:text-4xl`}>
                {section.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{section.answer}</p>

              <dl className="mt-8 space-y-4">
                {section.facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 rounded-2xl border border-[#f0e5dc] bg-[#fbf5ed] px-5 py-4 md:grid-cols-[180px_1fr] md:gap-6"
                  >
                    <dt className={`${headlineFont.className} text-xl text-[#395066]`}>{label}</dt>
                    <dd className="text-base leading-7 text-slate-600">{value}</dd>
                  </div>
                ))}
              </dl>

              {section.id === 'booking' && (
                <p className="mt-6">
                  <a
                    href="/casadelmare/book-now"
                    className="text-[#395066] underline underline-offset-4 transition hover:text-[#b46e53]"
                  >
                    Review booking terms and plan your stay
                  </a>
                </p>
              )}
            </section>
          ))}

          <section className="rounded-[2rem] bg-[#395066] px-6 py-12 text-center text-white shadow-[0_18px_44px_rgba(57,80,102,0.28)] md:px-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#eedccd]">Next Steps</p>
            <h2 className={`${headlineFont.className} mt-4 text-4xl md:text-5xl`}>
              Ready to plan your stay?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
              Check your dates, review the home details, and book directly when you&apos;re ready
              for your next coastal getaway.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/casadelmare/availability"
                className="inline-flex rounded-full bg-[#f7f4ef] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[#395066] transition hover:bg-white"
              >
                Check Availability
              </a>
              <a
                href="/casadelmare/book-now"
                className="inline-flex rounded-full border border-white/50 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[#eedccd] hover:text-[#eedccd]"
              >
                Book Direct
              </a>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/75">
              <a
                href="/casadelmare#gallery"
                className="underline underline-offset-4 transition hover:text-[#eedccd]"
              >
                Explore the property photo gallery
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#d7dfe6] bg-[#f7f4ef] px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <div>
            <h3 className={`${headlineFont.className} text-3xl text-[#395066]`}>{property.name}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{property.address}</p>
          </div>

          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.22em] text-[#b46e53]`}>
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="/casadelmare" className="transition hover:text-[#395066]">
                  Return to the property overview
                </a>
              </li>
              <li>
                <a href="/casadelmare/availability" className="transition hover:text-[#395066]">
                  Check availability
                </a>
              </li>
              <li>
                <a href="/casadelmare/book-now" className="transition hover:text-[#395066]">
                  Book direct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.22em] text-[#b46e53]`}>
              Contact
            </h4>
            <a
              href={`mailto:${property.email}`}
              className="mt-4 block text-sm leading-7 text-slate-600 transition hover:text-[#395066]"
            >
              {property.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
