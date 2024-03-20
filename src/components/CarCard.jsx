import React, { useState } from "react";
import { GiSteeringWheel, GiCarSeat } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
const CarCard = ({ src, price, modal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="border p-1 rounded-2xl">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[300px] z-0 p-5 bg-gray-100 space-y-4 rounded-2xl"
        >
          <h1 className="text-2xl text-Zinc-950 font-bold">{modal}</h1>
          <h1 className="flex items-end">
            <span className="flex items-start">
              <span className="text-xs">$</span>
              <span className="text-3xl font-bold">{price}</span>
            </span>
            <span className="text-sm text-gray-400">/day</span>
          </h1>
          <img src={src} alt="" />
          {isHovered ? (
            <button className="w-full p-3 bg-indigo-600/80 text-white rounded-lg">
              Rent Now
            </button>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col items-center space-y-2     text-sm text-gray-500">
                <GiSteeringWheel size={26} />
                <p>Manual</p>
              </div>
              <div className="flex flex-col space-y-2     items-center text-gray-500">
                <GiCarSeat size={26} />
                <p>4 seats</p>
              </div>
              <div className="flex flex-col space-y-2     items-center  text-gray-500">
                <FaGasPump size={26} />
                <p>24 MPG</p>
              </div>
            </div>
          )}
        </div>
        {/* <div className="absolute inset-0 z-10 rounded-lg hover:border border-indigo-600 bg-white from-purple-500 to-pink-500 transition duration-300 ease-in-out opacity-0 hover:opacity-100"></div>{" "} */}
      </div>
    </div>
  );
};

export default CarCard;
