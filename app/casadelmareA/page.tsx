import { Cormorant_Garamond, Inter } from 'next/font/google';
import Image from 'next/image';

import BedroomsSection from '@/app/components/BedroomsSection';
import ImageGallery from '@/app/components/ImageGallery';
import MobileMenu from '@/app/components/MobileMenu';
import {
  amenities,
  attractions,
  beachActivities,
  gallery,
  hostStory,
  natureWildlife,
  property,
  restaurants,
} from '@/lib/propertyData';

const headlineFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const galleryImages = [
  { url: '/pictures/general/01-aerial-1.jpg', alt: 'Aerial view', category: 'Aerial' },
  { url: '/pictures/general/02-aerial-2.jpg', alt: 'Aerial view', category: 'Aerial' },
  { url: '/pictures/general/03-aerial-3.jpg', alt: 'Aerial view', category: 'Aerial' },
  { url: '/pictures/general/04-aerial-4.jpg', alt: 'Aerial view', category: 'Aerial' },
  { url: '/pictures/general/05-sunset.jpg', alt: 'Sunset', category: 'Sunset' },
  { url: '/pictures/general/06-sunset-pier.jpg', alt: 'Sunset at pier', category: 'Sunset' },
  { url: '/pictures/general/07-cherry-point.jpg', alt: 'Cherry Point view', category: 'View' },
  { url: '/pictures/general/08-front-exterior.jpg', alt: 'Front exterior', category: 'Exterior' },
  { url: '/pictures/general/09-front-porch.jpg', alt: 'Front porch', category: 'Exterior' },
  { url: '/pictures/general/10-rear-1.jpg', alt: 'Rear view', category: 'Exterior' },
  { url: '/pictures/general/11-rear-2.jpg', alt: 'Rear view', category: 'Exterior' },
  { url: '/pictures/general/12-rear-3.jpg', alt: 'Rear view', category: 'Exterior' },
  { url: '/pictures/general/13-creek-view.jpg', alt: 'Creek view', category: 'View' },
  { url: '/pictures/general/14-misc.jpg', alt: 'Property view', category: 'Property' },
  { url: '/pictures/general/15-misc-2.jpg', alt: 'Property view', category: 'Property' },
];

const faqItems = [
  {
    question: 'How far is Casa Del Mare from Cherry Grove Beach?',
    answer: 'Casa Del Mare is less than a 5-minute walk from Cherry Grove Beach in North Myrtle Beach.',
  },
  {
    question: 'How many guests can stay at Casa Del Mare?',
    answer: 'The home sleeps up to 14 guests with 5 bedrooms and 3 bathrooms.',
  },
  {
    question: 'Does Casa Del Mare have a hot tub?',
    answer: 'Yes. Casa Del Mare includes a private hot tub for guest use.',
  },
  {
    question: 'Can I book Casa Del Mare directly?',
    answer: 'Yes. You can book direct through the secure Book Now page and OwnerRez booking form.',
  },
  {
    question: 'Does the property have water access?',
    answer: 'Yes. Casa Del Mare has direct Intracoastal Waterway access with a private dock.',
  },
  {
    question: 'Where is Casa Del Mare located?',
    answer: 'Casa Del Mare is located at 325 52nd Ave North, North Myrtle Beach, SC 29582.',
  },
];

const amenitySymbols: Record<string, string> = {
  Sleeping: '◆',
  Entertainment: '◌',
  Relaxation: '◈',
  'Beach Access': '≈',
  'Outdoor Dining': '▴',
  'Outdoor Living': '□',
  'Water Access': '◍',
  'Modern Amenities': '✦',
};

