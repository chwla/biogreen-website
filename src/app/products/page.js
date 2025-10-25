import Image from 'next/image';
import React from 'react';

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

const ProductSection = ({
  imageSrc,
  altText,
  title,
  subtitle,
  overview,
  benefits,
  tableData,
  tableTitle,
  reverse = false,
}) => (
  <section className="py-12 md:py-16">
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-10 md:gap-16`}>
      <div className="lg:w-5/12 w-full">
        <div className="relative aspect-square w-full rounded-xl shadow-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
      
      <div className="lg:w-7/12 w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#39702E' }}>{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-black mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5" style={{ color: '#39702E' }} fill="currentColor" viewBox="0 0 20 20">
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
      { characteristic: 'pH', value: '6.5 - 7.0' },
      { characteristic: 'Total Nitrogen (N)', value: '3 - 4%' },
      { characteristic: 'Total P2O5 (Phosphate)', value: '2.0 - 2.5%' },
      { characteristic: 'Total K2O (Potash)', value: '3.5 - 4.5%' },
      { characteristic: 'Organic Matter', value: '75 - 85%' },
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
      { characteristic: 'pH', value: '4.5 - 5.0' },
      { characteristic: 'Total Nitrogen', value: '1-2%' },
      { characteristic: 'Total P2O5', value: '1-2%' },
      { characteristic: 'Total K2O', value: '3-3.5%' },
      { characteristic: 'Organic Matter', value: '10 - 20%' },
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
      { characteristic: 'Viable Microbial Count', value: '1 x 10^8 - 1 x 10^9 CFU/g or ml' },
      { characteristic: 'pH', value: '6.0 - 7.5' },
      { characteristic: 'Moisture Content', value: '< 10% (powder) / 90-95% (liquid)' },
      { characteristic: 'Shelf Life', value: '12 months (sealed, cool storage)' },
    ],
  };

  return (
    <main className="bg-white">
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/new_products.jpeg"
            alt="Lush agricultural landscape showing healthy crops."
            fill
            className="object-cover"
            style={{ objectPosition: 'center 65%' }}
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
        <div className="relative z-20 px-4 max-w-5xl mx-auto mt-32 md:mt-40 lg:mt-48">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9)' }}>
            Our Agricultural Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.9)' }}>
            Explore our innovative, eco-friendly products designed to enhance soil health and boost crop vitality.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-gray-200">
          <ProductSection
            imageSrc="/photos/product/product1.1.jpeg"
            altText="Bags of Nano Avo Magic Powder Fertilizer"
            title="Nano Avo Magic - Powder"
            subtitle="Innovative Solid Fertilizer for Long-Term Soil Health"
            overview={powderFertilizer.overview}
            benefits={powderFertilizer.benefits}
            tableData={powderFertilizer.data}
            tableTitle="Nutrition Value (Powder)"
          />
          
          <ProductSection
            imageSrc="/photos/product/product2.1.jpeg"
            altText="Bottles of Nano Avo Magic Liquid Fertilizer"
            title="Nano Avo Magic - Liquid"
            subtitle="Premium Bio-Organic Liquid Fertilizer for Healthy Crops"
            overview={liquidFertilizer.overview}
            benefits={liquidFertilizer.benefits}
            tableData={liquidFertilizer.data}
            tableTitle="Nutrition Value (Liquid)"
            reverse={true}
          />

          <ProductSection
            imageSrc="/photos/product/product3.1.jpeg"
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

      <section className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-4 h-96">
              <div className="relative col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg">
                <Image src="/photos/Empowering-women-coffee-farmers-in-Ethiopia (1).jpg" alt="Women farmers harvesting coffee beans." fill className="object-cover" />
              </div>
              <div className="relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg">
                <Image src="/photos/b.jpg" alt="Hands holding seedlings" fill className="object-cover" />
              </div>
              <div className="relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg">
                <Image src="/photos/photo - D.png" alt="Harvesting fresh carrots from rich soil" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#39702E' }}>
                Committed to a Greener Future
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our commitment goes beyond products. We partner with farming communities to promote sustainable practices that enrich the soil, protect biodiversity, and ensure a prosperous future for generations to come.
              </p>
              <a href="/sustainability" className="mt-8 inline-block text-white px-8 py-3 font-semibold rounded-md shadow-md transition-transform transform hover:scale-105" style={{ backgroundColor: '#39702E' }}>
                Learn About Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;