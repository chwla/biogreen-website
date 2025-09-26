'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const WhoWeArePage = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('WHO ARE WE?');

  const menuItems = [
    { name: 'OUR PRESIDENT MESSAGE', path: '/about' },
    { name: 'OUR HISTORY', path: '/about/history' },
    { name: 'WHO ARE WE?', path: '/about/who-we-are' },
    { name: 'WHAT DO WE DO?', path: '/about/what-we-do' },
    { name: 'HOW DO WE DO IT?', path: '/about/how-do-we-do-it' },
    { name: 'ACHIEVEMENTS', path: '/about/achievements' }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden" style={{ height: '400px' }}>
        <Image
          src="/photos/about.jpeg"
          alt="About BioGreen"
          fill
          style={{ objectFit: 'cover', transform: 'scale(1.1)', transformOrigin: 'center' }}
        />

        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-amber-800 text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            Who are we?
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Sidebar */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-white shadow-lg border border-gray-200">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link key={item.name} href={item.path}>
                      <div
                        onClick={() => setActiveSection(item.name)}
                        className={`
                          ${index !== menuItems.length - 1 ? 'border-b border-gray-300' : ''}
                          ${isActive ? 'text-white hover:bg-green-50' : 'hover:bg-green-50'}
                          text-center py-4 px-4 font-bold text-xs uppercase tracking-widest cursor-pointer transition-all duration-200 
                          font-sans leading-tight
                        `}
                        style={{
                          fontFamily: 'Arial, sans-serif',
                          letterSpacing: '1px',
                          backgroundColor: isActive ? '#39702E' : 'white',
                          color: isActive ? 'white' : '#39702E'
                        }}
                      >
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="w-full">
                <h2 className="text-3xl font-light tracking-wide mb-8 pb-3 border-b-3 inline-block"
                    style={{color: '#39702E', borderColor: '#39702E'}}>
                  WHO ARE WE?
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="font-semibold text-gray-700 text-lg">
                    Advancing Organic Farming Through Innovation
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed text-justify">
                    We are an agricultural solutions company dedicated to advancing organic farming. With expertise in <strong>soil science and plant nutrition</strong>, we bridge the gap between farmers&apos; needs and sustainable practices.
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed text-justify">
                    Our operations are anchored in one of <strong>East Africa&apos;s largest organic fertilizer facilities</strong>, spanning <strong>50,000 square meters in Jimma, Ethiopia</strong>. This state-of-the-art facility enables the large-scale production of high-quality organic fertilizers, meeting the growing demand for sustainable agricultural solutions across the region.
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed text-justify">
                    At Bio Green, we stand for <strong>integrity, innovation, and impact</strong>.
                  </p>
                </div>

                {/* Global Operations Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide"
                      style={{color: '#39702E'}}>
                    Our Global Operations
                  </h3>
                </div>

                {/* World Map */}
                <div className="w-full max-w-2xl">
                  <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative">
                    <Image
                      src="/photos/home3_1.png"
                      alt="Bio Green Operations Facility"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600 font-semibold" style={{ display: 'none' }}>
                      Global Operations Map
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeArePage;