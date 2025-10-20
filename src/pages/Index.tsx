import PillNav from "@/components/PillNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
// import SplashCursor from "@/components/SplashCursor"; // Temporarily removed
import Footer from "@/components/Footer";
import ModelViewer from "@/components/ModelViewer";

const Index = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Splash Cursor - Temporarily removed to check for conflicts */}
      {/* <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={720}
        CAPTURE_RESOLUTION={256}
        DENSITY_DISSIPATION={2.0}
        VELOCITY_DISSIPATION={1.0}
        PRESSURE_ITERATIONS={10}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={3000}
      /> */}

      {/* Navbar */}
      <PillNav
        logo="/favicon-32x32.png"
        logoAlt="LBB Logo"
        items={navItems}
        activeHref="#home"
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow pt-24">
        <HeroSection />
        {/* Example ModelViewer usage */}
        <div className="flex justify-center items-center py-16">
          <ModelViewer
            url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/e/Earth_1_12756.glb?emrc=68f60299b5bc0"
            width={400}
            height={400}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableManualRotation={true}
            enableManualZoom={true}
            environmentPreset="studio"
          />
        </div>
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;