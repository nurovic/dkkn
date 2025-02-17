import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  isFavorite?: boolean;
  onAddToCart: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

const ProductCard = ({
  id,
  name,
  brand,
  price,
  oldPrice,
  image,
  isFavorite,
  onAddToCart,
  onToggleFavorite
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <Link to={`/products/${id}`} className="block relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="font-medium mb-1 line-clamp-2 hover:text-orange-500 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="text-sm text-gray-500 mb-2">{brand}</div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-orange-500">
            ₺{price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₺{oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => onAddToCart(id)}
            className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            <FiShoppingCart size={18} />
            <span>Sepete Ekle</span>
          </button>
          <button 
            onClick={() => onToggleFavorite(id)}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite 
                ? 'text-red-500 hover:bg-red-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <FiHeart size={24} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 