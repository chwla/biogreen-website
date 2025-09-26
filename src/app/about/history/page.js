'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HistoryPage = () => {
  const [activeSection, setActiveSection] = useState('OUR HISTORY');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'OUR PRESIDENT MESSAGE', path: '/about' },
    { name: 'OUR HISTORY', path: '/about/history' },
    { name: 'WHO ARE WE?', path: '/about/who-we-are' },
    { name: 'WHAT DO WE DO?', path: '/about/what-we-do' },
    { name: 'HOW DO WE DO IT?', path: '/about/how-do-we-do-it' },
    { name: 'ACHIEVEMENTS', path: '/about/achievements' }
  ];

  const handleMenuClick = (item) => {
    setActiveSection(item.name);
    setIsSidebarOpen(false); // Close mobile menu on item click
    // Navigate to the specified path
    window.location.href = item.path;
  };

  return (
    <>
      {/* Hero Section - Responsive height */}
      <div className="w-full relative overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
        <Image 
          src="/photos/about.jpeg" 
          alt="About BioGreen"
          fill
          className="object-cover object-center"
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          priority
        />
        
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-amber-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            Our History
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
              className="w-full text-white py-3 px-4 rounded-lg font-semibold uppercase tracking-wide text-sm flex items-center justify-between"
              style={{backgroundColor: '#39702E'}}
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
                        ? 'text-white' 
                        : 'hover:bg-green-50'
                      }
                      text-center py-3 md:py-4 px-3 md:px-4 font-bold text-xs sm:text-xs uppercase tracking-wide cursor-pointer transition-all duration-200 
                      font-sans leading-tight
                    `}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      letterSpacing: '1px',
                      backgroundColor: activeSection === item.name ? '#39702E' : 'white',
                      color: activeSection === item.name ? 'white' : '#39702E'
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-8 md:gap-10 items-start">
                
                {/* Images Section - Mobile first */}
                <div className="w-full md:hidden">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                      <Image
                        src="/photos/home3_1.png"
                        alt="NAQ Global Facility"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                      <Image
                        src="/photos/home3_2.png"
                        alt="NAQ Global Operations"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Container - Desktop layout */}
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                  {/* Text Content */}
                  <div className="flex-1 lg:flex-[2] w-full">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide mb-6 md:mb-8 pb-2 md:pb-3 border-b-2 md:border-b-3 inline-block"
                        style={{color: '#39702E', borderColor: '#39702E'}}>
                      OUR HISTORY
                    </h2>
                    
                    <div className="space-y-4 md:space-y-5">
                      <p className="font-semibold text-gray-700 text-base sm:text-lg">
                        Our Journey Through Time
                      </p>
                      
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                        Bio Green was founded with a vision to transform agriculture through sustainable innovation. Rooted in the legacy of <strong>AEV Oil</strong>, the first company of our group and a trusted name in avocado oil extraction, Bio Green represents the next step in our journey of <strong>excellence, quality, and trust</strong>.
                      </p>
                      
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                        With professional expertise in soil science and plant nutrition, we specialize in producing <strong>organic fertilizers from avocado by-products</strong> sourced directly from AEV Oil&apos;s operations. By transforming what was once considered waste into high-quality, eco-friendly fertilizers, we <strong>close the loop in agriculture</strong>—supporting farmers with sustainable solutions while reducing environmental impact.
                      </p>
                      
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                        As the youngest member of a multi-diverse family group with over seven decades of experience, Bio Green carries forward a strong legacy while shaping a <strong>greener, more resilient future</strong>. Our vision is to become the most reputed and trusted name in organic fertilizers—empowering farmers, restoring soils, and cultivating sustainability for generations to come.
                      </p>
                    </div>
                  </div>

                  {/* Images Section - Desktop only */}
                  <div className="hidden md:flex flex-1 lg:flex-[1]">
                    <div className="w-full space-y-4">
                      <div className="w-full h-40 lg:h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                        <Image
                          src="/photos/home3_1.png"
                          alt="NAQ Global Facility"
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="w-full h-40 lg:h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                        <Image
                          src="/photos/home3_2.png"
                          alt="NAQ Global Operations"
                          fill
                          className="object-cover"
                        />
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

export default HistoryPage;