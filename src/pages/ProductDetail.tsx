import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/product-detail/ProductGallery';
import ProductInfo from '../components/product-detail/ProductInfo';
import ProductSpecs from '../components/product-detail/ProductSpecs';

const ProductDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // Örnek veri - normalde API'den gelecek
  const product = {
    id: Number(id),
    name: 'iPhone 14 Pro Max 256GB',
    brand: 'Apple',
    price: 32999,
    oldPrice: 35999,
    description: 'A16 Bionic çip, 48MP Ana kamera, Dinamik Ada ve her zamankinden daha parlak bir ekran ile tanışın.',
    images: [
      'https://picsum.photos/800/800?random=1',
      'https://picsum.photos/800/800?random=2',
      'https://picsum.photos/800/800?random=3',
      'https://picsum.photos/800/800?random=4',
    ],
    specifications: [
      { label: 'Ekran', value: '6.7 inç Super Retina XDR' },
      { label: 'İşlemci', value: 'A16 Bionic' },
      { label: 'RAM', value: '6GB' },
      { label: 'Depolama', value: '256GB' },
      { label: 'Kamera', value: '48MP + 12MP + 12MP' },
      { label: 'Batarya', value: '4323mAh' },
    ]
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', id);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductGallery 
          images={product.images}
          name={product.name}
        />
        <ProductInfo 
          {...product}
          isFavorite={isFavorite}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
      <ProductSpecs specifications={product.specifications} />
    </div>
  );
};

export default ProductDetail; 