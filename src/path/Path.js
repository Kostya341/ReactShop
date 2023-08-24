import Slider from "../Components/Slider";
import React from "react";
import Сategories from "../Categories";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "../Footer";
import FreeShopping from "../FreeShopping";
import Header from "../Header";
import Lists from "../Sale/Lists";
import Sale from "../Sale/Sale";
import SHPandPAY from "../SHIPPING-AND__PAYMENT";
import Title from "../Title";
import ItemDiscount from "../Sale/Item-discount";
import ImageData from "../Components/ImageData";

function Path() {
  return (
    <>
      <Routes>
        <Route path="" element={<Slider slides={ImageData} />} />
      </Routes>
      <Routes>
        <Route path="" element={<Sale ItemDiscount={ItemDiscount} />} />
      </Routes>
      <Routes>
        <Route path="" element={<Lists />} />
      </Routes>
      <Routes>
        <Route path="" element={<SHPandPAY />} />
      </Routes>
      <Routes>
        <Route path="" element={<FreeShopping />} />
      </Routes>
    </>
  );
}

export default Path;
