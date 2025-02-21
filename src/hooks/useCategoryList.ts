import { useQuery } from "@tanstack/react-query";
import { GetCategoryList } from "../service/CategoryService";
import { CategoryList } from "../types/category";
import { useState, useCallback } from "react";
import { useProductFilters } from "../store/Product";

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

export const useSelectedCategory = () => {
  const { setFilters } = useProductFilters();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectedCategory = useCallback((key: string, value: string) => {
    setSelectedCategory(value);
    setFilters({ [key]: value });
  }, [setFilters]);

  return {
    selectedCategory,
    handleSelectedCategory,
  };
};