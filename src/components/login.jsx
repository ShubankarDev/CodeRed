import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      if (res.data.success) {
        setMessage("✅ Login successful!");
        // optional: redirect to dashboard or store token
        // localStorage.setItem('token', res.data.token);
      } else {
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      setMessage("❌ Login failed. Server error.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#fefbf6] min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white rounded-lg shadow-[0_10px_15px_-3px_rgba(251,176,59,0.3)] p-8 w-full max-w-sm flex flex-col items-center">
        <svg
          className="w-12 h-12 mb-4 text-[#f47a3b]"
          fill="none"
          stroke="#f47a3b"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h2 className="text-gray-900 font-extrabold text-xl mb-1">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-6 text-sm">Sign in to your account</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-gray-900 font-semibold text-xs mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-md bg-[#fefbf6] border border-gray-200 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f47a3b] focus:border-transparent"
          />
          <label
            htmlFor="password"
            className="block text-gray-900 font-semibold text-xs mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-2 rounded-md bg-[#fefbf6] border border-gray-200 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f47a3b] focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#f47a3b] to-[#f88f4a] text-white font-semibold py-2 rounded-md hover:brightness-110 transition"
          >
            Sign In
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
        )}

        <p className="text-gray-500 text-xs mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#f47a3b] font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
