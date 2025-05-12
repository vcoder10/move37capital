import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/London-Slide.jpg"
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-blue-900 px-4 transform-none sm:transform sm:translate-x-[-40px] sm:translate-y-[-40px]">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl">
          A Fast Growing Asset Management Firm
          <sup className="relative -top-3 sm:-top-4 md:-top-5 text-sm sm:text-base md:text-lg lg:text-xl mr-4">*</sup>

        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-xl">
          Trusted by top institutional investors
        </p>

        <Link
          to="/contact"
          className="bg-[#122F43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#122F68] transition text-sm sm:text-base"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
