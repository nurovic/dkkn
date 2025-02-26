export interface Cart {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    _id: string;
    description: string;
    category: {
        _id: string;
        name: string;
    },
    inStock: boolean;
    total: number;
}

export type UpdateCartQuantity = {
    productId: string;
    quantity: number;
}
export type AddToCartType = {
    productId: string;
}
export type SummaryType = {
    totalQuantity: number;
    totalPrice: number;
} 

export type CartListType = {
    _id: string;
    summary: SummaryType
    items:Cart[]
}
