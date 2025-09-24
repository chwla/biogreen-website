import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-16 h-16">
              <Image 
                src="/photos/transparent_logo.png" 
                alt="Company Logo" 
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="text-sm leading-relaxed max-w-xs">
            <p>
              In order to feed the ever-increasing population of the world 
              we live in, there is a continuous pressure on the fertilizer 
              manufacturers to improve the efficiency of fertilizers and 
              gain higher crop yields.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-6">
            {/* Telegram */}
            <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 8.16l-1.44 6.84c-.12.48-.48.6-.96.36l-2.64-1.92-1.44 1.44c-.12.12-.24.24-.48.24l.24-2.4L16.8 8.4c.24-.24-.12-.36-.48-.12L9.6 12.96l-2.76-.84c-.6-.24-.6-.6.12-.84L21.6 7.2c.48-.24.96.12.72.96z"/>
              </svg>
            </div>
            
            {/* YouTube */}
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            
            {/* Twitter */}
            <div className="w-8 h-8 bg-blue-400 rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            
            {/* Facebook */}
            <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">QUICK LINKS</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-green-200 transition-colors">- HOME</Link></li>
            <li><Link href="/about" className="hover:text-green-200 transition-colors">- ABOUT NAQ GLOBAL</Link></li>
            <li><Link href="/services" className="hover:text-green-200 transition-colors">- SERVICES</Link></li>
            <li><Link href="/why-us" className="hover:text-green-200 transition-colors">- WHY NAQ GLOBAL</Link></li>
            <li><Link href="/sustainability" className="hover:text-green-200 transition-colors">- SUSTAINABILITY</Link></li>
            <li><Link href="/contact" className="hover:text-green-200 transition-colors">- CONTACT US</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">PRODUCTS</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products/fertilizers" className="hover:text-green-200 transition-colors">- Fertilizers</Link></li>
            <li><Link href="/products/filter-aid" className="hover:text-green-200 transition-colors">- Filter Aid Powder</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">CONTACT</h3>
          <div className="bg-green-400 bg-opacity-60 px-4 py-2 rounded">
            <span className="text-sm font-medium">ETHIOPIA : +251 955000009</span>
          </div>
        </div>
      </div>
    </footer>
  );
}