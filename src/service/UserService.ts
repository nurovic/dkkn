import service from "./baseUrl";
import type {  ProductFavorite } from "../types/product";

export const GetFavoriteList = async (): Promise<ProductFavorite> => {
  const url: string = "/users/67b9ce55e4b6942c756e2822/favorites";

  const response = await service.get(url);
  const favorites: ProductFavorite = response.data;
  return favorites || []; 
};
