import Footer from "@/common/components/Footer";
import AboutSection from "./components/sections/AboutSection";
import CurrentEventsSection from "./components/sections/CurrentEventsSection";
import HelpSection from "./components/sections/HelpSection";
import HeroSection from "./components/sections/HeroSection";

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
