import { Link } from 'react-router-dom';

const EmptyFavorites = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Favorileriniz Boş</h2>
      <p className="text-gray-600 mb-8">
        Favori ürününüz bulunmamaktadır. Ürünlere göz atarak favorilerinizi oluşturabilirsiniz.
      </p>
      <Link 
        to="/products" 
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Ürünlere Göz At
      </Link>
    </div>
  );
};

export default EmptyFavorites; 