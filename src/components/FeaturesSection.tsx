import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Globe, ShieldCheck, TrendingUp, Headset } from "lucide-react"; // Importing icons for features
import ScrollStack, { ScrollStackItem } from './ScrollStack'; // Import ScrollStack and ScrollStackItem

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Video Production",
    description: "From concept to final cut, we produce high-quality videos that capture attention and tell your brand's story effectively. Our team uses the latest editing techniques to deliver stunning visual narratives.",
  },
  {
    icon: Globe,
    title: "Responsive Web Solutions",
    description: "We build modern, fast, and responsive websites tailored to your business needs. Ensuring a seamless user experience across all devices is our top priority, driving engagement and conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Strategic Brand Consulting",
    description: "Our experts provide strategic insights and creative direction to help define and amplify your brand identity. We work closely with you to develop a cohesive brand message that resonates with your target audience.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Boost your online visibility and reach with our comprehensive SEO and digital marketing strategies. We help you connect with your audience, increase traffic, and achieve your business objectives.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "We believe in building lasting relationships. Our dedicated support team is always ready to assist you, ensuring your projects run smoothly and your digital assets perform optimally.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10 bg-card bg-opacity-60 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-center">Our Key Features</h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl text-center leading-relaxed">
        Discover what makes our services stand out. We combine cutting-edge technology with creative expertise to deliver unparalleled results.
      </p>
      <div className="w-full max-w-6xl mx-auto">
        <ScrollStack useWindowScroll={true} itemDistance={50} itemStackDistance={20}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollStackItem key={index}>
                <Card className="bg-background p-6 rounded-lg shadow-lg border border-border flex flex-col items-center text-center">
                  <CardHeader className="flex flex-col items-center p-0 mb-4">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};

export default FeaturesSection;