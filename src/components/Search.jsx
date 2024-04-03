import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  // Add more countries as needed
];
const vendors = [{ value: "Toyota" }, { value: "Honda" }, { value: "Ford" }];

const Search = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center space-x-8 bg-gray-50 p-4  rounded-full">
        <div className="flex space-x-2 items-center">
          <FaLocationDot className="ml-2 text-gray-400" size={24} />

          <select className="bg-transparent block w-full border-gray-300 rounded-mdoutline-0  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <select className="bg-transparent block w-full border-gray-300 rounded-mdoutline-0  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Any Vendor</option>
            {vendors.map((vendor) => (
              <option key={vendor.value} value={vendor.value}>
                {vendor.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <select className="bg-transparent block w-full border-gray-300 rounded-mdoutline-0  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Any Model</option>
            <option value="">xt23</option>
            <option value="">y</option>
          </select>
        </div>
        <button className=" bg-white text-white w-8 h-8 rounded-full flex justify-center items-center  hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <CiSearch className=" text-indigo-500" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Search;
