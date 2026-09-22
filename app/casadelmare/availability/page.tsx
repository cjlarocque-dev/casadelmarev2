'use client';

import { useEffect } from 'react';

export default function AvailabilityPage() {
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
    <div className="min-h-screen" style={{
      backgroundImage: 'url(/pictures/general/07-cherry-point.jpg)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Shade Overlay */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none"></div>

      {/* Sticky Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/90 to-cyan-500/90 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/casadelmare" className="text-3xl font-bold text-white tracking-tight hover:text-amber-200 transition">
            Casa Del Mare
          </a>
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="/casadelmare#about" className="hover:text-amber-200 transition duration-300 font-medium">About</a></li>
            <li><a href="/casadelmare#amenities" className="hover:text-amber-200 transition duration-300 font-medium">Amenities</a></li>
            <li><a href="/casadelmare#gallery" className="hover:text-amber-200 transition duration-300 font-medium">Gallery</a></li>
            <li><a href="/casadelmare/availability" className="hover:text-amber-200 transition duration-300 font-medium text-amber-200">Availability</a></li>
            <li><a href="/casadelmare/book-now" className="hover:text-amber-200 transition duration-300 font-medium">Book Now</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-32 relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Current Availability</h1>
            <p className="text-2xl text-white/90 mb-12 drop-shadow-md">Check Casa Del Mare's availability calendar</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-200 to-cyan-300 mx-auto rounded-full shadow-lg"></div>
          </div>
        </section>

        {/* Calendar Widget Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/95 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              {/* OwnerRez Single Month Calendar Widget */}
              <div className="ownerrez-widget" data-propertyId="934d8c678417484ea626901fabf33f9a" data-widget-type="calendar - Single Month Calendar" data-widgetId="7e3b809403d14958a4be387802aabe0f"></div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-white/95 text-lg mb-6 drop-shadow-md">Ready to book your stay?</p>
              <a href="/casadelmare/book-now" className="btn-primary text-lg inline-block">
                Book Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-16 border-t-4 border-blue-600 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">Casa Del Mare</h3>
              <p className="text-gray-400 leading-relaxed">Your perfect beach getaway in North Myrtle Beach, South Carolina.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/casadelmare#about" className="hover:text-white transition">About</a></li>
                <li><a href="/casadelmare#amenities" className="hover:text-white transition">Amenities</a></li>
                <li><a href="/casadelmare#gallery" className="hover:text-white transition">Gallery</a></li>
                <li><a href="/casadelmare/availability" className="hover:text-white transition">Availability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">North Myrtle Beach, SC</p>
              <p className="text-gray-400">info@casadelmare.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Casa Del Mare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
