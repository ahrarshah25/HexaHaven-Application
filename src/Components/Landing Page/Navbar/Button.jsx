import React from "react";

const Button = ({ icon: Icon, name, func, variant = "primary" }) => {
  const base =
    "flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    outline:
      "border border-blue-500 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button onClick={func} className={`${base} ${styles[variant]}`}>
      {Icon && <Icon size={18} />}
      {name}
    </button>
  );
};

export default Button;