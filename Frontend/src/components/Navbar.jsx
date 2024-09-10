import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("Samyam");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="py-2 text-center text-white bg-primary">
        <p className="max-w-[90%] mx-auto text-sm">
          Check Income Tax Act 2058.{" "}
          <a
            href="/src/assets/income-tax-act-2058.pdf"
            download="income-tax-act-2058.pdf"
            className="underline"
          >
            Click Here!
          </a>
        </p>
      </div>
      <nav
        className={`bg-white bg-opacity-80 backdrop-blur-md shadow-md py-2 ${
          isOpen ? "h-screen" : ""
        }`}
      >
        <div className="mx-auto flex justify-between items-center py-2 max-w-[90%]">
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <img src="/img/nepgov.png" alt="Logo" className="h-16" />
              <div className="max-sm:hidden">
                <h2 className="text-2xl font-medium text-primary">
                  iTax Nepal
                </h2>
                <p className="text-sm">Digital Tax Payment Gateway</p>
              </div>
            </div>
          </Link>

          <div className="flex-grow px-10">
            <div className="relative items-center hidden lg:flex">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-4 py-2 bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border focus:border-primary focus:shadow-md focus:bg-white"
              />
              <FiSearch className="absolute w-6 h-6 ml-2 text-gray-400 top-2 right-3" />
            </div>
          </div>

          <div className="relative items-center hidden space-x-6 lg:flex">
            <Link to="/about" className="text-gray-800 hover:text-primary">
              About
            </Link>
            <Link to="/contact-us" className="text-gray-800 hover:text-primary">
              Contact Us
            </Link>
            {isLoggedIn ? (
              <Link className="px-8 py-2 text-white border border-transparent rounded bg-primary hover:bg-secondary">
                Hi, {username}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-8 py-2 text-white border border-transparent rounded bg-primary hover:bg-secondary"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-8 py-2 transition bg-transparent border rounded text-primary border-primary hover:border-primary hover:bg-primary hover:text-white"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
          <button
            className="text-gray-800 lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }`}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white bg-opacity-90 backdrop-blur-md h-screen overflow-y-auto pl-4 md:pl-8`}
        >
          <div className="relative pt-4 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch className="absolute w-6 h-6 mr-3 text-gray-400 top-6 right-4" />
          </div>
          {isLoggedIn && (
            <Link
              to="/profile"
              className="block pt-4 pl-4 text-gray-800 hover:text-primary"
              onClick={closeMenu}
            >
              Profile
            </Link>
          )}
          <Link
            to="/about"
            className="block pt-4 pl-4 text-gray-800 hover:text-primary"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="block pt-4 pl-4 text-gray-800 hover:text-primary"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          {!isLoggedIn && (
            <>
              <div className="pt-6 pl-4">
                <Link
                  to="/login"
                  className="px-8 py-2 text-white border border-transparent rounded bg-primary hover:bg-secondary"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </div>
              <div className="pt-8 pl-4">
                <Link
                  to="/signup"
                  className="px-8 py-2 bg-white border rounded text-primary border-primary hover:bg-secondary"
                  onClick={closeMenu}
                >
                  Signup
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
