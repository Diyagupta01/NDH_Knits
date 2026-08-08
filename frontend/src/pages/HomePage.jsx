import HeroSection from '../components/home/HeroSection';
import ProductCategoriesSection from '../components/home/ProductCategoriesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import SEO from '../components/ui/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Premium Hosiery Manufacturer | Ludhiana, Punjab"
        description="NDH Knits is a trusted hosiery manufacturer based in Ludhiana, Punjab, India. Over 70 years of experience manufacturing premium socks, gloves, caps, mufflers, thermal wear and leg warmers for wholesalers and retailers across India."
        canonical="/"
      />
      <HeroSection />
      <ProductCategoriesSection />
      <WhyChooseSection />
    </>
  );
}
