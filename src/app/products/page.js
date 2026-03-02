import Image from 'next/image';
import React from 'react';

const ProductSection = ({
  imageSrc,
  altText,
  title,
  subtitle,
  overview,
  benefits,
  recommended,
  reverse = false,
  bgColor,
}) => (
  <section className="py-12 md:py-16 border-b border-gray-100" style={bgColor ? { backgroundColor: bgColor } : {}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-10 md:gap-16`}>
        {/* Product Image */}
        <div className="lg:w-5/12 w-full flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={imageSrc}
              alt={altText}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="lg:w-7/12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#39702E' }}>{title}</h2>
          <p className="mt-1 text-base text-gray-500 italic">{subtitle}</p>

          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed text-sm">{overview}</p>
          </div>

          {benefits && benefits.length > 0 && (
            <div className="mt-6">
              <p className="font-semibold text-gray-800 mb-3 text-sm">Key Features:</p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#39702E' }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="ml-1 text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommended && (
            <p className="mt-5 text-sm text-gray-600">
              <span className="font-semibold">Recommended for: </span>{recommended}
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);

const ProductsPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-end justify-start text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/products_cover.jpg"
            alt="Innovative. Plant-Based. Regenerative."
            fill
            className="object-cover"
            style={{ objectPosition: 'center 50%' }}
            priority
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="relative z-20 px-8 sm:px-12 lg:px-20 pb-14 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }}>
            Innovative. Plant-Based. Regenerative.
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-medium" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
            Eco-friendly solutions for healthier soil and stronger harvests.
          </p>
        </div>
      </section>

      <ProductSection
        imageSrc="/photos/product_nano_avo_magic.png"
        altText="Nano Avo Magic product"
        title="NANO AVO MAGIC ®"
        subtitle="Advanced solid fertilizer for long- term soil health"
        overview="Nano Avo Magic® is a next-generation plant-based solid fertilizer designed to enrich soil structure, strengthen root systems, and promote long-lasting fertility."
        benefits={[
          'Improves soil health and structure',
          'Sterilized (Larva-free and pathogen-free)',
          'Stimulates organic matter and microbial activity',
          'Natural pest-repellent properties',
          'Heat-treated to eliminate pathogens and weed seeds',
        ]}
        recommended="Vegetables, Fruits, Flowers, Herbs, Horticultural crops"
      />

      <ProductSection
        imageSrc="/photos/product_avo_vivo.png"
        altText="Avo Vivo liquid organic nutrient supplement"
        title="AVO VIVO ®"
        subtitle="Liquid Organic Nutrient Supplement"
        overview="AVO VIVO® is a premium plant-based liquid nutrient designed to enhance crop vigor and stimulate microbial activity."
        benefits={[
          'Fast-acting liquid bioformulation',
          'Enhances plant vigor',
          'Promotes leaf growth & chlorophyll development',
          'Supports flowering & fruit setting',
          'Improves stress resistance',
        ]}
        recommended="Vegetables, Fruits, Cereals, Pulses, plantation crops"
        reverse={true}
        bgColor="#d4e8cd"
      />

      <ProductSection
        imageSrc="/photos/product_bio_shield.png"
        altText="Bio Shield biopesticide"
        title="Bio Shield ®"
        subtitle="Microbial Biopesticide & Biostimulant"
        overview="An advanced biological solution formulated with beneficial microbes to protect crops from pests and diseases."
        benefits={[
          'Chemical-free pest control',
          'Safe for pollinators and farmers',
          'Supports soil biodiversity',
          'Reduces pest/plant resistance',
          'Lowers long-term production costs',
        ]}
        recommended="Vegetables, Fruits, cereals, pulses, plantation crops"
      />
    </main>
  );
};

export default ProductsPage;