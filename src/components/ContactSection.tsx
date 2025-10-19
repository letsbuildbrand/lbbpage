import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm py-16 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center">Get in Touch</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Have a project in mind or just want to say hello? We'd love to hear from you! Reach out to us through any of the methods below, and let's create something amazing together.
          </p>
          <div className="flex items-center text-lg">
            <Mail className="h-6 w-6 text-yellow-500 mr-4" />
            <span>info@youragency.com</span>
          </div>
          <div className="flex items-center text-lg">
            <Phone className="h-6 w-6 text-yellow-500 mr-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-lg">
            <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
            <span>Global Presence (Remote-first)</span>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-200 text-md mb-2 block">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-200 text-md mb-2 block">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-200 text-md mb-2 block">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={5} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;