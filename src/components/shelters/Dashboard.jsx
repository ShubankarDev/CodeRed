import React, { useState } from "react";
import AnimalsDashboard from "./AnimalsDashboard";
import RequestsDashboard from "./RequestsDashboard";
import DonationsDashboard from "./DonationsDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("animals");

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1E1E1E] font-['Inter']">
      {/* Header */}
      <header className="bg-[#F4794E] flex items-center justify-between px-6 sm:px-10 py-3">
        <div className="flex items-center space-x-2">
          <i className="far fa-heart text-white text-lg"></i>
          <div className="text-white font-semibold text-sm leading-none">
            PawConnect
            <div className="text-[9px] font-normal leading-none">
              Shelter Dashboard
            </div>
          </div>
        </div>
        <div className="text-white font-semibold text-sm">
          Happy Paws Shelter
        </div>
        <button
          className="flex items-center space-x-1 bg-[#F4794E] border border-white rounded px-3 py-1 text-white text-xs font-semibold hover:bg-[#e36a3e] transition"
          type="button"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </header>

      {/* Tabs */}
      <nav className="flex max-w-3xl mx-auto mt-6 bg-white rounded-lg text-[10px] font-semibold text-[#6B6B6B] border border-[#F0F0F0] overflow-hidden mb-6">
        <button
          onClick={() => setActiveTab("animals")}
          className={`flex-1 py-1 text-center border-r border-[#F0F0F0] ${
            activeTab === "animals" ? "bg-[#F9F9F9] text-[#1E1E1E]" : ""
          }`}
        >
          Animals (3)
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`flex-1 py-1 text-center border-r border-[#F0F0F0] ${
            activeTab === "requests" ? "bg-[#F9F9F9] text-[#1E1E1E]" : ""
          }`}
        >
          Requests (2)
        </button>
        <button
          onClick={() => setActiveTab("donations")}
          className={`flex-1 py-1 text-center ${
            activeTab === "donations" ? "bg-[#F9F9F9] text-[#1E1E1E]" : ""
          }`}
        >
          Donations
        </button>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === "animals" && <AnimalsDashboard />}
        {activeTab === "requests" && <RequestsDashboard />}
        {activeTab === "donations" && <DonationsDashboard />}
      </div>
    </div>
  );
}
