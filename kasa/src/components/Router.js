import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PageError from "../pages/PageError";
import Location from "../pages/Location";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/locations/:id" element={<Location />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<PageError />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
