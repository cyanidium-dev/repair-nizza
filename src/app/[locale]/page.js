import Header from "@/components/Header";
import AboutUs from "@/components/homepage/AboutUs";
import DreamRepair from "@/components/homepage/DreamRepair";
import Hero from "@/components/homepage/Hero";
import OurService from "@/components/homepage/OurService";
import PortfolioSection from "@/components/homepage/PortfolioSection";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OurService />
      <PortfolioSection />
      <DreamRepair />
      <AboutUs />
    </div>
  );
}
