import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout; 