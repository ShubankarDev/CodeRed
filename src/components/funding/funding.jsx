// src/Funding/Funding.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FundingCard from "./FundingCard";
import Navbar from "../navbar";

const SkeletonCard = () => (
  <div className="animate-pulse bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-200 rounded w-2/3 mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

const FundingPage = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/shelters')
      .then((res) => {
        setShelters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shelters:", err);
        setError("Failed to load shelters. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#fdf9f3] min-h-screen">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-600 text-lg mt-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shelters.map((shelter, index) => (
              <FundingCard key={index} {...shelter} />
            ))}
          </div>
        )}
      </div>

      <section className="bg-[#f68b56] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="mb-8 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Whether you're looking to adopt or support our mission, every action helps save lives.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              type="button"
              className="flex items-center gap-2 border border-white rounded-md px-5 py-3 text-white font-semibold hover:bg-white hover:text-[#f68b56] transition"
            >
              <i className="fas fa-user-friends" /> Start Adopting
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-white rounded-md px-5 py-3 text-white font-semibold hover:bg-white hover:text-[#f68b56] transition"
            >
              <i className="far fa-heart" /> Donate Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FundingPage;
