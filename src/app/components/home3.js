'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutBiogreen() {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* About Biogreen Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#39702E' }}>ABOUT BIOGREEN</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Our Vision */}
            <div className="flex flex-col items-center bg-gray-100 p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full mb-5 relative h-52">
                <Image
                  src="/photos/new_ourvision.jpeg"
                  alt="Our Vision section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                We envision a world where agriculture is productive, sustainable, and regenerative—restoring soils, empowering farmers, and protecting the planet for generations to come.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col items-center bg-gray-100 p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full mb-5 relative h-52">
                <Image
                  src="/photos/new_ourmission.jpeg"
                  alt="Our Mission section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Our mission is to nourish the world organically by transforming natural by-products into high-quality, plant-based fertilizers that enrich soil health, increase yields, and support organically regenerative farming while reducing chemical dependency.
              </p>
            </div>

            {/* Our Core Values */}
            <div className="flex flex-col items-center bg-gray-100 p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full mb-5 relative h-52">
                <Image
                  src="/photos/new_corevalues.jpeg"
                  alt="Our Core Values section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Core Values</h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                At Bio Green, our values are rooted in sustainability, innovation, and integrity. We put farmers at the heart of everything we do, foster collaboration with communities, and uphold our responsibility as stewards of the land-ensuring agriculture not only thrives today but also regenerates and sustains fertility for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}