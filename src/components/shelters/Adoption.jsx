import React from "react";
//import "./Adoption.css"; // If you want to define line-clamp-3 or other utilities
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const pets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 years old",
    gender: "Male",
    vaccinated: true,
    location: "Downtown Shelter",
    description:
      "Buddy is a friendly and energetic Golden Retriever who loves playing fetch and swimming. He's great with kids...",
    image:
      "https://storage.googleapis.com/a1aa/image/04dcd111-94bc-4c56-674b-80e190d36d37.jpg",
  },
  {
    name: "Whiskers",
    breed: "Orange Tabby",
    age: "2 years old",
    gender: "Female",
    vaccinated: true,
    location: "North Branch",
    description:
      "Whiskers is a calm and affectionate cat who loves lounging in sunny spots and getting belly rubs. She's...",
    image:
      "https://storage.googleapis.com/a1aa/image/7cb91e21-e40b-471d-d875-d80a32795293.jpg",
  },
  {
    name: "Charlie",
    breed: "Mixed Breed",
    age: "6 months old",
    gender: "Male",
    vaccinated: false,
    location: "Downtown Shelter",
    description:
      "Charlie is a playful puppy with boundless energy and curiosity. He's eager to learn and would love an active...",
    image:
      "https://storage.googleapis.com/a1aa/image/030f4e5e-2eec-4902-42e5-73498854d4bf.jpg",
  },
  {
    name: "Luna",
    breed: "Russian Blue Mix",
    age: "4 years old",
    gender: "Female",
    vaccinated: true,
    location: "East Side Clinic",
    description:
      "Luna is an elegant and serene cat with stunning blue eyes. She enjoys quiet environments and gentle petting...",
    image:
      "https://storage.googleapis.com/a1aa/image/5b52d143-02fc-47d1-d5ba-d46f4f911d85.jpg",
  },
];

const Adoption = () => {
  return (
    <div className="bg-[#fffaf0] font-sans">
      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#f58220] tracking-wide">
            🐾 Paws & Hearts
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#adopt" className="text-gray-700 hover:text-[#f58220] font-medium">
              Adopt
            </a>
            <a href="#donate" className="text-gray-700 hover:text-[#f58220] font-medium">
              Donate
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#f58220] font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#f58220] font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1598137260926-58b0d11149ee?auto=format&fit=crop&w=1050&q=80')` }}>
        <div className="bg-black bg-opacity-40 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Find Your New Best Friend 🐶🐱
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl">
            Adopt   , don't shop. Give a loving home to a furry companion.
          </p>
          <a href="#adopt">
            <button className="mt-6 bg-[#f58220] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d96f0a] transition">
              Start Your Journey
            </button>
          </a>
        </div>
      </section>

      {/* SEARCH */}
      <section className="py-10 px-6 bg-[#fff9f2] text-center">
        <h2 className="text-3xl font-bold text-[#f58220] mb-4">Search for Pets</h2>
        <input
          type="text"
          placeholder="Search by name or breed"
          className="w-full sm:w-1/2 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f58220]"
        />
      </section>

      {/* ADOPTION CARDS */}
      <section className="py-12 px-6 bg-[#fff9f2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={pet.image}
                  alt={`${pet.breed} named ${pet.name}`}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <span className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-medium rounded-full px-3 py-1">
                  {pet.gender}
                </span>
                <span
                  className={`absolute top-4 right-4 text-sm font-semibold rounded-full px-4 py-1 ${
                    pet.vaccinated
                      ? "bg-[#f58220] text-white"
                      : "bg-[#c7e9f7] text-[#1a3e4c]"
                  }`}
                >
                  {pet.vaccinated ? "Vaccinated" : "Not Vaccinated"}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{pet.name}</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaHeart />
                  </button>
                </div>
                <p className="text-gray-600 mb-1">{pet.breed}</p>
                <p className="text-gray-600 mb-1">{pet.age}</p>
                <p className="text-gray-500 text-sm flex items-center mb-4">
                  <FaMapMarkerAlt className="mr-1" /> {pet.location}
                </p>
                <p className="text-gray-900 flex-grow mb-6 line-clamp-3">{pet.description}</p>
                <div className="flex space-x-4">
                  <button className="flex-grow border border-[#f58220] text-[#f58220] font-semibold rounded-lg py-2 hover:bg-[#fef4e9] transition">
                    Learn More
                  </button>
                  <button className="flex-grow bg-[#f58220] text-white font-semibold rounded-lg py-2 hover:bg-[#d96f0a] transition">
                    Adopt Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Adoption;
