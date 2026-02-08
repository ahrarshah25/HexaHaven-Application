import React, { useState } from "react";
import VideoPicker from "../Components/Create Page/Reel/VideoPicker";
import PrivacyOptions from "../Components/Create Page/Privacy/PrivacyOptions";

const CreateReel = () => {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState(null);
  const [privacy, setPrivacy] = useState({
    publicPost: true,
    showLikes: true,
    allowComments: true,
  });

  const handleSubmit = () => {
    if (!video) return alert("Please select a video");

    console.log({
      caption,
      video,
      privacy,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Reel</h2>

      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        rows={3}
      />

      <VideoPicker video={video} setVideo={setVideo} />

      <PrivacyOptions privacy={privacy} setPrivacy={setPrivacy} />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition mt-6"
      >
        Publish Reel
      </button>
    </div>
  );
};

export default CreateReel;
