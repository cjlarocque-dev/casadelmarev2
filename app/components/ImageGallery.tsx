'use client';

import { useState } from 'react';
import ImageGalleryLib from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // Transform gallery data to react-image-gallery format
  const galleryItems = images.map((photo) => ({
    original: `/pictures/${photo.url.replace('pictures/', '')}`,
    thumbnail: `/pictures/${photo.url.replace('pictures/', '')}`,
    description: photo.category,
  }));

  return (
    <div className="mb-12">
      <ImageGalleryLib
        items={galleryItems}
        showBullets={true}
        showPlayButton={true}
        autoPlay={false}
        showFullscreenButton={true}
        showThumbnails={true}
      />
    </div>
  );
}
