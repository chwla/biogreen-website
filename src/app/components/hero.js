import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
      <Image 
        src="/photos/new_hero.jpeg" 
        alt="BioGreen sustainable fertilizer hero banner"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 40%' }}
        priority
        sizes="100vw"
        quality={100}
      />
      
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-8 md:pt-0">
        <div className="text-center text-white px-4 max-w-6xl">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 md:mb-6 tracking-wide uppercase" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              letterSpacing: '0.1em'
            }}
          >
            BIO GREEN
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest uppercase leading-tight" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              letterSpacing: '0.15em'
            }}
          >
            ADVANCING ORGANIC AGRICULTURE THROUGH SCIENCE, SUSTAINABILITY AND SINCERITY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;