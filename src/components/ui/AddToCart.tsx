import { useAddToCart } from '../../hooks/useCart';

function AddToCart({id}: {id: string}) {
  const { mutate: handleOrderCart } =useAddToCart()
  const onAddToCart = (id: string) => {
    handleOrderCart({productId: id})
  }
  return (
    <button
    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
    onClick={(e) => {
      e.preventDefault();
     onAddToCart(id)
    }}
  >
    Sepete Ekle 
  </button>
  )
}

export default AddToCart
