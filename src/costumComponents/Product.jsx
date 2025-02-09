import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Heart icons

const products = [
  { id: 1, name: "Vel sit euismod", price: "$80.00", oldPrice: "$100.00", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Ultricies condimentum imperdiet", price: "$90.00", oldPrice: "$120.00", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Vitae suspendisse sed", price: "$90.00", oldPrice: "$120.00", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Sed at fermentum", price: "$95.00", oldPrice: "$110.00", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Fusce pellentesque at", price: "$85.00", oldPrice: "$95.00", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Vestibulum magna lorem", price: "$78.00", oldPrice: "$90.00", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Sollicitudin amet arcu", price: "$92.00", oldPrice: "$110.00", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Ultrices mauris sit", price: "$96.00", oldPrice: "$105.00", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Pellentesque condimentum", price: "$50.00", oldPrice: "$70.00", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Cras scelerisque velit", price: "$40.00", oldPrice: "$60.00", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Lectus vulputate faucibus", price: "$80.00", oldPrice: "$100.00", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Purus risus ut", price: "$90.00", oldPrice: "$110.00", image: "https://via.placeholder.com/150" },
];

const ProductCard = ({ darkMode, toggleWishlist, wishlist }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const isInWishlist = wishlist.some((item) => item.id === product.id);

        return (
          <div key={product.id} className={`relative p-4 rounded-lg shadow-md transition ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            {/* Wishlist Icon */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 text-xl"
            >
              {isInWishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
            </button>

            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              <span className="text-red-400 line-through mr-2">{product.oldPrice}</span>
              <span className="text-green-400 font-bold">{product.price}</span>
            </p>
            <button className={`mt-3 w-full py-2 rounded-md transition ${darkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
