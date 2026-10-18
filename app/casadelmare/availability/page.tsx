'use client';

import { Lato, Playfair_Display } from 'next/font/google';
import { useEffect } from 'react';

import MobileMenu from '@/app/components/MobileMenu';
import { property } from '@/lib/propertyData';

const headlineFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const navLinks = [
  { href: '/casadelmare#about', label: 'About' },
  { href: '/casadelmare#amenities', label: 'Amenities' },
  { href: '/casadelmare#gallery', label: 'Gallery' },
  { href: '/casadelmare/facts', label: 'Property Facts' },
  { href: '/casadelmare/availability', label: 'Availability', className: 'text-[#eedccd]' },
  { href: '/casadelmare/book-now', label: 'Book Now' },
];

export default function AvailabilityPage() {
  useEffect(() => {
    if ((window as any).OwnerRezWidgets) {
      (window as any).OwnerRezWidgets.loadWidgets();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.ownerrez.com/widget.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).OwnerRezWidgets) {
        (window as any).OwnerRezWidgets.loadWidgets();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#f7f4ef] text-slate-800`}>
      <header className="sticky top-0 z-[120] border-b border-[#d7dfe6]/60 bg-[#f7f4ef]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/casadelmare" className={`${headlineFont.className} text-3xl text-[#395066]`}>
            Casa Del Mare
          </a>

          <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-slate-600 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`${link.className ?? ''} transition hover:text-[#b46e53]`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/casadelmare/availability"
              className="rounded-full border border-[#395066] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#395066] transition hover:border-[#b46e53] hover:text-[#b46e53]"
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
            links={navLinks}
            buttonClassName="text-[#395066] hover:text-[#b46e53]"
            panelClassName={`${bodyFont.className} bg-[#395066] text-white`}
            linkClassName={`${bodyFont.className} text-sm uppercase tracking-[0.18em]`}
          />
        </nav>
      </header>

      <main>
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/pictures/general/07-cherry-point.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#233240]/80 via-[#395066]/55 to-[#b46e53]/35" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-[#eedccd]">
                Plan Your Coastal Escape
              </p>
              <h1 className={`${headlineFont.className} mt-5 text-5xl leading-tight md:text-7xl`}>
                Current Availability
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-white/90 md:text-2xl">
                Check Casa Del Mare&apos;s calendar to find open dates for your next North Myrtle
                Beach stay.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/casadelmare/book-now"
                  className="rounded-full bg-[#f7f4ef] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#395066] transition hover:bg-white"
                >
                  Book Direct
                </a>
                <a
                  href="/casadelmare/facts"
                  className="rounded-full border border-white/60 px-7 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[#eedccd] hover:text-[#eedccd]"
                >
                  Review Property Facts
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-[#d7dfe6] bg-white/95 p-6 shadow-[0_24px_60px_rgba(57,80,102,0.14)] backdrop-blur-sm md:p-8">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">Availability</p>
                <h2 className={`${headlineFont.className} mt-3 text-4xl text-[#395066] md:text-5xl`}>
                  See available dates at a glance
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Use the live OwnerRez calendar below to confirm open dates before submitting your
                  reservation request.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#e8ddd4] bg-[#fcf8f3] p-4 md:p-6">
                <div
                  className="ownerrez-widget"
                  data-propertyId="934d8c678417484ea626901fabf33f9a"
                  data-widget-type="calendar - Single Month Calendar"
                  data-widgetId="7e3b809403d14958a4be387802aabe0f"
                />
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#e8ddd4] bg-[#fbf5ed] p-8 shadow-[0_18px_44px_rgba(180,110,83,0.12)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">Before You Book</p>
              <h2 className={`${headlineFont.className} mt-3 text-4xl text-[#395066]`}>
                Make the most of your stay
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Once you find your dates, continue to the secure booking page or explore the home
                details that make Casa Del Mare ideal for family beach trips.
              </p>

              <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
                <div className="rounded-2xl border border-[#eadfd5] bg-white px-5 py-4">
                  <p className={`${headlineFont.className} text-2xl text-[#395066]`}>5 bedrooms</p>
                  <p>Sleeps up to 14 guests with room for multi-family stays.</p>
                </div>
                <div className="rounded-2xl border border-[#eadfd5] bg-white px-5 py-4">
                  <p className={`${headlineFont.className} text-2xl text-[#395066]`}>
                    Waterfront setting
                  </p>
                  <p>Private dock access, marsh views, and less than 5 minutes to the beach.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="/casadelmare/book-now"
                  className="inline-flex justify-center rounded-full bg-[#395066] px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#2f4356]"
                >
                  Continue to Booking
                </a>
                <a
                  href="/casadelmare#amenities"
                  className="inline-flex justify-center rounded-full border border-[#b46e53] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[#b46e53] transition hover:bg-[#b46e53] hover:text-white"
                >
                  Explore Amenities
                </a>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Questions before reserving? Email{' '}
                <a
                  href={`mailto:${property.email}`}
                  className="text-[#395066] underline underline-offset-4 transition hover:text-[#b46e53]"
                >
                  {property.email}
                </a>
                .
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d7dfe6] bg-[#f7f4ef] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h3 className={`${headlineFont.className} text-3xl text-[#395066]`}>Casa Del Mare</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Your perfect beach getaway in North Myrtle Beach, South Carolina.
            </p>
          </div>

          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.22em] text-[#b46e53]`}>
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="/casadelmare#about" className="transition hover:text-[#395066]">
                  About
                </a>
              </li>
              <li>
                <a href="/casadelmare#amenities" className="transition hover:text-[#395066]">
                  Amenities
                </a>
              </li>
              <li>
                <a href="/casadelmare#gallery" className="transition hover:text-[#395066]">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/casadelmare/facts" className="transition hover:text-[#395066]">
                  Property Facts &amp; Guest Rules
                </a>
              </li>
              <li>
                <a href="/casadelmare/book-now" className="transition hover:text-[#395066]">
                  Book Direct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`${headlineFont.className} text-sm uppercase tracking-[0.22em] text-[#b46e53]`}>
              Contact
            </h4>
            <p className="mt-4 text-sm leading-7 text-slate-600">{property.address}</p>
            <a
              href={`mailto:${property.email}`}
              className="text-sm leading-7 text-slate-600 transition hover:text-[#395066]"
            >
              {property.email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-[#d7dfe6] pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2026 Casa Del Mare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
