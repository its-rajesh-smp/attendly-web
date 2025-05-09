import AboutSection from "@/components/home/sections/AboutSection";
import CurrentEventsSection from "@/components/home/sections/CurrentEventsSection";
import HelpSection from "@/components/home/sections/HelpSection";
import HeroSection from "@/components/home/sections/HeroSection";
import Footer from "@/components/ui/Footer";

const HomePage = () => {
  return (
    <div className=" relative min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <CurrentEventsSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default HomePage;
