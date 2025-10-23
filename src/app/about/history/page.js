'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HistoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Our President Message', path: '/about' },
    { name: 'Our History', path: '/about/history' },
    { name: 'Who Are We?', path: '/about/who-we-are' },
    { name: 'What Do We Do?', path: '/about/what-we-do' },
    { name: 'How Do We Do It?', path: '/about/how-do-we-do-it' },
    { name: 'Achievements', path: '/about/achievements' }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
        <Image 
          src="/photos/updated_hero.jpeg" 
          alt="About BioGreen"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase text-center" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Our History
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden mb-8">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full text-white py-3 px-4 rounded-md font-semibold uppercase tracking-wider text-sm flex items-center justify-between shadow-md"
              style={{backgroundColor: '#39702E'}}
            >
              <span>About Us Menu</span>
              <svg className={`w-5 h-5 transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Sidebar Navigation */}
            <aside className={`
              w-full lg:w-72 lg:flex-shrink-0
              ${isSidebarOpen ? 'block' : 'hidden lg:block'}
            `}>
              <div className="bg-white shadow-lg rounded-md border border-gray-200 p-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`
                      block w-full text-left py-3 px-4 font-bold text-sm uppercase tracking-wider rounded-md transition-colors duration-200
                      ${pathname === item.path 
                        ? 'bg-[#39702E] text-white' 
                        : 'text-gray-700 hover:bg-green-50 hover:text-[#39702E]'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1 w-full bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border border-gray-200">
              {/* Centered Header */}
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{color: '#39702E'}}>
                  Our History
                </h2>
                <p className="mt-4 font-semibold text-lg sm:text-xl text-gray-800">
                  Our Journey Through Time
                </p>
              </div>
              
              {/* Content with floating images */}
              <div className="space-y-6 text-gray-700">
                {/* First Image - Float Right on Desktop */}
                <div className="w-full md:w-[45%] md:float-right md:ml-6 mb-4 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/photos/about_history.jpeg"
                    alt="BioGreen's facility with green containers"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  BioGreen was founded with a vision to transform agriculture through sustainable innovation. Rooted in the legacy of <strong>AEV Oil</strong>, the first company of our group and a trusted name in avocado oil extraction, BioGreen represents the next step in our journey of <strong>excellence, quality, and trust</strong>.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  With professional expertise in soil science and plant nutrition, we specialize in producing <strong>organic fertilizers from avocado by-products</strong> sourced directly from AEV Oil&apos;s operations. By transforming what was once considered waste into high-quality, eco-friendly fertilizers, we <strong>close the loop in agriculture</strong>—supporting farmers with sustainable solutions while reducing environmental impact.
                </p>

                {/* Second Image - Float Left on Desktop */}
                <div className="w-full md:w-[45%] md:float-left md:mr-6 mb-4 rounded-lg overflow-hidden shadow-lg clear-both md:clear-none">
                   <Image
                      src="/photos/about/about_history2.jpg"
                      alt="A pile of rich, dark compost"
                      width={500}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                </div>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  As the youngest member of a multi-diverse family group with over seven decades of experience, BioGreen carries forward a strong legacy while shaping a <strong>greener, more resilient future</strong>. Our vision is to become the most reputed and trusted name in organic fertilizers—empowering farmers, restoring soils, and cultivating sustainability for generations to come.
                </p>

                {/* Clear floats */}
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;