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
      {/* --- About Section --- */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Bio Green stands at the forefront of agricultural innovation, driven by a vision for a sustainable and regenerative future. With a strong presence in Ethiopia and decades of expertise in soil science and plant nutrition, we have built lasting partnerships with farmers and customers who trust us to deliver solutions that truly make a difference.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                To meet the growing demand for sustainable agricultural inputs, Bio Green established one of East Africa&apos;s largest organic fertilizer facilities in <strong>Jimma, Ethiopia</strong>, spanning <strong>50,000 square meters</strong>. This facility enables large-scale production of premium organic fertilizers made from <strong>avocado by-products</strong>.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Our dedicated <strong>R&D teams in India and Ethiopia</strong> continuously innovate to create plant-based, eco-friendly fertilizers tailored to diverse soils and climates, supporting organic farms and driving long-term agricultural productivity.
              </p>

              <button
                className="text-white px-8 py-3 text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#39702E' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2d5722'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#39702E'}
                onClick={handleReadMore}
              >
                READ MORE
              </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/photos/home_new.jpeg"
                  alt="Bio Green facility with compost piles and green containers"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CEO Message Section --- */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* On mobile, CEO image is on top. On desktop, it's on the right. */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-light mb-8 uppercase tracking-wide" style={{ color: '#39702E' }}>
                A Message from Our CEO
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;At <strong>Bio Green Fertilizer</strong>, our mission is to transform agriculture with sustainable, future-ready solutions. We are committed to replacing harmful chemical inputs with safe, plant-based fertilizers that nurture the soil and safeguard our planet for future generations.&rdquo;
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;With <strong>innovation and integrity</strong> at our core, we are building a greener tomorrow for farmers and communities worldwide. Together, we are shaping an agricultural future that is resilient, regenerative, and truly sustainable.&rdquo;
              </p>

              <div className="mt-8 mb-8 text-center md:text-left">
                <p className="text-gray-800 text-lg font-semibold">
                  Mr. Arvind Jain
                </p>
                <p className="text-gray-600 text-base">
                  Chief Executive Officer
                </p>
              </div>

              <button
                className="text-white px-8 py-3 text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#39702E' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2d5722'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#39702E'}
                onClick={handleReadMore}
              >
                READ MORE
              </button>
            </div>

            {/* Right CEO Image - INCREASED SIZE */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/photos/ceo.png"
                  alt="Mr. Arvind Jain - Chief Executive Officer"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 450px, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;