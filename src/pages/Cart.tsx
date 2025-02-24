import { useGetCartList  } from '../hooks/useCart';
import List from '../components/cart/list';
import Summary from '../components/cart/Summary';
const Cart = () => {
  const { data, isLoading, error } = useGetCartList();
/*
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sepetiniz Boş</h2>
          <p className="text-gray-600 mb-8">
            Sepetinizde ürün bulunmamaktadır. Alışverişe başlamak için ürünlerimize göz atın.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }
    */
   if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
   if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>;
   
   console.log(data.items)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Alışveriş Sepeti</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
        <List cartList={data.items} />
        </div>

        <Summary summary={data.summary} />
      </div>
    </div>
  );
};

export default Cart; 