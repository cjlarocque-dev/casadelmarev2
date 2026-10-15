import { Inter } from 'next/font/google';
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
  Sleeping: '◻',
  Entertainment: '◎',
  Relaxation: '◐',
  'Beach Access': '≈',
  'Outdoor Dining': '▤',
  'Outdoor Living': '▢',
  'Water Access': '◌',
  'Modern Amenities': '✳',
};

const featureSections = {
  kitchen: {
    title: 'The Kitchen',
    description:
      'The kitchen is fully equipped for real family meals, not just quick snacks. You get a ceramic flat-top range, full-size refrigerator, granite counters, and easy flow into dining and living areas so everyone can gather while meals are being prepared.',
    rooms: [
      { icon: '◎', title: 'Ceramic Flat Top Electric Range', description: 'Cook breakfast, lunch, and dinner with plenty of burner space.' },
      { icon: '▤', title: 'Granite Countertops', description: 'Durable prep space for group meals and serving platters.' },
      { icon: '◻', title: 'Full-Size Refrigerator', description: 'Store groceries and drinks for your entire beach week.' },
      { icon: '✳', title: 'Easy Cleanup Setup', description: 'Dishwasher and open layout make cleanup quick after meals.' },
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
    bgColor: 'from-[#fbfaf4] to-[#f3f6ee]',
    accentColor: 'text-[#395d57]',
  },
  bedrooms: {
    title: 'Bed & Bath',
    description:
      'Casa Del Mare sleeps up to 14 guests across five comfortable bedrooms and three full bathrooms. The bedroom mix works well for families and multi-family groups, with a king suite, multiple queen rooms, and a bunk room for kids.',
    rooms: [
      { icon: '◻', title: 'Master Bedroom (King)', description: 'Spacious primary suite with king bed and privacy.' },
      { icon: '◻', title: 'Guest Bedroom 1 (Queen)', description: 'Comfortable queen room with nearby full bath access.' },
      { icon: '◻', title: 'Guest Bedroom 2 (Queen)', description: 'Quiet queen bedroom with easy access to shared bath.' },
      { icon: '◻', title: 'Guest Bedroom 3 (Queen)', description: 'Additional queen room ideal for larger groups.' },
      { icon: '◻', title: 'Bunkroom', description: 'Full-size bunks that are perfect for kids and teens.' },
      { icon: '◐', title: 'Full Bathrooms', description: 'Three full bathrooms to keep morning routines easy.' },
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
    bgColor: 'from-white to-[#f7f4ed]',
    accentColor: 'text-[#4b5f77]',
  },
  outdoor: {
    title: 'Outdoor Living',
    description:
      'Outdoor living is one of the best parts of this home. Start your day with sunrise light, enjoy marsh sunsets in the evening, and spend time on the deck, dock, and backyard between beach trips.',
    rooms: [
      { icon: '≈', title: 'Sunrise & Sunset Views', description: 'Catch bright morning skies and colorful marsh sunsets.' },
      { icon: '▢', title: 'Expansive Deck', description: 'Outdoor seating area with water and neighborhood views.' },
      { icon: '◌', title: 'Private Dock Access', description: 'Direct water access for kayaking and boating activities.' },
      { icon: '◐', title: 'Hot Tub', description: 'Relax in the hot tub after a day at the beach.' },
      { icon: '▤', title: 'Backyard', description: 'Landscaped yard with space to unwind and hang out.' },
      { icon: '✳', title: 'Water Activities', description: 'Great setup for kayaking, paddleboarding, and fishing.' },
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
    bgColor: 'from-[#f2f7f5] to-[#edf4f7]',
    accentColor: 'text-[#395d57]',
  },
  indoor: {
    title: 'Living & Recreation',
    description:
      'Inside, the home gives your group plenty of places to gather and spread out. The living room, dining area, and game room support everything from family dinners to movie nights and rainy-day fun.',
    rooms: [
      { icon: '▢', title: 'Living Room', description: 'Comfortable seating and TV space for group downtime.' },
      { icon: '▤', title: 'Dining Room', description: 'Indoor dining setup for shared meals and planning the day.' },
      { icon: '◎', title: 'Game Room', description: 'Kid-friendly and adult-friendly games for all-ages fun.' },
      { icon: '✳', title: 'TV & Entertainment', description: 'Entertainment options throughout the home.' },
      { icon: '◐', title: 'Open Floor Plan', description: 'Flowing layout that keeps everyone connected indoors.' },
      { icon: '◻', title: 'Modern Amenities', description: 'Home-style convenience with upgraded finishes.' },
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
    bgColor: 'from-[#f9f6ef] to-white',
    accentColor: 'text-[#4b5f77]',
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

export default function CasaDelMareVariantB() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');
  const vacationRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: property.name,
    description: property.description,
    url: `${siteUrl}/casadelmareB`,
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
    <div className={`${inter.className} min-h-screen bg-[#f7f4ee] text-slate-800`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-[120] border-b border-slate-200/80 bg-[#f7f4ee]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/casadelmareB" className="text-2xl font-semibold tracking-[0.18em] text-[#334155] uppercase">
            Casa Del Mare
          </a>

          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href="/casadelmareA" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 transition hover:border-slate-500">
              A
            </a>
            <a href="/casadelmareB" className="rounded-full bg-[#7f9c95] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white">
              B
            </a>
            <a href="/casadelmareC" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 transition hover:border-slate-500">
              C
            </a>
          </div>

          <MobileMenu links={mobileNavLinks} panelClassName={inter.className} linkClassName={inter.className} />
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[90vh]">
          <Image
            src="/pictures/general/01-aerial-1.jpg"
            alt="Aerial view of Casa Del Mare"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10212e]/60 via-[#10212e]/25 to-[#10212e]/70" />
          <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 text-white">
            <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#dce7e3]">Variant B · Contemporary Minimal</p>
              <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">
                Clean coastal design for effortless group getaways.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/88">{property.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/casadelmare/book-now" className="rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-900 transition hover:bg-[#eef4f2]">
                  Book Now
                </a>
                <a href="#about" className="rounded-full border border-white/60 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10">
                  Explore the Home
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Bedrooms', value: property.bedrooms },
                { label: 'Guests', value: property.maxGuests },
                { label: 'Beach Access', value: property.beachDistance },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/12 px-6 py-5 backdrop-blur">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/78">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(51,65,85,0.08)] md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">About</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Modern comfort near Cherry Grove Beach and the waterway.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-[#ece6d8] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Tagline</p>
              <p className="mt-4 text-lg leading-8 text-slate-800">{property.tagline}</p>
            </div>
            <div className="rounded-[2rem] bg-[#e7efe8] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Location</p>
              <p className="mt-4 text-lg leading-8 text-slate-800">
                Waterfront living, dock access, and a short walk to the sand in North Myrtle Beach.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_45px_rgba(51,65,85,0.06)] sm:col-span-2">
              <p className="text-lg leading-8 text-slate-700">{property.description}</p>
              <a href="/casadelmare/facts" className="mt-6 inline-flex text-sm font-medium uppercase tracking-[0.18em] text-[#395d57]">
                Review property facts →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">Amenities</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Organized, breathable, and built for easy vacations.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The layout supports large-family travel with outdoor dining, indoor entertainment, and practical comforts throughout.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map((amenity) => (
              <article key={amenity.title} className="rounded-[1.75rem] border border-white bg-white p-7 shadow-[0_18px_45px_rgba(51,65,85,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_55px_rgba(51,65,85,0.1)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff5f2] text-2xl text-[#395d57]">
                  {amenitySymbols[amenity.title] ?? '✳'}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{amenity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{amenity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.65fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">Gallery</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
                Full-bleed photography and a clean browsing experience.
              </h2>
            </div>
            <div className="rounded-[1.75rem] bg-[#f7f4ee] p-6 text-sm leading-7 text-slate-600">
              Browse highlights from {gallery.length} property images, from outdoor living to bright, family-friendly interiors.
            </div>
          </div>
          <ImageGallery images={galleryImages} />
          <div className="mt-8 flex justify-center">
            <a href="/casadelmare/book-now" className="rounded-full bg-[#395d57] px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#304d48]">
              Book Your Stay
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
      />

      <section id="host-story" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-[0_24px_60px_rgba(51,65,85,0.08)] md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">Host Story</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Approachable hospitality with a polished coastal point of view.</h2>
            </div>
            <div className="grid gap-5">
              {hostStory.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="explore-area" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">Explore the Area</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-900 md:text-5xl">
              Cleanly organized local recommendations for dining, activities, and nature nearby.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { title: 'Restaurants & Dining', items: restaurants },
              { title: 'Beach Activities', items: beachActivities },
              { title: 'Attractions', items: attractions },
              { title: 'Nature & Wildlife', items: natureWildlife },
            ].map((group) => (
              <article key={group.title} className="rounded-[2rem] bg-white p-8 shadow-[0_18px_45px_rgba(51,65,85,0.06)]">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <h3 className="text-2xl font-semibold text-slate-900">{group.title}</h3>
                  <span className="rounded-full bg-[#eff5f2] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#395d57]">
                    {group.items.length} picks
                  </span>
                </div>
                <div className="mt-6 grid gap-5">
                  {group.items.map((item) => (
                    <div key={item.name} className="rounded-2xl bg-[#f7f4ee] p-5">
                      <h4 className="text-lg font-semibold text-slate-900">{item.name}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7f9c95]">FAQs</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Everything guests usually ask before booking.</h2>
          </div>
          <div className="mt-12 grid gap-5">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-[1.75rem] border border-slate-100 bg-[#f7f4ee] px-7 py-6">
                <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#395d57] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d9e4df]">Final CTA</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Ready for a cleaner, calmer kind of beach trip?</h2>
          <p className="mt-6 text-lg leading-8 text-white/85">
            Reserve Casa Del Mare for a stay that balances spacious comfort, easy beach access, and waterfront downtime.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/casadelmare/book-now" className="rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#395d57] transition hover:bg-[#eef4f2]">
              Book Now
            </a>
            <a href="/casadelmare/availability" className="rounded-full border border-white/60 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10">
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7f4ee] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Casa Del Mare</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              A contemporary North Myrtle Beach waterfront vacation rental with dock access, beach proximity, and room for 14 guests.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.22em] text-[#395d57]">Browse Variants</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="/casadelmareA" className="hover:text-slate-900">Variant A · Editorial Luxury</a></li>
              <li><a href="/casadelmareB" className="hover:text-slate-900">Variant B · Contemporary Minimal</a></li>
              <li><a href="/casadelmareC" className="hover:text-slate-900">Variant C · Editorial Hybrid</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.22em] text-[#395d57]">Contact</h4>
            <p className="mt-4 text-sm leading-7 text-slate-600">{property.address}</p>
            <a href={`mailto:${property.email}`} className="text-sm leading-7 text-slate-600 hover:text-slate-900">
              {property.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
