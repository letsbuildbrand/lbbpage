import MagicBento from "@/components/MagicBento"; // Import MagicBento

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-background bg-opacity-50 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-center">Our Expertise</h2>
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We offer a comprehensive suite of services designed to elevate your brand's digital presence. From captivating video content to robust web platforms, our solutions are tailored to meet your unique needs and exceed expectations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our key offerings below and see how we can help you achieve your goals.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255" // Using a vibrant purple-blue
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;