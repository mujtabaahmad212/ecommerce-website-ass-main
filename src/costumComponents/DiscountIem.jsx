import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Correctly import the image
import discountChair from "../assets/images/product/discount chair.png";


const DiscountSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animations
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // Animation starts when the section reaches 80% of the viewport
        toggleActions: "play none none reset", // Play animation when visible
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
   <div className="flex justify-center items-center  "> 
    
     <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-6 lg:px-20 bg-[#f2f2f2] w-screen h-[100vh]  ">
      {/* Left Side - Text Content */}
    
      <div ref={textRef} className="lg:w-1/2 text-center lg:text-left ">
      <h2 className="text-4xl font-bold text-blue-900">Discount Item</h2>
        <div className="flex justify-center lg:justify-start gap-4 mt-2 text-pink-500 font-medium">
          <span className="underline cursor-pointer">Wood Chair</span>
          <span className="cursor-pointer">Plastic Chair</span>
          <span className="cursor-pointer">Sofa Collection</span>
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mt-5">20% Discount Of All Products</h3>
        <p className="text-lg text-pink-500 font-semibold mt-1">Eams Sofa Compact</p>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>

        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 mt-5">
          <li>✔ Material expose like metals</li>
          <li>✔ Clear lines and geometric figures</li>
          <li>✔ Simple neutral colours</li>
          <li>✔ Material expose like metals</li>
        </ul>

        {/* Button */}
        <button className="bg-pink-500 text-white font-bold py-2 px-6 mt-6 rounded-md hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div ref={imageRef} className="lg:w-1/2 flex justify-center relative ">
        {/* Background Circle */}
        <div className="absolute bg-pink-100 w-64 h-64 lg:w-[500px] lg:h-[500px] rounded-full"></div>
        {/* Sofa Image */}
        <img src={discountChair} alt="Eams Sofa Compact" className="relative w-72 lg:w-[600px]" />
      </div>
    </div>
   </div>
  );
};

export default DiscountSection;
