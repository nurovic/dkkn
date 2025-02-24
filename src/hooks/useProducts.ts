import { useQuery } from "@tanstack/react-query";
import { GetProductList } from "../service/ProductService";
import { ProductList } from "../types/product";
import { useProductFilters } from "../store/Product";
import { useMemo } from "react";
const defaultPagination = {
  hasMore: false,
  limit: 20,
  page: 1,
  totalPages: 1,
  total: 0
};

export const useProducts = () => {
  console.log("useProducts Rerendered");
  const { filters = {} } = useProductFilters();
  const memoizedFilters = useMemo(() => filters, [filters]);
  const query = useQuery<ProductList, Error>({
    queryKey: ["products", memoizedFilters],
    queryFn: () => GetProductList(memoizedFilters),
    staleTime: 1000 * 60 * 5,
    select: (data) => ({
      products: data?.products || [],
      pagination: data?.pagination || defaultPagination
    }),
    placeholderData: (previousData) =>
      previousData ?? { products: [], pagination: defaultPagination }
  });
  return {
    ...query,
    data: query.data ?? { products: [], pagination: defaultPagination }
  };
};
