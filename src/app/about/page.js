'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PresidentMessagePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Our Chairman's Message", path: '/about' },
    { name: 'Our History', path: '/about/history' },
    { name: 'Who Are We?', path: '/about/who-we-are' },
    { name: 'What Do We Do?', path: '/about/what-we-do' },
    { name: 'How Do We Do It?', path: '/about/how-do-we-do-it' },
    { name: 'Achievements', path: '/about/achievements' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/steptodown.com551422.jpg"
            alt="About BioGreen - Sustainable Agriculture Transformation"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
            quality={100}
          />
        </div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Message from Our Chairman
          </h1>
        </div>
      </section>

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
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{color: '#39702E'}}>
                  A Message from Our Chairman
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:float-right my-4 sm:ml-8 rounded-full overflow-hidden shadow-xl border-4 border-[#39702E]">
                  <Image
                    src="/photos/ceo.png"
                    alt="Mr. Arvind Jain, Chairman"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <p>
                  At <strong>Bio Green Fertilizer</strong>, our mission is clear—to transform agriculture with sustainable, future-ready solutions. We are committed to replacing harmful, chemical-based inputs with safe, effective, plant-based fertilizers derived from avocado by-products. These solutions not only nurture the soil but also enhance productivity while safeguarding our planet for future generations.
                </p>
                
                <p>
                  With <strong>innovation and integrity</strong> at the heart of everything we do, Bio Green is building a greener tomorrow for farmers and communities across the world. Together, we are shaping agriculture that is resilient, regenerative, and truly sustainable.
                </p>

                {/* Signature */}
                <div className="clear-both pt-6">
                  <p className="text-xl font-semibold mb-1" style={{ color: '#39702E' }}>
                    — Mr. Arvind Jain
                  </p>
                  <p className="text-gray-600 italic">
                    Chairman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PresidentMessagePage;