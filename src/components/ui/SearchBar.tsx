import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="flex-1 max-w-2xl mx-8 relative">
      <input
        type="text"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar; 