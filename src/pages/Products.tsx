import ProductFilters from "../components/products/ProductFilters";
import ProductList from "../components/products/ProductList";

const Products: React.FC = () => {
console.log("Products Page Rerendered");
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <ProductFilters />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
