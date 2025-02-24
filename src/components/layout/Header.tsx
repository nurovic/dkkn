import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import UserMenu from "./UserMenu.tsx";
import SearchBar from "../ui/SearchBar.tsx";
import CartIcon from "../ui/CartIcon.tsx";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="sticky top-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 border-b">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            DucHan
          </Link>

          <SearchBar />

          <div className="flex items-center gap-6">
            <Link
              to="/favorites"
              className="flex items-center gap-1 hover:text-orange-500"
            >
              <FiHeart size={24} />
              <span className="text-sm">Favorilerim</span>
            </Link>

            <CartIcon />

            <UserMenu
              show={showUserMenu}
              onToggle={() => setShowUserMenu(!showUserMenu)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
