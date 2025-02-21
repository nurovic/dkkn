import { ProductFilters } from "../types/product";
import { create } from "zustand";

type FilterType = {
  filters: ProductFilters;
  setFilters: (newFilters: Partial<ProductFilters>) => void;
};

export const useProductFilters = create<FilterType>((set) => ({
  filters: {},
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));
