interface Specification {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specifications: Specification[];
}

const ProductSpecs = ({ specifications }: ProductSpecsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Ürün Özellikleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specifications.map((spec, index) => (
          <div 
            key={index}
            className="flex items-center p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-600 w-1/3">{spec.label}:</span>
            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs; 