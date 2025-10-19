import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah J.",
    title: "Marketing Director, TechCorp",
    quote: "Let's Build Brand transformed our marketing videos. Their editing is top-notch, and they truly understood our vision. Highly recommend!",
    avatar: "/public/placeholder.svg",
  },
  {
    name: "David L.",
    title: "CEO, Global Ventures",
    quote: "The website developed by Let's Build Brand exceeded our expectations. It's fast, responsive, and perfectly captures our brand identity. Excellent work!",
    avatar: "/public/placeholder.svg",
  },
  {
    name: "Aisha K.",
    title: "Founder, Creative Hub",
    quote: "Their team is incredibly professional and creative. They delivered our project ahead of schedule and the quality was outstanding. A pleasure to work with!",
    avatar: "/public/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-card bg-opacity-60 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 text-center">What Our Clients Say</h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl text-center leading-relaxed">
        Hear directly from our satisfied clients about their experience working with Let's Build Brand.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-background p-6 rounded-lg shadow-lg border border-border flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center p-0 mb-4">
              <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl font-semibold text-foreground">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;