import React, { useState } from "react";

const PrivacyOptions = ({ privacy, setPrivacy }) => {
  const [open, setOpen] = useState(true);

  const toggle = (key) => {
    setPrivacy({ ...privacy, [key]: !privacy[key] });
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 mt-6 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-between w-full font-semibold text-lg focus:outline-none transition-colors ${
          open ? "text-blue-600" : "text-gray-800"
        }`}
      >
        Privacy Options
        <span className={`${open ? "text-blue-400" : "text-gray-500"}`}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Public Post</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.publicPost}
                onChange={() => toggle("publicPost")}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 rounded-full transition ${
                  privacy.publicPost ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition ${
                  privacy.publicPost ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700">Show Likes</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.showLikes}
                onChange={() => toggle("showLikes")}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 rounded-full transition ${
                  privacy.showLikes ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition ${
                  privacy.showLikes ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700">Allow Comments</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.allowComments}
                onChange={() => toggle("allowComments")}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 rounded-full transition ${
                  privacy.allowComments ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition ${
                  privacy.allowComments ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyOptions;
