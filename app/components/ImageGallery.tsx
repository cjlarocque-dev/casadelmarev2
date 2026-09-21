'use client';

import { useEffect, useRef, useState } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

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

  useEffect(() => {
    if (galleryRef.current && images.length > 0) {
      const lg = lightGallery(galleryRef.current, {
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

      return () => {
        lg.destroy();
      };
    }
  }, [images]);

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
