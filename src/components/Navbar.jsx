import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white  sticky top-0 z-40 py-5 flex justify-between items-center">
      <h1 className="text-xl">CARENT</h1>
      <ul className="flex space-x-5 text-sm font-semibold">
        <li>Home</li>
        <li>Car Catalgue</li>
        <li>Contact Us</li>
        <li>Help</li>
      </ul>
      <div className="flex items-center space-x-5">
        <button className="text-indigo-600 font-semibold">Register</button>
        <button className="px-5 py-2 border border-indigo-600 rounded-md text-violet-600 font-semibold">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
