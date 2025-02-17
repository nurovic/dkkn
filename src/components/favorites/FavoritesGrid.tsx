import ProductCard from '../ui/ProductCard';
import { FavoriteItem } from '../../types/favorite';

interface FavoritesGridProps {
  favorites: FavoriteItem[];
  onRemoveFromFavorites: (id: number) => void;
  onAddToCart: (id: number) => void;
}

const FavoritesGrid = ({ favorites, onRemoveFromFavorites, onAddToCart }: FavoritesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {favorites.map(item => (
        <ProductCard
          key={item.id}
          {...item}
          isFavorite={true}
          onAddToCart={onAddToCart}
          onToggleFavorite={onRemoveFromFavorites}
        />
      ))}
    </div>
  );
};

export default FavoritesGrid; 