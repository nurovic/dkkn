import { useQuery } from "@tanstack/react-query";
import { GetProductList } from "../service/ProductService";
import { ProductList } from "../types/product";
import { useProductFilters } from "../store/Product";

const defaultPagination = {
  hasMore: false,
  limit: 20,
  page: 1,
  totalPages: 1,
  total: 0,
};

export const useProducts = () => {
    const { filters = {} } = useProductFilters();
  const query = useQuery<ProductList, Error>({
    queryKey: ["products",filters],
    queryFn: () => GetProductList(filters),
    select: (data) => ({
      products: data?.products || [],
      pagination: data?.pagination || defaultPagination,
    }),
    staleTime: 5000,
    placeholderData: (previousData) => previousData ?? { products: [], pagination: defaultPagination },

  });

  return {
    ...query,
    data: query.data ?? { products: [], pagination: defaultPagination },
  };
};
