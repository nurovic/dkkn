import Pagination from "../ui/Pagination";
import { useProducts } from "../../hooks/useProducts";
import ProductGrid from '../../components/favorites/FavoritesGrid';

export default function ProductList() {
  console.log("ProductList Rerendered");
  const { data, isLoading, error } = useProducts();

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
        />
      )}
      <Pagination
        pagination={data?.pagination}
      />
    </div>
  );
}
