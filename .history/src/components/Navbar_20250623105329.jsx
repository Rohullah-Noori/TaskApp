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
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-blue-400 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="w-16 h-16">
          <h1 className="text-black sm:font-bold sm:text-xl text-lg">
            Task App
          </h1>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

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

      {open && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 bg-blue-400 rounded-md py-2 px-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
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
