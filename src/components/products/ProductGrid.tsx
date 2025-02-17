import { Product } from '../../types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (_id: string) => void;
  onAddToFavorites: (_id: string) => void;
}

const ProductGrid = ({ products, onAddToCart, onAddToFavorites }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 