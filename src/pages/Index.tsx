import { MadeWithDyad } from "@/components/made-with-dyad";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;