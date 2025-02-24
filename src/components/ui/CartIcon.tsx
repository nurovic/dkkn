import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useGetCartList } from '../../hooks/useCart';
function CartIcon() {
    const { data, isLoading, error } = useGetCartList();

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>;
  
    return (
    <Link to="/cart" className="flex items-center gap-1 hover:text-orange-500">
    <div className="relative">
      <FiShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {data?.items?.length}
      </span>
    </div>
    <span className="text-sm">Sepetim</span>
  </Link>
  )
}

export default CartIcon
