import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="scroll-smooth">
        <Navbar />
        <main>{props.child}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
