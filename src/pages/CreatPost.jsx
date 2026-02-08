import React, { useState } from "react";
import ImagePicker from "../Components/Create Page/Post/ImagePicker";
import PrivacyOptions from "../Components/Create Page/Privacy/PrivacyOptions";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [privacy, setPrivacy] = useState({
    publicPost: true,
    showLikes: true,
    allowComments: true,
  });

  const handleSubmit = () => {
    if (!image) return alert("Please select an image");

    console.log({
      title,
      description,
      image,
      privacy,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <textarea
        placeholder="Write a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        rows={4}
      />

      <ImagePicker image={image} setImage={setImage} />

      <PrivacyOptions privacy={privacy} setPrivacy={setPrivacy} />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition mt-6"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
