'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setScrollPosition(window.scrollY);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
    window.scrollTo(0, scrollPosition);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* Gallery Grid - Horizontal Scrollable Carousel */}
      <div className="overflow-x-auto pb-6 mb-12">
        <div className="flex gap-6 px-6 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-3">
          {images.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="flex-shrink-0 md:flex-shrink relative h-64 w-80 md:w-auto md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group transition-all duration-300"
            >
              <Image
                src={`/pictures/${photo.url.replace('pictures/', '')}`}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Modal Content */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-full max-h-[80vh] mb-4">
              <Image
                src={`/pictures/${currentImage.url.replace('pictures/', '')}`}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </div>

            {/* Image Counter & Title */}
            <div className="text-center mb-6">
              <p className="text-white text-sm mb-2">
                {selectedIndex + 1} of {images.length}
              </p>
              <p className="text-white text-lg font-semibold">{currentImage.category}</p>
            </div>

            {/* Controls */}
            <div className="flex gap-4 items-center">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="bg-white/20 hover:bg-white/40 text-white px-6 py-3 rounded-lg transition duration-300 font-medium"
              >
                ← Previous
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="bg-red-600/80 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition duration-300 font-medium"
              >
                Close
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="bg-white/20 hover:bg-white/40 text-white px-6 py-3 rounded-lg transition duration-300 font-medium"
              >
                Next →
              </button>
            </div>

            {/* Close Icon (Top Right) */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition duration-300 text-2xl"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
