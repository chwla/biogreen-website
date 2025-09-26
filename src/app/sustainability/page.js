'use client';
import { useState } from 'react';

const SustainabilityPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is Bio Green Fertilizer made from?",
      answer: "Bio Green fertilizers are 100% plant-based, produced from avocado processing waste and other renewable organic materials."
    },
    {
      question: "How is Bio Green different from chemical fertilizers?",
      answer: "Unlike chemical fertilizers that degrade soil, Bio Green restores soil fertility using avocado-based organic formulations that release nutrients naturally."
    },
    {
      question: "Are your fertilizers certified organic?",
      answer: "Yes. Bio Green fertilizers are certified organic and developed to meet international standards."
    },
    {
      question: "Can Bio Green fertilizers be used for all crops?",
      answer: "Yes. Our avocado-based products are suitable for cereals, pulses, fruits, vegetables, and cash crops."
    },
    {
      question: "How do your fertilizers improve soil health?",
      answer: "They are rich in plant-available nutrients, improve soil structure, stimulate microbes, and enhance long-term fertility."
    },
    {
      question: "What makes Bio Green environmentally friendly?",
      answer: "They upcycle avocado waste, reduce landfill impact, cut emissions, and protect ecosystems."
    },
    {
      question: "Can Bio Green fertilizers replace manure?",
      answer: "Yes. They are safer, more efficient, and pathogen-free compared to raw manure."
    },
    {
      question: "Do your products help in water conservation?",
      answer: "Yes. They enhance soil water-holding capacity and reduce leaching."
    },
    {
      question: "Are Bio Green fertilizers cost-effective?",
      answer: "Yes. They maximize nutrient efficiency and long-term soil fertility, reducing chemical dependency."
    },
    {
      question: "Do you provide technical support?",
      answer: "Absolutely. Training, on-site support, and tailored guidance are integral parts of our service."
    },
    {
      question: "Where can farmers purchase Bio Green fertilizers?",
      answer: "Through our distributors, cooperatives, and direct channels in Ethiopia and international markets."
    },
    {
      question: "How does Bio Green contribute to regenerative agriculture?",
      answer: "By turning avocado waste into organic fertilizer, we restore soil life, sequester carbon, and support biodiversity."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6" style={{ color: '#39702E' }}>
            Sustainability & Regenerative Agriculture
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Introduction Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-center" style={{ color: '#39702E' }}>
                Growing Prosperity Organically, Sustaining Life Naturally
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Sustainability for the Entire Fertilizer Value Chain</strong> The global food system relies heavily on fertilizers—but their conventional manufacturing and overuse carry a significant environmental cost. Chemical fertilizers degrade soils, emit greenhouse gases, and pollute water systems. At Bio Green, we are reshaping this story through <strong>green technology that converts avocado waste into high-quality organic fertilizers</strong>—ensuring farming becomes more sustainable, resilient, and regenerative.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Replace</h3>
                <p className="text-gray-600">Replace fossil-fuel-based fertilizers with organic, plant-based alternatives</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Support</h3>
                <p className="text-gray-600">Support soil health and biodiversity with Organic products</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Reduce</h3>
                <p className="text-gray-600">Reduce the environmental footprint of fertilizer production</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#39702E' }}>Deliver</h3>
                <p className="text-gray-600">Deliver high nutrient efficiency with minimal losses</p>
              </div>
            </div>
          </div>

          {/* Green Technology Section */}
          <div className="mb-20 py-16 px-8 rounded-2xl" style={{ backgroundColor: '#39702E' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Green Technology for Fertilizer Quality Improvement
              </h2>
              <p className="text-xl text-white leading-relaxed mb-8">
                Our fertilizers are:
              </p>
              <div className="text-left max-w-3xl mx-auto space-y-4">
                <p className="text-lg text-green-100">• Made from locally sourced avocado by-products.</p>
                <p className="text-lg text-green-100">• Produced through eco-friendly processes with minimal carbon output.</p>
                <p className="text-lg text-green-100">• Easy to apply, highly efficient, and environmentally safe.</p>
                <p className="text-lg text-green-100">• Long-term soil restorers, season after season.</p>
              </div>
            </div>
          </div>

          {/* Future Vision Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#39702E' }}>
                Feeding the Future Sustainably
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With the global population rising, fertilizers remain critical for food security. The challenge is to grow responsibly.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-gray-700 leading-relaxed text-center">
                  Bio Green leads this transition by offering <strong>plant-based organic fertilizers from avocado waste</strong>—creating healthier soils, stronger crops, and a greener planet.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 py-16 px-8 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#39702E' }}>
                  FAQs
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about Bio Green fertilizers
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                  {faqs.slice(0, 6).map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                      <button
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h3 className="text-lg font-medium text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <span 
                          className={`text-2xl font-light transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}
                          style={{ color: '#39702E' }}
                        >
                          +
                        </span>
                      </button>
                      
                      {openFAQ === index && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed mt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {faqs.slice(6, 12).map((faq, index) => (
                    <div key={index + 6} className="bg-white rounded-lg shadow-sm border border-gray-200">
                      <button
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(index + 6)}
                      >
                        <h3 className="text-lg font-medium text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <span 
                          className={`text-2xl font-light transition-transform ${openFAQ === index + 6 ? 'rotate-45' : ''}`}
                          style={{ color: '#39702E' }}
                        >
                          +
                        </span>
                      </button>
                      
                      {openFAQ === index + 6 && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed mt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 border-l-4 bg-white rounded-r-lg" style={{ borderColor: '#39702E' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
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

export default SustainabilityPage;