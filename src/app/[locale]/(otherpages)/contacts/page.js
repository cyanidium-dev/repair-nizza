import Contacts from "@/components/contactpage/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Page = () => {
  return (
    <d>
      <Header />
      <main className="overflow-x-hidden overflow-y-hidden">
        <Contacts />
      </main>
      <Footer />
    </d>
  );
};

export default Page;
