import PillNav from "@/components/PillNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";
import ModelViewer from "@/components/ModelViewer"; // Import ModelViewer

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
      {/* Splash Cursor - Optimized for performance */}
      <SplashCursor
        SIM_RESOLUTION={64} // Reduced resolution
        DYE_RESOLUTION={720} // Reduced resolution
        CAPTURE_RESOLUTION={256} // Reduced resolution
        DENSITY_DISSIPATION={2.0} // Slightly reduced dissipation
        VELOCITY_DISSIPATION={1.0} // Slightly reduced dissipation
        PRESSURE_ITERATIONS={10} // Reduced iterations
        SPLAT_RADIUS={0.15} // Slightly reduced splat radius
        SPLAT_FORCE={3000} // Reduced splat force
      />

      {/* Navbar */}
      <PillNav
        logo="/favicon-32x32.png" // Using the new favicon as the logo
        logoAlt="LBB Logo"
        items={navItems}
        activeHref="#home" // You might want to dynamically set this based on scroll position
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow pt-24"> {/* Added pt-24 to account for fixed navbar height and top spacing */}
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