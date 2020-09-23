import React from "react";
import BGimage from "./images/background.jpg";

import "./Header.css";

const Header = ({ stickyRef }) => (
  <div ref={stickyRef}>
    <img className="bg-image" src={BGimage} alt="" />
    <h1 className="HeadLine">Øbro Barber</h1>
    <div className="text-box">
      <p>
        Welcome! We have been honing our craft since 1996. Our approach is old school, but with inspiration from modern techniques and knowledge. We believe everybody deserves a good old fashioned cut.
      </p>
    </div>
    <div className="scroll-circle">
      <p>v</p>
    </div>
  </div>
);

export default Header;
