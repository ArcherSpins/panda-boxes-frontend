// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto py-5">
      <div
        className="flex flex-col items-center justify-center min-h-[480px] gap-6 bg-cover bg-center bg-no-repeat rounded-xl p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://cdn.usegalileo.ai/sdxl10/90b86ec6-2a23-4d4b-8d99-bed1e92cbe75.png')",
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Unbox the Panda Love
          </h1>
          <h2 className="text-white text-sm md:text-base mt-2">
            Discover the cutest panda-themed mystery box. Perfect for yourself
            or as a gift.
          </h2>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-black text-white rounded-xl h-10 md:h-12 px-4 md:px-5 font-bold">
            Shop Now
          </button>
          <button className="bg-gray-200 text-black rounded-xl h-10 md:h-12 px-4 md:px-5 font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
