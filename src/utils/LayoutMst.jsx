import React from "react";
import Navbar from "../components/esi/Navbar";
import Footer from "../components/esi/Footer";

const LayoutMst = (props) => {
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
