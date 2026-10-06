'use client';

import { useEffect, useRef } from 'react';
import MobileMenu from '@/app/components/MobileMenu';
import { property } from '@/lib/propertyData';

export default function BookNowPage() {
  const ownerRezContainerRef = useRef<HTMLDivElement>(null);
  const lastTrackedRef = useRef<{ key: string; timestamp: number }>({ key: '', timestamp: 0 });

  // Load OwnerRez widget after component mounts (only once via window check)
  useEffect(() => {
    // Only add script if not already loaded
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
    <div className="min-h-screen" style={{
      backgroundImage: 'url(/pictures/general/05-sunset.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Shade Overlay */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none"></div>

      {/* Sticky Navigation - changed from fixed to sticky for iOS stability */}
      <header className="wave-header sticky top-0 w-full z-[120] shadow-2xl md:fixed isolate">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10">
          <a href="/casadelmare" className="text-3xl font-bold text-white tracking-tight hover:text-amber-200 transition">
            Casa Del Mare
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <a href="/casadelmare" className="text-white hover:text-amber-200 transition duration-300 font-medium">
              ← Back to Home
            </a>
          </div>

          <MobileMenu
            links={[
              { href: '/casadelmare', label: '← Back to Home' },
            ]}
          />
        </nav>
      </header>

      {/* Booking Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Book Your Stay</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Reserve Casa Del Mare for your next beach getaway. Check availability and book securely below.
            </p>
            <p className="text-white/90 mt-4 text-base md:text-lg drop-shadow-md">
              Need dates first?{' '}
              <a href="/casadelmare/availability" className="underline hover:text-amber-200 transition">
                Check current vacation rental availability
              </a>.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-200 to-cyan-300 mx-auto mt-6 rounded-full shadow-lg"></div>
          </div>

          {/* OwnerRez Booking Form Widget */}
          <div
            ref={ownerRezContainerRef}
            className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="ownerrez-widget" data-propertyId="934d8c678417484ea626901fabf33f9a" data-widget-type="Booking/Inquiry" data-widgetId="c6ca2a8f9c92439b9b5b040d41cd25df"></div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/90 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">5 Bedrooms</h3>
              <p className="text-gray-600">Sleeps up to 14 guests comfortably</p>
            </div>
            <div className="text-center bg-white/90 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Waterfront</h3>
              <p className="text-gray-600">Direct dock access and water views</p>
            </div>
            <div className="text-center bg-white/90 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Beach Access</h3>
              <p className="text-gray-600">Less than 5 minutes to Cherry Grove Beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">{property.name} • {property.address}</p>
          <p className="text-gray-400 text-sm">
            Questions? Email us at <a href={`mailto:${property.email}`} className="text-cyan-400 hover:underline">{property.email}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
