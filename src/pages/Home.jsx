import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Catalogue from "../components/Catalogue";
import Cars from "../components/Cars";

const Home = () => {
  return (
    <div className="w-4/5 m-auto">
      <Navbar />
      <Search />
      <Catalogue />
      <Cars />
    </div>
  );
};

export default Home;
