import { Users, Star } from "lucide-react";
import ProfileCard from "@/components/ProfileCard"; // Import ProfileCard

const AboutSection = () => {
  const founders = [
    { name: "Yadish", title: "Co-Founder", handle: "yadish_lbb", avatarUrl: "/public/placeholder.svg" },
    { name: "Chaitanya", title: "Co-Founder", handle: "chaitanya_lbb", avatarUrl: "/public/placeholder.svg" },
  ];

  const coreTeam = []; // Removed all core team members

  return (
    <section id="about" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-card bg-opacity-60 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-center">About LBB</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          At Let's Build Brand, we are a passionate team of creative professionals dedicated to delivering exceptional digital solutions. With a keen eye for detail and a commitment to innovation, we partner with foreign clients to transform their ideas into stunning visual and interactive experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-10">
          <div className="flex items-center text-muted-foreground text-lg">
            <Users className="h-8 w-8 text-primary mr-3" />
            <span>Dedicated to Client Success</span>
          </div>
          <div className="flex items-center text-muted-foreground text-lg">
            <Star className="h-8 w-8 text-primary mr-3" />
            <span>Excellence in Every Project</span>
          </div>
        </div>
        <p className="text-lg sm:text-xl text-muted-foreground mt-8 leading-relaxed">
          Our expertise spans across dynamic video editing and robust website development, ensuring your brand stands out in a competitive global market. We pride ourselves on clear communication, timely delivery, and results that speak for themselves.
        </p>
      </div>

      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mt-20 mb-10 text-center">Our Founders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {founders.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            handle={member.handle}
            avatarUrl={member.avatarUrl}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            className="w-full h-[400px] sm:h-[500px]" // Adjust size for responsiveness
          />
        ))}
      </div>

      {coreTeam.length > 0 && (
        <>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mt-10 mb-10 text-center">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <ProfileCard
                key={index}
                name={member.name}
                title={member.title}
                handle={member.handle}
                avatarUrl={member.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] mx-auto" // Decreased size for core team cards
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AboutSection;