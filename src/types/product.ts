import { Category } from "./category";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  inStock: boolean;
  createdAt: string;
  slug: string;
  __v: number;
  isFavorite: boolean;
}

export interface Pagination {
  hasMore: boolean;
  limit: number;
  page: number;
  totalPages: number;
  total: number;
}

export interface ProductList {
  products: Product[] | [];
  pagination: Pagination;
}
export interface ProductFavorite {
  products: Product[] | [];

}

export interface ProductFilters {
  keyword?: string;
  category?: string;
  page?: number;
  limit?: number;
  inStock?: boolean;
}
