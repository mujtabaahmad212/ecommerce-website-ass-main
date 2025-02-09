import React, { useState } from "react";
import "./App.css";
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./costumComponents/Navbar.jsx";
import Home from "./costumComponents/Home.jsx";
import Pages from "./costumComponents/Pages.jsx";
import Product from "./costumComponents/Product.jsx";
import Blog from "./costumComponents/Blog.jsx";
import Shop from "./costumComponents/Shop.jsx";
import Contact from "./costumComponents/Contact.jsx";
import Footer from "./costumComponents/Footer.jsx";
import Wishlist from "./costumComponents/Wishlist.jsx";
import { Routes, Route } from "react-router-dom";
// import Heartliked from "./costumComponents/Heartliked.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle wishlist items
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === product.id)
        ? prevWishlist.filter((item) => item.id !== product.id)
        : [...prevWishlist, product]
    );
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen transition-colors duration-300`}>
      
      {/* Top Bar */}
      <div className="bg-purple-600 p-1 font-mono text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Section: Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <p className="flex justify-center items-center gap-2 cursor-pointer">
              <MdEmail /> user@gmail.com
            </p>
            <p className="flex justify-center items-center gap-2 cursor-pointer">
              <FaPhoneAlt /> 0342 14aug1947
            </p>
            {/* <Heartliked /> */}
          </div>

          {/* Right Section: Language, Currency, Wishlist */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-5">
            <select className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none">
              <option selected>English</option>
              <option>Urdu</option>
              <option>Arabic</option>
            </select>
            <select className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none">
              <option selected>USD</option>
              <option>PKR</option>
              <option>UAE</option>
            </select>

            {/* Wishlist Icon with Count */}
            <div className="flex justify-center items-center gap-2 text-white cursor-pointer">
              <CiHeart className="text-lg" />
              <span>{wishlist.length}</span>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-md font-semibold transition ${darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Product" element={<Product toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Wishlist" element={<Wishlist wishlist={wishlist} darkMode={darkMode} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
