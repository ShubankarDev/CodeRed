import React from "react";

export default function RequestsDashboard() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="font-extrabold text-2xl mb-1">Shelter Dashboard</h1>
      <p className="text-gray-600 mb-6 text-sm max-w-xl">
        Manage your animals, adoption requests, and track donations.
      </p>

      {/* Tabs */}
      <nav className="inline-flex rounded-md bg-gray-100 border border-gray-200 mb-6 text-xs font-semibold text-gray-700 select-none">
        <button className="px-4 py-2 rounded-l-md hover:bg-gray-200">
          Animals (3)
        </button>
        <button
          aria-current="page"
          className="px-6 py-2 bg-white border-x border-gray-200 font-bold"
        >
          Requests (2)
        </button>
        <button className="px-5 py-2 rounded-r-md hover:bg-gray-200">
          Donations
        </button>
      </nav>

      <section className="border border-gray-200 rounded-md overflow-hidden">
        <header className="flex justify-between items-center bg-[#f9fbfd] border-b border-gray-200 px-5 py-3">
          <h2 className="font-semibold text-gray-900 text-sm flex items-center space-x-2">
            <i className="fas fa-user-friends text-[#f37021]" />
            <span>Adoption Requests</span>
          </h2>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded">
            3 pending
          </span>
        </header>

        <div className="p-5 space-y-6">
          {/* Pending Requests */}
          <div>
            <h3 className="text-[#f37021] font-semibold text-sm mb-3">
              Pending Requests
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Sarah Johnson", pet: "Buddy", date: "2024-01-15" },
                { name: "Mike Chen", pet: "Luna", date: "2024-01-14" },
                { name: "Emma Davis", pet: "Buddy", date: "2024-01-13" },
              ].map((req, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-md p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-1 font-semibold text-sm text-gray-900">
                      <i className="fas fa-chevron-right text-xs" />
                      <span>{req.name}</span>
                    </button>
                    <span className="text-xs text-gray-500">
                      wants to adopt {req.pet}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                      Pending
                    </span>
                    <time className="text-xs text-gray-600">{req.date}</time>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="font-semibold text-gray-700 text-sm mb-3">
              Recent Activity
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Robert Wilson",
                  pet: "Max",
                  status: "Approved",
                  color: "green",
                  date: "2024-01-10",
                },
                {
                  name: "Jessica Brown",
                  pet: "Luna",
                  status: "Rejected",
                  color: "red",
                  date: "2024-01-12",
                },
              ].map((act, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-md p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-1 font-semibold text-sm text-gray-900">
                      <i className="fas fa-chevron-right text-xs" />
                      <span>{act.name}</span>
                    </button>
                    <span className="text-xs text-gray-500">
                      wants to adopt {act.pet}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`bg-${act.color}-500 text-white text-xs font-semibold px-2 py-0.5 rounded`}
                    >
                      {act.status}
                    </span>
                    <time className="text-xs text-gray-600">{act.date}</time>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
