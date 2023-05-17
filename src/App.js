import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import ProductLayout from "./layouts/ProductLayout";
import KuisionerLayout from "./layouts/KuisionerLayout";
import Survey from "./components/Survey";
import AdminDashboard from "./components/esi/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/product" element={<ProductLayout />} />
        <Route path="/kuisioner" element={<KuisionerLayout />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
