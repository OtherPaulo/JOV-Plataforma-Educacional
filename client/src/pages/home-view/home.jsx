import ChallengeSection from "@/components/home-view/challenge-section";
import CompanyShowcase from "@/components/home-view/company-cases";
import FeaturesSection from "@/components/home-view/feature";
import Footer from "@/components/home-view/footer";
import GamificationSection from "@/components/home-view/gamification-section";
import Header from "@/components/Home-view/header";
import HeroSection from "@/components/home-view/hero";


export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
      <FeaturesSection />
      <ChallengeSection />
      <GamificationSection />
      <CompanyShowcase />
      </main>
      <Footer />
    </>
  );
}
