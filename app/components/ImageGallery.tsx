'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lg, setLg] = useState<any>(null);

  useEffect(() => {
    // Load lightgallery dynamically only on client side
    const loadGallery = async () => {
      try {
        const lightGallery = (await import('lightgallery')).default;
        const lgThumbnail = (await import('lightgallery/plugins/thumbnail')).default;
        const lgZoom = (await import('lightgallery/plugins/zoom')).default;
        
        // Load CSS via link tags instead of imports
        if (!document.querySelector('[data-lightgallery-css]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.0/lightgallery.min.css';
          link.setAttribute('data-lightgallery-css', 'main');
          document.head.appendChild(link);
        }

        if (galleryRef.current && images.length > 0) {
          const instance = lightGallery(galleryRef.current, {
            plugins: [lgThumbnail, lgZoom],
            speed: 500,
            licenseKey: 'your_license_key_here',
            mobileSettings: {
              controls: true,
              showCloseIcon: true,
              download: false,
              rotate: false,
            },
            onSlideItemLoad: (detail: any) => {
              setCurrentIndex(detail.index);
            },
          } as any);

          setLg(instance);
        }
      } catch (error) {
        console.error('Failed to load lightgallery:', error);
      }
    };

    loadGallery();

    return () => {
      if (lg) {
        lg.destroy();
      }
    };
  }, [images, lg]);

  const handleThumbnailClick = (index: number) => {
    if (galleryRef.current) {
      const link = galleryRef.current.querySelector(
        `a[data-index="${index}"]`
      ) as HTMLAnchorElement;
      if (link) link.click();
    }
  };

  return (
    <div className="mb-12">
      {/* Main Carousel Display */}
      <div
        ref={galleryRef}
        className="flex flex-col gap-6"
      >
        {images.map((photo, index) => (
          <a
            key={index}
            href={`/pictures/${photo.url.replace('pictures/', '')}`}
            data-lg-size="1280-720"
            data-index={index}
            className={index === 0 ? 'block' : 'hidden'}
          >
            <img
              src={`/pictures/${photo.url.replace('pictures/', '')}`}
              alt={photo.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        ))}
      </div>

      {/* Carousel Thumbnails */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {images.map((photo, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`flex-shrink-0 h-20 w-24 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-blue-500 opacity-100 scale-105'
                : 'border-gray-300 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={`/pictures/${photo.url.replace('pictures/', '')}`}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="mt-4 text-center text-gray-600">
        <p className="text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
