import { useState } from 'react';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import Pagination from '../components/ui/Pagination';
import { Product } from '../types/product';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `iPhone ${i + 1} Pro Max 256GB Mavi`,
    brand: 'Apple',
    price: 32999,
    oldPrice: 35999,
    image: `https://picsum.photos/400/400?random=${i + 1}`,
  }));

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (id: number) => {
    console.log(`Added to cart: ${id}`);
  };

  const handleAddToFavorites = (id: number) => {
    console.log(`Added to favorites: ${id}`);
  };


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <ProductFilters />
        
        <div className="flex-1">
          <ProductGrid 
            products={paginatedProducts}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
          />

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products; 