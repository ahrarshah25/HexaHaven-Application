import React from "react";

const Anchor = ({ text, href }) => {
  return (
    <a
      href={href}
      className="
        text-sm text-blue-600
        hover:text-blue-700
        font-medium transition
      "
    >
      {text}
    </a>
  );
};

export default Anchor;
