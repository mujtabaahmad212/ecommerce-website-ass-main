import React,  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom"; // Change Link to NavLink
import { RxHamburgerMenu } from "react-icons/rx";
import { Sun, Moon } from "lucide-react"; // Importing icons
// import gsap from "gsap"; // Import GSAP

const navlinks = [
  { title: "Home", url: "/" },
  { title: "Product", url: "/Product" },
  { title: "Shop", url: "/Shop" },
  { title: "Contact", url: "/Contact" },
  { title: "Wishlist", url: "/Wishlist" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   // Example GSAP animation
  //   gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
  // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        {/* Navbar */}
        <div className="navbar flex justify-between items-center h-16 backdrop-blur-md bg-[#000000] font-bold text-[#FEF9E1] px-6 w-full">
          {/* Brand Name */}
          <div className="flex justify-center items-center h-10 flex-shrink-0">
            <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
          </div>

          {/* Search Box */}
          <div className="flex justify-center items-center h-10 flex-grow max-w-md mx-4">
            <input
              type="search"
              className="w-32 sm:w-48 md:w-52 lg:w-60 focus:w-full transition-all duration-500 rounded-tl-xl rounded-bl-xl px-3 py-1 text-black dark:text-white dark:bg-gray-800 focus:outline-none"
              placeholder="Search..."
            />
            <CiSearch className="size-5 h-6 cursor-pointer bg-[#000001] text-white w-8 flex items-center justify-center rounded-tr-xl rounded-br-xl p-1" />
          </div>

          {/* Full Navigation for Medium Screens and Larger */}
          <nav className="hidden md:flex gap-6 justify-end items-center flex-shrink-0">
            {navlinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                className={({ isActive }) =>
                  `px-2 py-1 text-[#ffffff] rounded-lg transition-all hover:text-[#fafafa] after:content-[''] after:block after:h-1 after:bg-[#fafafa] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-xl ${
                    isActive ? "bg-[#333333]" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
            {/* Dark Mode Toggle */}
            <button
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </nav>

          {/* Hamburger Menu */}
          <div className="md:hidden" onClick={toggleMenu}>
            <RxHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>

        {/* Navigation for Small Screens */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-[#000000] md:hidden`}
        >
          <nav className="flex flex-col gap-4 p-4">
            {navlinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-2 py-2 text-center text-[#FEF9E1] bg-[#111111] hover:bg-[#222222] rounded-lg transition-all ${
                    isActive ? "bg-[#333333]" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
