import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcBusinessContact } from "react-icons/fc";

gsap.registerPlugin(ScrollTrigger);

const offercard = [
  {
    id: 1,
    title: "24/7",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 3,
    title: "Money Back",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 4,
    title: "Secure Payment",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
];

const OfferCards1 = ({ darkMode }) => {
  useEffect(() => {
    offercard.forEach((offer) => {
      gsap.fromTo(
        `.offer-card-${offer.id}`,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.offer-card-${offer.id}`,
            start: "top 100%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {offercard.map((offer) => (
        <div
          key={offer.id}
          className={`offer-card-${offer.id} w-52 flex-col h-52 text-center px-4 rounded-3xl shadow-xl flex justify-center items-center transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <FcBusinessContact className="w-12 h-12" />
          <h1>{offer.title}</h1>
          <p>{offer.description}</p>
        </div>
      ))}
    </>
  );
};
OfferCards1.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default OfferCards1;

