'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home2 = () => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push('/about');
  };

  return (
    <div className="bg-white">
      {/* First Section */}
      <div className="bg-gray-50 mb-8">
        <div className="flex items-start justify-between max-w-7xl mx-auto px-8 py-16 flex-wrap">
          {/* Left Content */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Bio Green stands at the forefront of agricultural innovation, driven by a vision for a sustainable and regenerative future. With a strong presence in Ethiopia and decades of expertise in soil science and plant nutrition, we have built lasting partnerships with farmers and customers who trust us to deliver solutions that truly make a difference.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              To meet the growing demand for sustainable agricultural inputs, Bio Green established one of East Africa&apos;s largest organic fertilizer facilities in <strong>Jimma, Ethiopia</strong>, spanning <strong>50,000 square meters</strong>. This facility enables large-scale production of premium organic fertilizers made from <strong>avocado by-products</strong>, ensuring farming practices that enrich soil health, improve yields, and protect the environment.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Our dedicated <strong>R&D teams in India and Ethiopia</strong> continuously innovate to create plant-based, eco-friendly fertilizers tailored to diverse soils and climates. These formulations support certified organic farms while driving long-term agricultural productivity.
            </p>

            <button 
              className="text-white px-6 py-3 text-sm font-medium transition-colors duration-200"
              style={{ backgroundColor: '#39702E' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d5722'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#39702E'}
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full min-w-[300px] h-[400px]">
            <Image 
              src="/photos/home2_1.png" 
              alt="Bio Green facility with compost piles and green containers"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-100">
        <div className="flex items-start justify-between max-w-7xl mx-auto px-8 py-16 flex-wrap">
          {/* Left Content */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <h2 className="text-3xl font-normal mb-8 uppercase tracking-wide" style={{ color: '#39702E' }}>
              READ THE MESSAGE FROM OUR CEO
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              At <strong>Bio Green Fertilizer</strong>, our mission is clear—to transform agriculture with sustainable, future-ready solutions. We are committed to replacing harmful, chemical-based inputs with safe, effective, plant-based fertilizers derived from avocado by-products. These solutions not only nurture the soil but also enhance productivity while safeguarding our planet for future generations.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              With <strong>innovation and integrity</strong> at the heart of everything we do, Bio Green is building a greener tomorrow for farmers and communities across the world. Together, we are shaping agriculture that is resilient, regenerative, and truly sustainable.
            </p>

            <div className="mb-8">
              <p className="text-gray-700 text-base font-semibold">
                <strong>– Mr. Arvind Jain</strong>
              </p>
              <p className="text-gray-600 text-sm italic">
                Chief Executive Officer
              </p>
            </div>

            <button 
              className="text-white px-6 py-3 text-sm font-medium transition-colors duration-200"
              style={{ backgroundColor: '#39702E' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d5722'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#39702E'}
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>

          {/* Right CEO Image */}
          <div className="flex-1 flex justify-center min-w-[300px]">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
              <Image 
                src="/photos/ceo.png" 
                alt="Mr. Arvind Jain - Chief Executive Officer"
                width={320}
                height={320}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;