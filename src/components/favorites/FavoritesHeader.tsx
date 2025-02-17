import { Link } from 'react-router-dom';

interface FavoritesHeaderProps {
  count: number;
}

const FavoritesHeader = ({ count }: FavoritesHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold">Favorilerim ({count})</h1>
      <Link 
        to="/products"
        className="text-orange-500 hover:text-orange-600 font-medium"
      >
        Tüm Ürünlere Göz At
      </Link>
    </div>
  );
};

export default FavoritesHeader; 