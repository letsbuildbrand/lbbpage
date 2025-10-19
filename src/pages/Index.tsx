import { MadeWithDyad } from "@/components/made-with-dyad";
import PillNav from "@/components/PillNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SplashCursor from "@/components/SplashCursor"; // Import SplashCursor

const Index = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
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

      {/* Aurora Background Removed */}

      {/* Navbar */}
      <PillNav
        logo="/public/placeholder.svg" // Using a placeholder logo
        logoAlt="LBB Logo"
        items={navItems}
        activeHref="#home" // You might want to dynamically set this based on scroll position
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;