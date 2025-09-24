'use client';
import { useState } from 'react';
import Image from 'next/image';

const WhatWeDoSection = () => {
  const [activeSection, setActiveSection] = useState('WHAT DO WE DO?');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'OUR PRESIDENT MESSAGE', path: '/about' },
    { name: 'OUR HISTORY', path: '/about/history' },
    { name: 'WHO ARE WE?', path: '/about/who-we-are' },
    { name: 'WHAT DO WE DO?', path: '/about/what-we-do' },
    { name: 'HOW DO WE DO IT?', path: '/about/how-do-we-do-it' },
    { name: 'ACHIEVEMENTS', path: '/about/achievements' },
    { name: 'SENIOR MANAGEMENT', path: '/about/senior-management' }
  ];

  const handleMenuClick = (item) => {
    setActiveSection(item.name);
    setIsSidebarOpen(false); // Close mobile menu on item click
    window.location.href = item.path;
  };

  return (
    <>
      {/* Hero Section - Responsive height */}
      <div className="w-full relative overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
        <Image 
          src="/photos/about.jpeg" 
          alt="About NAQ Global"
          fill
          className="object-cover object-center"
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          priority
        />
        
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-amber-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            What do we do
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold uppercase tracking-wide text-sm flex items-center justify-between"
            >
              <span>Navigation Menu</span>
              <span className={`transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Left Sidebar Navigation - Mobile dropdown, desktop fixed */}
            <div className={`
              w-full md:w-72 md:flex-shrink-0
              ${isSidebarOpen ? 'block' : 'hidden md:block'}
            `}>
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg md:rounded-none overflow-hidden">
                {menuItems.map((item, index) => (
                  <div
                    key={item.name}
                    onClick={() => handleMenuClick(item)}
                    className={`
                      ${index !== menuItems.length - 1 ? 'border-b border-gray-300' : ''}
                      ${activeSection === item.name 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white text-green-600 hover:bg-green-50'
                      }
                      text-center py-3 md:py-4 px-3 md:px-4 font-bold text-xs sm:text-xs uppercase tracking-wide cursor-pointer transition-all duration-200 
                      font-sans leading-tight
                    `}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      letterSpacing: '1px'
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-8 md:gap-10">
                
                {/* Main Text Content */}
                <div className="w-full">
                  <h2 className="text-green-600 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide mb-6 md:mb-8 pb-2 md:pb-3 border-b-2 md:border-b-3 border-green-600 inline-block">
                    WHAT DO WE DO?
                  </h2>

                  <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                    <p className="font-semibold text-gray-700 text-base sm:text-lg">
                      Our Core Services & Expertise
                    </p>

                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                      NAQ Global aims at providing best technical solutions for fertilizer 
                      process &amp; quality improvement. Our R&amp;D works to develop innovative 
                      technologies &amp; products for all such processes, trouble shooting, 
                      efficiency improvement &amp; cost reduction in the fertilizer industry. 
                      Environment friendliness, green (vegetable) sources, &amp; safety 
                      concerns are unique characteristics of NAQ Global&apos;s products.
                    </p>
                  </div>

                  {/* Global Operations Section */}
                  <div className="mb-6">
                    <h3 className="text-green-600 text-lg sm:text-xl font-semibold mb-4 uppercase tracking-wide">
                      Our Global Operations
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                      Our technical services extend worldwide, helping fertilizer plants across different continents 
                      achieve optimal performance through our expert guidance and innovative solutions.
                    </p>
                  </div>

                  {/* World Map - Responsive */}
                  <div className="w-full">
                    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative">
                      <Image
                        src="/photos/home3_1.png"
                        alt="NAQ Global Operations World Map"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-4"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600 font-semibold text-center px-4" style={{display: 'none'}}>
                        <div>
                          <div className="text-4xl md:text-6xl mb-4">🌍</div>
                          <div className="text-base md:text-lg">Global Operations Map</div>
                          <div className="text-sm md:text-base text-gray-600 mt-2">Serving clients worldwide</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDoSection;