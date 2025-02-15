import React, { useState, useEffect } from "react";
import "./App.css";
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa"; // Import the icon for Go to Top
import { Routes, Route } from "react-router-dom";
import Navbar from "./costumComponents/Navbar.jsx";
import Home from "./costumComponents/Home.jsx";
// import Pages from "./costumComponents/Pages.jsx";
import Product from "./costumComponents/Product.jsx";
import ProductDetail from "./costumComponents/ProductDetails";
import Blog from "./costumComponents/Blog.jsx";
import Shop from "./costumComponents/Shop.jsx";
import Contact from "./costumComponents/Contact.jsx";
import Footer from "./costumComponents/Footer.jsx";
import Wishlist from "./costumComponents/Wishlist.jsx";


function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [wishlist, setWishlist] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  // Show "Go to Top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to toggle wishlist items
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === product.id)
        ? prevWishlist.filter((item) => item.id !== product.id)
        : [...prevWishlist, product]
    );
  };

  // Function to remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Top Bar */}
      <div className="bg-purple-600 font-mono text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section: Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <p className="flex justify-center items-center gap-2 cursor-pointer">
              <MdEmail /> user@gmail.com
            </p>
            <p className="flex justify-center items-center gap-2 cursor-pointer">
              <FaPhoneAlt /> 0342 14aug1947
            </p>
          </div>

          {/* Right Section: Language, Currency, Wishlist */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-5">
            <select
              defaultValue="English"
              className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none"
            >
              <option>English</option>
              <option>Urdu</option>
              <option>Arabic</option>
            </select>
            <select
              defaultValue="USD"
              className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none"
            >
              <option>USD</option>
              <option>PKR</option>
              <option>UAE</option>
            </select>

            {/* Wishlist Icon with Count */}
            <div className="flex justify-center items-center gap-2 text-white cursor-pointer">
              <CiHeart className="text-lg" />
              <span>{wishlist.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            {/* <Route path="/Pages" element={<Pages />} /> */}
            <Route
              path="/Product"
              element={
                <Product
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                  darkMode={darkMode}
                />
              }
            />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact darkMode={darkMode} />} />
            <Route
              path="/Wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                />
              }
            />
          </Routes>
        </main>

        {/* Floating "Go to Top" Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
