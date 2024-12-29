import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Create Resume", to: "/resume" },
    { id: 3, text: "Cover Letter", to: "/cover-letter" },
    { id: 4, text: "Chat", to: "/chat" },
  ];
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md text-black  flex items-center justify-between px-4 py-5 sm:py-8 transition-all duration-3 z-50 ${
        isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      <div className="text-base cursor-pointer font-poppins font-bold ml-5 flex justify-start">
        <Link to='/'>Agency HR</Link>
      </div>
      <div className="flex-1 flex items-center justify-end">
        {/* <Hamburger /> */}
        <ul className="sm:flex space-x-4 hidden">
          <li>
            <Link
              to="/"
              className=" nav-link relative cursor-pointer text-black font-semibold font-poppins text-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className=" nav-link relative cursor-pointer text-black font-semibold font-poppins text-sm"
            >
              Create Resume
            </Link>
          </li>
          <li>
            <Link
              to="/cover-letter"
              className=" nav-link relative cursor-pointer text-black font-semibold font-poppins text-sm"
            >
              Cover Letter
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className=" nav-link relative cursor-pointer text-black font-semibold font-poppins text-sm"
            >
              Chat
            </Link>
          </li>
        </ul>

        <div className="relative z-50">
          <button
            type="button"
            onClick={toggleDrawer}
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-black"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white text-white transform ${
              IsOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out sm:hidden`}
          >
            <div className="p-4 flex justify-end items-center">
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <ul className="p-4 space-y-2 text-black">
              {links.map((item) => (
                <li key={item.id} onClick={toggleDrawer}>
                  <Link
                    to={item.to}
                    className="block px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {IsOpen && (
            <div
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black bg-opacity-50 sm:hidden -z-50"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
