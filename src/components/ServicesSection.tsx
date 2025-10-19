import CardSwap from "@/components/CardSwap";
import PixelCard from "@/components/PixelCard"; // Import PixelCard
import { Video, Code, Lightbulb } from "lucide-react";

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
        <div style={{ height: '600px', width: '100%', maxWidth: '500px', position: 'relative' }} className="lg:w-1/2 flex justify-center items-center">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
            width={350}
            height={250}
          >
            <PixelCard variant="blue" className="p-6 flex flex-col items-center justify-center text-center">
              <Video className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Video Editing</h3>
              <p className="text-muted-foreground">Dynamic and engaging video content for all platforms.</p>
            </PixelCard>
            <PixelCard variant="yellow" className="p-6 flex flex-col items-center justify-center text-center">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Website Development</h3>
              <p className="text-muted-foreground">Custom, responsive, and high-performance websites.</p>
            </PixelCard>
            <PixelCard variant="pink" className="p-6 flex flex-col items-center justify-center text-center">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Creative Consulting</h3>
              <p className="text-muted-foreground">Strategic guidance to illuminate your brand's potential.</p>
            </PixelCard>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;