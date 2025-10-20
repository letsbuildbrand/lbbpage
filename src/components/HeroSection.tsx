import { Button } from "@/components/ui/button";
import StarBorder from "./StarBorder"; // Import the new StarBorder component
import ModelViewer from "@/components/ModelViewer"; // Import ModelViewer

const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8"> {/* Added flex container */}
        {/* Title and description on the left for larger screens */}
        <div className="lg:order-1 w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left"> {/* Order 1 for left, align text left on large screens */}
          <div className="flex items-center justify-center lg:justify-start mb-4"> {/* Align title left on large screens */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-foreground"> {/* Decreased font size */}
              Let's Build Brand
            </h1>
          </div>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-6 font-light"> {/* Decreased font size */}
            Crafting Visual Stories & Digital Experiences
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"> {/* Decreased font size */}
            Specializing in top-tier video editing and bespoke website development solutions for foreign clients. We bring your vision to life with creativity and precision.
          </p>
          <StarBorder as="div" color="hsl(var(--primary))" speed="8s" thickness={2} className="inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </Button>
          </StarBorder>
        </div>

        {/* Model Viewer on the right for larger screens */}
        <div className="lg:order-2 w-full lg:w-1/2 flex justify-center"> {/* Order 2 for right */}
          <ModelViewer
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            width={500}
            height={500}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableManualRotation={true}
            enableManualZoom={true}
            environmentPreset="studio"
            showScreenshotButton={false} {/* Removed screenshot button */}
            defaultZoom={1.5} {/* Zoomed out a little more */}
            modelYOffset={0.1} {/* Moved model slightly upwards */}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;