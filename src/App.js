import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Heading from "./pages/Heading";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Spesification from "./pages/Spesification";
import Products from "./pages/Products";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Carousel />
      <Hero />
      <Spesification />
      <Products />
      <Features />
      <Heading />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
