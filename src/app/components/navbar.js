import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-sm border-b border-gray-200" style={{ backgroundColor: '#FEFEFF' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img 
                src="/photos/logo.png" 
                alt="BioGreen Logo" 
                className="h-28 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              ABOUT BIOGREEN
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              PRODUCTS
            </Link>
            <Link 
              href="/why-biogreen" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              WHY BIOGREEN
            </Link>
            <Link 
              href="/career" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              CAREER
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-600 font-normal text-base tracking-wide transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (you can expand this with state management) */}
      <div className="lg:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200" style={{ backgroundColor: '#FEFEFF' }}>
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            HOME
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            ABOUT BIOGREEN
          </Link>
          <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            PRODUCTS
          </Link>
          <Link href="/why-biogreen" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            WHY BIOGREEN
          </Link>
          <Link href="/career" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            CAREER
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-normal tracking-wide">
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;