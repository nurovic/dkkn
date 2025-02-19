import { useQuery } from "@tanstack/react-query";
import { GetProductList } from "../service/ProductService";
import { ProductList } from "../types/product";

const defaultPagination = {
  hasMore: false,
  limit: 10,
  page: 1,
  totalPages: 1,
  total: 0,
};

export const useProducts = () => {
  const query = useQuery<ProductList, Error>({
    queryKey: ["products"],
    queryFn: GetProductList,
    select: (data) => ({
      products: data?.products || [],
      pagination: data?.pagination || defaultPagination,
    }),
  });

  return {
    ...query,
    data: query.data ?? { products: [], pagination: defaultPagination },
  };
};
