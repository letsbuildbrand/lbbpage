import { Button } from "@/components/ui/button";
import StarBorder from "./StarBorder"; // Import the new StarBorder component
import ModelViewer from "@/components/ModelViewer"; // Import ModelViewer

const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8"> {/* Added flex container */}
        {/* Model Viewer on the left for larger screens */}
        <div className="lg:order-1 w-full lg:w-1/3 flex justify-center"> {/* Order 1 for left */}
          <ModelViewer
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            width={300} // Adjusted size
            height={300} // Adjusted size
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableManualRotation={true}
            enableManualZoom={true}
            environmentPreset="studio"
          />
        </div>

        {/* Title and description in the center */}
        <div className="lg:order-2 w-full lg:w-2/3 flex flex-col items-center text-center"> {/* Order 2 for center */}
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
              Let's Build Brand
            </h1>
          </div>
          <p className="text-xl sm:text-3xl text-muted-foreground mb-8 font-light">
            Crafting Visual Stories & Digital Experiences
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Specializing in top-tier video editing and bespoke website development solutions for foreign clients. We bring your vision to life with creativity and precision.
          </p>
          <StarBorder as="div" color="hsl(var(--primary))" speed="8s" thickness={2} className="inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </Button>
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;