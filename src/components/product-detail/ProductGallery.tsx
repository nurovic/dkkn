interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  return (
    <div className="lg:w-1/2">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img 
          src={images[0]} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer border-2 hover:border-orange-500 transition-colors"
          >
            <img 
              src={image} 
              alt={`${name} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery; 