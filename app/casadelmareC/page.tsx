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
    answer: 'Yes. Casa Del Mare has direct intercoastal waterway access with a private dock.',
  },
  {
    question: 'Where is Casa Del Mare located?',
    answer: 'Casa Del Mare is located at 325 52nd Ave North, North Myrtle Beach, SC 29582.',
  },
];

const amenitySymbols: Record<string, string> = {
  Sleeping: '◇',
  Entertainment: '✦',
  Relaxation: '◐',
  'Beach Access': '≈',
  'Outdoor Dining': '▴',
  'Outdoor Living': '◻',
  'Water Access': '◌',
  'Modern Amenities': '✳',
};

const featureSections = {
  kitchen: {
    title: 'The Kitchen',
    description:
      'The kitchen is fully equipped for real family meals, not just quick snacks. You get a ceramic flat-top range, full-size refrigerator, granite counters, and easy flow into dining and living areas so everyone can gather while meals are being prepared.',
    rooms: [
      { icon: '✦', title: 'Ceramic Flat Top Electric Range', description: 'Cook breakfast, lunch, and dinner with plenty of burner space.' },
      { icon: '▴', title: 'Granite Countertops', description: 'Durable prep space for group meals and serving platters.' },
      { icon: '◇', title: 'Full-Size Refrigerator', description: 'Store groceries and drinks for your entire beach week.' },
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
    bgColor: 'from-[#fbf5ed] to-[#f4f9fb]',
    accentColor: 'text-[#6b7f91]',
  },
  bedrooms: {
    title: 'Bed & Bath',
    description:
      'Casa Del Mare sleeps up to 14 guests across five comfortable bedrooms and three full bathrooms. The bedroom mix works well for families and multi-family groups, with a king suite, multiple queen rooms, and a bunk room for kids.',
    rooms: [
      { icon: '◇', title: 'Master Bedroom (King)', description: 'Spacious primary suite with king bed and privacy.' },
      { icon: '◇', title: 'Guest Bedroom 1 (Queen)', description: 'Comfortable queen room with nearby full bath access.' },
      { icon: '◇', title: 'Guest Bedroom 2 (Queen)', description: 'Quiet queen bedroom with easy access to shared bath.' },
      { icon: '◇', title: 'Guest Bedroom 3 (Queen)', description: 'Additional queen room ideal for larger groups.' },
      { icon: '◇', title: 'Bunkroom', description: 'Full-size bunks that are perfect for kids and teens.' },
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
    bgColor: 'from-white to-[#f8f1ea]',
    accentColor: 'text-[#b46e53]',
  },
  outdoor: {
    title: 'Outdoor Living',
    description:
      'Outdoor living is one of the best parts of this home. Start your day with sunrise light, enjoy marsh sunsets in the evening, and spend time on the deck, dock, and backyard between beach trips.',
    rooms: [
      { icon: '≈', title: 'Sunrise & Sunset Views', description: 'Catch bright morning skies and colorful marsh sunsets.' },
      { icon: '▴', title: 'Expansive Deck', description: 'Outdoor seating area with water and neighborhood views.' },
      { icon: '◌', title: 'Private Dock Access', description: 'Direct water access for kayaking and boating activities.' },
      { icon: '◐', title: 'Hot Tub', description: 'Relax in the hot tub after a day at the beach.' },
      { icon: '◻', title: 'Backyard', description: 'Landscaped yard with space to unwind and hang out.' },
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
    bgColor: 'from-[#f4f9fb] to-[#edf4ee]',
    accentColor: 'text-[#6b7f91]',
  },
  indoor: {
    title: 'Living & Recreation',
    description:
      'Inside, the home gives your group plenty of places to gather and spread out. The living room, dining area, and game room support everything from family dinners to movie nights and rainy-day fun.',
    rooms: [
      { icon: '◻', title: 'Living Room', description: 'Comfortable seating and TV space for group downtime.' },
      { icon: '▴', title: 'Dining Room', description: 'Indoor dining setup for shared meals and planning the day.' },
      { icon: '✦', title: 'Game Room', description: 'Kid-friendly and adult-friendly games for all-ages fun.' },
      { icon: '✳', title: 'TV & Entertainment', description: 'Entertainment options throughout the home.' },
      { icon: '◐', title: 'Open Floor Plan', description: 'Flowing layout that keeps everyone connected indoors.' },
      { icon: '◇', title: 'Modern Amenities', description: 'Home-style convenience with upgraded finishes.' },
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
    bgColor: 'from-[#fcf7f1] to-white',
    accentColor: 'text-[#b46e53]',
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

export default function CasaDelMareVariantC() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.familybeachtrips.com').replace(/\/$/, '');
  const vacationRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: property.name,
    description: property.description,
    url: `${siteUrl}/casadelmareC`,
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
      { '@type': 'Place', name: 'Intercoastal Waterway Dock' },
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
    <div className={`${bodyFont.className} min-h-screen bg-[#f7f4ef] text-slate-800`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-[120] border-b border-[#d7dfe6]/60 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/casadelmareC" className={`${headlineFont.className} text-3xl text-[#395066]`}>
            Casa Del Mare
          </a>

          <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-slate-600 md:flex">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#395066]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href="/casadelmareA" className="rounded-full border border-[#cfd7df] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600 transition hover:border-[#395066]">
              A
            </a>
            <a href="/casadelmareB" className="rounded-full border border-[#cfd7df] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600 transition hover:border-[#395066]">
              B
            </a>
            <a href="/casadelmareC" className="rounded-full bg-[#b46e53] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white">
              C
            </a>
          </div>

          <MobileMenu links={mobileNavLinks} />
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[92vh]">
          <Image
            src="/pictures/general/05-sunset.jpg"
            alt="Sunset over Casa Del Mare"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233240]/75 via-[#233240]/35 to-[#b46e53]/30" />
          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-end gap-8 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl text-white">
              <p className="text-sm uppercase tracking-[0.38em] text-[#eedccd]">Variant C · Editorial Hybrid</p>
              <h1 className={`${headlineFont.className} mt-6 text-6xl leading-[0.95] md:text-8xl`}>
                Warm editorial living on the North Myrtle Beach waterfront.
              </h1>
              <p className="mt-7 text-lg leading-8 text-white/88">{property.description}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="/casadelmare/book-now" className="rounded-full bg-[#f7f4ef] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#395066] transition hover:bg-white">
                  Book Now
                </a>
                <a href="#about" className="rounded-full border border-white/70 px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-white/10">
                  Discover More
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/14 p-7 text-white backdrop-blur-md md:p-8">
              <p className={`${headlineFont.className} text-3xl`}>Editorial balance</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: 'Bedrooms', value: property.bedrooms },
                  { label: 'Max Guests', value: property.maxGuests },
                  { label: 'Beach Distance', value: property.beachDistance },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#eedccd] pl-4">
                    <p className="text-3xl">{stat.value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/78">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2.25rem] bg-[#eef3f6] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b7f91]">About</p>
            <h2 className={`${headlineFont.className} mt-5 text-5xl leading-tight text-[#395066] md:text-6xl`}>
              A relaxed, personality-filled home that still feels intentionally refined.
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_rgba(57,80,102,0.08)]">
              <p className="text-lg leading-8 text-slate-700">{property.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-[#fbefe3] p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-[#b46e53]">Tagline</p>
                <p className="mt-4 text-lg leading-8 text-slate-700">{property.tagline}</p>
              </div>
              <div className="rounded-[2rem] bg-[#eef3f6] p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-[#6b7f91]">Guest Planning</p>
                <a href="/casadelmare/facts" className="mt-4 inline-block text-lg leading-8 text-[#395066] underline underline-offset-4">
                  Review sleeping arrangements, parking, beach access, and stay details.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="px-6 pb-28 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">Amenities</p>
            <h2 className={`${headlineFont.className} mt-4 text-5xl text-[#395066] md:text-6xl`}>
              Warm coastal tones, approachable comforts, and space to gather.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map((amenity, index) => (
              <article
                key={amenity.title}
                className={`rounded-[1.8rem] p-7 shadow-[0_18px_45px_rgba(57,80,102,0.07)] ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#eef3f6]'
                }`}
              >
                <div className="text-2xl text-[#b46e53]">{amenitySymbols[amenity.title] ?? '✳'}</div>
                <h3 className={`${headlineFont.className} mt-6 text-3xl text-[#395066]`}>{amenity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{amenity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7f91]">Gallery</p>
              <h2 className={`${headlineFont.className} mt-4 text-5xl text-[#395066] md:text-6xl`}>
                A balanced mix of full-bleed views and authentic lifestyle moments.
              </h2>
            </div>
            <div className="rounded-[2rem] bg-[#fbefe3] p-7 text-base leading-8 text-slate-600">
              The gallery combines waterway scenes, beach-house interiors, and outdoor living highlights from a set of
              {` ${gallery.length} `}curated images.
            </div>
          </div>
          <ImageGallery images={galleryImages} />
          <div className="mt-8 text-center">
            <a href="/casadelmare/book-now" className="inline-flex rounded-full bg-[#b46e53] px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#9e5f47]">
              Start Planning
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

      <section id="host-story" className="px-6 py-28 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">Host Story</p>
            <h2 className={`${headlineFont.className} mt-4 text-5xl text-[#395066] md:text-6xl`}>
              Thoughtful hosting, warm family roots, and a home meant to be shared.
            </h2>
          </div>
          <div className="grid gap-5 rounded-[2.25rem] bg-white p-8 shadow-[0_20px_50px_rgba(57,80,102,0.08)] md:p-10">
            {hostStory.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="explore-area" className="bg-[#eef3f6] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b7f91]">Explore the Area</p>
            <h2 className={`${headlineFont.className} mt-4 text-5xl text-[#395066] md:text-6xl`}>
              From local dining to nature trails, the neighborhood carries the same warm-coastal rhythm.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { title: 'Restaurants & Dining', items: restaurants, tone: 'bg-white' },
              { title: 'Beach Activities', items: beachActivities, tone: 'bg-[#fbefe3]' },
              { title: 'Attractions', items: attractions, tone: 'bg-[#fbefe3]' },
              { title: 'Nature & Wildlife', items: natureWildlife, tone: 'bg-white' },
            ].map((group) => (
              <article key={group.title} className={`rounded-[2rem] p-8 shadow-[0_18px_45px_rgba(57,80,102,0.06)] ${group.tone}`}>
                <h3 className={`${headlineFont.className} text-3xl text-[#395066]`}>{group.title}</h3>
                <div className="mt-7 grid gap-5">
                  {group.items.map((item) => (
                    <div key={item.name} className="rounded-[1.4rem] border border-white/60 bg-white/70 p-5">
                      <h4 className="text-lg font-medium text-[#395066]">{item.name}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-white px-6 py-28 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">FAQs</p>
            <h2 className={`${headlineFont.className} mt-4 text-5xl text-[#395066] md:text-6xl`}>
              Helpful answers before you book.
            </h2>
          </div>
          <div className="mt-12 space-y-5">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-[1.9rem] bg-[#f7f4ef] px-7 py-6 shadow-[0_14px_35px_rgba(57,80,102,0.05)]">
                <h3 className={`${headlineFont.className} text-2xl text-[#395066]`}>{faq.question}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#395066] px-6 py-28 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <Image src="/pictures/general/06-sunset-pier.jpg" alt="Sunset near Casa Del Mare" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-[#eedccd]">Final CTA</p>
          <h2 className={`${headlineFont.className} mt-4 text-5xl md:text-7xl`}>Ready to make Casa Del Mare your next coastal memory?</h2>
          <p className="mt-6 text-lg leading-8 text-white/84">
            Book a stay that blends warm design, easy beach access, and generous gathering space for family and friends.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/casadelmare/book-now" className="rounded-full bg-[#f7f4ef] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#395066] transition hover:bg-white">
              Book Now
            </a>
            <a href="/casadelmare/availability" className="rounded-full border border-white/60 px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-white/10">
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d7dfe6] bg-[#f7f4ef] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h3 className={`${headlineFont.className} text-3xl text-[#395066]`}>Casa Del Mare</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              A warmer editorial interpretation of the same Casa Del Mare property content and booking experience.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] text-[#b46e53]">Browse Variants</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="/casadelmareA" className="hover:text-[#395066]">Variant A · Editorial Luxury</a></li>
              <li><a href="/casadelmareB" className="hover:text-[#395066]">Variant B · Contemporary Minimal</a></li>
              <li><a href="/casadelmareC" className="hover:text-[#395066]">Variant C · Editorial Hybrid</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] text-[#b46e53]">Contact</h4>
            <p className="mt-4 text-sm leading-7 text-slate-600">{property.address}</p>
            <a href={`mailto:${property.email}`} className="text-sm leading-7 text-slate-600 hover:text-[#395066]">
              {property.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
