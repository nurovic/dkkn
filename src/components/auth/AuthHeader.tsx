import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const AuthHeader = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
      <Link 
        to="/" 
        className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
      >
        <FiArrowLeft size={20} />
        <span>Ana Sayfaya Dön</span>
      </Link>
      <Link to="/products" className="text-2xl font-bold text-orange-500">
      DucHan
      </Link>
    </div>
  );
};

export default AuthHeader; 