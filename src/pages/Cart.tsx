import { useState } from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'iPhone 14 Pro Max 256GB',
      price: 32999,
      image: 'https://picsum.photos/200/200?random=1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'MacBook Pro M2 512GB',
      price: 42999,
      image: 'https://picsum.photos/200/200?random=2',
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id: number, type: 'increase' | 'decrease') => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: type === 'increase' 
              ? item.quantity + 1 
              : Math.max(1, item.quantity - 1)
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sepetiniz Boş</h2>
          <p className="text-gray-600 mb-8">
            Sepetinizde ürün bulunmamaktadır. Alışverişe başlamak için ürünlerimize göz atın.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Alışveriş Sepeti</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm">
            {cartItems.map(item => (
              <div key={item.id} className="p-4 border-b last:border-b-0">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <div className="text-lg font-bold text-orange-500">
                      ₺{item.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <button 
                        className="p-2 hover:bg-gray-100"
                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                        disabled={item.quantity === 1}
                      >
                        <FiMinus size={20} />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button 
                        className="p-2 hover:bg-gray-100"
                        onClick={() => handleQuantityChange(item.id, 'increase')}
                      >
                        <FiPlus size={20} />
                      </button>
                    </div>
                    <button 
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
            <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Ara Toplam</span>
                <span>₺{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span>₺{calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Alışverişi Tamamla
            </button>

            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔄</span>
                <span>30 Gün İade Garantisi</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Güvenli Alışveriş</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 