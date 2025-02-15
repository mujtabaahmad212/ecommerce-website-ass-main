import React from "react";
import { Link } from "react-router-dom";
import HeadHeroimg from "../assets/images/product/pink sofa.png";

const Hero = ({ darkMode }) => {
  return (
    <section
      className={`relative py-12 px-6 md:px-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-pink-500 font-semibold">
            Best Furniture For Your Castle..
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/shop"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-pink-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img
            src={HeadHeroimg}
            alt="Furniture"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
          {/* Discount Badge */}
          <div className="absolute top-0 right-4 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
