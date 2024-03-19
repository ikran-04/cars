import React from "react";
import { GiSteeringWheel, GiCarSeat } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
const CarCard = ({ src, price, modal }) => {
  return (
    <div className="w-[300px] p-5 bg-gray-100 space-y-4 rounded-md">
      <h1 className="text-xl font-semibold">{modal}</h1>
      <h1>
        <span className="text-xs">$</span>
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-sm text-gray-400">/day</span>
      </h1>
      <img src={src} alt="" />
      <div className="flex justify-between">
        <div className="flex flex-col items-center space-y-2     text-sm text-gray-500">
          <GiSteeringWheel size={26} />
          <p>Manual</p>
        </div>
        <div className="flex flex-col space-y-2     items-center text-sm text-gray-500">
          <GiCarSeat size={26} />
          <p>4 seats</p>
        </div>
        <div className="flex flex-col space-y-2     items-center text-sm text-gray-500">
          <FaGasPump size={26} />
          <p>24 MPG</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
