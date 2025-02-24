import React, { memo, useCallback } from "react";
import { FiMinus, FiPlus } from 'react-icons/fi';
import type { Cart } from "../../types/cart";
import { useUpdateQuantity } from '../../hooks/useCart';

interface ListItemProps {
    item: Cart;
  }

  
const ListItem: React.FC<ListItemProps> = ({item}) => {
  console.log("Order CArd Item Rendered")
  const { mutate: handleQuntitiy } = useUpdateQuantity();

  const handleQuantityChange = useCallback((id: string, type: 'increase' | 'decrease') => {
    console.log("handleQuantityChange Rendered")
    const body = {
      productId: id,
      quantity: type === 'increase' ? 1 : -1,
    };
    handleQuntitiy(body);
  }, [handleQuntitiy]);
 return(
    <div key={item._id} className="p-4 border-b last:border-b-0">
    <div className="flex items-center gap-4">
      <img 
        src={"https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"} 
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium mb-2">{item.name}</h3>
        <div className="text-lg font-bold text-orange-500">
          ₺{item.price.toLocaleString()}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg">
          <button 
            className="p-2 hover:bg-gray-100"
            onClick={() => handleQuantityChange(item.productId, 'decrease')}
          >
            <FiMinus size={20} />
          </button>
          <span className="px-4">{item.quantity}</span>
          <button 
            className="p-2 hover:bg-gray-100"
            onClick={() => handleQuantityChange(item.productId, 'increase')}
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
 )
};

export default memo(ListItem);
