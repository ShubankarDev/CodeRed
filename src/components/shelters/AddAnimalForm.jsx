import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddAnimalForm({ onClose }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save data if needed
    navigate("/"); // redirect to dashboard
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="max-w-md w-full bg-white rounded-md shadow-md border border-gray-200 relative">
        <button
          aria-label="Close"
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          type="button"
        >
          <i className="fas fa-times" />
        </button>

        <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-gray-200">
          <i className="fas fa-camera text-orange-500 text-lg" />
          <h2 className="font-semibold text-gray-900 text-lg leading-6">
            Add New Animal
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-5">
          {/* Your form fields exactly as before */}
          <div>
            <label
              htmlFor="photo-upload"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Photo <span className="text-red-600">*</span>
            </label>
            <label
              htmlFor="photo-upload"
              className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-md cursor-pointer h-28 text-center text-gray-500 text-xs leading-tight select-none"
            >
              <i className="fas fa-upload mb-1" />
              <span>Click to upload photo</span>
              <span className="text-[10px] mt-0.5">PNG, JPG up to 10MB</span>
              <input
                type="file"
                id="photo-upload"
                name="photo-upload"
                accept="image/*"
                className="hidden"
                required
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter animal's name"
              className="w-full rounded-md border border-orange-400 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label
              htmlFor="breed"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Breed <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              required
              placeholder="Enter animal's breed"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Age (years) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              required
              min="0"
              placeholder="Enter animal's age"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              required
              placeholder="Describe the animal..."
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 border border-gray-300 rounded-md py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-orange-500 rounded-md py-2 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Add Animal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
