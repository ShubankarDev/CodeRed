// src/components/Funding/Funding.jsx
import React from 'react';
import FundingCard from './FundingCard'; // Make sure FundingCard is in the same folder

const fundingData = [
  {
    name: "Wildlife Recovery Center",
    location: "Portland, Oregon",
    image: "https://storage.googleapis.com/a1aa/image/e5ca0668-7677-4217-121d-27b9d06700bd.jpg",
    desc: "Specializing in wildlife rehabilitation and conservation.",
    raised: 67890,
    goal: 90000,
    donors: 445,
    color: "#4a3c2f"
  },
  {
    name: "Whiskers & Purrs Sanctuary",
    location: "Miami, Florida",
    image: "https://storage.googleapis.com/a1aa/image/51927961-d5b9-4168-4195-bbcbaaa8a42a.jpg",
    desc: "Lifelong care for senior and special needs cats.",
    raised: 28750,
    goal: 40000,
    donors: 156,
    color: "#b96f4f"
  },
  {
    name: "Green Meadows Farm Sanctuary",
    location: "Buffalo, New York",
    image: "https://storage.googleapis.com/a1aa/image/96445693-613c-4c05-892a-1a54093b5fbe.jpg",
    desc: "Sanctuary for rescued farm animals. Education on welfare and sustainable farming.",
    raised: 55420,
    goal: 80000,
    donors: 298,
    color: "#e07b5a"
  }
];

const Funding = () => {
  return (
    <div className="bg-[#f7f3ec] text-[#4a3c2f] min-h-screen font-['Inter']">
      {/* Hero */}
      <section className="bg-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Support Animal Shelters 🐾</h1>
        <p className="text-lg text-gray-600 mb-6">
          Help us connect loving people with animals in need through adoption, donation, and fostering.
        </p>
        <button className="px-6 py-3 text-white font-semibold rounded-md"
          style={{ background: 'linear-gradient(90deg, #e07b5f 0%, #e0c68a 100%)' }}>
          Explore Sanctuaries
        </button>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search by city, name, or type..."
          className="col-span-2 px-4 py-3 rounded-md border border-gray-300"
        />
        <select className="px-4 py-3 rounded-md border border-gray-300 bg-white">
          <option>Filter by Type</option>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
          <option value="wildlife">Wildlife</option>
          <option value="farm">Farm</option>
        </select>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
        {fundingData.map((item, index) => (
          <FundingCard key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Funding;
