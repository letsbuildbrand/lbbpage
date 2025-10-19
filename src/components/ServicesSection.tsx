import { Code, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-background bg-opacity-70 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 text-center">Our Expertise</h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl text-center leading-relaxed">
        Let's Build Brand is a creative agency dedicated to crafting compelling visual stories and robust digital experiences. We provide top-tier video editing and bespoke website development services to clients worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="bg-card p-6 rounded-lg shadow-xl border border-border text-center">
          <CardHeader className="flex flex-col items-center justify-center p-0 mb-4">
            <Video className="h-16 w-16 text-primary mb-4" />
            <CardTitle className="text-2xl font-bold text-foreground">Video Editing</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-base leading-relaxed">
              From dynamic promotional videos to engaging social media content, our expert video editing team brings your vision to life with precision and creativity. We ensure your message resonates powerfully with your audience.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card p-6 rounded-lg shadow-xl border border-border text-center">
          <CardHeader className="flex flex-col items-center justify-center p-0 mb-4">
            <Code className="h-16 w-16 text-primary mb-4" />
            <CardTitle className="text-2xl font-bold text-foreground">Website Development</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-base leading-relaxed">
              We build custom, responsive, and high-performance websites that not only look stunning but also drive results. Our development solutions are tailored to your unique business needs, ensuring a seamless user experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-lg sm:text-xl text-muted-foreground mt-12 max-w-3xl text-center leading-relaxed">
        Our diverse clientele spans across the USA, UK, Singapore, Australia, Lebanon, UAE, Nigeria, Indonesia, and many more countries, reflecting our global reach and commitment to excellence.
      </p>
    </section>
  );
};

export default ServicesSection;