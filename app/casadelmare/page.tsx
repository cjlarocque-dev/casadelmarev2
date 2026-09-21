'use client';

import { useEffect, useState } from 'react';
import { property, amenities, hostStory, gallery, restaurants, beachActivities, attractions, natureWildlife } from '@/lib/propertyData';
import RoomSection from '@/app/components/RoomSection';
import ImageGallery from '@/app/components/ImageGallery';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Sticky Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/90 to-cyan-500/90 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">Casa Del Mare</h1>
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#about" className="hover:text-amber-200 transition duration-300 font-medium">About</a></li>
            <li><a href="#amenities" className="hover:text-amber-200 transition duration-300 font-medium">Amenities</a></li>
            <li><a href="#gallery" className="hover:text-amber-200 transition duration-300 font-medium">Gallery</a></li>
            <li><a href="#booking" className="hover:text-amber-200 transition duration-300 font-medium">Book</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-screen pt-20 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/pictures/outdoor/dock/01-dock-canal.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        {/* Parallax Content */}
        <div 
          className="relative text-center text-white max-w-4xl px-6 z-10"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <div className="animate-fade-in-down">
            <h2 className="text-7xl md:text-8xl font-bold mb-6 text-amber-100 drop-shadow-lg">
              {property.name}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-200 to-cyan-300 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-2xl md:text-3xl mb-10 text-white/95 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
              {property.tagline}
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="#booking" className="btn-primary text-lg">
                Book Now
              </a>
              <a href="#about" className="btn-secondary text-lg">
                Explore
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-pulse">
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-40 -mt-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-blue-600 mb-4">About Casa Del Mare</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl text-gray-800 leading-relaxed text-center mb-12 font-light animate-fade-in-up">
              {property.description}
            </p>
            
            {/* Quick Stats with Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: property.bedrooms, label: 'Bedrooms', delay: 100 },
                { number: property.maxGuests, label: 'Max Guests', delay: 200 },
                { number: property.beachDistance, label: 'to Beach', delay: 300 }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="card-hover bg-white rounded-2xl shadow-xl p-10 text-center border border-blue-100 animate-scale-in"
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-lg font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-40 -mb-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-blue-600 mb-4">Premium Amenities</h2>
            <p className="text-gray-600 text-xl">Everything for your perfect beach escape</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="card-hover group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 text-center border border-blue-100 overflow-hidden relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-5 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition duration-300">{amenity.icon}</div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3 group-hover:text-cyan-600 transition">{amenity.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-40 -mt-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-blue-600 mb-4">Photo Gallery</h2>
            <p className="text-gray-600 text-xl">Experience the beauty of Casa Del Mare</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <ImageGallery 
            images={[
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
            ]} 
          />
          
          <div className="text-center">
            <a href="#booking" className="btn-primary text-lg inline-block">
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <RoomSection
        scrollY={scrollY}
        roomId="kitchen"
        title="The Kitchen"
        description="Fully equipped chef's kitchen with stainless steel appliances, granite countertops, and an open floor plan that connects to the dining and living areas—truly the heart of the home."
        features={[
          'Stainless steel appliances',
          'Granite countertops',
          'Full-size refrigerator',
          'Double ovens',
          'Dishwasher included',
          'Breakfast bar seating',
        ]}
        imagePaths={[
          '/pictures/kitchen/01-kitchen.jpg',
        ]}
        bgColor="from-amber-50 to-orange-50"
        accentColor="text-amber-700"
      />

      {/* Host Story Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-blue-100 to-transparent blur-3xl opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-blue-600 mb-4">Meet Your Hosts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-3xl border-2 border-blue-200 p-12 shadow-2xl">
            <div className="space-y-6">
              {hostStory.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg text-gray-800 leading-relaxed animate-fade-in-up font-light"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-blue-600 mb-4">Explore the Area</h2>
            <p className="text-gray-600 text-xl">Discover nearby attractions, dining, and activities</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Restaurants */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-blue-600 text-center mb-12">🍽️ Restaurants & Dining</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="card-hover bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 hover:border-orange-600">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{restaurant.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{restaurant.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beach Activities */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-blue-600 text-center mb-12">🏖️ Beach Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beachActivities.map((activity, index) => (
                <div key={index} className="card-hover bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400 hover:border-cyan-500">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{activity.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Attractions */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-blue-600 text-center mb-12">⭐ Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="card-hover bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600 hover:border-blue-700">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{attraction.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nature & Wildlife */}
          <div>
            <h3 className="text-4xl font-bold text-blue-600 text-center mb-12">🦅 Nature & Wildlife</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {natureWildlife.map((item, index) => (
                <div key={index} className="card-hover bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400 hover:border-cyan-500">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{item.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="booking" className="py-40 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-7xl font-bold text-white mb-6 animate-fade-in-down drop-shadow-lg">Ready to Visit?</h2>
          <p className="text-2xl mb-12 text-white/95 leading-relaxed animate-fade-in-up font-light max-w-2xl mx-auto">
            Experience paradise at Casa Del Mare. Send us a booking inquiry today!
          </p>
          
          {/* OwnerRez Booking/Inquiry Widget */}
          <div className="mb-12 bg-white rounded-2xl shadow-2xl overflow-hidden p-6">
            <div className="ownerrez-widget" data-propertyId="934d8c678417484ea626901fabf33f9a" data-widget-type="Booking/Inquiry" data-widgetId="c6ca2a8f9c92439b9b5b040d41cd25df"></div>
          </div>
          
          <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up">
            <a href="#booking" className="btn-primary text-lg shadow-2xl inline-block">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-16 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">Casa Del Mare</h3>
              <p className="text-gray-400 leading-relaxed">Your perfect beach getaway in North Myrtle Beach, South Carolina.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">North Myrtle Beach, SC</p>
              <p className="text-gray-400">info@casadelmare.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Casa Del Mare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
