'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CEOSection = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('OUR PRESIDENT MESSAGE');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            Our President and CEO
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
              style={{ backgroundColor: '#39702E' }}
            >
              <span>Navigation Menu</span>
              <span className={`transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Sidebar - Mobile dropdown, desktop fixed */}
            <div className={`
              w-full md:w-72 md:flex-shrink-0
              ${isSidebarOpen ? 'block' : 'hidden md:block'}
            `}>
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg md:rounded-none overflow-hidden">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link key={item.name} href={item.path}>
                      <div
                        onClick={() => {
                          setActiveSection(item.name);
                          setIsSidebarOpen(false); // Close mobile menu on item click
                        }}
                        className={`
                          ${index !== menuItems.length - 1 ? 'border-b border-gray-300' : ''}
                          ${isActive ? 'text-white hover:bg-green-50' : 'hover:bg-green-50'}
                          text-center py-3 md:py-4 px-3 md:px-4 font-bold text-xs sm:text-xs uppercase tracking-wide cursor-pointer transition-all duration-200 
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
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-8 md:gap-10 items-start">
                
                {/* CEO Image - Mobile first, desktop right */}
                <div className="w-full flex justify-center md:hidden">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 shadow-2xl overflow-hidden" 
                       style={{ borderColor: '#39702E' }}>
                    <Image
                      src="/photos/ceo.png"
                      alt="Arvind Jain - Chief Executive Officer"
                      width={224}
                      height={224}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content Container - Desktop layout */}
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                  {/* Text Content */}
                  <div className="flex-1 lg:flex-[2] w-full">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide mb-6 md:mb-8 pb-2 md:pb-3 border-b-2 md:border-b-3 inline-block"
                        style={{ color: '#39702E', borderColor: '#39702E' }}>
                      READ THE MESSAGE FROM OUR CEO
                    </h2>
                    
                    <div className="space-y-4 md:space-y-5">
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                        At <strong>Bio Green Fertilizer</strong>, our mission is clear—to transform agriculture with sustainable, future-ready solutions. We are committed to replacing harmful, chemical-based inputs with safe, effective, plant-based fertilizers derived from avocado by-products. These solutions not only nurture the soil but also enhance productivity while safeguarding our planet for future generations.
                      </p>
                      
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                        With <strong>innovation and integrity</strong> at the heart of everything we do, Bio Green is building a greener tomorrow for farmers and communities across the world. Together, we are shaping agriculture that is resilient, regenerative, and truly sustainable.
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8 md:mt-10 pt-4 md:pt-5 border-t-2 border-gray-300">
                      <p className="text-lg sm:text-xl font-semibold mb-1" style={{ color: '#39702E' }}>
                        – Mr. Arvind Jain
                      </p>
                      <p className="text-gray-500 italic text-sm sm:text-base">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>

                  {/* CEO Image - Desktop only */}
                  <div className="hidden lg:flex flex-1 justify-center lg:justify-start">
                    <div className="w-64 xl:w-72 h-64 xl:h-72 rounded-full border-4 shadow-2xl overflow-hidden" 
                         style={{ borderColor: '#39702E' }}>
                      <Image
                        src="/photos/ceo.png"
                        alt="Arvind Jain - Chief Executive Officer"
                        width={288}
                        height={288}
                        className="rounded-full object-cover w-full h-full"
                      />
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

export default CEOSection;