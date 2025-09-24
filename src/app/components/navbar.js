'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm border-b border-gray-200" style={{ backgroundColor: '#FEFEFF' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMobileMenu}>
              <img 
                src="/photos/logo.png" 
                alt="BioGreen Logo" 
                className="h-16 sm:h-20 lg:h-28 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              ABOUT BIOGREEN
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              PRODUCTS
            </Link>
            <Link 
              href="/why-biogreen" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              WHY BIOGREEN
            </Link>
            <Link 
              href="/sustainability" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              SUSTAINABILITY
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-600 font-normal text-sm xl:text-base tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-green-600 focus:outline-none focus:text-green-600 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {/* Animated hamburger icon */}
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-200 shadow-lg" style={{ backgroundColor: '#FEFEFF' }}>
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            ABOUT BIOGREEN
          </Link>
          <Link 
            href="/products" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            PRODUCTS
          </Link>
          <Link 
            href="/why-biogreen" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            WHY BIOGREEN
          </Link>
          <Link 
            href="/sustainability" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            SUSTAINABILITY
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-normal tracking-wide transition-colors duration-200 rounded-md"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;