import React from "react";

const Href = ({ text, linkText, href }) => {
  return (
    <p className="text-sm text-gray-400 text-center">
      {text}{" "}
      <a
        href={href}
        className="text-blue-400 hover:underline font-medium"
      >
        {linkText}
      </a>
    </p>
  );
};

export default Href;