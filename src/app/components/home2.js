'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home2 = () => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push('/about');
  };

  return (
    <div className="bg-white">
      {/* First Section */}
      <div className="bg-gray-50 mb-8">
        <div className="flex items-start justify-between max-w-7xl mx-auto px-8 py-16 flex-wrap">
          {/* Left Content */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking{' '}
              company dedicated to providing green technology solutions for the{' '}
              fertilizer and gas industries. The company focuses on replacing{' '}
              environmentally harmful, fossil fuel-based additives with sustainable{' '}
              alternatives that are safe, effective, and efficient.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Biogreen&apos;s products are biodegradable, non-carcinogenic, and{' '}
              cost-effective — making them not only better for the environment but{' '}
              also easier to use. With a strong commitment to innovation and{' '}
              sustainability, Biogreen is helping to shape a cleaner, greener future{' '}
              for agriculture and industry.
            </p>

            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-medium transition-colors duration-200"
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full min-w-[300px] h-[400px]">
            <Image 
              src="/photos/home2_1.png" 
              alt="Biogreen facility with compost piles and green containers"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-100">
        <div className="flex items-start justify-between max-w-7xl mx-auto px-8 py-16 flex-wrap">
          {/* Left Content */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <h2 className="text-3xl font-normal text-green-600 mb-8 uppercase tracking-wide">
              READ THE MESSAGE FROM OUR CEO
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking{' '}
              company dedicated to providing green technology solutions for the{' '}
              fertilizer and gas industries. The company focuses on replacing{' '}
              environmentally harmful, fossil fuel-based additives with sustainable{' '}
              alternatives that are safe, effective, and efficient.
            </p>

            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-medium transition-colors duration-200"
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>

          {/* Right Placeholder for CEO Image */}
          <div className="flex-1 flex justify-center min-w-[300px]">
            <div className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">CEO Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;