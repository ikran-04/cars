import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white  sticky top-0 z-40 py-5 ">
      <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl">BuyCar</h1>
        </Link>
        <ul className="flex space-x-5 text-sm font-semibold">
          <li>Home</li>
          <li>Car Catalgue</li>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button className="text-indigo-600 font-semibold">Register</button>
          <button className="px-8 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
