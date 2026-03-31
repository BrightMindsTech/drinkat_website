import RetroNav from "@/components/RetroNav";
import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import VisitSection from "@/components/VisitSection";
import RetroFooter from "@/components/RetroFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <RetroNav />
      <main className="relative">
        <HeroSection />
        <ParallaxSection />
        <MenuSection />
        <AboutSection />
        <VisitSection />
      </main>
      <RetroFooter />
    </div>
  );
};

export default Index;
