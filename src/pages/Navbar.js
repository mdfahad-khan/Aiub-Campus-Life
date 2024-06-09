import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-[#004EA2] shadow-md">
      <div className="relative max-w-screen-lg mx-auto flex bg-white md:bg-[#004EA2]  items-center justify-between px-4 py-1 md:px-0 md:py-0 ">
        {/* Mobile Menu Button */}
        <div className="flex">
          <Link to="/" className="md:hidden mt-2">
            <img
              src={logo}
              alt="American International University-Bangladesh Logo"
              className="h-16 w-16 cursor-pointer rounded-full"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>
          <div className="uppercase block md:hidden  text-[12px] font-bold ml-3 text-[#004EA2] leading-tight ">
            <p>American </p>
            <p>Interantional </p>
            <p>University-</p>
            <p>Bangladesh</p>
            <p className="lowercase text-gray-500">where leaders are created</p>
          </div>
        </div>

        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo */}

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex  md:items-center w-full md:w-auto md:relative absolute top-full left-0 bg-[#004EA2] md:bg-transparent md:space-x-8`}
        >
          <ul className="flex flex-col items-center  md:gap-[120px] sm:gap-[70px]  md:flex-row  w-full md:w-auto text-white md:text-white uppercase font-oswald">
            <li className="text-center">
              <Link
                to="/student-activities"
                className="block md:w-40 sm:w-24   py-2 hover:bg-[#203253] transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Activities
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/clubs"
                className="block md:w-40 sm:w-24 py-2 hover:bg-[#203253] transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Clubs
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/facilities"
                className="block md:w-40 sm:w-24 py-2 hover:bg-[#203253] transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Facilities
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/contact"
                className="block md:w-40 sm:w-24 py-2 hover:bg-[#203253] transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Centered Logo for Desktop */}
        <div className="hidden md:block absolute left-1/2 mt-6 transform -translate-x-1/2">
          <Link to="/">
            <img
              src={logo}
              alt="American International University-Bangladesh Logo"
              className="h-16 w-16 cursor-pointer hover:shadow-blue-lg transition-shadow duration-200 rounded-full"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
