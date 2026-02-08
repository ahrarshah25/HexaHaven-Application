 import React from "react";
 
const VideoPicker = ({ video, setVideo }) => {
  const handleVideo = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoEl = document.createElement("video");
    videoEl.preload = "metadata";

    videoEl.onloadedmetadata = () => {
      if (videoEl.duration > 60) {
        alert("Video must be 1 minute or less");
        return;
      }
      setVideo(URL.createObjectURL(file));
    };

    videoEl.src = URL.createObjectURL(file);
  };

  return (
    <div>
      <label className="block font-medium mb-2">Upload Reel (max 1 min)</label>

      <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleVideo}
            className="hidden"
          />
        </label>

      {video && (
        <video
          src={video}
          controls
          className="mt-4 rounded-lg w-full max-h-96"
        />
      )}
    </div>
  );
};

export default VideoPicker;
