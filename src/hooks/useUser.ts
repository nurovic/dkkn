
import { useQuery } from "@tanstack/react-query";
import { GetFavoriteList } from "../service/UserService";
import { ProductFavorite } from "../types/product";

export const useGetFavoriteList = () => {
  const query = useQuery<ProductFavorite, Error>({  
    queryKey: ["favorites"],
    queryFn: () => GetFavoriteList(),
    staleTime: 1000 * 60 * 5
  });
  return {
    ...query,
    data: query.data || { products: [] }
  };};
