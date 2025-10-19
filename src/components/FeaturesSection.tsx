import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-card bg-opacity-60 backdrop-blur-sm py-16 px-4 sm:px-8 border-t border-border">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-center">Our Key Features</h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl text-center leading-relaxed">
        Discover what makes our services stand out. We combine cutting-edge technology with creative expertise to deliver unparalleled results.
      </p>
      <div className="w-full max-w-3xl mx-auto"> {/* Removed fixed height and overflow-hidden */}
        <ScrollStack useWindowScroll={true} itemDistance={150} itemStackDistance={40} blurAmount={0} rotationAmount={0}>
          <ScrollStackItem>
            <h2 className="text-primary">Innovative Video Production</h2>
            <p>From concept to final cut, we produce high-quality videos that capture attention and tell your brand's story effectively. Our team uses the latest editing techniques to deliver stunning visual narratives.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2 className="text-primary">Responsive Web Solutions</h2>
            <p>We build modern, fast, and responsive websites tailored to your business needs. Ensuring a seamless user experience across all devices is our top priority, driving engagement and conversions.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2 className="text-primary">Strategic Brand Consulting</h2>
            <p>Our experts provide strategic insights and creative direction to help define and amplify your brand identity. We work closely with you to develop a cohesive brand message that resonates with your target audience.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2 className="text-primary">SEO & Digital Marketing</h2>
            <p>Boost your online visibility and reach with our comprehensive SEO and digital marketing strategies. We help you connect with your audience, increase traffic, and achieve your business objectives.</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2 className="text-primary">Dedicated Support</h2>
            <p>We believe in building lasting relationships. Our dedicated support team is always ready to assist you, ensuring your projects run smoothly and your digital assets perform optimally.</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};

export default FeaturesSection;