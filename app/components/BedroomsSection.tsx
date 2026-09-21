'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RoomItem {
  icon: string;
  title: string;
  description: string;
}

interface BedroomsSectionProps {
  scrollY?: number;
  title: string;
  description: string;
  rooms: RoomItem[];
  imagePaths: string[];
  bgColor?: string;
  accentColor?: string;
}

export default function BedroomsSection({
  scrollY = 0,
  title,
  description,
  rooms,
  imagePaths,
  bgColor = 'from-blue-50 to-blue-100',
  accentColor = 'text-blue-700',
}: BedroomsSectionProps) {
  return (
    <section
      id="bedrooms-bathrooms"
      className={`relative py-20 px-4 md:px-8 bg-gradient-to-b ${bgColor} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Layout: Left Text/List + Right Image Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Title, Description, Room List */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold ${accentColor} mb-6`}>
                {title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Room Items List */}
            <div className="space-y-6">
              {rooms.map((room, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`text-3xl flex-shrink-0 ${accentColor}`}>
                    {room.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${accentColor} mb-1`}>
                      {room.title}
                    </h3>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {imagePaths.map((imagePath, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                style={{
                  height: index === 0 ? '300px' : '200px',
                }}
              >
                <Image
                  src={imagePath}
                  alt={`Room ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
