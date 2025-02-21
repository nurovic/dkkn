import { CategoryList } from "../types/category";
import service from "./baseUrl";


export const GetCategoryList = async (): Promise<CategoryList> => {
    const response = await service.get("/categories");
    const categories: CategoryList = response.data;
    return categories;
};
