import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Hemen Alışverişe Başlayın
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Binlerce ürün arasından dilediğinizi seçin, güvenle alışveriş yapın. 
          Üyelere özel fırsatları kaçırmayın!
        </p>
        <Link 
          to="/register" 
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
        >
          Hemen Üye Ol
        </Link>
      </div>
    </div>
  );
};

export default CTASection; 