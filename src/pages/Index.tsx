import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsuranceServices from "@/components/InsuranceServices";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InsuranceServices />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
