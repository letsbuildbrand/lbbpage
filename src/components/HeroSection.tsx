"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import StarBorder from "./StarBorder";
import ModelViewer from "@/components/ModelViewer";
import ErrorBoundary from "@/components/ErrorBoundary"; // Import ErrorBoundary

const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <div className="lg:order-1 w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Let's Build Brand
            </h1>
          </div>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-6 font-light">
            Crafting Visual Stories & Digital Experiences
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Specializing in top-tier video editing and bespoke website development solutions for foreign clients. We bring your vision to life with creativity and precision.
          </p>
          <StarBorder as="div" color="hsl(var(--primary))" speed="8s" thickness={2} className="inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </Button>
          </StarBorder>
        </div>

        <div className="lg:order-2 w-full lg:w-1/2 flex justify-center">
          <ErrorBoundary fallback={<p className="text-red-500">Failed to load 3D model.</p>}>
            <ModelViewer
              url="/earth.glb"
              width={500}
              height={500}
              autoRotate={true}
              autoRotateSpeed={0.2}
              enableManualRotation={true}
              enableManualZoom={true}
              environmentPreset="city"
              showScreenshotButton={false}
              defaultZoom={1.0}
              modelYOffset={0.0}
              defaultRotationX={-20}
              defaultRotationY={45}
            />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;