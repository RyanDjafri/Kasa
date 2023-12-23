import React from "react";
import Logo from "../assets/logokasa.svg";
import { Link } from "react-router-dom";
import BgPhoto from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <img src={Logo} alt="kasa-logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" />
      </div>
    </div>
  );
};

export default Home;
