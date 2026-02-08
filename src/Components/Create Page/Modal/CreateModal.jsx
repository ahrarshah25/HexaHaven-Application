import React from "react";

import { X, Image, Film } from "lucide-react";

const CreateModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl">
        
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            What do you want to upload?
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="space-y-3">
          <a
            href="/create/post"
            className="
              flex items-center gap-4 p-4 rounded-xl
              border border-slate-200
              hover:bg-blue-50 hover:border-blue-500
              transition
            "
          >
            <Image className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-slate-800">
              Post
            </span>
          </a>

          <a
            href="/create/reel"
            className="
              flex items-center gap-4 p-4 rounded-xl
              border border-slate-200
              hover:bg-blue-50 hover:border-blue-500
              transition
            "
          >
            <Film className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-slate-800">
              Reel
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
