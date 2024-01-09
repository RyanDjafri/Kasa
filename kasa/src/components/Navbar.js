import React from "react";
import Logo from "../assets/logokasa.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="kasa-logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
