'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AchievementsPage = () => {
  const [activeSection, setActiveSection] = useState('ACHIEVEMENTS');
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
            Our Achievements
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
                        style={{ color: '#39702E', borderColor: '#39702E' }}>
                      OUR ACHIEVEMENTS
                    </h2>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                      {/* Marketing & Business Development */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: '#39702E' }}>
                          Marketing & Business Development
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Operating one of East Africa&apos;s <strong>largest organic fertilizer facilities</strong> (50,000 sq. m) in Jimma, Ethiopia</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Building strong partnerships with farmers based on <strong>trust and proven results</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Active participation in agriculture and sustainability conferences across Africa and Asia</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Expanding distribution networks across Ethiopia and beyond</span>
                          </li>
                        </ul>
                      </div>

                      {/* Research & Development */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: '#39702E' }}>
                          Research & Development (R&D)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Dedicated R&D teams in <strong>India and Ethiopia</strong> focused on plant-based, eco-friendly fertilizers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span><strong>Pioneering use of avocado by-products</strong> to replace harmful chemical inputs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Product formulations that improve soil health, boost yields, and support certified organic farming</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Commitment to <strong>sustainability and regenerative practices</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Services */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: '#39702E' }}>
                          Services
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Large-scale production with <strong>state-of-the-art facilities</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Tailored solutions adapted to local soils and climates</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Farmer-focused support: field trials, demos, and technical guidance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Reliable distribution network ensuring <strong>timely availability</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Empowering farmers with knowledge, innovation, and sustainable practices</span>
                          </li>
                        </ul>
                      </div>

                      {/* Recognition */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: '#39702E' }}>
                          Recognition
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>First to <strong>pioneer organic fertilizer production from avocado by-products</strong> in East Africa</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Proven improvements in soil health, fertility, and crop productivity</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Significant contributions to <strong>carbon sequestration and biodiversity preservation</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span>Recognized as a trusted leader in <strong>sustainable agricultural solutions</strong></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Images Section - Desktop */}
                  <div className="hidden md:block lg:flex-[1] w-full lg:w-auto">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="w-full h-56 lg:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
                        <Image
                          src="/photos/home3_1.png"
                          alt="NAQ Global Facility"
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="w-full h-56 lg:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
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
  );
};

export default AchievementsPage;