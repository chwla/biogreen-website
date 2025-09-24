'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HistoryPage = () => {
  const [activeSection, setActiveSection] = useState('OUR HISTORY');

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
    // Navigate to the specified path
    window.location.href = item.path;
  };

  return (
    <>
      {/* Hero Section*/}
      <div className="w-full relative overflow-hidden" style={{ height: '400px' }}>
        <Image 
          src="/photos/about.jpeg" 
          alt="About BioGreen"
          fill
          className="object-cover object-center"
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
        />
        
        {/* Title overlay - removed white background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-amber-800 text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            Our History
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex gap-10 items-start">
            {/* Left Sidebar Navigation */}
            <div className="w-72 flex-shrink-0">
              <div className="bg-white shadow-lg border border-gray-200">
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
                      text-center py-4 px-4 font-bold text-xs uppercase tracking-widest cursor-pointer transition-all duration-200 
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
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Text Content */}
                <div className="flex-1 lg:flex-[2]">
                  <h2 className="text-green-600 text-3xl font-light tracking-wide mb-8 pb-3 border-b-3 border-green-600 inline-block">
                    OUR HISTORY
                  </h2>
                  
                  <div className="space-y-5">
                    <p className="font-semibold text-gray-700 text-lg">
                      Read The Message From Our President And CEO
                    </p>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                      NAQ Global aims at providing best technical solutions for fertilizer 
                      process &amp; quality improvement. Our R&amp;D works to develop innovative 
                      technologies &amp; products for all such processes, trouble shooting, 
                      efficiency improvement &amp; cost reduction in the fertilizer industry. 
                      Environment friendliness, green (vegetable) sources, &amp; safety 
                      concerns are unique characteristics of NAQ Global&apos;s products.
                    </p>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                      Another advantageous feature of our company is our Technical 
                      Services, which help the fertilizer plants to analyze, diagnose &amp; solve 
                      the problems easily with our experts. Our Tech Service engineers and 
                      chemists also supervise the design and installation of dosing systems, 
                      apply the specialty chemicals appropriately, and help the customers 
                      in deriving the desired results.
                    </p>
                  </div>
                </div>

                {/* Images */}
                <div className="flex-1">
                  <div className="space-y-4">
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                      <Image
                        src="/photos/home3_1.png"
                        alt="NAQ Global Facility"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
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
      </section>
    </>
  )
}

export default HistoryPage;