import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import HomePage from "../Pages/Home/HomePage";

const LayoutPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
};

export default LayoutPage;
