'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic submission — could be wired to a backend later
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-start text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/contact_cover.jpg"
            alt="Two farmers walking through an orchard, representing support for your farming journey"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAQMEAwEBAAAAAAAAAAAAAQACAwQFBhEhMUESUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAwDAQACEQMRAD8AstxW7VdRJFcbtTSwxnTmQU5aXH0bJOh+oiKsZSjZ/9k="
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 px-8 sm:px-12 lg:px-20 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Contact Us
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
            We&apos;re Here to Support<br />Your Farming Journey
          </h2>
          <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
            Have questions about our organic fertilizers, product recommendations, or partnership opportunities? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Phone */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-start gap-3 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ backgroundColor: '#f0f7ee' }}>
                <svg className="w-5 h-5" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-base">Phone</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium text-gray-700"></span> +251 95 500 0009</p>
              </div>
            </div>

            {/* Email */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-start gap-3 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ backgroundColor: '#f0f7ee' }}>
                <svg className="w-5 h-5" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-base">Email</h3>
              <a href="mailto:info@biogreenplc.com" className="text-sm text-gray-600 hover:underline">
                info@biogreenplc.com
              </a>
            </div>

            {/* Location */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-start gap-3 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ backgroundColor: '#f0f7ee' }}>
                <svg className="w-5 h-5" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-base">Location</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                REGION: OROMIA<br />
                SUB CITY: JIMMA<br />
                WOREDA: JIMMA TOWN<br />
                KEBELE: BUCHI BAKA<br />
                HOUSE: NEW<br />
                JIMMA INDUSTRIAL PARK, ETHIOPIA
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Tagline */}
      <section className="py-6 bg-gray-50 text-center text-gray-500 text-sm">
        Let&apos;s grow sustainably — together 🌱
      </section>
    </>
  );
};

export default ContactPage;