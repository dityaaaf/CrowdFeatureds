import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'checkout';
  navigateTo: (page: 'home' | 'about' | 'checkout') => void;
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo, cartItemsCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigateTo('home')}
            >
              CrowdFeatured
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow">
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => navigateTo('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Tentang
              </button>
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigateTo('checkout')}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <User className="w-6 h-6 text-gray-700" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <button
                onClick={() => {
                  navigateTo('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => {
                  navigateTo('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Tentang
              </button>
              <button
                onClick={() => {
                  navigateTo('checkout');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Keranjang ({cartItemsCount})
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;