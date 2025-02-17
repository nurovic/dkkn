interface CategoryCardProps {
  name: string;
  image: string;
}

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default CategoryCard; 