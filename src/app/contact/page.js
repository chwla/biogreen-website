'use client';

import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/Radio-and-Rice-2.jpg"
            alt="A farmer in a field on the phone, representing global contact and support."
            fill
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            We&apos;re here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            
            {/* Contact Details Section */}
            <div className="w-full max-w-2xl space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#39702E' }}>
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href="mailto:info@biogreenplc.com" className="text-lg hover:underline">info@biogreenplc.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#39702E' }}>
                  Regional Offices
                </h3>
                <div className="space-y-5 text-gray-700">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 mt-1 mr-3" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                      <p className="text-lg font-semibold">North America</p>
                      <p className="text-md text-gray-600">+1 (908) 900-8422</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 mt-1 mr-3" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                      <p className="text-lg font-semibold">UAE</p>
                      <p className="text-md text-gray-600">+971 55 226 8150</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 mt-1 mr-3" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                      <p className="text-lg font-semibold">Asia</p>
                      <p className="text-md text-gray-600">+91 98735 33537</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 mt-1 mr-3" style={{ color: '#39702E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                      <p className="text-lg font-semibold">Africa</p>
                      <p className="text-md text-gray-600">+251 90 058 9365</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;