const featureSections = {
  kitchen: {
    title: 'The Kitchen',
    description:
      'The kitchen is fully equipped for real family meals, not just quick snacks. You get a ceramic flat-top range, full-size refrigerator, granite counters, and easy flow into dining and living areas so everyone can gather while meals are being prepared.',
    rooms: [
      {
        icon: '◌',
        title: 'Ceramic Flat Top Electric Range',
        description: 'Cook breakfast, lunch, and dinner with plenty of burner space.',
      },
      {
        icon: '◆',
        title: 'Granite Countertops',
        description: 'Durable prep space for group meals and serving platters.',
      },
      {
        icon: '✦',
        title: 'Full-Size Refrigerator',
        description: 'Store groceries and drinks for your entire beach week.',
      },
      {
        icon: '—',
        title: 'Easy Cleanup Setup',
        description: 'Dishwasher and open layout make cleanup quick after meals.',
      },
    ],
    imagePaths: [
      '/pictures/kitchen/01-kitchen.jpg',
      '/pictures/indoor/dining/01-dining.jpg',
      '/pictures/indoor/dining/02-dining-table.jpg',
      '/pictures/indoor/living-room/04-kitchen-view.jpg',
      '/pictures/general/08-front-exterior.jpg',
      '/pictures/general/09-front-porch.jpg',
    ],
    imageAlts: [
      'Fully equipped kitchen at Casa Del Mare with granite counters',
      'Indoor dining space connected to the kitchen',
      'Dining table setup for family meals',
      'Open kitchen and living layout view',
      'Front exterior of Casa Del Mare',
      'Front porch entry area',
    ],
    bgColor: 'from-[#faf6ef] to-white',
    accentColor: 'text-[#1f4c48]',
  },
  bedrooms: {
    title: 'Bed & Bath',
    description:
      'Casa Del Mare sleeps up to 14 guests across five comfortable bedrooms and three full bathrooms. The bedroom mix works well for families and multi-family groups, with a king suite, multiple queen rooms, and a bunk room for kids.',
    rooms: [
      {
        icon: '◇',
        title: 'Master Bedroom (King)',
        description: 'Spacious primary suite with king bed and privacy.',
      },
      {
        icon: '◇',
        title: 'Guest Bedroom 1 (Queen)',
        description: 'Comfortable queen room with nearby full bath access.',
      },
      {
        icon: '◇',
        title: 'Guest Bedroom 2 (Queen)',
        description: 'Quiet queen bedroom with easy access to shared bath.',
      },
      {
        icon: '◇',
        title: 'Guest Bedroom 3 (Queen)',
        description: 'Additional queen room ideal for larger groups.',
      },
      {
        icon: '◇',
        title: 'Bunkroom',
        description: 'Full-size bunks that are perfect for kids and teens.',
      },
      {
        icon: '◍',
        title: 'Full Bathrooms',
        description: 'Three full bathrooms to keep morning routines easy.',
      },
    ],
    imagePaths: [
      '/pictures/bedrooms/master/01-master.jpg',
      '/pictures/bedrooms/master/02-desk.jpg',
      '/pictures/bedrooms/guest-1/01-turtle-room.jpg',
      '/pictures/bedrooms/guest-2/01-beige-room.jpg',
      '/pictures/bedrooms/guest-3/01-sailboat-room.jpg',
      '/pictures/bedrooms/bunkroom/01-bunkroom.jpg',
    ],
    imageAlts: [
      'Master bedroom with king bed',
      'Master bedroom seating and desk area',
      'Guest bedroom one with queen bed',
      'Guest bedroom two with queen bed',
      'Guest bedroom three with queen bed',
      'Bunkroom with full-size bunks',
    ],
    bgColor: 'from-white to-[#f4efe7]',
    accentColor: 'text-[#7a6353]',
  },
  outdoor: {
    title: 'Outdoor Living',
    description:
      'Outdoor living is one of the best parts of this home. Start your day with sunrise light, enjoy marsh sunsets in the evening, and spend time on the deck, dock, and backyard between beach trips.',
    rooms: [
      {
        icon: '≈',
        title: 'Sunrise & Sunset Views',
        description: 'Catch bright morning skies and colorful marsh sunsets.',
      },
      {
        icon: '□',
        title: 'Expansive Deck',
        description: 'Outdoor seating area with water and neighborhood views.',
      },
      {
        icon: '◍',
        title: 'Private Dock Access',
        description: 'Direct water access for kayaking and boating activities.',
      },
      {
        icon: '◈',
        title: 'Hot Tub',
        description: 'Relax in the hot tub after a day at the beach.',
      },
      {
        icon: '△',
        title: 'Backyard',
        description: 'Landscaped yard with space to unwind and hang out.',
      },
      {
        icon: '↝',
        title: 'Water Activities',
        description: 'Great setup for kayaking, paddleboarding, and fishing.',
      },
    ],
    imagePaths: [
      '/pictures/general/06-sunrise.jpg',
      '/pictures/outdoor/deck/01-deck.jpg',
      '/pictures/outdoor/deck/02-overhead.jpg',
      '/pictures/outdoor/dock/01-dock-canal.jpg',
      '/pictures/outdoor/dock/02-dock.jpg',
      '/pictures/outdoor/hottub/01-hottub.jpg',
      '/pictures/outdoor/backyard/02-hammock.jpg',
    ],
    imageAlts: [
      'Sunrise view near Casa Del Mare',
      'Main deck seating area',
      'Overhead view of the outdoor deck',
      'Private dock on the waterway',
      'Dock and canal access for kayaks',
      'Private hot tub at Casa Del Mare',
      'Backyard hammock area',
    ],
    bgColor: 'from-[#f7faf9] to-[#eef7f6]',
    accentColor: 'text-[#1f4c48]',
  },
  indoor: {
    title: 'Living & Recreation',
    description:
      'Inside, the home gives your group plenty of places to gather and spread out. The living room, dining area, and game room support everything from family dinners to movie nights and rainy-day fun.',
    rooms: [
      {
        icon: '□',
        title: 'Living Room',
        description: 'Comfortable seating and TV space for group downtime.',
      },
      {
        icon: '—',
        title: 'Dining Room',
        description: 'Indoor dining setup for shared meals and planning the day.',
      },
      {
        icon: '◌',
        title: 'Game Room',
        description: 'Kid-friendly and adult-friendly games for all-ages fun.',
      },
      {
        icon: '✦',
        title: 'TV & Entertainment',
        description: 'Entertainment options throughout the home.',
      },
      {
        icon: '◈',
        title: 'Open Floor Plan',
        description: 'Flowing layout that keeps everyone connected indoors.',
      },
      {
        icon: '◆',
        title: 'Modern Amenities',
        description: 'Home-style convenience with upgraded finishes.',
      },
    ],
    imagePaths: [
      '/pictures/indoor/living-room/01-living-room.jpg',
      '/pictures/indoor/dining/01-dining.jpg',
      '/pictures/indoor/game-room/01-gameroom.jpg',
      '/pictures/indoor/living-room/02-living-room-alt.jpg',
      '/pictures/indoor/living-room/03-living-room-detail.jpg',
      '/pictures/indoor/dining/02-dining-table.jpg',
    ],
    imageAlts: [
      'Main indoor living room with seating',
      'Indoor dining area at Casa Del Mare',
      'Game room entertainment space',
      'Alternate view of living room seating',
      'Living room detail view',
      'Dining table detail setup',
    ],
    bgColor: 'from-[#f7f2eb] to-white',
    accentColor: 'text-[#7a6353]',
  },
};

