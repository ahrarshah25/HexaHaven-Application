import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="space-y-1 text-center">
      <h2 className="text-2xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
