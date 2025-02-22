import service from "./baseUrl";
import type { ProductFilters, ProductList } from "../types/product";

export const GetProductList = async (
  filters: ProductFilters
): Promise<ProductList> => {
  let url: string = "/products";

  if (filters?.page) {
    url += `?page=${filters.page}`;
  }

  if (filters?.category) {
    url += `&category=${filters.category}`;
  }

  const response = await service.get(url);
  const products: ProductList = response.data;

  return {
    products: products.products || [],
    pagination: products.pagination
  };
};
