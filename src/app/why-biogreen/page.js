'use client';
import Image from 'next/image';
import React from 'react';

// Reusable Icon Card Component
const FeatureCard = ({ imageSrc, altText, title, children }) => (
  <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-lg h-full flex flex-col">
    <div className="relative w-full h-40 mx-auto mb-5 rounded-md overflow-hidden">
      <Image src={imageSrc} alt={altText} fill className="object-cover" />
    </div>
    <h3 className="text-2xl font-semibold mb-3" style={{ color: '#39702E' }}>{title}</h3>
    <p className="text-gray-600 leading-relaxed flex-grow">{children}</p>
  </div>
);


const WhyBioGreenPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/steptodown.com911847.jpg"
            alt="Vast, vibrant green agricultural field under a clear blue sky."
            fill
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Why BioGreen?
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Choosing BioGreen means investing in a sustainable future for agriculture, your soil, and our planet.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#39702E' }}>
                The Future of Farming is Organic
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Organic farming is rapidly gaining global importance due to its focus on sustainability and environmental stewardship. BioGreen empowers farmers with solutions that promote soil health, reduce chemical runoff, and contribute to climate resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <FeatureCard 
                imageSrc="/photos/photo - D.png" 
                altText="Hands harvesting fresh carrots from rich, dark soil."
                title="Soil Health"
              >
                Promote long-term soil health, plant growth, and crop resilience through natural, effective fertilization.
              </FeatureCard>
              <FeatureCard 
                imageSrc="/photos/steptodown.com551422.jpg"
                altText="A modern irrigation system watering a green field."
                title="Water Quality"
              >
                Significantly reduce chemical runoff into waterways, protecting local ecosystems and improving water quality.
              </FeatureCard>
              <FeatureCard 
                imageSrc="/photos/b.jpg"
                altText="Many diverse hands coming together to nurture a young seedling."
                title="Climate Impact"
              >
                Contribute to carbon sequestration and build climate-resilient farming systems for a healthier planet.
              </FeatureCard>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="relative mb-20 py-20 px-8 rounded-2xl overflow-hidden text-center text-white">
            <div className="absolute inset-0 z-0">
                <Image src="/photos/about/about_how-do-we-do-it2.jpg" alt="A perfect avocado, representing natural ingredients." fill className="object-cover"/>
            </div>
            <div className="absolute inset-0 bg-[#39702E] bg-opacity-80 z-10"></div>
            <div className="relative z-20 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Innovation from Nature
              </h2>
              <p className="text-xl leading-relaxed mb-6">
                By utilizing avocado by-products to create safe, effective, plant-based fertilizers, we contribute to both immediate agricultural productivity and long-term environmental health.
              </p>
            </div>
          </div>

          {/* Product Development Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#39702E' }}>
                Product Development Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quality control is the foundation of everything we do, from initial concept to final delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow bg-white">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>Pre-Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  We leverage the combined expertise of our marketing and technical teams to design new products that address the unique challenges faced by farmers.
                </p>
              </div>
              <div className="p-8 border-t-4 rounded-lg shadow-lg transition-shadow bg-white" style={{ borderColor: '#39702E' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>During Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every issue related to fertilizer quality is taken as a challenge to solve. Our R&D team ensures solutions are developed in the most efficient and economical way.
                </p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow bg-white">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>Post-Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our in-house quality control systems ensure consistency from production to final dispatch, guaranteeing uncompromised quality and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Services Section */}
          <div className="bg-gray-50 py-16 px-6 sm:px-8 rounded-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#39702E' }}>
                  Complete Technical Support
                </h2>
                <p className="text-lg text-gray-600">
                  Even the best products may fail if not applied correctly. We deliver the complete solution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To maximize efficiency, we deploy a trained team of agricultural engineers equipped with the necessary tools and technology for precise application of our organic fertilizers.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4" style={{ color: '#39702E' }}>Our Expert Support Includes:</h4>
                  <ul className="space-y-3 text-gray-700">
                    {[
                        "Instrumentation and monitoring",
                        "Application techniques",
                        "Proper storage and product management",
                        "On-site demonstrations and guidance"
                    ].map(item => (
                        <li key={item} className="flex items-start">
                           <span className="w-2 h-2 rounded-full mt-2.5 mr-3 flex-shrink-0" style={{ backgroundColor: '#39702E' }}></span>
                          <span><strong>{item}</strong></span>
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/photos/Gemini_Generated_Image_lzwxg2lzwxg2lzwx(2).png"
                    alt="A team of agricultural engineers collaborating in a modern greenhouse."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 p-6 border-l-4 bg-white rounded-r-lg shadow-sm" style={{ borderColor: '#39702E' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition, we offer training programs for farmers and customer teams to ensure our fertilizers are used efficiently, sustainably, and effectively in the field.
                </p>
                <p className="text-xl font-semibold mt-4" style={{ color: '#39702E' }}>
                  At BioGreen, we deliver knowledge, support, and confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyBioGreenPage;