import React from 'react';
import { Star, ArrowRight, Book, Monitor, Gamepad2, User } from 'lucide-react';
import type { Product } from '../App';

interface HomepageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigateToCheckout: () => void;
  navigateTo?: (page: 'home' | 'about' | 'checkout') => void;
}

const Homepage: React.FC<HomepageProps> = ({ products, onAddToCart, onNavigateToCheckout, navigateTo }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  const getProductIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <Gamepad2 className="w-8 h-8" />;
      case 'ebook':
        return <Book className="w-8 h-8" />;
      case 'website':
        return <Monitor className="w-8 h-8" />;
      default:
        return <Star className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CrowdFeatured
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Platform Digital untuk Pengembangan Skill & Produktivitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={(e) => {
                  e.currentTarget.classList.add('opacity-75');
                  setTimeout(() => {
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    e.currentTarget.classList.remove('opacity-75');
                  }, 300);
                }} 
                className="btn-secondary px-8 py-3 rounded-lg font-semibold"
              >
                Jelajahi Produk
              </button>
              <button 
                onClick={(e) => {
                  e.currentTarget.classList.add('opacity-75');
                  setTimeout(() => {
                    if (navigateTo) {
                      navigateTo('about');
                    } else {
                      window.location.href = '/about';
                    }
                  }, 400);
                }} 
                className="btn-primary px-8 py-3 rounded-lg font-semibold btn-animate-pulse"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Digital Terbaik
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tingkatkan skill dan produktivitas Anda dengan produk digital berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-6 text-white">
                    {getProductIcon(product.type)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">
                      {formatPrice(product.price)}
                    </div>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center"
                    >
                      Tambah
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Belajar Anda?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Bergabunglah dengan ribuan learner yang telah merasakan manfaat produk digital kami
          </p>
          <button
            onClick={onNavigateToCheckout}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih CrowdFeatured?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Setiap produk telah melalui proses kurasi ketat untuk memastikan kualitas terbaik
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Akses Selamanya</h3>
              <p className="text-gray-600">
                Sekali beli, akses produk digital selamanya dengan update berkala
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 mx-auto">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support Terbaik</h3>
              <p className="text-gray-600">
                Tim support yang responsif siap membantu Anda 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;