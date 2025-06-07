import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientFormPath from "@/components/leave-request-page/ClientFormPath";
import HeroPath from "@/components/leave-request-page/HeroPath";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <HeroPath />
        <ClientFormPath />
      </main>
      <Footer />
    </>
  );
};

export default Page;
