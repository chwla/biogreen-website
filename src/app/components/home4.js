import React from 'react';

const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col">
    {/* Quote icon */}
    <div className="text-5xl font-serif text-[#39702E] opacity-30 leading-none mb-4">&ldquo;</div>
    <p className="text-gray-700 leading-relaxed text-base flex-grow mb-6">
      {text}
    </p>
    {/* Stars */}
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {/* Author */}
    <div className="flex items-center gap-4">
      <div>
        <h3 className="font-bold text-gray-900 text-base">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dawit",
      role: "Tomato Farmer, Ethiopia",
      initial: "D",
      color: "#39702E",
      text: "After I started using Bio Green Fertilizer, I noticed a real change. My tomatoes are bigger, healthier, and more even in size. My harvest has increased, and the soil keeps getting better each season. I’m very happy with the results."
    },
    {
      name: "Tesfaye",
      role: "Avocado Farmer, Ethiopia",
      initial: "T",
      color: "#5B9A4A",
      text: "I can honestly see the difference on my avocado farm. The trees are stronger and greener, and the fruits are larger and heavier. My overall harvest has improved, and the soil feels much healthier too. I’m truly satisfied and will keep using it."
    },
    {
      name: "Selam",
      role: "Home Gardener, Ethiopia",
      initial: "S",
      color: "#2D5A22",
      text: "I use Bio Green Fertilizer in my home garden, and it has made a big difference. My vegetables grow faster, look greener, and even taste better. The soil is softer and healthier. I’m really happy with how my garden looks now."
    },
    {
      name: "Kaleb",
      role: "Flower Grower, Ethiopia",
      initial: "K",
      color: "#4A7C3F",
      text: "As a flower grower, quality is very important to me. Since using this fertilizer, my plants are healthier, the colors are brighter, and the flowers last longer. My customers are happier, and my sales have improved. I’m very pleased with the results."
    }
  ];

  return (
    <div className="py-20 px-6 sm:px-12" style={{ backgroundColor: '#f0f7ee' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-[#39702E] uppercase mb-3">WHAT OUR CLIENTS SAY</p>
          <h2
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            TESTIMONIALS
          </h2>
          <div className="w-16 h-1 bg-[#39702E] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              text={t.text}
              initial={t.initial}
              color={t.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}