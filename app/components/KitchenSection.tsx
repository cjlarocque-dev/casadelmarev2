'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface KitchenSectionProps {
  scrollY?: number;
}

export default function KitchenSection({ scrollY = 0 }: KitchenSectionProps) {
  const [images, setImages] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  // Dynamically import images from public/pictures/kitchen/
  useEffect(() => {
    const loadImages = async () => {
      const importedImages = import.meta.glob('/public/pictures/kitchen/*.jpg', { eager: true });
      const imageArray = Object.keys(importedImages)
        .sort()
        .map(path => path.replace('/public', ''));
      setImages(imageArray);
    };
    loadImages();
  }, []);

  // Calculate section position for scroll effects
  useEffect(() => {
    const updatePosition = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Calculate scroll progress for this section (0 to 1)
  const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + 300) / 500));

  if (images.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="kitchen"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Kitchen</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fully equipped chef's kitchen with stainless steel appliances, granite countertops, and everything you need
            to prepare memorable meals.
          </p>
        </div>

        {/* Two-Column Layout: Left Anchor + Right Floating */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Anchor Image */}
          <div className="flex flex-col gap-8">
            {images[0] && (
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[0]}
                  alt="Kitchen main"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {/* Optional: Description or secondary content */}
            <div className="text-gray-700 space-y-4">
              <p>
                Whether you're preparing a casual breakfast or an elaborate multi-course dinner, this kitchen has
                everything you need. The open floor plan connects directly to the dining and living areas, making it
                the heart of the home.
              </p>
            </div>
          </div>

          {/* RIGHT: Floating Images on Scroll */}
          <div className="relative h-full min-h-96">
            {/* Image 2 - floats from right */}
            {images[1] && (
              <div
                className="absolute top-0 right-0 w-56 h-72 md:w-64 md:h-80 rounded-lg overflow-hidden shadow-xl"
                style={{
                  transform: `translateX(${Math.max(0, (1 - scrollProgress) * 100)}px) translateY(${Math.max(0, (1 - scrollProgress) * 50)}px)`,
                  opacity: scrollProgress,
                  transition: 'none',
                }}
              >
                <Image
                  src={images[1]}
                  alt="Kitchen detail"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}

            {/* Image 3 - floats from right, delayed */}
            {images[2] && (
              <div
                className="absolute top-48 right-32 w-48 h-64 md:w-56 md:h-72 rounded-lg overflow-hidden shadow-xl"
                style={{
                  transform: `translateX(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.2)) * 120)}px) translateY(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.2)) * 80)}px)`,
                  opacity: Math.max(0, scrollProgress - 0.1),
                  transition: 'none',
                }}
              >
                <Image
                  src={images[2]}
                  alt="Kitchen counters"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}

            {/* Image 4 (optional) - floats from right, more delayed */}
            {images.length > 3 && (
              <div
                className="absolute top-96 right-0 w-52 h-72 md:w-60 md:h-80 rounded-lg overflow-hidden shadow-xl"
                style={{
                  transform: `translateX(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.4)) * 150)}px) translateY(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.4)) * 100)}px)`,
                  opacity: Math.max(0, scrollProgress - 0.2),
                  transition: 'none',
                }}
              >
                <Image
                  src={images[3]}
                  alt="Kitchen appliances"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
