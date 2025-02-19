import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import Pagination from "../components/ui/Pagination";
import { useProducts } from "../hooks/useProducts";

const Products: React.FC = () => {
  const { data, isLoading, error } = useProducts();

  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  const handleAddToFavorites = (id: string) => {
    console.log(`Added to favorites: ${id}`);
  };

  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <ProductFilters />
        <div className="flex-1">
          <ProductGrid
            products={data?.products}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
          />

          <Pagination
            pagination={data?.pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
