import React from 'react';
import Image from 'next/image';

export default function Certificates() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">OUR CERTIFICATES</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* OMRI Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/photos/cert_omri.png"
                alt="OMRI Organic Listed Certificate"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          {/* CUC Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/photos/cert_cuc.png"
                alt="CUC Certificate"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          {/* ISO Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <Image
                src="/photos/cert_iso.png"
                alt="ISO 9001 Certificate"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}