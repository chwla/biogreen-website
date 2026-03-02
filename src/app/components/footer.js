import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1f441b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Explore */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Our Products */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Our Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">NANO AVO MAGIC</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">AVO VIVO</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">BIOSHIELD</Link></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="mailto:info@biogreenplc.com" className="hover:text-white transition-colors">info@biogreenplc.com</a>
              </li>
              <li>Africa: +251 90 058 9365</li>
              <li>Asia: +91 98735 33537</li>
              <li>UAE: +971 55 226 8150</li>
              <li>Americas: +1 (908) 900-8422</li>
            </ul>
          </div>

          {/* Column 4: Bio Green */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Bio Green</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Turning Avocado & Coffee By-Products into Powerful Plant Nutrition. Sustainable plant-based fertilizers supporting regenerative agriculture.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 py-6 text-center text-sm text-gray-300">
          <p>&copy; 2026 Bio Green Fertilizer and Gas Manufacturing PLC | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}