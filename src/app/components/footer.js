import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// SVG Icon components for cleanliness
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>;

export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: '#39702E'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/photos/Untitled.jpeg"
                alt="BioGreen Logo" 
                width={72}
                height={72}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pioneering sustainable agriculture through innovative, plant-based fertilizers for a healthier planet.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon href="#"><FacebookIcon /></SocialIcon>
              <SocialIcon href="#"><TwitterIcon /></SocialIcon>
              <SocialIcon href="#"><LinkedInIcon /></SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Biogreen</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>              
              <li><Link href="/why-biogreen" className="text-gray-300 hover:text-white transition-colors">Why BioGreen</Link></li>
              <li><Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Our Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Nano Avo Magic – Powder</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Nano Avo Magic – Liquid</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Microbial Biopesticide</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@biogreenplc.com" className="text-gray-300 hover:text-white transition-colors">info@biogreenplc.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div className="text-gray-300">
                  <span className="block">Africa: +251 90 058 9365</span>
                  <span className="block">Asia: +91 98735 33537</span>
                  <span className="block">UAE: +971 55 226 8150</span>
                  <span className="block">North America: +1 (908) 900-8422</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 py-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} BioGreen PLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}