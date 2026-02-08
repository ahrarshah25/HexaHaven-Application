import React from "react";

const Input = ({ label, type, placeholder, value, func }) => {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-600">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={func}
        className="
          w-full px-4 py-3 rounded-xl
          border border-slate-200
          text-slate-900 placeholder-slate-400
          focus:outline-none
          focus:ring-4 focus:ring-blue-500/20
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
};

export default Input;
