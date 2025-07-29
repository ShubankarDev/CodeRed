import React from "react";

// Dummy pet data
const pets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    description: "Friendly and energetic dog, great with kids and other pets.",
    image:
      "https://storage.googleapis.com/a1aa/image/3e88aa85-2cd0-4d6f-6650-756a31f532d8.jpg",
  },
  {
    name: "Whiskers",
    breed: "Persian Cat",
    age: "1 year",
    description: "Calm and loving cat, enjoys quiet environments.",
    image:
      "https://storage.googleapis.com/a1aa/image/07898088-1aa0-4f3e-4a72-9222bd7e8a08.jpg",
  },
  {
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    description:
      "Intelligent and loyal dog, well-trained and great for active families.",
    image:
      "https://storage.googleapis.com/a1aa/image/c342998d-d28a-4ad9-39cf-0619727c1cdf.jpg",
  },
  {
    name: "Luna",
    breed: "Tabby Cat",
    age: "6 months",
    description: "Playful kitten with lots of energy.",
    image:
      "https://storage.googleapis.com/a1aa/image/39bd4228-b5f6-43a9-d699-27e5758702b1.jpg",
  },
];

// Navbar
const Navbar = () => (
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
      <button className="text-gray-800 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-normal hover:bg-gray-50" onClick={() => window.location.href='/login'}>Sign In</button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2 text-sm font-semibold" onClick={() => window.location.href='/signup'}>Get Started</button>
    </div>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="relative w-full max-h-[600px] overflow-hidden">
    <img
      alt="Happy dogs and cats together"
      src="https://storage.googleapis.com/a1aa/image/b970db6b-08bb-4b39-3aeb-8d5f266a2ccd.jpg"
      className="w-full h-[600px] object-cover"
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

// Stats Section
const StatsSection = () => {
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
};

// Pet Card
const PetCard = ({ pet }) => (
  <article className="bg-white rounded-lg shadow-sm overflow-hidden relative">
    <img
      src={pet.image}
      alt={`${pet.breed} named ${pet.name}`}
      className="w-full h-56 object-cover rounded-t-lg"
    />
    <button
      aria-label={`Add ${pet.name} to favorites`}
      className="absolute top-3 left-3 bg-white bg-opacity-90 rounded-md p-2 text-gray-600 hover:text-gray-900"
    >
      <i className="far fa-heart" />
    </button>
    <span className="absolute top-3 right-3 bg-green-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
      available
    </span>
    <div className="p-4 text-left">
      <h3 className="font-semibold text-gray-900 mb-1">{pet.name}</h3>
      <p className="text-xs text-gray-500 flex items-center mb-1">
        <i className="fas fa-map-marker-alt mr-1" />
        {pet.breed}
      </p>
      <p className="text-xs text-gray-500 flex items-center mb-2">
        <i className="far fa-calendar-alt mr-1" />
        {pet.age}
      </p>
      <p className="text-sm text-gray-800 mb-4">{pet.description}</p>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
          <i className="far fa-eye" />
          View Details
        </button>
        <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-md px-4 py-2 text-sm font-semibold">
          Apply to Adopt
        </button>
      </div>
    </div>
  </article>
);

// Featured Pets
const FeaturedPets = () => (
  <section className="bg-[#fdfaf4] px-4 py-16">
    <div className="text-center max-w-xl mx-auto mb-12">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Featured Pets</h2>
      <p className="text-gray-600 text-sm md:text-base">
        Meet some of our amazing animals looking for homes
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
      {pets.map((pet, idx) => (
        <PetCard key={idx} pet={pet} />
      ))}
    </div>
    <div className="text-center">
      <button className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-md px-6 py-3 text-sm md:text-base">
        View All Pets <i className="fas fa-arrow-right" />
      </button>
    </div>
  </section>
);

const HowItWorksAndSuccessStories = () => (
  <section className="bg-[#faf7f2] font-sans text-gray-900 px-6 py-16">
    {/* How It Works */}
    <div className="text-center max-w-xl mx-auto mb-20">
      <h2 className="text-2xl font-extrabold mb-2">How It Works</h2>
      <p className="text-gray-600">Simple steps to find your new best friend</p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-20 max-w-5xl mx-auto text-center">
      {[
        {
          step: "1",
          title: "Browse Pets",
          desc: "Search through our database of loving animals waiting for homes",
          bg: "bg-[#f87f4f]",
        },
        {
          step: "2",
          title: "Apply to Adopt",
          desc: "Fill out our adoption application with your details and preferences",
          bg: "bg-[#7acb9a]",
        },
        {
          step: "3",
          title: "Take Them Home",
          desc: "Once approved, welcome your new family member home!",
          bg: "bg-[#5bb9e9]",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-xs">
          <div className={`${item.bg} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4 text-lg select-none`}>
            {item.step}
          </div>
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Success Stories Section
const SuccessStories = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-extrabold text-gray-900">Success Stories</h2>
      <p className="mt-2 text-gray-600">Hear from our happy adopters</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Adopting Max was the best decision we ever made. The process was smooth and the staff was incredibly helpful.",
          name: "Sarah Johnson",
          details: "Adopted Max, German Shepherd",
          color: "bg-orange-500",
          initial: "S"
        },
        {
          quote: "Luna has brought so much joy to our family. She's the perfect addition and we couldn't be happier!",
          name: "Mike Chen",
          details: "Adopted Luna, Tabby Cat",
          color: "bg-green-400",
          initial: "M"
        },
        {
          quote: "The team made sure Buddy was the right fit for our lifestyle. Professional and caring service!",
          name: "Amanda Wilson",
          details: "Adopted Buddy, Golden Retriever",
          color: "bg-sky-400",
          initial: "A"
        }
      ].map((story, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex space-x-1 mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">"{story.quote}"</p>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${story.color} text-white font-semibold`} aria-label={`Profile avatar with letter ${story.initial}`}>
              {story.initial}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{story.name}</p>
              <p className="text-gray-500 text-sm">{story.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Call to Action Section
const CallToAction = () => (
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
);

// Main Home Component
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedPets />
      <HowItWorksAndSuccessStories />
      <SuccessStories />
      <CallToAction />
    </>
  );
}

export default Home;
