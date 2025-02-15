import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Function to remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center">No items in wishlist</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item) => (
            <li key={item.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                <span className="font-semibold text-lg">{item.name}</span>
              </div>
              <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 text-xl hover:scale-110 transition-transform">
                <FaHeart />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
