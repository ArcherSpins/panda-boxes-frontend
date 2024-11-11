import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://cdn.usegalileo.ai/sdxl10/90b86ec6-2a23-4d4b-8d99-bed1e92cbe75.png")',
      }}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Unbox the Panda Love
        </h1>
        <h2 className="text-white text-sm font-normal leading-normal">
          Discover the cutest panda-themed mystery box. Perfect for yourself or
          as a gift.
        </h2>
      </div>
      <div className="flex-wrap gap-3 flex justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Shop Now</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EEEEEE] text-black text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Learn More</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
