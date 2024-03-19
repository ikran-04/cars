import React, { useState } from "react";

const Catalogue = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    price: "",
    rating: "",
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value,
    }));
  };

  const handleAmenitiesChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      amenities: value,
    }));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold">Car Catalogue</h1>
        <p>Explore out cars you might like!</p>
      </div>
      <div className="flex items-center space-x-5">
        <div>
          <select
            id="price"
            name="price"
            value={selectedOptions.price}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Price</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>
        <div>
          <select
            id="rating"
            name="rating"
            value={selectedOptions.rating}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Rating</option>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
        </div>
        <div>
          <select
            id="rating"
            name="rating"
            value={selectedOptions.rating}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Rating</option>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
        </div>
        <div>
          <select
            id="rating"
            name="rating"
            value={selectedOptions.rating}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Rating</option>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
