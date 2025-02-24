import React, { memo } from "react";
import type { Cart } from "../../types/cart";
import ListItem from "./ListItem";

interface CartListProps {
  cartList: Cart[];
}

const List: React.FC<CartListProps> = ({ cartList }) => {
    console.log("cartList Rendered")
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {cartList.map((item) => (
        <ListItem key={item.productId} item={item} />
      ))}
    </div>
  );
};

export default memo(List);
