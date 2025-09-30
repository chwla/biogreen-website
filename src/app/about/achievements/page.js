'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AchievementsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // Hook to get the current page path

  const menuItems = [
    { name: 'Our President Message', path: '/about' },
    { name: 'Our History', path: '/about/history' },
    { name: 'Who Are We?', path: '/about/who-we-are' },
    { name: 'What Do We Do?', path: '/about/what-we-do' },
    { name: 'How Do We Do It?', path: '/about/how-do-we-do-it' },
    { name: 'Achievements', path: '/about/achievements' }
  ];

  const achievements = {
    marketing: [
      "Operating one of East Africa's largest organic fertilizer facilities (50,000 sq. m) in Jimma, Ethiopia.",
      "Building strong partnerships with farmers based on trust and proven results.",
      "Active participation in agriculture and sustainability conferences across Africa and Asia.",
      "Expanding distribution networks across Ethiopia and beyond."
    ],
    research: [
      "Dedicated R&D teams in India and Ethiopia focused on plant-based, eco-friendly fertilizers.",
      "Pioneering use of avocado by-products to replace harmful chemical inputs.",
      "Product formulations that improve soil health, boost yields, and support certified organic farming.",
      "Commitment to sustainability and regenerative practices."
    ],
    services: [
      "Large-scale production with state-of-the-art facilities.",
      "Tailored solutions adapted to local soils and climates.",
      "Farmer-focused support: field trials, demos, and technical guidance.",
      "Reliable distribution network ensuring timely availability.",
      "Empowering farmers with knowledge, innovation, and sustainable practices."
    ],
    recognition: [
      "First to pioneer organic fertilizer production from avocado by-products in East Africa.",
      "Proven improvements in soil health, fertility, and crop productivity.",
      "Significant contributions to carbon sequestration and biodiversity preservation.",
      "Recognized as a trusted leader in sustainable agricultural solutions."
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[32rem]">
        <Image 
          src="/photos/about.jpeg" 
          alt="About BioGreen"
          fill
          className="object-cover object-center"
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-amber-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            Our Achievements
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
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{color: '#39702E'}}>
                  Our Achievements
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  We are proud of the milestones we've reached in our mission to revolutionize agriculture through sustainable practices.
                </p>
              </div>
              
              <div className="space-y-12">
                {/* Image Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/photos/about/about_achievement.jpg" alt="A farmer holding a healthy plant, symbolizing growth and achievement." fill className="object-cover"/>
                    </div>
                    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/photos/about/about_achievement2.png" alt="A graphic showcasing BioGreen's commitment to global sustainability." fill className="object-cover"/>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Marketing & Development</h3>
                    <ul className="space-y-3">
                      {achievements.marketing.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-3" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Research & Development</h3>
                    <ul className="space-y-3">
                      {achievements.research.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-3" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Services</h3>
                    <ul className="space-y-3">
                      {achievements.services.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-3" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Recognition</h3>
                    <ul className="space-y-3">
                      {achievements.recognition.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-3" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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