'use client';

import { useEffect } from 'react';

export default function BookNowPage() {
  // Load OwnerRez widget after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.ownerrez.com/widget.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).OwnerRezWidgets) {
        (window as any).OwnerRezWidgets.loadWidgets();
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/90 to-cyan-500/90 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/casadelmare" className="text-3xl font-bold text-white tracking-tight hover:opacity-80 transition">
            Casa Del Mare
          </a>
          <a href="/casadelmare" className="text-white hover:text-amber-200 transition duration-300 font-medium">
            ← Back to Home
          </a>
        </nav>
      </header>

      {/* Booking Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">Book Your Stay</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reserve Casa Del Mare for your next beach getaway. Check availability and book securely below.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* OwnerRez Booking Form Widget */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="ownerrez-widget" data-propertyId="934d8c678417484ea626901fabf33f9a" data-widget-type="Booking/Inquiry" data-widgetId="c6ca2a8f9c92439b9b5b040d41cd25df"></div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">5 Bedrooms</h3>
              <p className="text-gray-600">Sleeps up to 14 guests comfortably</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Waterfront</h3>
              <p className="text-gray-600">Direct dock access and water views</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Beach Access</h3>
              <p className="text-gray-600">Less than 5 minutes to Cherry Grove Beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">Casa Del Mare • North Myrtle Beach, SC</p>
          <p className="text-gray-400 text-sm">
            Questions? Email us at <a href="mailto:familybeachtripsusa@gmail.com" className="text-cyan-400 hover:underline">familybeachtripsusa@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
