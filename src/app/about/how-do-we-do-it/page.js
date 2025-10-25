'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HowWeDoItPage = () => {
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
            How Do We Do It
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
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{color: '#39702E'}}>
                  How Do We Do It?
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  At BioGreen, <strong>innovation and sustainability</strong> guide every step we take. By studying the needs of farmers and the challenges of modern agriculture, we design solutions that are practical, effective, and environmentally responsible.
                </p>

                <div className="relative w-full sm:w-[45%] md:float-right my-4 sm:ml-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/photos/about/about_how-do-we-do-it2.jpg"
                    alt="A perfect avocado, representing the natural and high-quality source of BioGreen's products."
                    width={500}
                    height={400}
                    className="object-cover"
                  />
                </div>
                
                <p>
                  Our approach combines <strong>scientific research with natural processes</strong> to create fertilizers that achieve the following:
                </p>
                
                <ul className="space-y-3 not-prose my-6">
                  {[
                    'Maximize nutrient availability for crops.',
                    'Strengthen the soil food web and foster beneficial microorganisms.',
                    'Adapt to diverse soils, climates, and farming conditions.',
                    'Reduce reliance on harmful chemical inputs while protecting the environment.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="flex-shrink-0 w-6 h-6 mt-1" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative w-full sm:w-[45%] md:float-left my-4 sm:mr-8 rounded-lg overflow-hidden shadow-lg">
                   <Image
                      src="/photos/about/about_how-do-we-do-it.jpg"
                      alt="A scientist inspecting a plant in a modern laboratory, representing agricultural innovation."
                      width={500}
                      height={400}
                      className="object-cover"
                    />
                </div>

                <p className="mt-0">
                  By using <strong>avocado by-products</strong> as a renewable resource, we turn agricultural waste into powerful, plant-based fertilizers—helping both farmers and the planet thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeDoItPage;