import React from "react";
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import Contact from "./Contact/Contact";

function HomePage({ stickyRef }) {
  return (
    <div>
      <Header stickyRef={stickyRef} />
      <Prices />
      <Contact />
    </div>
  );
}

export default HomePage;
