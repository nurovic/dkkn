import { useState } from 'react';
import { FavoriteItem } from '../types/favorite';
import EmptyFavorites from '../components/favorites/EmptyFavorites';
import FavoritesHeader from '../components/favorites/FavoritesHeader';
import FavoritesGrid from '../components/favorites/FavoritesGrid';

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: 1,
      name: 'iPhone 14 Pro Max 256GB',
      brand: 'Apple',
      price: 32999,
      oldPrice: 35999,
      image: 'https://picsum.photos/400/400?random=1',
    },
    {
      id: 2,
      name: 'MacBook Pro M2 512GB',
      brand: 'Apple',
      price: 42999,
      oldPrice: 45999,
      image: 'https://picsum.photos/400/400?random=2',
    },
    {
      id: 3,
      name: 'AirPods Pro 2. Nesil',
      brand: 'Apple',
      price: 5999,
      oldPrice: 6499,
      image: 'https://picsum.photos/400/400?random=3',
    },
  ]);

  const handleRemoveFromFavorites = (id: number) => {
    setFavorites(items => items.filter(item => item.id !== id));
  };

  const handleAddToCart = (id: number) => {
    console.log(`Added to cart: ${id}`);
    // Sepete ekleme işlemi
  };

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <EmptyFavorites />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FavoritesHeader count={favorites.length} />
      <FavoritesGrid
        favorites={favorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Favorites; 