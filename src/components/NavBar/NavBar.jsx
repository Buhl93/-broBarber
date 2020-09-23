import React from "react";
import barbershop from "./barbershop.jpg";
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import "./NavBar.css";

const NavBar = ({ sticky }) => (
  <nav className={sticky ? "nav-bar sticky" : "nav-bar default"}>
    <Link to="/#prices">Services</Link>
    <Link to="/#contact">Contact</Link>
    <NavLink to='/'
      className={sticky ? "navbar-logo-small" : "navbar-logo-big"}
    ></NavLink>
    <NavLink to="">Products</NavLink>
    <NavLink to="Booking" className='book-btn'>Booking</NavLink>
  </nav>
);

export default NavBar;
