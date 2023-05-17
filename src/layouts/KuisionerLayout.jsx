import React from "react";
import Layout from "../utils/Layouts";
import KuisionerPage from "../pages/KuisionerPage";

export default function KuisionerLayout() {
  return <Layout child={<KuisionerPage />} />;
}
