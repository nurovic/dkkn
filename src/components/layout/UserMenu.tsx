import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface UserMenuProps {
  show: boolean;
  onToggle: () => void;
}

const menuItems = [
  { label: 'Siparişlerim', path: '/orders' },
  { label: 'Favorilerim', path: '/favorites' },
];

const UserMenu = ({ show, onToggle }: UserMenuProps) => {
  return (
    <div className="relative">
      <button 
        className="flex items-center gap-1 hover:text-orange-500"
        onClick={onToggle}
      >
        <FiUser size={24} />
        <span className="text-sm">Hesabım</span>
        <RiArrowDropDownLine size={20} />
      </button>

      {show && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2" />
          <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
