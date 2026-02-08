import React from 'react';

const ImagePicker = ({ image, setImage }) => {
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Upload Image
      </label>

      <div className="flex items-center gap-4">
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        {image && (
          <div className="relative w-32 h-32 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src={image}
              alt="Preview"
              className="object-cover w-full h-full"
            />
            <span
              onClick={() => setImage(null)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm cursor-pointer hover:bg-red-600 transition"
            >
              ✕
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
