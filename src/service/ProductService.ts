import service from "./baseUrl";
import type { ProductList } from "../types/product";

export const GetProductList = async (): Promise<ProductList> => {
    const response = await service.get("/products");
    const products: ProductList = response.data;

    return {
        products: products.products || [],
        pagination: products.pagination 
    }
};    