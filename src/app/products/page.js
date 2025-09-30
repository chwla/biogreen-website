import Image from 'next/image';
import React from 'react';

// A reusable, restyled component for product data tables
const NutritionTable = ({ title, data, className = '' }) => (
  <div className={`mt-8 ${className}`}>
    <h3 className="text-lg font-semibold text-black mb-4">{title}</h3>
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-800">
              Characteristic
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-800">
              Value (% / Unit)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-700">{item.characteristic}</td>
              <td className="whitespace-nowrap px-4 py-3 text-gray-600">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// A reusable component for a single product section
const ProductSection = ({
  imageSrc,
  altText,
  title,
  subtitle,
  overview,
  benefits,
  tableData,
  tableTitle,
  reverse = false, // To alternate image/text layout
}) => (
  <section className="py-12 md:py-20">
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-10 md:gap-16`}>
      {/* Image Column */}
      <div className="md:w-5/12 w-full">
        <div className="relative aspect-square w-full rounded-xl shadow-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
      
      {/* Content Column */}
      <div className="md:w-7/12 w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#017b30' }}>{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
        
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-black mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black mb-3">Key Features</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" style={{ color: '#017b30' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3 text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <NutritionTable title={tableTitle} data={tableData} />
      </div>
    </div>
  </section>
);


const ProductsPage = () => {
  const powderFertilizer = {
    overview: 'A next-generation solid fertilizer designed to enrich soils, strengthen root systems, and promote long-lasting fertility. Its nutrient-rich, eco-friendly formulation improves crop performance while supporting sustainable agriculture.',
    benefits: [
      'Sterilized for clean and safe application (Larva-free & Pathogen-free).',
      'Lightweight and concentrated for cost-efficient transport.',
      'Sourced locally to empower farmers and support local agriculture.',
      'Enhances organic matter and microbial activity for long-term soil health.',
      'Plant-based formulation acts as a natural pest repellent.',
      'Heat-treated to eliminate pathogens, weed seeds, and harmful organisms.',
    ],
    data: [
      { characteristic: 'pH', value: '6.5 – 7.0' },
      { characteristic: 'Total Nitrogen (N)', value: '3 – 4%' },
      { characteristic: 'Total P₂O₅ (Phosphate)', value: '2.0 – 2.5%' },
      { characteristic: 'Total K₂O (Potash)', value: '3.5 – 4.5%' },
      { characteristic: 'Organic Matter', value: '75 – 85%' },
    ],
  };

  const liquidFertilizer = {
    overview: 'Enhances root development, boosts crop vitality, and enriches soil fertility. It supports sustainable farming by reducing nutrient runoff, improving soil structure, and strengthening plant resilience against environmental stress.',
    benefits: [
      'Improves soil aeration, porosity, and water-holding capacity.',
      'Stimulates photosynthesis, leading to higher and healthier yields.',
      'Enhances fruit quality including size, shine, color, and storability.',
      'Reduces premature flower and fruit drop by strengthening plant immunity.',
      'Protects crops against stress from drought, salinity, and heat.',
    ],
    data: [
      { characteristic: 'pH', value: '4.5 – 5.0' },
      { characteristic: 'Total Nitrogen', value: '1-2%' },
      { characteristic: 'Total P₂O₅', value: '1-2%' },
      { characteristic: 'Total K₂O', value: '3-3.5%' },
      { characteristic: 'Organic Matter', value: '10– 20%' },
    ],
  };

  const biopesticide = {
    overview: 'A next-generation biological solution designed to protect crops from harmful pests and diseases while maintaining ecological balance. Formulated with beneficial microbes, it acts as a natural, safe alternative to chemical pesticides.',
    benefits: [
      'Eco-friendly protection that controls pests without chemical residues.',
      'Targets harmful insects and fungi while preserving beneficial organisms.',
      'Enhances soil microbial biodiversity and long-term fertility.',
      'Reduces dependency on synthetic pesticides, lowering production costs.',
      'Completely safe for farmers, pollinators, and consumers.',
      'Prevents pest resistance commonly developed against chemical agents.',
    ],
    data: [
        { characteristic: 'Viable Microbial Count', value: '1 × 10⁸ – 1 × 10⁹ CFU/g or ml' },
        { characteristic: 'pH', value: '6.0 – 7.5' },
        { characteristic: 'Moisture Content', value: '< 10% (powder) / 90-95% (liquid)' },
        { characteristic: 'Shelf Life', value: '12 months (sealed, cool storage)' },
    ],
  };

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter" style={{ color: '#017b30' }}>
            Our Agricultural Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of innovative, eco-friendly products designed to enhance soil health, boost crop vitality, and promote sustainable farming practices.
          </p>
        </div>
        
        <div className="divide-y divide-gray-200">
          <ProductSection
            imageSrc="/photos/product/product1.png"
            altText="Bags of Nano Avo Magic Powder Fertilizer"
            title="Nano Avo Magic – Powder"
            subtitle="Innovative Solid Fertilizer for Long-Term Soil Health"
            overview={powderFertilizer.overview}
            benefits={powderFertilizer.benefits}
            tableData={powderFertilizer.data}
            tableTitle="Nutrition Value (Powder)"
          />
          
          <ProductSection
            imageSrc="/photos/product/product2.png"
            altText="Bottles of Nano Avo Magic Liquid Fertilizer"
            title="Nano Avo Magic – Liquid"
            subtitle="Premium Bio-Organic Liquid Fertilizer for Healthy Crops"
            overview={liquidFertilizer.overview}
            benefits={liquidFertilizer.benefits}
            tableData={liquidFertilizer.data}
            tableTitle="Nutrition Value (Liquid)"
            reverse={true}
          />

          <ProductSection
            imageSrc="/photos/product/product3.png"
            altText="Bottles of Bio Green Microbial Biopesticide"
            title="Microbial Biopesticide"
            subtitle="Nature-Powered Protection for Sustainable Farming"
            overview={biopesticide.overview}
            benefits={biopesticide.benefits}
            tableData={biopesticide.data}
            tableTitle="Composition Value"
          />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;