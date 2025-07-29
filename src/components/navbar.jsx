
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


export default Navbar;