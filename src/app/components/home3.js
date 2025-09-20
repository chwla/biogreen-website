import React from 'react';

export default function AboutBiogreen() {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* About Biogreen Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-8">ABOUT BIOGREEN</h2>
          
          <div className="flex flex-wrap justify-center gap-8 items-start">
            {/* Who we are */}
            <div className="flex flex-col items-center max-w-xs bg-gray-100 p-6 rounded-lg shadow-sm">
              <div className="w-full mb-4">
                <img 
                  src="/photos/home3_1.png" 
                  alt="Who we are" 
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Who we are</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking company dedicated to providing green technology solutions for the fertilizer and gas industries. The company leverages Ethiopian resources and international local best-based alliances with sustainable alternatives that are safe, effective, and efficient.
              </p>
            </div>

            {/* What do we do */}
            <div className="flex flex-col items-center max-w-xs bg-gray-100 p-6 rounded-lg shadow-sm">
              <div className="w-full mb-4">
                <img 
                  src="/photos/home3_2.png" 
                  alt="What do we do" 
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What do we do</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking company dedicated to providing green technology solutions for the fertilizer and gas industries. The company leverages Ethiopian resources and international local best-based alliances with sustainable alternatives that are safe, effective, and efficient.
              </p>
            </div>

            {/* How do we do it */}
            <div className="flex flex-col items-center max-w-xs bg-gray-100 p-6 rounded-lg shadow-sm">
              <div className="w-full mb-4">
                <img 
                  src="/photos/home3_3.png" 
                  alt="How do we do it" 
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do we do it</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking company dedicated to providing green technology solutions for the fertilizer and gas industries. The company leverages Ethiopian resources and international local best-based alliances with sustainable alternatives that are safe, effective, and efficient.
              </p>
            </div>

            {/* Image 3 */}
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
            SUSTAINABILITY FOR THE ENTIRE FERTILIZER SUPPLY CHAIN
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The manufacturing and application of fertilizer has a heavy emissions toll, contributing to the global climate change pollution. NAQ Global focuses on the efficient use of natural resources to drive sustainability forward in the fertilizer quality improvements industry and thereby reduce fertilizer carbon footprint. We have been continuously working towards more sustainable operations, offering a wide variety of products and services to decarbonize and mitigate environmental impacts—both at the points of fertilizer production and application.
            </p>
            
            <p>
              Over the past few decades, NAQ Global's research and development teams have developed a wide variety of solutions to address a wide range of problems faced by different entities in the entire fertilizer supply chain. The work in our logo "Fertilizer Quality Improvement" strongly resonates with our commitment to help the fertilizer industry in making the best products with high efficiency and yields. Quality associated issues can arise at many points in the fertilizer manufacturing and distribution processes. We offer sustainable fertilizer treatment solutions across multiple scales and applications – from mining, to production, to storage, and to transport. With our decades of experience in the field, we have found green technology for fertilizer quality improvement to be more efficient and cost effective than the fossil fuel based counterparts. With our assurances in performance, fertilizer companies across the world have been using our products reliably to increase profitability in sustainable ways.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Green Technology for Fertilizer Quality Improvement</h3>
              <p>
                Our innovative product range is categorized according to the different stages of fertilizer manufacturing to help you find the best fertilizer quality improvement solution for your needs. We are committed and focused on providing the best sustainable fertilizer quality improvement solutions and we realize that some products can be challenging to find on our website, or finding on our website, please don't hesitate to contact us. We will be happy to talk about our products and services and discuss the many customization services that we offer.
              </p>
            </div>

            <p className="mt-6">
              Fertilizers are vital to world food systems and food security. In order to feed the world's ten billion people by 2050, fertilizers play an essential role in sustainable fertilizer improvement of food production and agricultural land use efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}