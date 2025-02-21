import { useCategoryList } from '../../hooks/useCategoryList';
import { memo, useCallback, useState } from 'react';
import { useProductFilters } from '../../store/Product';
import CategoryList from './CategoryList';

const ProductFilters = () => {
  const { data: categories, isLoading, error } = useCategoryList();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  
  const setFilters = useProductFilters(useCallback((state: 
    { setFilters: (filters: { category?: string, page?: number }) => void }
  ) => state.setFilters, []));
  
  const handleCategoryChange = useCallback((categoryId: string) => {
    const newCategoryId = selectedCategoryId === categoryId ? '' : categoryId;
    setSelectedCategoryId(newCategoryId);
    setFilters({ category: newCategoryId, page: 1 });

  }, [setFilters, selectedCategoryId]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <CategoryList 
          categories={categories || []}
          selectedCategoryId={selectedCategoryId}
          onCategorySelect={handleCategoryChange}
        />
      </div>
    </div>
  );
};  

export default memo(ProductFilters, () => true); 