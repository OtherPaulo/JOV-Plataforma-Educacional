import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[660px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <button className="bg-orange-500 rounded-full p-6 mb-8 hover:bg-orange-600 transition-colors duration-300">
          <Play className="w-12 h-12" />
        </button>
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
