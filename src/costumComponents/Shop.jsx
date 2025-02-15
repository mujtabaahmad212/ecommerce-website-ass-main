import React, { useState } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react"; // Importing icons

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    price: 26,
    discountPrice: 20,
    rating: 4,
    image: "/images/Shoplist/Accumsan.png",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "In nulla",
    price: 50,
    discountPrice: 35,
    rating: 5,
    image: "/images/Shoplist/Curabitur.png",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    name: "In nulla",
    price: 100,
    discountPrice: 80,
    rating: 3,
    image: "/images/Shoplist/in nulla.png",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    name: "Nunc in",
    price: 75,
    discountPrice: 65,
    rating: 5,
    image: "/images/Shoplist/nunc in.png",
    description: "Elegant and stylish.",
  },
  {
    id: 5,
    name: "Porttitor cum",
    price: 40,
    discountPrice: 30,
    rating: 4,
    image: "/images/Shoplist/porttitor cum.png",
    description: "Comfortable and durable.",
  },
  {
    id: 6,
    name: "Vel som",
    price: 150,
    discountPrice: 120,
    rating: 5,
    image: "/images/Shoplist/vel som.png",
    description: "Premium quality.",
  },
  {
    id: 7,
    name: "Vitae facilisis",
    price: 150,
    discountPrice: 120,
    rating: 5,
    image: "/images/Shoplist/vitae facilisis.png",
    description: "Premium quality.",
  },
];

const Shop = () => {
  const [sortBy, setSortBy] = useState("best-match");
  const [perPage, setPerPage] = useState(3);

  // Sorting function
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.discountPrice - b.discountPrice;
    if (sortBy === "price-high") return b.discountPrice - a.discountPrice;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // Limit products per page
  const displayedProducts = sortedProducts.slice(0, perPage);

  return (
    <div className="container mx-auto p-6 transition-all duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Ecommerce Accessories & Fashion Items
        </h2>
      </div>

      <p className="text-gray-500 text-sm">About {products.length} results</p>

      {/* Sorting and View Options */}
      <div className="flex justify-between items-center mt-4 border-b pb-3 dark:border-gray-700">
        {/* Per Page Dropdown */}
        <div>
          <label className="mr-2">Per Page:</label>
          <select
            className="border px-2 py-1 rounded dark:bg-gray-800 dark:text-white"
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

        {/* Sorting Dropdown */}
        <div>
          <label className="mr-2">Sort By:</label>
          <select
            className="border px-2 py-1 rounded dark:bg-gray-800 dark:text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="best-match">Best Match</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="mt-6 space-y-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded"
              onError={(e) => (e.target.style.display = "none")}
            />

            {/* Details */}
            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-2 text-lg font-semibold">
                <span className="text-red-500">
                  ${product.discountPrice.toFixed(2)}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex mt-1 text-yellow-400">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              {/* Interactive Icons */}
              <div className="flex space-x-4 mt-2 text-gray-500 dark:text-gray-300">
                <span className="cursor-pointer transition-transform transform hover:scale-125">
                  <Heart size={20} />
                </span>
                <span className="cursor-pointer transition-transform transform hover:scale-125">
                  <Search size={20} />
                </span>
                <span className="cursor-pointer transition-transform transform hover:scale-125">
                  <ShoppingCart size={20} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
