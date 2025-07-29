import React from 'react';

function ShelterCard({ image, name, location, description, raised, goal, donors }) {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-[#4a3c2f]/70 to-[#4a3c2f]/30 text-white flex items-center justify-center">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">
          <i className="fas fa-map-marker-alt mr-1"></i>{location}
        </p>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        <div className="flex justify-between text-sm font-semibold mb-1">
          <span>${raised.toLocaleString()} <span className="font-bold">raised</span></span>
          <span className="text-gray-400">of ${goal.toLocaleString()} goal</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 mb-2">
          <div className="h-2 progress-bg rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="text-xs text-gray-400 mb-6">{donors} donors • {percentage}% funded</p>

        <button className="btn-gradient w-full py-3 text-white font-semibold rounded-md flex justify-center gap-2">
          <i className="far fa-heart"></i>
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default ShelterCard;