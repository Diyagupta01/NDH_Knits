import HeroSection from '../components/home/HeroSection';
import ProductCategoriesSection from '../components/home/ProductCategoriesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ProcessSection from '../components/home/ProcessSection';
import QualityPreviewSection from '../components/home/QualityPreviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <WhyChooseSection />
      <ProcessSection />
      <QualityPreviewSection />
    </>
  );
}
