import { useQuery } from "@tanstack/react-query";
import { GetCategoryList } from "../service/CategoryService";
import { CategoryList } from "../types/category";


export const useCategoryList = () => {
  const query = useQuery<CategoryList, Error>({
    queryKey: ["categories"],
    queryFn: GetCategoryList,
  });
  return {
    ...query,
    data: query.data || [],
  };
};
