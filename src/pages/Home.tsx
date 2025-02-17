import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CategoriesSection from '../components/home/CategoriesSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home; 