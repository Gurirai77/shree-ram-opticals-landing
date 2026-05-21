import HeroSlider from "@/components/home/HeroSlider";
import CategorySection from "@/components/home/CategorySection";
import TrendingCollections from "@/components/home/TrendingCollections";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurJourney from "@/components/home/OurJourney";
import Testimonials from "@/components/home/Testimonials";
import LuxuryHighlight from "@/components/home/LuxuryHighlight";

export default function Home() {
  return (
    <>


      <HeroSlider />

<LuxuryHighlight />

<CategorySection />
      <TrendingCollections />
      <Brands/>
      <WhyChooseUs />
      <OurJourney />
      <Testimonials />
    </>
  );
}