const desktopNavLinks = [
  { href: '#about', label: 'About' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#host-story', label: 'Host Story' },
  { href: '#explore-area', label: 'Explore' },
  { href: '/casadelmare/facts', label: 'Property Facts' },
  { href: '/casadelmare/availability', label: 'Availability' },
  { href: '/casadelmare/book-now', label: 'Book Now' },
];

const mobileNavLinks = [
  ...desktopNavLinks,
  { href: '/casadelmareA', label: 'Variant A' },
  { href: '/casadelmareB', label: 'Variant B' },
  { href: '/casadelmareC', label: 'Variant C' },
];

export default function CasaDelMareVariantA() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');
  const vacationRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: property.name,
    description: property.description,
    url: `${siteUrl}/casadelmareA`,
    email: property.email,
    image: [
      `${siteUrl}/pictures/outdoor/dock/01-dock-canal.jpg`,
      `${siteUrl}/pictures/general/05-sunset.jpg`,
      `${siteUrl}/pictures/indoor/living-room/01-living-room.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '325 52nd Ave North',
      addressLocality: 'North Myrtle Beach',
      addressRegion: 'SC',
      postalCode: '29582',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.latitude,
      longitude: property.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: 'North Myrtle Beach',
    },
    numberOfRooms: property.bedrooms,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: property.maxGuests,
    },
    amenityFeature: amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity.title,
      value: true,
    })),
    containsPlace: [
      { '@type': 'Place', name: 'Cherry Grove Beach Access' },
      { '@type': 'Place', name: 'Intracoastal Waterway Dock' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#fcfbf7] text-stone-800`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-[120] border-b border-white/20 bg-[#0f2f31]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/casadelmareA" className={`${headlineFont.className} text-3xl text-[#f7f1e8] transition hover:text-white`}>
            Casa Del Mare
          </a>

          <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.22em] text-[#f7f1e8] md:flex">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#d9cbb8]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href="/casadelmareA" className="rounded-full border border-[#d9cbb8] bg-[#f7f1e8] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0f2f31]">
              A
            </a>
            <a href="/casadelmareB" className="rounded-full border border-[#d9cbb8]/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:border-[#f7f1e8]">
              B
            </a>
            <a href="/casadelmareC" className="rounded-full border border-[#d9cbb8]/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f7f1e8] transition hover:border-[#f7f1e8]">
              C
            </a>
          </div>

          <MobileMenu links={mobileNavLinks} panelClassName={bodyFont.className} linkClassName={bodyFont.className} />
        </nav>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/pictures/outdoor/dock/01-dock-canal.jpg"
          alt="Casa Del Mare private dock and coastal waterway view"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a1c]/80 via-[#081a1c]/45 to-[#081a1c]/10" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-28 md:pb-28">
          <div className="max-w-3xl text-[#f7f1e8]">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d9cbb8]">Variant A · Minimalist Editorial</p>
            <h1 className={`${headlineFont.className} max-w-4xl text-6xl leading-[0.94] md:text-8xl`}>
              A waterfront retreat told with quiet luxury.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f8f5ef]/88 md:text-xl">
              {property.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/casadelmare/book-now" className="rounded-full bg-[#f7f1e8] px-7 py-3 text-sm uppercase tracking-[0.25em] text-[#0f2f31] transition hover:bg-white">
                Book Now
              </a>
              <a href="#about" className="rounded-full border border-[#f7f1e8]/70 px-7 py-3 text-sm uppercase tracking-[0.25em] text-[#f7f1e8] transition hover:border-white hover:bg-white/10">
                Read the Story
              </a>
            </div>
            <div className="mt-14 grid max-w-2xl gap-6 border-t border-white/25 pt-8 sm:grid-cols-3">
              <div>
                <p className={`${headlineFont.className} text-4xl text-white`}>{property.bedrooms}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d9cbb8]">Bedrooms</p>
              </div>
              <div>
                <p className={`${headlineFont.className} text-4xl text-white`}>{property.maxGuests}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d9cbb8]">Guests</p>
              </div>
              <div>
                <p className={`${headlineFont.className} text-4xl text-white`}>{property.beachDistance}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d9cbb8]">To the beach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#1f4c48]">About Casa Del Mare</p>
            <h2 className={`${headlineFont.className} text-5xl leading-tight text-[#122f30] md:text-7xl`}>
              A premium beach house designed for slow mornings and long evenings by the water.
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg leading-8 text-stone-700">{property.tagline}</p>
            <p className="text-lg leading-8 text-stone-700">
              Less than five minutes from Cherry Grove Beach, Casa Del Mare layers beach access, waterway living,
              and generous gathering space into one refined family escape.
            </p>
            <p className="text-base leading-7 text-stone-600">
              Browse sleeping arrangements, parking, beach access, and stay details in the{' '}
              <a href="/casadelmare/facts" className="border-b border-[#1f4c48] pb-1 text-[#1f4c48]">
                property facts overview
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="amenities" className="px-6 pb-28 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7a6353]">Amenities</p>
            <h2 className={`${headlineFont.className} text-5xl leading-tight text-[#122f30] md:text-6xl`}>
              Fewer distractions, more space to enjoy what matters.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-700">
              From hot tub evenings to dockside mornings, the home balances comfort, privacy, and memorable shared
              moments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {amenities.map((amenity) => (
              <article key={amenity.title} className="border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,47,49,0.06)]">
                <p className={`${headlineFont.className} text-4xl text-[#1f4c48]`}>{amenitySymbols[amenity.title] ?? '✦'}</p>
                <h3 className={`${headlineFont.className} mt-8 text-3xl text-[#122f30]`}>{amenity.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{amenity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#1f4c48]">Gallery</p>
              <h2 className={`${headlineFont.className} text-5xl leading-tight text-[#122f30] md:text-6xl`}>
                Photography-led storytelling, from sunrise dock views to quiet interiors.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-stone-600">
              Explore a curated set of scenes from a collection of {gallery.length} property moments and nearby coastal
              views.
            </p>
          </div>
          <ImageGallery images={galleryImages} />
          <div className="mt-10 text-center">
            <a href="/casadelmare/book-now" className="inline-flex rounded-full border border-[#1f4c48] px-7 py-3 text-sm uppercase tracking-[0.25em] text-[#1f4c48] transition hover:bg-[#1f4c48] hover:text-white">
              Reserve Your Dates
            </a>
          </div>
        </div>
      </section>

      <BedroomsSection
        sectionId="kitchen"
        title={featureSections.kitchen.title}
        description={featureSections.kitchen.description}
        rooms={featureSections.kitchen.rooms}
        imagePaths={featureSections.kitchen.imagePaths}
        imageAlts={featureSections.kitchen.imageAlts}
        bgColor={featureSections.kitchen.bgColor}
        accentColor={featureSections.kitchen.accentColor}
        headlineClassName={headlineFont.className}
        bodyClassName={bodyFont.className}
      />

      <BedroomsSection
        sectionId="bedrooms"
        title={featureSections.bedrooms.title}
        description={featureSections.bedrooms.description}
        rooms={featureSections.bedrooms.rooms}
        imagePaths={featureSections.bedrooms.imagePaths}
        imageAlts={featureSections.bedrooms.imageAlts}
        bgColor={featureSections.bedrooms.bgColor}
        accentColor={featureSections.bedrooms.accentColor}
        headlineClassName={headlineFont.className}
        bodyClassName={bodyFont.className}
      />

      <BedroomsSection
        sectionId="outdoor"
        title={featureSections.outdoor.title}
        description={featureSections.outdoor.description}
        rooms={featureSections.outdoor.rooms}
        imagePaths={featureSections.outdoor.imagePaths}
        imageAlts={featureSections.outdoor.imageAlts}
        bgColor={featureSections.outdoor.bgColor}
        accentColor={featureSections.outdoor.accentColor}
        headlineClassName={headlineFont.className}
        bodyClassName={bodyFont.className}
      />

      <BedroomsSection
        sectionId="indoor-living"
        title={featureSections.indoor.title}
        description={featureSections.indoor.description}
        rooms={featureSections.indoor.rooms}
        imagePaths={featureSections.indoor.imagePaths}
        imageAlts={featureSections.indoor.imageAlts}
        bgColor={featureSections.indoor.bgColor}
        accentColor={featureSections.indoor.accentColor}
        headlineClassName={headlineFont.className}
        bodyClassName={bodyFont.className}
      />

      <section id="host-story" className="px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7a6353]">Host Story</p>
            <h2 className={`${headlineFont.className} text-5xl leading-tight text-[#122f30] md:text-6xl`}>
              A home shaped by family tradition, shared meals, and time by the sea.
            </h2>
          </div>
          <div className="space-y-6 border-l border-stone-200 pl-0 lg:pl-12">
            {hostStory.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="explore-area" className="bg-[#f5efe7] px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#1f4c48]">Explore the Area</p>
            <h2 className={`${headlineFont.className} text-5xl leading-tight text-[#122f30] md:text-6xl`}>
              Spend the day between the beach, the waterway, and North Myrtle Beach favorites.
            </h2>
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
            {[
              { title: 'Restaurants & Dining', items: restaurants },
              { title: 'Beach Activities', items: beachActivities },
              { title: 'Attractions', items: attractions },
              { title: 'Nature & Wildlife', items: natureWildlife },
            ].map((group) => (
              <div key={group.title} className="bg-white p-8 shadow-[0_16px_40px_rgba(15,47,49,0.05)]">
                <h3 className={`${headlineFont.className} text-3xl text-[#122f30]`}>{group.title}</h3>
                <div className="mt-8 space-y-6">
                  {group.items.map((item) => (
                    <div key={item.name} className="border-t border-stone-200 pt-6 first:border-t-0 first:pt-0">
                      <h4 className={`${headlineFont.className} text-lg font-medium uppercase tracking-[0.12em] text-[#1f4c48]`}>{item.name}</h4>
                      <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7a6353]">FAQs</p>
            <h2 className={`${headlineFont.className} text-5xl text-[#122f30] md:text-6xl`}>Vacation rental questions, answered simply.</h2>
          </div>
          <div className="mt-14 space-y-5">
            {faqItems.map((faq) => (
              <article key={faq.question} className="border border-stone-200 bg-white px-8 py-7 shadow-[0_12px_35px_rgba(15,47,49,0.04)]">
                <h3 className={`${headlineFont.className} text-2xl text-[#122f30]`}>{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f2f31] px-6 py-28 md:py-36">
        <div className="absolute inset-0 opacity-20">
          <Image src="/pictures/general/05-sunset.jpg" alt="Sunset at Casa Del Mare" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center text-[#f7f1e8]">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d9cbb8]">Final CTA</p>
          <h2 className={`${headlineFont.className} text-5xl md:text-7xl`}>Ready to experience Casa Del Mare?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f8f5ef]/86">
            Step into a week of beach mornings, dockside evenings, and elevated family time in North Myrtle Beach.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/casadelmare/book-now" className="rounded-full bg-[#f7f1e8] px-7 py-3 text-sm uppercase tracking-[0.25em] text-[#0f2f31] transition hover:bg-white">
              Book Now
            </a>
            <a href="/casadelmare/availability" className="rounded-full border border-[#f7f1e8]/70 px-7 py-3 text-sm uppercase tracking-[0.25em] text-[#f7f1e8] transition hover:border-white hover:bg-white/10">
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-[#fcfbf7] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h3 className={`${headlineFont.className} text-3xl text-[#122f30]`}>Casa Del Mare</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-600">
              A refined waterfront vacation rental in North Myrtle Beach with private dock access, a hot tub, and room for memorable group stays.
            </p>
          </div>
          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.25em] text-[#1f4c48]`}>Browse Variants</h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              <li><a href="/casadelmareA" className="hover:text-[#122f30]">Variant A · Editorial Luxury</a></li>
              <li><a href="/casadelmareB" className="hover:text-[#122f30]">Variant B · Contemporary Minimal</a></li>
              <li><a href="/casadelmareC" className="hover:text-[#122f30]">Variant C · Editorial Hybrid</a></li>
            </ul>
          </div>
          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.25em] text-[#1f4c48]`}>Contact</h4>
            <p className="mt-4 text-sm leading-7 text-stone-600">{property.address}</p>
            <a href={`mailto:${property.email}`} className="text-sm leading-7 text-stone-600 hover:text-[#122f30]">
              {property.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
