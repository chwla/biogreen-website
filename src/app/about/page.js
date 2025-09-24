'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CEOSection = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('OUR PRESIDENT MESSAGE');

  const menuItems = [
    { name: 'OUR PRESIDENT MESSAGE', path: '/about' },
    { name: 'OUR HISTORY', path: '/about/history' },
    { name: 'WHO ARE WE?', path: '/about/who-we-are' },
    { name: 'WHAT DO WE DO?', path: '/about/what-we-do' },
    { name: 'HOW DO WE DO IT?', path: '/about/how-do-we-do-it' },
    { name: 'ACHIEVEMENTS', path: '/about/achievements' },
    { name: 'SENIOR MANAGEMENT', path: '/about/senior-management' }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden" style={{ height: '400px' }}>
        <Image 
          src="/photos/about.jpeg" 
          alt="About BioGreen"
          fill
          className="object-cover object-center"
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          priority
        />
        
        {/* Title overlay - removed white background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-amber-800 text-4xl font-bold tracking-wide uppercase text-center drop-shadow-lg">
            Our President and CEO
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex gap-10 items-start">
            {/* Sidebar */}
            <div className="w-72 flex-shrink-0">
              <div className="bg-white shadow-lg border border-gray-200">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link key={item.name} href={item.path}>
                      <div
                        onClick={() => setActiveSection(item.name)}
                        className={`
                          ${index !== menuItems.length - 1 ? 'border-b border-gray-300' : ''}
                          ${isActive ? 'bg-green-600 text-white' : 'bg-white text-green-600 hover:bg-green-50'}
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
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Text */}
                <div className="flex-1 lg:flex-[2]">
                  <h2 className="text-green-600 text-3xl font-light tracking-wide mb-8 pb-3 border-b-3 border-green-600 inline-block">
                    READ THE MESSAGE FROM OUR CEO
                  </h2>
                  
                  <div className="space-y-5">
                    <p className="font-semibold text-gray-700 text-lg">
                      Read The Message From Our President And CEO
                    </p>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                      NAQ Global aims at providing best technical solutions for fertilizer 
                      process & quality improvement. Our R&D works to develop innovative 
                      technologies & products for all such processes, trouble shooting, 
                      efficiency improvement & cost reduction in the fertilizer industry. 
                      Environment friendliness, green (vegetable) sources, & safety 
                      concerns are unique characteristics of NAQ Global&apos;s products.
                    </p>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                      Another advantageous feature of our company is our Technical 
                      Services, which help the fertilizer plants to analyze, diagnose & solve 
                      the problems easily with our experts. Our Tech Service engineers and 
                      chemists also supervise the design and installation of dosing systems, 
                      apply the specialty chemicals appropriately, and help the customers 
                      in deriving the desired results.
                    </p>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Thank You!
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-10 pt-5 border-t-2 border-gray-300">
                    <p className="text-green-600 text-xl font-semibold mb-1">
                      Avdhesh Mathur
                    </p>
                    <p className="text-gray-500 italic">
                      President & CEO
                    </p>
                  </div>
                </div>

                {/* CEO Image */}
                <div className="flex-1 flex justify-center lg:justify-start">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-500 shadow-2xl flex items-center justify-center">
                    {/* Placeholder */}
                    <div className="text-green-600 text-6xl font-light">AM</div>
                    {/* Replace with real photo:
                    <Image
                      src="/photos/ceo.jpg"
                      alt="Avdhesh Mathur - President & CEO"
                      width={288}
                      height={288}
                      className="rounded-full object-cover"
                    />
                    */}
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

export default CEOSection;