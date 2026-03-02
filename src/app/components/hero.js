import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
      <Image
        src="/photos/home_hero.jpg"
        alt="Sustainable plant based fertilizers designed to regenerate soil and support organic farming"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 40%' }}
        priority
        sizes="100vw"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAYEQEBAQEBAAAAAAAAAAAAAAABAgADEf/aAAwDAQACEQMRAD8AtaijXd1WlxuBBaQhIKUurUpRPZ4AAH0nal0pUmW3BgMP/9k="
      />

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 z-10 flex items-end justify-start pb-16 md:pb-24 lg:pb-32">
        <div className="text-white px-8 sm:px-12 lg:px-20 max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
            }}
          >
            Sustainable, plant based fertilizers designed to regenerate soil and support organic farming.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
