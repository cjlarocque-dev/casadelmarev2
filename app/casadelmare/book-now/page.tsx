'use client';

import { Lato, Playfair_Display } from 'next/font/google';
import { useEffect, useRef } from 'react';

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
  { href: '/casadelmare', label: 'Home' },
  { href: '/casadelmare/facts', label: 'Property Facts' },
  { href: '/casadelmare/availability', label: 'Availability' },
  { href: '/casadelmare/book-now', label: 'Book Now', className: 'text-[#eedccd]' },
];

const featureCards = [
  {
    icon: '🏠',
    title: '5 Bedrooms',
    description: 'Sleeps up to 14 guests comfortably for easy family getaways.',
  },
  {
    icon: '🌊',
    title: 'Waterfront',
    description: 'Private dock access, marsh views, and a warm coastal setting.',
  },
  {
    icon: '🏖️',
    title: 'Beach Access',
    description: 'Less than 5 minutes to Cherry Grove Beach and the Atlantic shoreline.',
  },
];

export default function BookNowPage() {
  const ownerRezContainerRef = useRef<HTMLDivElement>(null);
  const lastTrackedRef = useRef<{ key: string; timestamp: number }>({ key: '', timestamp: 0 });

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

  useEffect(() => {
    const trackOwnerRezEvent = (
      eventName: 'ownerrez_book_now_click' | 'ownerrez_inquiry_click' | 'ownerrez_cta_click',
      label: string,
      source: 'dom_click' | 'postmessage'
    ) => {
      const dedupeKey = `${eventName}:${label}:${source}`;
      const now = Date.now();
      if (
        lastTrackedRef.current.key === dedupeKey &&
        now - lastTrackedRef.current.timestamp < 400
      ) {
        return;
      }
      lastTrackedRef.current = { key: dedupeKey, timestamp: now };

      const gtag = (window as Window & {
        gtag?: (
          command: 'event',
          eventName: string,
          eventParams: Record<string, string | number>
        ) => void;
      }).gtag;

      if (typeof gtag === 'function') {
        gtag('event', eventName, {
          event_category: 'engagement',
          event_label: label,
          event_source: source,
          value: 1,
        });
      }
    };

    const handleOwnerRezClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target || !ownerRezContainerRef.current) {
        return;
      }

      const interactiveElement = target.closest('a, button, input[type="submit"], [role="button"]') as
        | HTMLElement
        | null;
      if (!interactiveElement || !ownerRezContainerRef.current.contains(interactiveElement)) {
        return;
      }

      const text = (interactiveElement.textContent ?? '').trim().toLowerCase();
      const href = interactiveElement instanceof HTMLAnchorElement ? interactiveElement.href : '';

      let eventName = 'ownerrez_cta_click';
      if (text.includes('book') || href.includes('book')) {
        eventName = 'ownerrez_book_now_click';
      } else if (text.includes('inquir') || href.includes('inquiry') || href.includes('inquire')) {
        eventName = 'ownerrez_inquiry_click';
      }

      trackOwnerRezEvent(
        eventName as 'ownerrez_book_now_click' | 'ownerrez_inquiry_click' | 'ownerrez_cta_click',
        text || href || interactiveElement.tagName.toLowerCase(),
        'dom_click'
      );
    };

    const handleOwnerRezMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://app.ownerrez.com') {
        return;
      }

      let payload: unknown = event.data;
      if (typeof payload === 'string') {
        try {
          payload = JSON.parse(payload);
        } catch {
          return;
        }
      }

      if (!payload || typeof payload !== 'object') {
        return;
      }

      const payloadObject = payload as Record<string, unknown>;
      const payloadUrl = typeof payloadObject.url === 'string' ? payloadObject.url.toLowerCase() : '';
      const action = typeof payloadObject.action === 'string' ? payloadObject.action.toLowerCase() : '';
      const combined = `${action} ${payloadUrl}`.trim();

      if (!combined) {
        return;
      }

      if (combined.includes('book') || combined.includes('reserv') || combined.includes('checkout')) {
        trackOwnerRezEvent('ownerrez_book_now_click', combined, 'postmessage');
        return;
      }

      if (combined.includes('inquir') || combined.includes('quote') || combined.includes('contact')) {
        trackOwnerRezEvent('ownerrez_inquiry_click', combined, 'postmessage');
      }
    };

    document.addEventListener('click', handleOwnerRezClick, true);
    window.addEventListener('message', handleOwnerRezMessage);

    return () => {
      document.removeEventListener('click', handleOwnerRezClick, true);
      window.removeEventListener('message', handleOwnerRezMessage);
    };
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
            backgroundImage: 'url(/pictures/general/05-sunset.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#233240]/82 via-[#395066]/56 to-[#b46e53]/34" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-[#eedccd]">
                Direct Booking · Secure Inquiry
              </p>
              <h1 className={`${headlineFont.className} mt-5 text-5xl leading-tight md:text-7xl`}>
                Book Your Stay
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-white/90 md:text-2xl">
                Reserve Casa Del Mare for your next beach getaway with a direct booking experience
                designed to feel warm, simple, and secure.
              </p>
              <p className="mt-5 text-base leading-7 text-white/85 md:text-lg">
                Need dates first?{' '}
                <a
                  href="/casadelmare/availability"
                  className="underline underline-offset-4 transition hover:text-[#eedccd]"
                >
                  Check current vacation rental availability
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div
              ref={ownerRezContainerRef}
              className="rounded-[2rem] border border-[#d7dfe6] bg-white/95 p-8 shadow-[0_24px_60px_rgba(57,80,102,0.14)] backdrop-blur-sm md:p-12"
            >
              <div className="mb-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b46e53]">Reservation Form</p>
                <h2 className={`${headlineFont.className} mt-3 text-4xl text-[#395066] md:text-5xl`}>
                  Secure your coastal dates
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Submit your booking or inquiry directly through the OwnerRez widget below. All
                  reservation functionality stays exactly the same, now wrapped in the Version C
                  presentation.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcf8f3] p-4 md:p-6">
                <div
                  className="ownerrez-widget"
                  data-propertyId="934d8c678417484ea626901fabf33f9a"
                  data-widget-type="Booking/Inquiry"
                  data-widgetId="c6ca2a8f9c92439b9b5b040d41cd25df"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-[#e8ddd4] bg-[#fbf5ed] p-8 text-center shadow-[0_18px_44px_rgba(180,110,83,0.12)]"
                >
                  <div className="text-4xl">{card.icon}</div>
                  <h3 className={`${headlineFont.className} mt-5 text-3xl text-[#395066]`}>
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-[#395066] px-8 py-10 text-center text-white shadow-[0_18px_44px_rgba(57,80,102,0.28)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#eedccd]">Questions Before Booking?</p>
              <h2 className={`${headlineFont.className} mt-4 text-4xl md:text-5xl`}>
                We&apos;re happy to help you plan
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
                Reach out if you need help with dates, occupancy, or property details before
                finalizing your reservation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${property.email}`}
                  className="rounded-full bg-[#f7f4ef] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[#395066] transition hover:bg-white"
                >
                  Email the Host
                </a>
                <a
                  href="/casadelmare/facts"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[#eedccd] hover:text-[#eedccd]"
                >
                  View Property Facts
                </a>
              </div>
            </div>
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
                <a href="/casadelmare" className="transition hover:text-[#395066]">
                  Home
                </a>
              </li>
              <li>
                <a href="/casadelmare/facts" className="transition hover:text-[#395066]">
                  Property Facts &amp; Guest Rules
                </a>
              </li>
              <li>
                <a href="/casadelmare/availability" className="transition hover:text-[#395066]">
                  Check Availability
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
