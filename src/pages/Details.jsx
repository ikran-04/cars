import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Details = ({ cars }) => {
  const { carId } = useParams();

  const selectedCar = cars.find((car) => car.id === Number(carId));
  return (
    <div className="w-4/5 m-auto">
      <Navbar />

      <div className="py-10">
        <div className="w-/12 m-auto text-center space-y-2">
          <h1 className="text-2xl font-semibold">{selectedCar.model}</h1>
          <h1 className="text-lg">${selectedCar.price}</h1>
          <button className="px-8 py-2 bg-indigo-500 text-white rounded-md">
            Buy Now
          </button>
        </div>
        <div className="w-full my-10 bg-red-300">
          <img src={selectedCar.image} alt={selectedCar.model} />
        </div>
      </div>
    </div>
  );
};

export default Details;
