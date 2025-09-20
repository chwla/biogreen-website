import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 7rem)' }}>
      <img 
        src={'/photos/hero.png'} 
        className="w-full h-full object-cover"
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-6xl">
          {/* Main Heading */}
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
          
          {/* Subheading */}
          <p 
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase leading-tight" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '0.15em'
            }}
          >
            SUSTAINABLE FERTILIZER PROCESS & QUALITY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;