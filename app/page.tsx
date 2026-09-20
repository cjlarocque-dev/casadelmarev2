'use client';

import { property, amenities, hostStory, gallery, restaurants, beachActivities, attractions, natureWildlife } from '@/lib/propertyData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Casa Del Mare</h1>
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="hover:text-amber-200 transition">About</a></li>
            <li><a href="#amenities" className="hover:text-amber-200 transition">Amenities</a></li>
            <li><a href="#gallery" className="hover:text-amber-200 transition">Gallery</a></li>
            <li><a href="#booking" className="hover:text-amber-200 transition">Book</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 119, 190, 0.8), rgba(0, 212, 255, 0.8)), url(/pictures/dock-canal.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="text-center text-white max-w-3xl px-6">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-amber-100">
            {property.name}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-200 to-cyan-300 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl mb-8 text-white">
            {property.tagline}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Book Now
            </button>
            <a href="#about" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-bold text-lg border-2 border-white transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">About Casa Del Mare</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              {property.description}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition">
                <h3 className="text-4xl font-bold text-orange-500">{property.bedrooms}</h3>
                <p className="text-gray-600 text-lg">Bedrooms</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition">
                <h3 className="text-4xl font-bold text-orange-500">{property.maxGuests}</h3>
                <p className="text-gray-600 text-lg">Max Guests</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition">
                <h3 className="text-4xl font-bold text-orange-500">{property.beachDistance}</h3>
                <p className="text-gray-600 text-lg">to Beach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Amenities & Features</h2>
            <p className="text-gray-600 text-lg">Everything you need for a comfortable stay</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 text-center border-t-4 border-blue-600 transition transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Photo Gallery</h2>
            <p className="text-gray-600 text-lg">Explore the beauty of Casa Del Mare</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gallery.slice(0, 12).map((photo, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
              >
                <img
                  src={`/${photo.url}`}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white font-semibold">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Meet the Hosts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Meet Your Hosts</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl border-l-4 border-blue-600 p-8">
            {hostStory.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the Area Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Explore the Area</h2>
            <p className="text-gray-600 text-lg">Discover nearby attractions, dining, and activities</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4"></div>
          </div>

          {/* Restaurants */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">🍽️ Restaurants & Dining</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">{restaurant.name}</h4>
                  <p className="text-gray-600">{restaurant.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beach Activities */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">🏖️ Beach Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beachActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-400">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">{activity.name}</h4>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Attractions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">⭐ Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">{attraction.name}</h4>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nature & Wildlife */}
          <div>
            <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">🦅 Nature & Wildlife</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {natureWildlife.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-400">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">{item.name}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="booking" className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-white/95">
            Experience the beauty and comfort of Casa Del Mare. Check availability and reserve your perfect beach getaway today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Book Now
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white transition">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Casa Del Mare</h3>
              <p className="text-sm">Your perfect beach getaway in North Myrtle Beach.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">North Myrtle Beach, SC</p>
              <p className="text-sm">info@casadelmare.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Casa Del Mare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
