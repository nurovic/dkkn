import service from "./baseUrl";
import { Product } from "../types/product";

export const GetProductList = async (): Promise<Product[]> => {
    const response = await service.get("/products");
    return response.data;
  };    