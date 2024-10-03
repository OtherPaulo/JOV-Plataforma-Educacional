import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[660px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://klirva.nyc3.cdn.digitaloceanspaces.com/bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">

        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-center mb-8 max-w-4xl">
          A maior plataforma de capacitação TECH
        </h1>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
          Junte-se
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
