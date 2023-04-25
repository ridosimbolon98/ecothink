import React from "react";
import ChangeTitle from "../components/ChangeTitle";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Spesification from "../components/Spesification";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <>
      <ChangeTitle pageTitle="Ecothink, Paper Coating Product" />
      <Carousel />
      <Hero />
      <Spesification />
      <Products />
      <Features />
      <Heading />
      <Contact />
      <Subscribe />
    </>
  );
}
