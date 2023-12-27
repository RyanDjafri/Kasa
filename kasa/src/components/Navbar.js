import React from "react";
import Logo from "../assets/logokasa.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="kasa-logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
