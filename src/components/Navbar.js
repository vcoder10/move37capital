import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-[#1b4460] py-4 shadow-md font-sans">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="./images/logo_white_png.png"
              alt="logo"
              className="h-8 md:h-10 object-contain lg:pl-6"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-14 xl:space-x-20 2xl:space-x-24 ml-2 sm:ml-6 md:ml-12 lg:ml-20 xl:ml-28 2xl:ml-36">
            <Link
              to="/"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>

            <Link
              to="/contact"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-blue-400 transition font-medium"
            >
              Contact
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
