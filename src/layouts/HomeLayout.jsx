import React from "react";
import Layout from "../utils/Layouts";
import HomePage from "../pages/HomePage";

export default function HomeLayout() {
  return <Layout child={<HomePage />} />;
}
