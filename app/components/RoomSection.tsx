'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface RoomSectionProps {
  scrollY?: number;
  roomId: string;
  title: string;
  description: string;
  features: string[];
  imageFolder: string;
  bgColor?: string;
  accentColor?: string;
}

export default function RoomSection({
  scrollY = 0,
  roomId,
  title,
  description,
  features,
  imageFolder,
  bgColor = 'from-amber-50 to-orange-50',
  accentColor = 'text-amber-700',
}: RoomSectionProps) {
  const [images, setImages] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  // Dynamically import images from the specified folder
  useEffect(() => {
    const loadImages = async () => {
      try {
        const importedImages = import.meta.glob('/public/pictures/**/*.jpg', { eager: true });
        const imageArray = Object.keys(importedImages)
          .filter(path => path.includes(`/${imageFolder}/`))
          .sort()
          .map(path => path.replace('/public', ''));
        setImages(imageArray);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, [imageFolder]);

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
      id={roomId}
      className={`relative py-20 px-4 md:px-8 bg-gradient-to-b ${bgColor} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Layout: Left Anchor Image + Right Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Large Anchor Image */}
          <div className="flex flex-col gap-8">
            {images[0] && (
              <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            )}
          </div>

          {/* RIGHT: Title, Description, Features + Floating Images */}
          <div className="relative">
            {/* Title & Description */}
            <div className="mb-10">
              <h2 className={`text-4xl md:text-5xl font-bold ${accentColor} mb-6`}>{title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{description}</p>

              {/* Features/Amenities List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className={`${accentColor} text-xl mt-1`}>✓</span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Images Container */}
            <div className="relative h-96 mt-12">
              {/* Image 2 - floats from right */}
              {images[1] && (
                <div
                  className="absolute top-0 right-0 w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    transform: `translateX(${Math.max(0, (1 - scrollProgress) * 100)}px) translateY(${Math.max(0, (1 - scrollProgress) * 50)}px)`,
                    opacity: Math.min(1, scrollProgress * 2),
                    transition: 'none',
                  }}
                >
                  <Image
                    src={images[1]}
                    alt={`${title} detail 1`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Image 3 - floats from right, delayed */}
              {images[2] && (
                <div
                  className="absolute top-32 right-20 w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    transform: `translateX(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.15)) * 130)}px) translateY(${Math.max(0, (1 - Math.max(0, scrollProgress - 0.15)) * 80)}px)`,
                    opacity: Math.max(0, (scrollProgress - 0.05) * 2),
                    transition: 'none',
                  }}
                >
                  <Image
                    src={images[2]}
                    alt={`${title} detail 2`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
