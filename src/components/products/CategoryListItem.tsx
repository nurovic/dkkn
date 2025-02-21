import { Category } from "../../types/category";
import { memo } from "react";

interface CategoryListItemProps {
  item: Category;
  isSelected: boolean;
  onSelect: (categoryId: string) => void;
}

const CategoryListItem = ({ item, isSelected, onSelect }: CategoryListItemProps) => {
  console.log(`CategoryListItem Rerendered: ${item.name}`);

  const handleChange = () => {
    onSelect(item._id);
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input 
          type="checkbox"
          name="category"
          value={item._id} 
          checked={isSelected}
          className="rounded text-orange-500" 
          onChange={handleChange}
        />
        {item.name}
      </label>
    </div>
  );
};

export default memo(CategoryListItem, (prevProps, nextProps) => {
  return prevProps.item._id === nextProps.item._id && 
         prevProps.isSelected === nextProps.isSelected
});
