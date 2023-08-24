import React, { useState } from "react";
import "./Drawer.module.scss";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Path from "./path/Path";
import Title from "./Title";
import Header from "./Header";
import Сategories from "./Categories";
import Footer from "./Footer";
import Catalog from "./Another/Catalog";

function App() {
  return (
    <div className="App">
      <Title />
      <Header />
      <Сategories />
      <Routes>
        <Route path="/" element={<Path />} />
      </Routes>
      <Routes>
        <Route path="lists/*" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
