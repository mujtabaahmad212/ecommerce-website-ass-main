import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import watch from "../assets/images/product/analog hand watch.png";
import bag from "../assets/images/product/bag.png";
import blackBag from "../assets/images/product/black bag.png";
import headphones from "../assets/images/product/black pibk headphones.png";
import camera from "../assets/images/product/canone camera.png";
import chair from "../assets/images/product/cool gray sofa chair.png";
import sofa from "../assets/images/product/cool sofa chair.png";
import femaleWatch from "../assets/images/product/female watch.png";
import handWatch from "../assets/images/product/handwatch.png";
import pinkSofa from "../assets/images/product/light pink sofa.png";
import redHeadphones from "../assets/images/product/red headphones.png";

const products = [
  { id: 1, name: "Analog Hand Watch", price: "$80.00", oldPrice: "$100.00", image: watch },
  { id: 2, name: "Leather Travel Bag", price: "$90.00", oldPrice: "$120.00", image: bag },
  { id: 3, name: "Black Leather Bag", price: "$90.00", oldPrice: "$120.00", image: blackBag },
  { id: 4, name: "Wireless Headphones", price: "$95.00", oldPrice: "$110.00", image: headphones },
  { id: 5, name: "Canon Camera", price: "$85.00", oldPrice: "$95.00", image: camera },
  { id: 6, name: "Modern Sofa Chair", price: "$78.00", oldPrice: "$90.00", image: chair },
  { id: 7, name: "Comfortable Sofa Chair", price: "$92.00", oldPrice: "$110.00", image: sofa },
  { id: 8, name: "Stylish Women's Watch", price: "$50.00", oldPrice: "$70.00", image: femaleWatch },
  { id: 9, name: "Classic Hand Watch", price: "$40.00", oldPrice: "$60.00", image: handWatch },
  { id: 10, name: "Light Pink Sofa", price: "$80.00", oldPrice: "$100.00", image: pinkSofa },
  { id: 11, name: "Red Wireless Headphones", price: "$90.00", oldPrice: "$110.00", image: redHeadphones },
];

const Product = ({ darkMode }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Function to toggle wishlist items
  const toggleWishlist = (product) => {
    const isFavorite = wishlist.some((item) => item.id === product.id);
    let updatedWishlist;

    if (isFavorite) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className={`container mx-auto p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 px-10">
        {products.map((product) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);

          return (
            <div key={product.id} className={`relative p-4 rounded-3xl shadow-md transition ${darkMode ? "bg-gray-800" : "bg-[#d7d1d1]"}`}>
              {/* Wishlist Icon */}
              <button onClick={() => toggleWishlist(product)} className="absolute top-2 right-2 text-xl ">
                {isInWishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400 " />}
              </button>

              {/* Product Image */}
              <div className={`bg-slate-400 rounded-xl h-80 w-full flex items-center justify-center group hover:bg-gray-300 transition duration-300 ease-in-out ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <img src={product.image} alt={product.name} className="w-full h-72" />
              </div>

              {/* Product Info */}
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <span className="text-red-400 line-through mr-2">{product.oldPrice}</span>
                <span className="text-green-400 font-bold">{product.price}</span>
              </p>
              {/* <button className={`mt-3 w-full py-2 rounded-md transition ${darkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                Add to Cart
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
Product.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};


export default Product;
