import { MadeWithDyad } from "@/components/made-with-dyad";
import Aurora from "@/components/Aurora";
import PillNav from "@/components/PillNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection"; // Import FeaturesSection
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' }, // Add Features to navigation
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#0A0A0A", "#1A2B3C", "#0A0A0A"]} // More subdued, dark, and GitHub-like colors
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Navbar */}
      <PillNav
        logo="/public/placeholder.svg" // Using a placeholder logo
        logoAlt="LBB Logo"
        items={navItems}
        activeHref="#home" // You might want to dynamically set this based on scroll position
        baseColor="hsl(var(--background))"
        pillColor="hsl(var(--primary))"
        hoveredPillTextColor="hsl(var(--primary-foreground))"
        pillTextColor="hsl(var(--primary-foreground))"
        className="mx-auto" // Center the nav
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection /> {/* Render the new FeaturesSection */}
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;