import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-4 my-6">
      <span className="flex-1 h-px bg-slate-200" />
      <span className="text-xs text-slate-400 uppercase">
        or
      </span>
      <span className="flex-1 h-px bg-slate-200" />
    </div>
  );
};

export default Divider;
