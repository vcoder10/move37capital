import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden flex flex-col justify-center items-center px-4 landscape:h-screen landscape:pt-8 landscape:pb-8 landscape:justify-start">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/London-Slide.webp"
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-blue-900 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold mb-3 leading-tight max-w-4xl landscape:text-base">
          A Fast Growing Asset Management Firm
          <sup className="relative -top-2 text-xs sm:text-sm ml-1">*</sup>
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-5 max-w-xl whitespace-normal landscape:text-xs">
          Trusted by top institutional investors
        </p>

        <Link
          to="/contact"
          className="bg-[#1b4460] text-white px-4 py-2 rounded-full font-medium hover:bg-[#122F43] transition text-xs sm:text-sm landscape:text-xs"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
