import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Booking from "./components/Booking/Booking";
import { Route } from "react-router-dom";

import "./App.css";
import "./components/HomePage/Header/Header.css";

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    window.scrollY > 0 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <NavBar sticky={isSticky} />
      <Route
        path="/"
        exact
        render={props => <HomePage stickyRef={stickyRef} />}
      />
      <Route path="/Booking" component={Booking} />
    </div>
  );
}

export default App;
