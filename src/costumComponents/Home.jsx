import React from "react";

import ProductCard from "./ProductCard";
import ImageList from "./imageCard";
import Trendingproducts from "./Trendingproducts";
import Hero from "./Hero";
// import heroimage from "../assets/images/andrew-kliatskyi-2bfHAKhGn4g-unsplash.jpg";
import PropTypes from "prop-types";
import OfferCards1 from "./offerCards";
import DiscountSection from "./DiscountIem";
import HeadHero from "./HeadHero";

const Home = ({ darkMode }) => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
        className="flex justify-center items-center h-[60vh] mx-2 rounded-3xl shadow-lg mb-4 mt-6 "
      ></div> */}

      <div className="">{/* <Cursouel /> */}</div>
      <HeadHero darkMode={darkMode} />
      <div className="">
        {/* <h1 className="text-2xl text-center">Home Page</h1> */}
        <h1 className="text-2xl text-center first-letter:text-red-700 font-bold ">
          Feartured Products{" "}
        </h1>
      </div>
      <div className=" flex justify-around items-center gap-4 flex-wrap my-12   md:items-start mx-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* Laatest Product */}

      <div className=" w-screen flex justify-center flex-col items-center gap-5 my-5 ">
        <div className="">
          <h1 className="text-3xl">Leasted Products</h1>
        </div>

        <div className="">
          <ImageList />
        </div>
      </div>

      <h1 className="text-center text-2xl first-letter:text-red-600">
        What Shopex Offer!
      </h1>
      <div className=" flex justify-center items-center gap-12 flex-wrap my-12   md:items-start mx-6">
        <OfferCards1 darkMode={darkMode} />
      </div>

      <Hero />
      <DiscountSection />
      <h1 className="text-3xl font-bold capitalize first-letter:text-red-600 text-center my-7">
        Trending Products
      </h1>
      <div className=" flex gap-4 justify-center items-center flex-wrap   md:items-start">
        <Trendingproducts />
      </div>

      <div className=" flex justify-around ">
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
};
Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Home;
