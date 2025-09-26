'use client';
import { useState } from 'react';
import Image from 'next/image';

const WhyBioGreenPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6" style={{ color: '#39702E' }}>
            Why Bio Green?
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Introduction Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#39702E' }}>
                The Future of Farming is Organic
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Organic farming is rapidly gaining global importance due to its focus on <strong>sustainability and environmental stewardship</strong>. Bio Green organic fertilizers empower farmers with solutions that promote soil health, reduce chemical runoff, and contribute to climate resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Soil Health</h3>
                <p className="text-gray-600">Promote soil health, plant growth, and resilience through natural fertilization</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">💧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Water Quality</h3>
                <p className="text-gray-600">Reduce chemical runoff and improve water quality for communities</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Climate Impact</h3>
                <p className="text-gray-600">Contribute to carbon sequestration and climate resilience</p>
              </div>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="mb-20 py-16 px-8 rounded-2xl" style={{ backgroundColor: '#39702E' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Innovation from Nature
              </h2>
              <p className="text-xl text-white leading-relaxed mb-8">
                Through research-driven innovation, Bio Green provides <strong>practical application guidelines</strong>, ensures <strong>compatibility with organic practices</strong>, and delivers <strong>nutrient efficiency</strong> tailored to diverse farming systems.
              </p>
              <p className="text-lg text-green-100">
                By <strong>utilizing avocado by-products</strong> to create safe, effective, plant-based fertilizers, Bio Green contributes to both <strong>immediate agricultural productivity</strong> and <strong>long-term environmental health</strong>.
              </p>
            </div>
          </div>

          {/* Product Development Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#39702E' }}>
                Product Development Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quality control is the foundation of everything we do, from initial concept to final delivery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>Pre-Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Bio Green, <strong>quality control is the foundation</strong> of our product development. By leveraging the combined expertise of our marketing and technical services teams, we design new products to address the <strong>unique challenges faced by farmers and fertilizer users</strong>.
                </p>
              </div>

              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>During Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether it is <strong>hygroscopicity, crushing strength, dust formation, or foam generation</strong>, every issue related to fertilizer quality is taken as a <strong>challenge to solve</strong>. Our R&D team ensures solutions are developed in the <strong>most efficient and economical way</strong>.
                </p>
              </div>

              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#39702E' }}>Post-Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once a product is developed and successfully tested in the field, our <strong>in-house quality control systems</strong> ensure consistency. From <strong>production to packing and final dispatch</strong>, strict protocols ensure <strong>uncompromised quality and reliability</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Services Section */}
          <div className="bg-gray-50 py-16 px-8 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#39702E' }}>
                  Complete Technical Support
                </h2>
                <p className="text-lg text-gray-600">
                  Even the best products may fail if not applied correctly. We deliver the complete solution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To maximize efficiency and results, we deploy a <strong>trained team of agricultural engineers</strong> equipped with the necessary tools and technology for <strong>precise application</strong> of our organic fertilizers.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4" style={{ color: '#39702E' }}>Our Expert Support:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#39702E' }}></span>
                      <span><strong>Instrumentation and monitoring</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#39702E' }}></span>
                      <span><strong>Application techniques and equipment handling</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#39702E' }}></span>
                      <span><strong>Proper storage and product management</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#39702E' }}></span>
                      <span><strong>On-site demonstrations and guidance</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/photos/home3_1.png"
                    alt="Technical Support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 p-6 border-l-4 bg-white rounded-r-lg" style={{ borderColor: '#39702E' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition, we offer <strong>training programs</strong> for farmers, agronomists, and customer teams to ensure fertilizers are used efficiently, sustainably, and effectively in the field.
                </p>
                <p className="text-lg font-medium mt-4" style={{ color: '#39702E' }}>
                  At Bio Green, our commitment goes beyond supplying fertilizers—we deliver <strong>knowledge, support, and confidence</strong> to those who grow the world&apos;s food.
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