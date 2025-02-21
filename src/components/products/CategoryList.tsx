import { memo } from "react";
import { Category } from "../../types/category";
import CategoryListItem from "./CategoryListItem";

interface CategoryListProps {
  categories: Category[];
  selectedCategoryId: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryList = memo(
  ({ categories, selectedCategoryId, onCategorySelect }: CategoryListProps) => {
    return (
      <div className="mb-6">
        <h4 className="font-medium mb-2">Kategoriler</h4>
        {categories?.map((item: Category) => (
          <CategoryListItem
            key={item._id}
            item={item}
            isSelected={selectedCategoryId === item._id}
            onSelect={onCategorySelect}
          />
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.selectedCategoryId === nextProps.selectedCategoryId &&
      prevProps.categories === nextProps.categories
    );
  }
);

export default CategoryList;
