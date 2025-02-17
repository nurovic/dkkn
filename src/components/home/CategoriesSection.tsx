import CategoryCard from './CategoryCard';

const categories = [
  'Elektronik',
  'Moda',
  'Ev & Yaşam',
  'Kozmetik'
];

const CategoriesSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popüler Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              image={`https://picsum.photos/400/400?random=${category}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection; 