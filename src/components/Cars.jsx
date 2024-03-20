import React from "react";
import CarCard from "./CarCard";

const Cars = () => {
  return (
    <div>
      <div className="w-full  m-auto py-10 grid grid-cols-4 justify-items-center   gap-8">
        <CarCard src={"car1.svg"} modal={"Toyota New Yaris"} price={42} />
        <CarCard src={"car2.svg"} modal={"Pejero Sport"} price={46} />
        <CarCard src={"car3.svg"} modal={"Honda Civic"} price={52} />
        <CarCard src={"car4.svg"} modal={"Mazda CX-3"} price={54} />
        <CarCard src={"car5.svg"} modal={"BMW X5"} price={56} />
        <CarCard src={"car2.svg"} modal={"Honda Jazz RS"} price={58} />
        <CarCard src={"car5.svg"} modal={"Aston Martin V12"} price={60} />
        <CarCard src={"car1.svg"} modal={"Toyota New Yaris"} price={63} />
        <CarCard src={"car1.svg"} modal={"Toyota New Yaris"} price={42} />
        <CarCard src={"car2.svg"} modal={"Pejero Sport"} price={46} />
        <CarCard src={"car3.svg"} modal={"Honda Civic"} price={52} />
        <CarCard src={"car4.svg"} modal={"Mazda CX-3"} price={54} />
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
