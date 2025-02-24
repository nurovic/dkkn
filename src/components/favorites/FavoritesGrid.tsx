import { Product } from '../../types/product';
import ProductCard from '../ui/ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 