import React from "react";
import CarCard from "./CarCard";

const Cars = ({ cars }) => {
  console.log(cars);
  return (
    <div className="w-11/12 md:w-4/5 m-auto">
      <div className="py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center   gap-8">
        {cars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>

      <div className="w-full flex justify-center py-10">
        <button className="px-8 py-3 rounded-xl text-indigo-600 font-semibold border-2 border-indigo-500">
          Load more cars
        </button>
      </div>
    </div>
  );
};

export default Cars;
