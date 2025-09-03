import React, { useState } from 'react';
import { ArrowLeft, Trash2, CreditCard, Smartphone, Banknote } from 'lucide-react';
import type { Product } from '../App';

interface CheckoutPageProps {
  cartItems: Product[];
  onRemoveFromCart: (productId: string) => void;
  totalPrice: number;
  onBack: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
  cartItems, 
  onRemoveFromCart, 
  totalPrice, 
  onBack 
}) => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  const paymentMethods = [
    {
      category: 'E-Wallet',
      icon: Smartphone,
      methods: [
        { id: 'dana', name: 'DANA', logo: '💳' },
        { id: 'ovo', name: 'OVO', logo: '🟣' },
        { id: 'gopay', name: 'GoPay', logo: '🟢' },
        { id: 'shopeepay', name: 'ShopeePay', logo: '🧡' }
      ]
    },
    {
      category: 'Bank Transfer',
      icon: Banknote,
      methods: [
        { id: 'bca', name: 'Bank BCA', logo: '🔵' },
        { id: 'mandiri', name: 'Bank Mandiri', logo: '🟡' },
        { id: 'bni', name: 'Bank BNI', logo: '🟠' },
        { id: 'bri', name: 'Bank BRI', logo: '🔴' }
      ]
    },
    {
      category: 'Lainnya',
      icon: CreditCard,
      methods: [
        { id: 'qris', name: 'QRIS', logo: '📱' },
        { id: 'alfamart', name: 'Alfamart', logo: '🏪' }
      ]
    }
  ];

  const handleCheckout = () => {
    if (!selectedPayment || !customerInfo.name || !customerInfo.email) {
      alert('Mohon lengkapi semua data yang diperlukan');
      return;
    }
    
    alert('Terima kasih! Pesanan Anda sedang diproses. Anda akan menerima email konfirmasi segera.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Selesaikan pembelian Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Pembeli</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h2>
              
              {paymentMethods.map((category) => (
                <div key={category.category} className="mb-8 last:mb-0">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {category.methods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 ${
                          selectedPayment === method.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{method.logo}</div>
                        <div className="text-sm font-medium text-gray-900">{method.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Keranjang kosong</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                            {item.name}
                          </h3>
                          <p className="text-purple-600 font-semibold">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={!selectedPayment || !customerInfo.name || !customerInfo.email}
                      className="w-full btn-primary py-4 rounded-lg font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Bayar Sekarang
                    </button>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        Pembayaran aman dan terpercaya
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pembayaran Aman & Terpercaya</h3>
            <p className="text-gray-600 mb-6">
              Semua transaksi dilindungi dengan enkripsi SSL 256-bit dan sistem keamanan berlapis
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <span>🔒 SSL Encrypted</span>
              <span>🛡️ Secure Payment</span>
              <span>✅ Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;