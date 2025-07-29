import React from "react";

export default function DonationsDashboard() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <h1 className="font-extrabold text-xl mb-1">Shelter Dashboard</h1>
      <p className="text-xs text-gray-600 mb-4">
        Manage your animals, adoption requests, and track donations.
      </p>

      {/* Tabs */}
      <nav className="inline-flex rounded-md border border-gray-200 bg-[#f3f1eb] text-xs font-semibold mb-6">
        <button className="px-3 py-1 rounded-l-md text-gray-600 hover:text-gray-900">
          Animals (3)
        </button>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-900">
          Requests (2)
        </button>
        <button
          aria-current="page"
          className="px-3 py-1 rounded-r-md bg-white text-gray-900 border border-gray-200 border-l-0"
        >
          Donations
        </button>
      </nav>

      {/* Donations Overview */}
      <section className="border border-gray-300 rounded-md bg-white p-4 text-xs text-gray-700">
        <div className="flex items-center mb-3 font-semibold text-gray-800">
          <span className="text-[#e76a24] mr-2 font-bold text-sm">$</span>{" "}
          Donations Overview
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex justify-between items-center bg-[#d9f0e2] border border-[#d9f0e2] rounded-md px-4 py-3 flex-1">
            <div className="text-[9px] text-gray-600">Total Raised</div>
            <div className="text-[#2cae6a] font-extrabold text-lg">$600</div>
            <i className="fas fa-chart-line text-[#2cae6a] text-lg"></i>
          </div>
          <div className="flex justify-between items-center bg-[#ffe6d9] border border-[#ffe6d9] rounded-md px-4 py-3 flex-1">
            <div className="text-[9px] text-[#e76a24]">This Month</div>
            <div className="text-[#e76a24] font-extrabold text-lg">$0</div>
            <i className="far fa-calendar-alt text-[#e76a24] text-lg"></i>
          </div>
        </div>

        {/* Accept Donations */}
        <div className="border border-[#ffe6d9] rounded-md bg-[#fff6f1] p-3 mb-6">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-[#e76a24]">
            <div className="flex items-center space-x-1">
              <i className="far fa-heart"></i>
              <span>Accept Donations</span>
            </div>
            <button className="text-xs border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-100">
              Show QR
            </button>
          </div>
          <div className="bg-white rounded-md p-3 text-xs text-gray-700">
            <div className="mb-1 font-semibold text-[11px]">UPI ID</div>
            <div className="font-bold text-sm break-all">happytails@paytm</div>
            <div className="text-[8px] text-gray-400 mt-1">
              Share this UPI ID with donors or show the QR code for quick
              payments
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="text-xs text-gray-700 font-semibold mb-2 flex items-center space-x-1">
          <i className="fas fa-user-friends"></i>
          <span>Recent Donations</span>
        </div>

        <ul className="space-y-2 text-[10px] font-normal text-gray-600">
          {[
            {
              name: "Anonymous",
              amount: "$100",
              note: "Keep up the great work!",
              date: "2024-01-15",
            },
            {
              name: "Maria Garcia",
              amount: "$50",
              note: "For the puppies 💕",
              date: "2024-01-14",
            },
            {
              name: "John Smith",
              amount: "$200",
              note: "Thank you for caring for these animals",
              date: "2024-01-13",
            },
            { name: "Anonymous", amount: "$25", note: "", date: "2024-01-12" },
            {
              name: "Lisa Chen",
              amount: "$75",
              note: "Hope this helps with medical expenses",
              date: "2024-01-10",
            },
          ].map((donation, idx) => (
            <li
              key={idx}
              className="border border-gray-200 rounded-md p-2 flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <span className="font-semibold text-gray-800">
                  {donation.name}
                </span>
                <span className="ml-2 bg-[#d9f0e2] text-[#2cae6a] rounded-full px-2 py-0.5 text-[9px] font-semibold">
                  {donation.amount}
                </span>
                {donation.note && (
                  <div className="mt-0.5 text-[9px] font-normal text-gray-600">
                    {donation.note}
                  </div>
                )}
              </div>
              <div className="text-[8px] text-gray-400 mt-1 sm:mt-0">
                {donation.date}
              </div>
            </li>
          ))}
        </ul>

        <div className="text-[#e76a24] text-[10px] font-semibold text-center mt-4 cursor-pointer">
          View all donations
        </div>
      </section>
    </main>
  );
}
