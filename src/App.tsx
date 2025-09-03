import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';

export interface Product {
  id: string;
  name: string;
  price: number;
  type: 'course' | 'ebook' | 'website';
  description: string;
  features: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'checkout'>('home');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  // Handle URL routing
  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      if (path === '/homepage') {
        setCurrentPage('home');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/checkout') {
        setCurrentPage('checkout');
      }
    };
    
    handleRouting();
    window.addEventListener('popstate', handleRouting);
    
    return () => {
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  const products: Product[] = [
    {
      id: '1',
      name: 'Kursus Roblox Studio & UI/UX',
      price: 250000,
      type: 'course',
      description: 'Pelajari cara membuat game di Roblox Studio dan desain UI/UX yang menarik',
      features: ['Video pembelajaran lengkap', 'Akses seumur hidup', 'Sertifikat completion', 'Community support']
    },
    {
      id: '2',
      name: '5 Cara agar lebih produktif dalam kehidupan sehari hari',
      price: 100000,
      type: 'ebook',
      description: 'E-book panduan lengkap untuk meningkatkan produktivitas harian Anda',
      features: ['PDF format', 'Tips praktis', 'Checklist harian', 'Bonus template']
    },
    {
      id: '3',
      name: 'Website Custom',
      price: 150000,
      type: 'website',
      description: 'Pembuatan website custom sesuai kebutuhan bisnis Anda',
      features: ['Design responsive', 'Domain gratis 1 tahun', 'Hosting included', 'Maintenance 3 bulan']
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  
  // Function to navigate with URL update
  const navigateTo = (page: 'home' | 'about' | 'checkout') => {
    let url = '/';
    if (page === 'home') url = '/homepage';
    else if (page === 'about') url = '/about';
    else if (page === 'checkout') url = '/checkout';
    
    window.history.pushState({}, '', url);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentPage={currentPage}
        navigateTo={navigateTo}
        cartItemsCount={cartItems.length}
      />
      
      {currentPage === 'home' && (
        <Homepage 
          products={products}
          onAddToCart={addToCart}
          onNavigateToCheckout={() => navigateTo('checkout')}
          navigateTo={navigateTo}
        />
      )}
      
      {currentPage === 'about' && (
        <AboutPage />
      )}
      
      {currentPage === 'checkout' && (
        <CheckoutPage 
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          totalPrice={getTotalPrice()}
          onBack={() => navigateTo('home')}
        />
      )}
    </div>
  );
}

export default App;