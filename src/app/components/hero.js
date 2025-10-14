import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      <Image 
        src="/photos/new_hero.jpeg" 
        alt="BioGreen sustainable fertilizer hero banner"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
        priority
        sizes="100vw"
        quality={100}
      />
      
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-6xl">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 md:mb-6 tracking-wide uppercase" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              letterSpacing: '0.1em'
            }}
          >
            BIO GREEN
          </h1>
          <p 
            className="text-xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase leading-tight" 
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