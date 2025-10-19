import { Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-sm py-16 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center">About Us</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
          At Your Agency Name, we are a passionate team of creative professionals dedicated to delivering exceptional digital solutions. With a keen eye for detail and a commitment to innovation, we partner with foreign clients to transform their ideas into stunning visual and interactive experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-10">
          <div className="flex items-center text-gray-200 text-lg">
            <Users className="h-8 w-8 text-blue-400 mr-3" />
            <span>Dedicated to Client Success</span>
          </div>
          <div className="flex items-center text-gray-200 text-lg">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span>Excellence in Every Project</span>
          </div>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 mt-8 leading-relaxed">
          Our expertise spans across dynamic video editing and robust website development, ensuring your brand stands out in a competitive global market. We pride ourselves on clear communication, timely delivery, and results that speak for themselves.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;