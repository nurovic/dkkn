import FavoritesHeader from '../components/favorites/FavoritesHeader';
import FavoritesGrid from '../components/favorites/FavoritesGrid';
import { useGetFavoriteList } from '../hooks/useUser';
const Favorites = () => {
  console.log("Favorites Rerendered");
  const {data, isLoading, error } = useGetFavoriteList();

    console.log(data,"23asdasd");

  const handleAddToCart = () =>{}
  const handleAddToFavorites= () =>{}

  if(isLoading) 
    return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>)

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <FavoritesHeader count={Number(data?.products?.length)} />
      <FavoritesGrid
        products={data?.products}
        onAddToCart={handleAddToCart}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default Favorites; 