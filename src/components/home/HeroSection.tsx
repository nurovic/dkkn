import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Alışverişin En Kolay Hali
          </h1>
          <p className="text-xl mb-8">
            Binlerce ürün, uygun fiyatlar ve güvenli alışveriş deneyimi için hemen üye olun.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/register" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Üye Ol
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Giriş Yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 