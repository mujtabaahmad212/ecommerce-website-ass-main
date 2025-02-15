import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { gsap } from "gsap";
import { AiOutlineClose } from "react-icons/ai";
import productimage from "../assets/images/image 1166.png";
import productimage2 from "../assets/images/image 1.png";
import productimage3 from "../assets/images/image 3.png";
import productimage4 from "../assets/images/image 23.png";
import productimage5 from "../assets/images/image 32.png";
import productimage6 from "../assets/images/image 1169.png";
import productimage7 from "../assets/images/image 1168.png";
import productimage8 from "../assets/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png";

const ImageList = ( { darkMode }) => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const heartRefs = useRef({});
  const wishlistItemRefs = useRef({});

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const [products] = useState([
    { id: 1, name: "Product 1", image: productimage, price: 19.71 },
    { id: 2, name: "Product 2", image: productimage2, price: 21.59 },
    { id: 3, name: "Product 3", image: productimage3, price: 29.99 },
    { id: 4, name: "Product 4", image: productimage4, price: 26.39 },
    { id: 5, name: "Product 5", image: productimage5, price: 32.68 },
    { id: 6, name: "Product 6", image: productimage6, price: 14.32 },
    { id: 7, name: "Product 7", image: productimage7, price: 18.32 },
    { id: 8, name: "Product 8", image: productimage8, price: 44.68 },
  ]);

  const toggleWishlist = (product) => {
    const isFavorite = wishlist.some((item) => item.id === product.id);
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      setWishlist((prev) => [...prev, product]);
      gsap.fromTo(
        wishlistItemRefs.current[product.id],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }

    gsap.fromTo(
      heartRefs.current[product.id],
      { scale: 1 },
      { scale: 1.5, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
  };

  const removeFromWishlist = (id) => {
    gsap.to(wishlistItemRefs.current[id], {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      onComplete: () => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
      },
    });
  };

  return (
    <div className="p-4">
      <ul className="flex flex-wrap justify-center items-center gap-6">
        {products.map((product) => (
          <li key={product.id} className="relative flex flex-col justify-center items-center w-80 rounded-3xl bg-[#adbbff] shadow-lg shadow-[#1111118a] h-96 hover:bg-[#89b0f9] transition-all duration-500">
            <button ref={(el) => (heartRefs.current[product.id] = el)} onClick={() => toggleWishlist(product)} className="absolute top-4 right-4 text-2xl text-red-500">
              {wishlist.some((item) => item.id === product.id) ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <Link to={`/product/${product.id}`}>
              <img className="h-52 hover:h-56 w-52 hover:w-56 transition-all duration-500 hover:rounded-3xl" src={product.image} alt={product.name} />
            </Link>
            <p className="text-stone-800 w-28 py-2 rounded-xl text-center absolute bottom-4">Price: ${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>

      <div className={`mt-8 bg-gray-200 p-4 rounded-lg transition-transform ${
            darkMode ? "bg-gray-100 text-black" : "bg-gray-800 text-gray-100"
          } `}>
        <h2 className="text-xl font-bold">Wishlist ({wishlist.length})</h2>
        <div className="flex flex-wrap gap-4">
          {wishlist.length === 0 ? <p>No items in wishlist</p> : wishlist.map((item) => (
            <div key={item.id} ref={(el) => (wishlistItemRefs.current[item.id] = el)} className={`relative flex flex-col items-center bg-white p-2 rounded-md shadow transition-all ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-600 text-gray-200"
            }`}>
              <button onClick={() => removeFromWishlist(item.id)} className="absolute top-1 right-1 text-red-600 text-lg">
                <AiOutlineClose />
              </button>
              <img className="h-20 w-20 object-cover" src={item.image} alt={item.name} />
              <p className="text-sm font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("/wishlist")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
          Go to Wishlist
        </button>
      </div>
    </div>
  );
};
ImageList.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ImageList;

