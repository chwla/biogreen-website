'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

// Reusable Feature Card Component
const FeatureCard = ({ imageSrc, altText, title, children }) => (
  <div className="text-center bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-lg h-full flex flex-col">
    <div className="relative w-full h-40 mx-auto rounded-t-lg overflow-hidden">
      <Image src={imageSrc} alt={altText} fill className="object-cover" />
    </div>
    <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold mb-3" style={{ color: '#39702E' }}>{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{children}</p>
    </div>
  </div>
);

const SustainabilityPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: "What is Bio Green Fertilizer made from?", answer: "Bio Green fertilizers are 100% plant-based, produced from avocado processing waste and other renewable organic materials." },
    { question: "How is Bio Green different from chemical fertilizers?", answer: "Unlike chemical fertilizers that degrade soil, Bio Green restores soil fertility using avocado-based organic formulations that release nutrients naturally." },
    { question: "Are your fertilizers certified organic?", answer: "Yes. Bio Green fertilizers are certified organic and developed to meet international standards." },
    { question: "Can Bio Green fertilizers be used for all crops?", answer: "Yes. Our avocado-based products are suitable for cereals, pulses, fruits, vegetables, and cash crops." },
    { question: "How do your fertilizers improve soil health?", answer: "They are rich in plant-available nutrients, improve soil structure, stimulate microbes, and enhance long-term fertility." },
    { question: "What makes Bio Green environmentally friendly?", answer: "They upcycle avocado waste, reduce landfill impact, cut emissions, and protect ecosystems." },
    { question: "Can Bio Green fertilizers replace manure?", answer: "Yes. They are safer, more efficient, and pathogen-free compared to raw manure." },
    { question: "Do your products help in water conservation?", answer: "Yes. They enhance soil water-holding capacity and reduce leaching." },
    { question: "Are Bio Green fertilizers cost-effective?", answer: "Yes. They maximize nutrient efficiency and long-term soil fertility, reducing chemical dependency." },
    { question: "Do you provide technical support?", answer: "Absolutely. Training, on-site support, and tailored guidance are integral parts of our service." },
    { question: "Where can farmers purchase Bio Green fertilizers?", answer: "Through our distributors, cooperatives, and direct channels in Ethiopia and international markets." },
    { question: "How does Bio Green contribute to regenerative agriculture?", answer: "By turning avocado waste into organic fertilizer, we restore soil life, sequester carbon, and support biodiversity." }
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/steptodown.com947263.jpg"
            alt="A beautiful green valley representing sustainability and a healthy planet."
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
            Sustainability & Regenerative Agriculture
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#39702E' }}>
                Growing Prosperity Organically, Sustaining Life Naturally
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At BioGreen, we are reshaping the fertilizer value chain through green technology that converts avocado waste into high-quality organic fertilizers—ensuring farming becomes more sustainable, resilient, and regenerative.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <FeatureCard imageSrc="/photos/360_F_575112680_MgbhVqfkyuCP7FchIbo8x0lhw8cfVhXR (1).png" altText="Hand holding organic fertilizer" title="Replace">
                Replace fossil-fuel-based fertilizers with organic, plant-based alternatives.
              </FeatureCard>
              <FeatureCard imageSrc="/photos/KnowYourFarmerKnowTheirFarm_600x450 (1).jpg" altText="A smiling farmer in her field" title="Support">
                Support soil health and biodiversity with certified organic products.
              </FeatureCard>
              <FeatureCard imageSrc="/photos/images (29).jpg" altText="A vast, clean agricultural field" title="Reduce">
                Reduce the environmental footprint of fertilizer production and use.
              </FeatureCard>
              <FeatureCard imageSrc="/photos/home3_3.jpg" altText="Hands holding rich soil with a growing plant" title="Deliver">
                Deliver high nutrient efficiency with minimal environmental losses.
              </FeatureCard>
            </div>
          </div>

          {/* Green Technology Section */}
          <div className="relative mb-20 py-20 px-8 rounded-2xl overflow-hidden text-center text-white">
             <div className="absolute inset-0 z-0">
                <Image src="/photos/Gemini_Generated_Image_caomdecaomdecaom.png" alt="A collage of fresh avocados" fill className="object-cover"/>
            </div>
            <div className="absolute inset-0 bg-[#39702E] bg-opacity-80 z-10"></div>
            <div className="relative z-20 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Green Technology for a Better Future
              </h2>
              <div className="text-left max-w-3xl mx-auto space-y-3 text-lg">
                <p>• Made from locally sourced avocado by-products.</p>
                <p>• Produced through eco-friendly processes with minimal carbon output.</p>
                <p>• Easy to apply, highly efficient, and environmentally safe.</p>
                <p>• Designed to restore long-term soil health, season after season.</p>
              </div>
            </div>
          </div>

          {/* Future Vision Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#39702E' }}>
                        Feeding the Future Sustainably
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        With the global population rising, fertilizers remain critical for food security. The challenge is to grow responsibly. BioGreen leads this transition by offering plant-based organic fertilizers from avocado waste—creating healthier soils, stronger crops, and a greener planet.
                    </p>
                </div>
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image src="/photos/Photo E.jpg" alt="A person walking towards the sunrise in a field" fill className="object-cover"/>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 py-16 px-6 sm:px-8 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#39702E' }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about BioGreen fertilizers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                      <button
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h3 className="text-md font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <span className={`text-2xl font-light transition-transform transform ${openFAQ === index ? 'rotate-45' : ''}`} style={{ color: '#39702E' }}>
                          +
                        </span>
                      </button>
                      
                      {openFAQ === index && (
                        <div className="px-5 pb-5">
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed mt-2">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SustainabilityPage;