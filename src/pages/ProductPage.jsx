import React from "react";
import ChangeTitle from "../components/ChangeTitle";
import Products from "../components/Products";

export default function ProductPage() {
  return (
    <>
      <ChangeTitle pageTitle="Ecothink, Paper Coating Product" />
      <Products />
    </>
  );
}
