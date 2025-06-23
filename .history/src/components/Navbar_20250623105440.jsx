import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/home", label: "Task List" },
  { path: "/addtask", label: "Add Task" },
  { path: "/login", label: "Login" },
  { path: "/signup", label: "Sign Up" },
  { path: "/logout", label: "Log Out" },
];

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-400 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo or Title */}
        <div>
          <h1 className="text-black font-bold text-lg sm:text-xl">Task App</h1>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition duration-200 hover:text-amber-50 ${
                  location.pathname === item.path
                    ? "text-white font-bold"
                    : "text-gray-950"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 bg-blue-400 rounded-md py-2 px-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block w-full transition duration-200 hover:text-amber-50 ${
                    location.pathname === item.path
                      ? "text-white font-bold"
                      : "text-gray-950"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
