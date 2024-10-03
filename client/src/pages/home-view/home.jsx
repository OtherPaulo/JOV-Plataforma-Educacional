import FeaturesSection from "@/components/home-view/feature";
import Footer from "@/components/home-view/footer";
import Header from "@/components/Home-view/header";
import HeroSection from "@/components/home-view/hero";


export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
      <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
