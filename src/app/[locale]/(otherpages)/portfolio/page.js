import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioComponent from "@/components/portfolio-page/PortfolioComponent";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <PortfolioComponent />
      </main>
      <Footer />
    </>
  );
};

export default Page;
