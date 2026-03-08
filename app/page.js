import Category from "./components/category/category";
import WhyChooseUs from "./components/footer/whyChooseUS";
import HeroSection from "./components/header/hero/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Category />
      <WhyChooseUs />
    </div>
  );
}
