import React, { useState } from "react";
import Logo from "../assets/logokasa.svg";
import { Link } from "react-router-dom";
import BgPhoto from "../assets/bg.jpg";
import data from "../logements.json";
import Card from "../components/Card";
import Vector from "../assets/Vector.svg";

const Home = () => {
  const [locations, setLocations] = useState(data);
  return (
    <div>
      <div className="header-container">
        <header>
          <img src={Logo} alt="kasa-logo" />
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
          </nav>
        </header>
      </div>
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" />
      </div>
      <div className="cards-container">
        {locations &&
          locations.map((location) => {
            return <Card key={location.id} location={location} />;
          })}
      </div>
      {/* <footer>
        <div className="footer-div">
          <div className="logo">
            <img src={Vector} alt="vector-logo" className="vector" />
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
