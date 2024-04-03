import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Details = ({ cars }) => {
  const { carId } = useParams();

  const selectedCar = cars.find((car) => car.id === Number(carId));
  const images = [selectedCar.image, selectedCar.image, selectedCar.image];
  return (
    <div>
      <Navbar />

      <div className="w-4/5 m-auto py-20 flex justify-between space-x-10">
        <div className="w-1/2  space-y-5">
          <p className="text-lg">
            Home {">"} Cars {">"}{" "}
            <span className="font-semibold text-indigo-600">Details</span>
          </p>
          <h1 className="text-4xl font-bold">{selectedCar.model}</h1>
          <h1 className="text-3xl font-bold">
            $<span className="text-indigo-600">{selectedCar.price}</span>
          </h1>
          <ImageSlider images={images} />
        </div>
        <div className="w-1/2  bg-gray-50  flex flex-col justify-between p-4">
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Rating & Reviews</h1>
            <div className="flex space-x-5 items-center">
              <div className="flex space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>
                <span className="font-bold">4.5</span>(120 reviws)
              </p>
            </div>
          </div>
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Color</h1>
            <div className="flex space-x-2 text-amber-500">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500"></div>
            </div>
          </div>
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Description</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto dignissimos, minus necessitatibus sapiente doloribus
              nihil quam dicta odit recusandae qui a illo aliquam tenetur
              perspiciatis eligendi blanditiis deserunt cumque! Sapiente totam
              ut eveniet sunt? Et perferendis,
            </p>
          </div>
          <div className="py-5  flex justify-between items-center ">
            <div>
              <h1 className="text-2xl font-semibold">{selectedCar.model}</h1>
              <p>Buy with Discount</p>
            </div>
            <button className="w-48 px-8 py-2 flex justify-between  items-center rounded-md bg-indigo-500 text-white">
              <span className="text-xl font-bold">${selectedCar.price}</span>
              <span className="p-1 bg-white/20 rounded-lg">
                <IoIosArrowRoundForward size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
