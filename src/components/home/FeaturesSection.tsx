import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '🚚',
    title: 'Hızlı Teslimat',
    description: 'Siparişleriniz aynı gün kargoya verilir ve en hızlı şekilde size ulaştırılır.'
  },
  {
    icon: '💰',
    title: 'Uygun Fiyatlar',
    description: 'En kaliteli ürünleri en uygun fiyatlarla sizlere sunuyoruz.'
  },
  {
    icon: '🔒',
    title: 'Güvenli Alışveriş',
    description: 'SSL sertifikalı güvenli ödeme altyapısı ile güvenle alışveriş yapın.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 