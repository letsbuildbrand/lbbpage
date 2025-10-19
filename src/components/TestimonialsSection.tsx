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
    name: "Erick",
    title: "Client",
    quote: "The video edits were absolutely insane -they completely blew me away. This team doesn't just deliver; they surprise you with their level of expertise and dedication. The quality was perfect, and their supportive attitude made the collaboration seamless. Highly recommend for anyone looking for exceptional results.",
    avatar: "/favicon-32x32.png",
  },
  {
    name: "Joni",
    title: "Client",
    quote: "I'm speechless. What this team created wasn't just a video, it was a true piece of art. Beyond the phenomenal editing, what really stood out was their personal touch. They helped with strategy, gave inspiration for how to shoot, and offered incredible support through the entire process, and their dedicated, personal support at every step is what makes them true partners in the creative process. An amazing team to work with.",
    avatar: "/favicon-32x32.png",
  },
  {
    name: "Innerlink",
    title: "Client",
    quote: "We gave them an incredibly demanding project: 60 videos in just 10 days. Not only did they deliver on time, but the quality was exceptional. Their systematic process, which included three rounds of quality checks, ensured every video was perfect. This team is reliable, professional, and their ability to deliver high-quality work on a tight deadline is simply unmatched.",
    avatar: "/favicon-32x32.png",
  },
  {
    name: "Avi Javeri",
    title: "Client",
    quote: "They are the complete package. From developing a winning content strategy and scripts to delivering flawless video edits, they managed it all. But what truly sets them apart is their genuine support. They were true partners who hand-held me through the process and provided the encouragement I needed to be consistent. My channel's growth is a direct result of their expertise.",
    avatar: "/favicon-32x32.png",
  },
  {
    name: "Stephanie",
    title: "Client",
    quote: "I dedicate my incredible growth entirely to the team at Let's Build Brand. When we started 4 months ago, I was at 10k followers; today, I'm at 550k. This would have been impossible without their expert strategy and their amazing video editing team, who consistently delivered for me month after month. They understood my vision and executed it perfectly.",
    avatar: "/favicon-32x32.png",
  },
  {
    name: "Johann",
    title: "Client",
    quote: "It's rare to find a creative team that truly listens and executes with such precision. They took my vision for my Taekwon-Do content and captured the energy and discipline of the art form in every edit. The final videos were exactly my dream style, only better. I am so happy with the results and their professionalism.",
    avatar: "/favicon-32x32.png",
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