'use client';

import { useEffect, useRef } from 'react';
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
      });

      return () => {
        lg.destroy();
      };
    }
  }, [images]);

  return (
    <div
      ref={galleryRef}
      className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {images.map((photo, index) => (
        <a
          key={index}
          href={`/pictures/${photo.url.replace('pictures/', '')}`}
          data-lg-size="1280-720"
          className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          data-alt={photo.alt}
        >
          <img
            src={`/pictures/${photo.url.replace('pictures/', '')}`}
            alt={photo.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
            <span className="text-white font-bold text-sm">{photo.category}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
