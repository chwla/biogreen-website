'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ExpertiseCard = ({ iconSrc, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center p-8 h-full">
    <div className="w-20 h-20 mb-5 relative flex items-center justify-center">
      <Image
        src={iconSrc}
        alt={title}
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed font-medium">{description}</p>
  </div>
);

const Home2 = () => {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* --- Our Expertise Section --- */}
      <section className="py-20 px-6 sm:px-12 bg-[#f0f7ee]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExpertiseCard
              iconSrc="/photos/expertise_tree.png"
              title="Advanced Plant Nutrition"
              description="High-performance plant-based fertilizers optimized for organic systems."
            />
            <ExpertiseCard
              iconSrc="/photos/expertise_chart.png"
              title="Grower Confidence"
              description="Supporting higher yields and long-term soil vitality."
            />
            <ExpertiseCard
              iconSrc="/photos/expertise_shield.png"
              title="Science & Integrity"
              description="Formulated through rigorous research and field testing."
            />
            <ExpertiseCard
              iconSrc="/photos/expertise_partnership.png"
              title="Technical Partnership"
              description="Comprehensive agronomic support and expert guidance."
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO? Section */}
      <section className="py-20 px-6 sm:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Text */}
            <div className="md:w-1/2 text-left">
              <p className="text-xs font-bold tracking-widest text-[#39702E] uppercase mb-4">WHAT WE DO ?</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Advancing Organic Farming Through Innovation
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6 font-medium">
                We manufacture premium plant-based organic fertilizers derived from avocado and coffee by-products, transforming agricultural waste into sustainable farming solutions. Through circular agriculture, we convert natural residues into valuable plant nutrition — completing the cycle from harvest back to soil. Our mission is to support modern, responsible farming with science-driven, environmentally conscious solutions.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/african_man_harvesting.jpg"
                  alt="Farming landscape showing organic agriculture"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
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