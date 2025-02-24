import { Link } from "react-router-dom";
import { Category } from "../../types/category";
import { memo } from "react";
import FavoriteButton from "./FavoriteButton";
import AddToCart from "./AddToCart";
interface ProductCardProps {
  _id: string;
  name: string;
  slug: string;
  price: number;
  isFavorite: boolean;
  category?: Category;
}

const ProductCard = memo(({ _id, name, price, category, isFavorite }: ProductCardProps) => {

  console.log(`ProductCard Rerendered: ${name} HER`);
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <Link to={`/products/${_id}`} className="relative block">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={name}
          className="w-full h-48 object-cover"
        />
        <FavoriteButton isFavorite={isFavorite} id={_id} />
      </Link>
      <div className="p-4">
        <h3 className="font-medium mb-1 line-clamp-2">{name}</h3>

        <div className="text-sm text-gray-500 mb-2">{category?.name} </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-orange-500">
            ₺{price.toLocaleString()}
          </span>
        </div>
      <AddToCart id={_id} />
      </div>
    </div>
  );
})

export default ProductCard;
