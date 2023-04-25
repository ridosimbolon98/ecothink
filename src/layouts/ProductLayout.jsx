import React from "react";
import Layout from "../utils/Layouts";
import ProductPage from "../pages/ProductPage";

export default function ProductLayout() {
  return <Layout child={<ProductPage />} />;
}
