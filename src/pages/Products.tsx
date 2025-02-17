import ProductFilters from '../components/products/ProductFilters';
import { useQuery } from "@tanstack/react-query";
import { GetProductList } from '../service/ProductService';
import ProductGrid from '../components/products/ProductGrid';
import Pagination from '../components/ui/Pagination';
const Products = () => {

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => GetProductList(),
  });
  console.log(products);
  
  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  const handleAddToFavorites = (id: string) => {
    console.log(`Added to favorites: ${id}`);
  };

  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <ProductFilters />
        {
          
            <div className="flex-1">
          <ProductGrid 
            products={products?.products}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
            />

          <Pagination 
            pagination={products?.pagination}
            onPageChange={handlePageChange}
            />
        </div>
            }
      </div>
    </div>
  );
};

export default Products; 