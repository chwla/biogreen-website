import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100dvh - var(--header-height, 5rem))' }}>
      <Image 
        src="/photos/hero2.jpeg" 
        alt="BioGreen sustainable fertilizer hero banner"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={100}
      />
      
      {/* THE FIX: Replaced Tailwind's opacity classes with a direct RGBA value */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
        <div className="text-center text-white px-4 max-w-6xl">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-wide uppercase" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '0.1em'
            }}
          >
            BIO GREEN
          </h1>
          <p 
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase leading-tight" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
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