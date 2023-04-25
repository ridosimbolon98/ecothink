import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import ProductLayout from "./layouts/ProductLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/product" element={<ProductLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
