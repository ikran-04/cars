import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Catalogue from "../components/Catalogue";
import Cars from "../components/Cars";
import Footer from "../components/Footer";

const Home = ({ cars }) => {
  return (
    <div className="">
      <Navbar />
      <Search />
      <Cars cars={cars} />
      <Footer />
    </div>
  );
};

export default Home;
