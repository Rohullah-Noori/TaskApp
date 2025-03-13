import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const location = useLocation();
  const [Open, setIsOpen] = useState(false);

  function Toggle() {
    setIsOpen(!Open);
  }

  return (
    <nav className="bg-blue-400  flex shadow-lg p-4  justify-between    sticky top-0 z-10 ">
      <div className="size-20  ">
        <img src="../src/assets/logo/Capture.PNG" className="rounded-lg" />
      </div>
      <div className="lg:hidden">
        <button className="text-white" onClick={Toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
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
      <ul className=" hidden lg:flex space-x-10">
        {[
          {
            path: "/home",
            label: "Home",
          },
          {
            path: "/addtask",
            label: "Addtask",
          },
          {
            path: "/",
            label: "Landing",
          },
          {
            path: "/login",
            label: "Login",
          },

          {
            path: "/signup",
            label: "Sign up",
          },
          {
            path: "/logout",
            label: "Log out",
          },
          {
            path: "/edit-task/:taskID",
            label: "Edit",
          },
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:text-amber-50 active:text-amber-50 ${
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
      <div
        className={`${
          Open ? "block" : "hidden"
        } absolute w-full top-24 flex flex-col justify-center items-start pl-6  text-center left-0 bg-blue-400 text-white text-center py-4`}
      >
        {[
          {
            path: "/home",
            label: "Home",
          },
          {
            path: "/addtask",
            label: "Addtask",
          },
          {
            path: "/",
            label: "Landing",
          },
          {
            path: "/login",
            label: "Login",
          },

          {
            path: "/signup",
            label: "Sign up",
          },
          {
            path: "/edittask",
            label: "Edit",
          },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-amber-50 active:text-amber-50 ${
              location.pathname === item.path
                ? "text-white font-bold"
                : "text-gray-950"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
