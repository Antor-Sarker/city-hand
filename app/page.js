import WhyChooseUs from "../components/footer/whyChooseUS";
import HeroSection from "../components/header/hero/hero";
import Category from "../components/home/category";
import HomeServices from "../components/home/services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Category />
      <HomeServices />
      <WhyChooseUs />
    </div>
  );
}
