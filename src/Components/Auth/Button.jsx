import React from "react";

const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="
        w-full py-3 rounded-xl font-semibold
        bg-blue-600 text-white
        hover:bg-blue-700
        shadow-lg shadow-blue-600/20
        hover:shadow-blue-700/30
        transition-all duration-300
        active:scale-[0.98]
      "
    >
      {text}
    </button>
  );
};

export default Button;
