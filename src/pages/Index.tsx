import PillNav from "@/components/PillNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid"; // Import the new DotGrid component
import Aurora from "@/components/Aurora"; // Import Aurora component

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
      {/* Aurora Background */}
      <Aurora
        colorStops={['#5227FF', '#7cff67', '#5227FF']}
        amplitude={1.0}
        blend={0.5}
        speed={0.5}
      />

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

      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full z-[1]"> {/* Lower z-index than content */}
        <DotGrid
          dotSize={10}
          gap={15}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Navbar */}
      <PillNav
        logo="/public/placeholder.svg" // Using a placeholder logo
        logoAlt="LBB Logo"
        items={navItems}
        activeHref="#home" // You might want to dynamically set this based on scroll position
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow pt-24"> {/* Added pt-24 to account for fixed navbar height and top spacing */}
        <HeroSection />
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