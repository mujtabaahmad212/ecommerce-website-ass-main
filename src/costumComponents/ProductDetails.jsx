import React from "react";
import { useParams } from "react-router-dom";
import productimage from "../assets/images/image 1166.png";
import productimage2 from "../assets/images/image 1.png";
import productimage3 from "../assets/images/image 3.png";
import productimage4 from "../assets/images/image 23.png";
import productimage5 from "../assets/images/image 32.png";
import productimage6 from "../assets/images/image 1169.png";
import productimage7 from "../assets/images/image 1168.png";
import productimage8 from "../assets/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png";



const products = [
  { id: 1, name: "Product 1", image: productimage, price: 19.71, description: "Description of Product 1" },
  { id: 2, name: "Product 2", image: productimage2, price: 21.59, description: "Description of Product 2" },
  { id: 3, name: "Product 3", image: productimage3, price: 29.99, description: "Description of Product 3" },
  { id: 4, name: "Product 4", image: productimage4, price: 26.39, description: "Description of Product 4" },
  { id: 5, name: "Product 5", image: productimage5, price: 32.68, description: "Description of Product 5" },
  { id: 6, name: "Product 6", image: productimage6, price: 14.32, description: "Description of Product 6" },
  { id: 7, name: "Product 7", image: productimage7, price: 18.32, description: "Description of Product 7" },
  { id: 8, name: "Product 8", image: productimage8, price: 44.68, description: "Description of Product 8" },
];

const ProductDetail = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = products.find((p) => p.id === parseInt(productId)); // Find the product based on productId

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="flex  items-center text-stone-200  bg-[#44438e] w-full h-[450px] rounded-2xl shadow-lg shadow-gray-900 p-8">
        <img className="h-80 w-72 object-cover  " src={product.image} alt={product.name} />
        <div className="ml-8 ">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg mt-2">{product.description}</p>
          <p className="text-xl mt-4">Price: ${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
