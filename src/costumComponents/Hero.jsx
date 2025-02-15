import React, { useEffect } from "react";
import gsap from "gsap";
import heroimage1 from "../assets/images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import herobgimg from "../assets/images/blob-haikei.png";

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-bg-img", {
      rotation: 6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 1,
      x: "-5px",
    });

    gsap.to(".hero-img", {
      y: "-10px",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center bg-[#040404] text-stone-300 px-4 md:px-12 py-8 md:py-16">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img src={herobgimg} alt="" className="absolute size-full hero-bg-img" />
          <img src={heroimage1} alt="" className="relative z-10 w-full hero-img" />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Unique Features Of Latest & Trending Products
        </h1>

        <div className="flex flex-col gap-4 my-6 text-sm sm:text-base md:text-lg">
          <FeatureItem color="bg-red-300" text="All frames constructed with hardwood solids and laminates" />
          <FeatureItem color="bg-blue-300" text="Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails" />
          <FeatureItem color="bg-green-300" text="Arms, backs, and seats are structurally reinforced" />
        </div>

        {/* Button & Price Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
          <button className="bg-[#0C7489] px-6 py-3 rounded-md hover:bg-[#119DA4] font-bold">
            Add To Cart
          </button>
          <div>
            <p>B&B Italian Sofa</p>
            <p className="text-xl font-bold">$32.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable FeatureItem Component
const FeatureItem = ({ color, text }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 ${color} rounded-full`}></div>
    <p>{text}</p>
  </div>
);

export default Hero;
