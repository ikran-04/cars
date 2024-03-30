import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Catalogue from "../components/Catalogue";
import Cars from "../components/Cars";

const Home = ({ cars }) => {
  return (
    <div className="">
      <Navbar />
      <Search />
      <Catalogue />
      <Cars cars={cars} />
    </div>
  );
};

export default Home;
