import { FiHeart, FiShoppingCart } from 'react-icons/fi';

interface ProductInfoProps {
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  description: string;
  isFavorite: boolean;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
}

const ProductInfo = ({
  name,
  brand,
  price,
  oldPrice,
  description,
  isFavorite,
  onAddToCart,
  onToggleFavorite
}: ProductInfoProps) => {
  return (
    <div className="lg:w-1/2 lg:pl-8">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <div className="text-gray-600 mb-4">{brand}</div>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-bold text-orange-500">
          ₺{price.toLocaleString()}
        </span>
        {oldPrice && (
          <span className="text-xl text-gray-500 line-through">
            ₺{oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-8">{description}</p>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={onAddToCart}
          className="flex-1 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          <FiShoppingCart size={20} />
          <span>Sepete Ekle</span>
        </button>
        <button 
          onClick={onToggleFavorite}
          className={`p-3 rounded-lg transition-colors ${
            isFavorite 
              ? 'text-red-500 hover:bg-red-50' 
              : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <FiHeart size={24} className={isFavorite ? 'fill-current' : ''} />
        </button>
      </div>

      <div className="space-y-4 text-sm text-gray-600">
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
  );
};

export default ProductInfo; 