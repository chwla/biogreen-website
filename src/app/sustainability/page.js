import Image from 'next/image';
import React from 'react';

const IconCard = ({ iconSrc, title }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 flex flex-col items-center text-center h-full">
    <div className="relative w-16 h-16 mb-4">
      <Image src={iconSrc} alt={title} fill className="object-contain" sizes="64px" quality={80} />
    </div>
    <p className="text-xs text-gray-600 font-medium leading-relaxed">{title}</p>
  </div>
);

const SustainabilityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[580px] flex items-end justify-start text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/sustainability_hero.jpeg"
            alt="Regenerating Soil: Restoring Balance. Redefining Fertilizers."
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMI/8QAHhAAAQQCAwEAAAAAAAAAAAAAAgABAxEEITFBYRL/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAMAwEAAhEDEQA/ANFZGfj4OJyMfJRxb0dQv+oiUbOtln//2Q=="
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 px-8 sm:px-12 lg:px-20 pb-14 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Regenerating Soil:<br />Restoring Balance.<br />Redefining Fertilizers.
          </h1>
        </div>
      </section>

      {/* Beyond Fertilizers Section */}
      <section className="py-16" style={{ backgroundColor: '#f1f7ed' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl p-10 md:p-14 text-center" style={{ backgroundColor: '#d4e8cd' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">BEYOND FERTILIZERS. GROWING THE FUTURE.</h2>
            <p className="text-gray-700 text-base mb-2">We are not just manufacturing fertilizers.</p>
            <p className="text-gray-700 text-base">We are cultivating a sustainable future — season after season.</p>
          </div>
        </div>
      </section>

      {/* From Waste to Wealth & Feeding the Future */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* From Waste to Wealth */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-6">
                <Image src="/photos/sust_icon1.png" alt="Circular Model Icon" fill className="object-contain" sizes="64px" quality={80} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-4 uppercase tracking-wider">FROM WASTE TO WEALTH: A CIRCULAR MODEL</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every year, tons of avocado and coffee by-products are discarded. We convert this organic biomass into high-performance, plant-based fertilizers — closing the loop between agriculture and sustainability.
              </p>
            </div>

            {/* Feeding the Future */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-6">
                <Image src="/photos/sust_icon2.png" alt="Responsibility Icon" fill className="object-contain" sizes="64px" quality={80} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-4 uppercase tracking-wider">FEEDING THE FUTURE RESPONSIBLY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With the global population rising, food security must go hand-in-hand with environmental responsibility. BioGreen stands at the intersection of innovation and regeneration — delivering organic fertilizers that nurture crops while protecting the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Image + Growing Prosperity */}
      <section className="py-16" style={{ backgroundColor: '#d4e8cd' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="md:w-2/5 w-full">
              <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/photos/sustainability_harvest.jpeg"
                  alt="Harvest supporting organic farming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
            {/* Text */}
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 leading-tight">
                GROWING PROSPERITY ORGANICALLY,<br /> SUSTAINING LIFE NATURALLY
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Sustainability is not a trend — it is our foundation. We are building a circular, climate-responsive fertilizer system that transforms agricultural waste into regenerative value for the soil, the farmer, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Farmers & Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Supporting Farmers &amp; Communities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <IconCard
              iconSrc="/photos/sust_icon3.png"
              title="Promoting certified organic and regenerative farming practices"
            />
            <IconCard
              iconSrc="/photos/sust_icon4.png"
              title="Supporting smallholder and home growers with sustainable input solutions"
            />
            <IconCard
              iconSrc="/photos/sust_icon5.png"
              title="Crafted in Ethiopia from upcycled avocado and coffee by-products"
            />
            <IconCard
              iconSrc="/photos/sust_icon6.png"
              title="Converting nutrient-rich waste into certified organic fertilizers"
            />
            <IconCard
              iconSrc="/photos/sust_icon7.png"
              title="Empowering a majority-women workforce through fair employment and skill development"
            />
            <IconCard
              iconSrc="/photos/sust_icon8.png"
              title="Strengthening long-term agricultural resilience and rural livelihoods"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SustainabilityPage;