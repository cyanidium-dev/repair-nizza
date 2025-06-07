import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FormPath from "@/components/leave-request-page/FormPath";
import HeroPath from "@/components/leave-request-page/HeroPath";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <HeroPath />
        <FormPath />
      </main>
      <Footer />
    </>
  );
};

export default Page;
