import service from "./baseUrl";
import type { CartListType,UpdateCartQuantity } from "../types/cart";

export const GetCartList = async (): Promise<CartListType> => {
  const url: string = "/cart";
  const params = { userId: "67b865c566cb267bd954886e" };

  const response = await service.post(url, params );
  const cartList: CartListType = response.data;

  return cartList || [];
};


export const UpdateCartProduct = async (body:UpdateCartQuantity): Promise<CartListType> => {    
  
  const url: string = "/cart/update-quantity";
  const params = { userId: "67b865c566cb267bd954886e" };
  body = {...body,...params}
  const response = await service.post(url, body );
  const cartList: CartListType = response.data;
  
  return cartList || [];
}