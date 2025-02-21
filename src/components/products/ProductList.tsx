import ProductGrid from "./ProductGrid";
import Pagination from "../ui/Pagination";
import { useProducts } from "../../hooks/useProducts";

export default function ProductList() {
  const { data, isLoading, error } = useProducts();

    console.log("ProductList Rerendered");

  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  const handleAddToFavorites = (id: string) => {
    console.log(`Added to favorites: ${id}`);
  };

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="flex-1">
      {isLoading  ? (
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <ProductGrid
          products={data?.products}
          onAddToCart={handleAddToCart}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
      <Pagination
        pagination={data?.pagination}
      />
    </div>
  );
}
