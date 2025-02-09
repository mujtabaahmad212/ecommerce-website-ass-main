import React from "react";

const Wishlist = ({ wishlist, darkMode }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800 text-stone" : "bg-stone-200 text-black"}`}>
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-800">No items in wishlist</p>
      ) : (
        <ul className="space-y-3">
          {wishlist.map((item) => (
            <li key={item.id} className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg" />
              <span className="font-semibold">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
