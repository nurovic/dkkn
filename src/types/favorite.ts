export interface FavoriteItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
} 

export interface FavoriteToggleType {
  productId: string
  userId: string
}