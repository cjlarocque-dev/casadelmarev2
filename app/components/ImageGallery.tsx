'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const lightboxItemsRef = useRef<HTMLDivElement>(null);
  const lgRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageSignature = useMemo(
    () => images.map((image) => image.url).join('|'),
    [images]
  );

  useEffect(() => {
    let cancelled = false;

    // Load lightgallery dynamically only on client side
    const loadGallery = async () => {
      try {
        if (!lightboxItemsRef.current || imageSignature.length === 0 || lgRef.current) {
          return;
        }

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

        if (lightboxItemsRef.current && imageSignature.length > 0 && !cancelled) {
          const instance = lightGallery(lightboxItemsRef.current, {
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

          lgRef.current = instance;
        }
      } catch (error) {
        console.error('Failed to load lightgallery:', error);
      }
    };

    loadGallery();

    return () => {
      cancelled = true;
      if (lgRef.current) {
        lgRef.current.destroy();
        lgRef.current = null;
      }
    };
  }, [imageSignature]);

  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images.length, currentIndex]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMainImageClick = () => {
    if (lgRef.current) {
      lgRef.current.openGallery(currentIndex);
      return;
    }

    const fallback = `/pictures/${images[currentIndex].url.replace('pictures/', '')}`;
    window.open(fallback, '_blank', 'noopener,noreferrer');
  };

  if (images.length === 0) {
    return null;
  };

  const currentImage = images[currentIndex];
  const currentImageSrc = `/pictures/${currentImage.url.replace('pictures/', '')}`;

  return (
    <div className="mb-12">
      {/* Hidden lightbox source list */}
      <div ref={lightboxItemsRef} className="hidden">
        {images.map((photo, index) => (
          <a
            key={index}
            href={`/pictures/${photo.url.replace('pictures/', '')}`}
            data-lg-size="1280-720"
            data-index={index}
          >
            {photo.alt}
          </a>
        ))}
      </div>

      {/* Main image controlled by thumbnail state */}
      <button type="button" onClick={handleMainImageClick} className="w-full text-left">
        <img
          src={currentImageSrc}
          alt={currentImage.alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </button>

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
