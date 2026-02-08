import React from "react";

const RightIcon = () => {
  return (
    <div className="relative flex items-center justify-center max-w-full overflow-hidden">
      <div className="absolute w-full h-full sm:w-full sm:h-full md:w-full md:h-full  blur-3xl rounded-full"></div>


    <img src="/socialfeed-mobile.png" className="text-blue-400 relative z-10
        w-full h-full sm:w-64 sm:h-full md:w-full md:h-full" alt="Social Feed" />
      
    </div>
  );
};

export default RightIcon;