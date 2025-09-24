'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutBiogreen() {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* About Biogreen Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-8">ABOUT BIOGREEN</h2>

          <div className="flex flex-wrap justify-center gap-8 items-start">
            {/* Who we are */}
            <Link href="/about/who-we-are" className="flex flex-col items-center w-80 h-96 bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-full mb-4 relative h-32">
                <Image
                  src="/photos/home3_1.png"
                  alt="Who we are section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Who we are</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed flex-1 overflow-hidden">
                Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking company dedicated to providing green technology solutions for the fertilizer and gas industries. The company leverages Ethiopian resources and international alliances with sustainable alternatives that are safe, effective, and efficient.
              </p>
            </Link>

            {/* What we do */}
            <Link href="/about/what-we-do" className="flex flex-col items-center w-80 h-96 bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-full mb-4 relative h-32">
                <Image
                  src="/photos/home3_2.png"
                  alt="What we do section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What we do</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed flex-1 overflow-hidden">
                Biogreen Fertilizer and Gas Manufacturing PLC provides green technology solutions for the fertilizer and gas industries by leveraging Ethiopian resources and international best practices to deliver safe, effective, and efficient alternatives.
              </p>
            </Link>

            {/* How do we do it */}
            <Link href="/about/how-we-do-it" className="flex flex-col items-center w-80 h-96 bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-full mb-4 relative h-32">
                <Image
                  src="/photos/home3_3.png"
                  alt="How we do it section image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How we do it</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed flex-1 overflow-hidden">
                Biogreen applies sustainable technology and strategic collaborations to improve fertilizer quality, reduce environmental impact, and optimize manufacturing efficiency.
              </p>
            </Link>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
            SUSTAINABILITY FOR THE ENTIRE FERTILIZER SUPPLY CHAIN
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The manufacturing and application of fertilizers have a significant environmental impact. NAQ Global focuses on the efficient use of natural resources to drive sustainability in the fertilizer quality improvement industry, thereby reducing the fertilizer carbon footprint. We continuously work toward more sustainable operations, offering products and services to decarbonize and mitigate environmental impacts across production and application stages.
            </p>

            <p>
              Over decades, NAQ Global&apos;s research and development teams have developed solutions to address various challenges in the fertilizer supply chain. Our motto, &quot;Fertilizer Quality Improvement,&quot; reflects our commitment to helping the industry produce high-efficiency fertilizers with minimal environmental impact. Quality issues can arise throughout manufacturing and distribution, and we provide sustainable solutions at every stage—from mining and production to storage and transport.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Green Technology for Fertilizer Quality Improvement</h3>
              <p>
                Our products are categorized according to different stages of fertilizer manufacturing to help you find the most effective solution. We are committed to delivering sustainable fertilizer quality improvement solutions and welcome inquiries about product customization and specialized services.
              </p>
            </div>

            <p className="mt-6">
              Fertilizers are essential to global food security. To feed the world&apos;s projected ten billion people by 2050, sustainable fertilizer innovation is crucial to improving food production and agricultural efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}