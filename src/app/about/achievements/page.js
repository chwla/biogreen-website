'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AchievementsPage = () => {
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
      <div className="w-full relative overflow-hidden">
        <div className="relative w-full aspect-[16/6] sm:aspect-[21/7] md:aspect-[21/6] lg:aspect-[21/5]">
          <Image 
            src="/photos/steptodown.com551422.jpg" 
            alt="About BioGreen"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide uppercase text-center" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Achievements
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="divide-y divide-gray-200">

                {/* Section 1: Decades of Expertise */}
                <div className="pb-10 mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2 w-full">
                       <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/photos/new_achievments1.jpeg"
                          alt="A farmer plowing a field with oxen, representing decades of agricultural expertise."
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold tracking-tight mb-4" style={{color: '#39702E'}}>
                        Decades of Expertise
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        BioGreen is part of a multi-diverse family group with a legacy of over seven decades. This long history has earned us the trust of our partners and a deep understanding of the agricultural landscape.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Global Recognition */}
                <div className="pt-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-3/5 w-full md:order-last">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-50">
                        <Image
                          src="/photos/new_achievments2.jpeg"
                          alt="A stylized map of Ethiopia made from agricultural icons."
                          fill
                          className="object-contain"
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                    </div>
                    <div className="md:w-2/5 w-full">
                       <h2 className="text-3xl font-bold tracking-tight mb-4" style={{color: '#39702E'}}>
                        Global Recognition
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Our state-of-the-art facility in Jimma, Ethiopia is one of the largest in East Africa, enabling large-scale production to serve farmers and partners across the region and beyond.
                      </p>
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