import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Wrench className="h-16 w-16 text-primary mr-4 animate-bounce" />
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            Let's Build Brand
          </h1>
        </div>
        <p className="text-xl sm:text-3xl text-muted-foreground mb-8 font-light">
          Crafting Visual Stories & Digital Experiences
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in top-tier video editing and bespoke website development solutions for foreign clients. We bring your vision to life with creativity and precision.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;