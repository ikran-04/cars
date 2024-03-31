import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Details = ({ cars }) => {
  const { carId } = useParams();

  const selectedCar = cars.find((car) => car.id === Number(carId));
  return (
    <div>
      <div className="w-4/5 m-auto">
        <Navbar />
      </div>

      <div className="my-10 py-10 bg-gray-100 flex flex-col items-center">
        <div className="w-/12 m-auto text-center space-y-2">
          <h1 className="text-2xl font-semibold">{selectedCar.model}</h1>
          <h1 className="text-lg">${selectedCar.price}</h1>
          <button className="px-8 py-2 bg-indigo-500 text-white rounded-md">
            Buy Now
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={selectedCar.image}
            alt={selectedCar.model}
            className="w-full"
          />
          <div className="flex justify-center space-x-5">
            <div className="border-2 rounded-xl border-indigo-300">
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="w-28"
              />
            </div>
            <div className="border-2 rounded-xl border-indigo-300">
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="w-28"
              />
            </div>
            <div className="border-2 rounded-xl border-indigo-300">
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
