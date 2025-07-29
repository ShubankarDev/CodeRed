import { useState } from "react";

function HeroSection() {
  return (
    <section
      aria-label="Hero section with happy dogs and cats"
      className="relative w-full max-h-[600px] overflow-hidden"
    >
      <img
        alt="Happy dogs and cats sitting together indoors"
        className="w-full h-[600px] object-cover"
        loading="lazy"
        src="https://storage.googleapis.com/a1aa/image/b970db6b-08bb-4b39-3aeb-8d5f266a2ccd.jpg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-4xl leading-tight">
          Find Your Perfect Companion
        </h1>
        <p className="text-white mt-3 max-w-xl text-sm sm:text-base">
          Every pet deserves a loving home. Browse our animals and start your adoption journey today.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 max-w-xl w-full">
          <div className="relative flex-grow w-full sm:w-auto">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <i className="fas fa-search" />
            </span>
            <input
              type="search"
              placeholder="Search by name or breed..."
              className="pl-10 pr-4 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-[320px] text-gray-700 text-sm"
            />
          </div>
          <button
            type="button"
            className="flex items-center space-x-2 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 text-white rounded-md px-4 py-2 text-sm font-semibold"
          >
            <i className="fas fa-filter" />
            <span>Filter</span>
          </button>
        </form>

        <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3 flex items-center space-x-2 text-sm sm:text-base">
            <span>Start Adopting</span>
            <i className="fas fa-arrow-right" />
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-6 py-3 text-white text-sm sm:text-base bg-black bg-opacity-30 hover:bg-opacity-40">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Donate Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "1,200+", label: "Happy Adoptions", color: "text-orange-500" },
    { value: "4", label: "Available Pets", color: "text-green-400" },
    { value: "15+", label: "Partner Shelters", color: "text-sky-400" },
    { value: "₹50L+", label: "Donations Raised", color: "text-orange-500" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 text-center">
      {stats.map((s, i) => (
        <div key={i}>
          <h2 className={`${s.color} font-extrabold text-3xl sm:text-4xl`}>{s.value}</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">{s.label}</p>
        </div>
      ))}
    </section>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <svg
          className="h-7 w-7 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-extrabold text-gray-900 text-lg select-none">PawsConnect</span>
      </div>
      <div className="hidden md:flex space-x-8 text-gray-800 text-sm font-normal">
        <a className="hover:text-gray-900" href="#">Home</a>
        <a className="hover:text-gray-900" href="#">Donate</a>
      </div>
      <div className="flex space-x-3">
        <button className="text-gray-800 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-normal hover:bg-gray-50">Sign In</button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2 text-sm font-semibold">Get Started</button>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </>
  );
}

export default Home;
