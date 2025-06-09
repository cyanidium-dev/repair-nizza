import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/homepage/AboutUs";
import DreamRepair from "@/components/homepage/DreamRepair";
import Hero from "@/components/homepage/Hero";
import OurService from "@/components/homepage/OurService";
import PortfolioSection from "@/components/homepage/PortfolioSection";
import StepToDream from "@/components/homepage/StepToDream";
import { client } from "@/sanityClient";
import { heroBlurCardQuery, portfolioProjectsQuery } from "@/lib/queries";

export default async function Home() {
  const heroBlurCardData = await client.fetch(heroBlurCardQuery);
  const portfolioData = await client.fetch(portfolioProjectsQuery);

  return (
    <div>
      <Header />
      <main className="overflow-x-hidden">
        <Hero heroBlurCardData={heroBlurCardData} />
        <OurService />
        <PortfolioSection portfolioData={portfolioData} />
        <DreamRepair />
        <AboutUs />
        <StepToDream />
      </main>
      <Footer />
    </div>
  );
}
