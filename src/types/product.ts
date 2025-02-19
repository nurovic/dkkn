export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  createdAt: string;
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
