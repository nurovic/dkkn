import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
        >
          <FiArrowLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <Link to="/" className="text-2xl font-bold text-orange-500">
          ShopZone
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 