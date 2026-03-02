'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-end justify-start text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/about_cover.jpg"
            alt="Restoring the Earth with Regenerative Organic Farming"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            priority
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 px-8 sm:px-12 lg:px-20 pb-12 max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Restoring the Earth with Regenerative Organic Farming
          </h1>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-16" style={{ backgroundColor: '#d4e8cd' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Quote Block */}
            <div className="md:w-3/5">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <div className="text-5xl font-serif text-gray-300 leading-none mb-4">&ldquo;</div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  At Bio Green Fertilizer, our vision goes beyond organic production — we are committed to Regenerative Organic agriculture that restores soil health, strengthens ecosystems, and secures the future of farming. By converting avocado by-products into plant-based fertilizers, we replace harmful chemical inputs while actively regenerating the land. Our mission is simple: nourish the soil, empower farmers, and protect the planet for future generations. With innovation, integrity, and responsibility at our core, we are building a resilient and sustainable agricultural future.
                </p>
              </div>
            </div>
            {/* Chairman Image */}
            <div className="md:w-2/5 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/photos/mr_arvind_jain.jpg"
                  alt="Mr. Arvind Jain - Chairman"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 text-gray-800 text-xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '600' }}>Mr. Arvind Jain</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-0 overflow-hidden" style={{ backgroundColor: '#eef6e9' }}>
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Image - Full width of left area */}
            <div className="md:w-1/2 w-full">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/photos/about_second.jpg"
                  alt="Bio Green agricultural operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Right Content - Centered vertically and padded */}
            <div className="md:w-1/2 flex items-center bg-[#eef6e9]">
              <div className="px-8 sm:px-12 md:pl-16 lg:pl-24 py-12 md:py-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#39702E' }}>WHO WE ARE ?</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Bio Green is an agricultural solutions company advancing organic and regenerative farming. With strong expertise in soil science and plant nutrition, we deliver practical, sustainable solutions tailored to modern farming needs.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our operations are based in Jimma, Ethiopia; at one of East Africa&apos;s largest organic fertilizer facilities spanning 50,000 square meters. This advanced production center enables large-scale manufacturing of high-quality, plant-based fertilizers for regional and international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-16" style={{ backgroundColor: '#d4e8cd' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Vision */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/photos/icon_vision.png"
                    alt="Our Vision icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#39702E' }}>Our Vision</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                We envision a world where agriculture is productive, sustainable, and regenerative—restoring soils, empowering farmers, and protecting the planet for generations to come.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/photos/icon_mission.png"
                    alt="Our Mission icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#39702E' }}>Our Mission</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Our mission is to nourish the world organically by transforming natural by-products into high-quality plant-based fertilizers that enrich soil health, increase yields, and support regenerative farming while reducing chemical dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f1f7ed' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Core Values</h2>
          <div className="bg-white rounded-2xl shadow-md p-10 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              At Bio Green, our values are rooted in sustainability, innovation, and integrity. Bio put farmers at the heart of everything we do, foster collaboration with communities, and uphold our responsibility as stewards of the land—ensuring agriculture not only thrives today but regenerates and sustains fertility for generations to come.
            </p>
            <div className="flex justify-center">
              <div className="relative w-40 h-40 md:w-52 md:h-52">
                <Image
                  src="/photos/icon_corevalue.png"
                  alt="Core values icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;