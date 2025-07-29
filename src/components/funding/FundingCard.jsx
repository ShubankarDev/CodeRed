// src/Funding/FundingCard.jsx
import React from 'react';

const FundingCard = ({ name, location, image, desc, raised, goal, donors, color }) => {
  const percentage = Math.min((raised / goal) * 100, 100).toFixed(0);

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-[${color}]/70 flex items-center justify-center text-white`}
        >
          <i className="far fa-heart text-lg"></i>
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1" style={{ color }}>
          {name}
        </h2>
        <p className="flex items-center text-sm text-[#9a9a9a] mb-4">
          <i className="fas fa-map-marker-alt mr-1"></i> {location}
        </p>
        <p className="text-[#9a9a9a] mb-6">{desc}</p>
        <div className="flex justify-between text-sm mb-1 font-semibold">
          <span>${raised.toLocaleString()} <span className="font-bold">raised</span></span>
          <span className="text-[#9a9a9a]">of ${goal.toLocaleString()} goal</span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#e6e6e6] mb-2 overflow-hidden">
          <div
            className="h-2 rounded-full"
            style={{ width: `${percentage}%`, background: `linear-gradient(90deg, ${color}, #e0c68a)` }}
          ></div>
        </div>
        <p className="text-xs text-[#9a9a9a] mb-6">{donors} donors • {percentage}% funded</p>
        <button className="w-full py-3 rounded-md text-white font-semibold flex justify-center gap-2"
          style={{ background: `linear-gradient(90deg, ${color}, #e0c68a)` }}>
          <i className="far fa-heart"></i> Donate Now
        </button>
      </div>
    </article>
  );
};

export default FundingCard;
