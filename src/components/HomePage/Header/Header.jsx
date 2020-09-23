import React from "react";
import BGimage from "./images/background.jpg";

import "./Header.css";

const Header = ({ stickyRef} ) => (
  
    <div ref={stickyRef}>
      <img className="bg-image" src={BGimage} alt="" />
      <div className="text-box">
        <p>
          Welcome to ØBRO BARBER SHOP. Here we are passionate about hair, beard
          and comfort. Out approach is an old school way of doing things
          combined with a with of new techniques and offers.
        </p>
      </div>
      <div className="scroll-circle">
        <p>v</p>
      </div>
    </div>
  
)

export default Header;
