import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  onAddToCart: (_id: string) => void;
  onAddToFavorites: (_id: string) => void;
}

const ProductCard = ({ 
  _id, 
  name, 
  price, 
  onAddToCart, 
  onAddToFavorites 
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <Link to={`/products/${_id}`} className="relative block">
        {
          /*
          <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
          */
        }
        <button 
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white text-gray-600 hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            onAddToFavorites(_id);
          }}
        >
          <FiHeart size={20} />
        </button>
        {
          /*    
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium">
            Hızlı Bakış
          </button>
        </div>
          */
        }
      </Link>
      <div className="p-4">
        <h3 className="font-medium mb-1 line-clamp-2">{name}</h3>
          {
            /*  
        <div className="text-sm text-gray-500 mb-2"></div>
          */
          }
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-orange-500">₺{price.toLocaleString()}</span>
        </div>
        <button 
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(_id);
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 