import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-background bg-opacity-70 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-center">Get in Touch</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col space-y-8 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Have a project in mind or just want to say hello? We'd love to hear from you! Reach out to us through any of the methods below, and let's create something amazing together.
          </p>
          <div className="flex items-center text-lg">
            <Mail className="h-6 w-6 text-primary mr-4" />
            <span>letsbuildbrand.in@gmail.com</span>
          </div>
          <div className="flex items-center text-lg">
            <Phone className="h-6 w-6 text-primary mr-4" />
            <span>+918605950846</span>
          </div>
          <div className="flex items-center text-lg">
            <MapPin className="h-6 w-6 text-primary mr-4" />
            <span>Global Presence (Remote-first)</span>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xl border border-border">
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground text-md mb-2 block">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="bg-secondary border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground text-md mb-2 block">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" className="bg-secondary border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground text-md mb-2 block">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={5} className="bg-secondary border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;