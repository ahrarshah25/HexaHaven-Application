import React from "react";
import LeftText from "./LeftText";
import RightImage from "./RightImage";

const Hero = () => {
  return (
    <section className="relative z-0 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1">
          <LeftText  />
        </div>

        <div className="flex-1 flex justify-center">
          <RightImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;