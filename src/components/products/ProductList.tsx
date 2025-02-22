import ProductGrid from "./ProductGrid";
import Pagination from "../ui/Pagination";
import { useProducts } from "../../hooks/useProducts";
import { useFavoriteToggle } from "../../hooks/useFavorite";
import type { FavoriteToggleType } from "../../types/favorite";

import { useCallback } from "react";
export default function ProductList() {
    console.log("ProductList Rerendered");
  const { data, isLoading, error } = useProducts();
  const { mutate: toggleFavorite } = useFavoriteToggle();

  const handleAddToCart = useCallback((id: string) => {
    console.log(`Added to cart: ${id}`);

  }, []);

  const handleAddToFavorites = useCallback((id: string) => {
    console.log(`Added to favorites: ${id}`);
    const body:FavoriteToggleType = {
      userId:"67b9ce55e4b6942c756e2822",
      productId:id
      }
      toggleFavorite(body)
      console.log("body")
  }, []);

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
