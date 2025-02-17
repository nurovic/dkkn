interface ProductSortProps {
  totalProducts: number;
  onSortChange: (value: string) => void;
}

const ProductSort = ({  onSortChange }: ProductSortProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
      <select 
        className="border rounded-lg px-4 py-2"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="recommended">Önerilen Sıralama</option>
        <option value="price_asc">En Düşük Fiyat</option>
        <option value="price_desc">En Yüksek Fiyat</option>
        <option value="newest">En Yeniler</option>
        <option value="bestsellers">En Çok Satanlar</option>
      </select>
    </div>
  );
};

export default ProductSort; 