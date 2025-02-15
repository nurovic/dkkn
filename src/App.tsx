import AppRoutes from './routes';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Link to="/" className="text-white hover:text-gray-300">Ana Sayfa</Link>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="text-white hover:text-gray-300">Giriş Yap</Link>
            <Link to="/register" className="text-white hover:text-gray-300">Kayıt Ol</Link>
          </div>
        </div>
      </nav>

      <AppRoutes />
    </div>
  );
}

export default App;
