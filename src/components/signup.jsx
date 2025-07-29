import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "Adopter",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAccountType = (type) => {
    setFormData((prev) => ({ ...prev, accountType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating account...");

    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);

      if (res.data.success) {
        setMessage("✅ Account created successfully!");
        // optional: redirect to login page or dashboard
      } else {
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Signup failed. Try again.");
    }
  };

  return (
    <div className="bg-[#fefbf6] min-h-screen flex items-center justify-center p-4">
      <main className="bg-white rounded-lg shadow-[0_10px_15px_-3px_rgba(251,176,124,0.3)] max-w-md w-full p-8">
        <div className="flex justify-center mb-4">
          <img
            src="https://storage.googleapis.com/a1aa/image/581a3ad8-7c76-41fe-8b04-d1b8484cfc89.jpg"
            alt="Orange heart icon"
            className="w-10 h-10"
          />
        </div>
        <h1 className="text-center text-gray-900 font-semibold text-xl mb-2">
          Join PawsConnect
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Create an account to get started
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-transparent bg-[#f9f8f6] text-gray-500 text-sm placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-transparent bg-[#f9f8f6] text-gray-500 text-sm placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">Account Type</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleAccountType("Adopter")}
                className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-md font-semibold ${
                  formData.accountType === "Adopter"
                    ? "bg-[#f9733e] text-white"
                    : "bg-[#faf9f7] text-gray-800 border border-transparent hover:bg-gray-100"
                }`}
              >
                <i className="fas fa-user" />
                Adopter
              </button>
              <button
                type="button"
                onClick={() => handleAccountType("Shelter")}
                className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-md font-semibold ${
                  formData.accountType === "Shelter"
                    ? "bg-[#f9733e] text-white"
                    : "bg-[#faf9f7] text-gray-800 border border-transparent hover:bg-gray-100"
                }`}
              >
                <i className="fas fa-building" />
                Shelter
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#f9733e] to-[#fbaf6c] text-white font-semibold rounded-md px-4 py-3 mt-4"
          >
            Create Account
          </button>
        </form>
        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}
        <p className="text-center text-gray-500 text-xs mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#f9733e] font-semibold">
            Sign in
          </a>
        </p>
      </main>
    </div>
  );
}

export default SignUp;
