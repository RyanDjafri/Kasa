import React from "react";
import Navbar from "../components/Navbar";
import BgPhoto from "../assets/kalen.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" className="about-img" />
      </div>
      <div className="opening-divs">
        <div className="opening-div">
          <p className="div-title">
            Flabilité<i class="fa-solid fa-arrow-down"></i>
            <div className="div-text">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </div>
          </p>
        </div>
        <div className="opening-div">
          <p className="div-title">
            Respect<i class="fa-solid fa-arrow-down"></i>
            <div className="div-text">
              {/* Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes. */}
            </div>
          </p>
        </div>
        <div className="opening-div">
          <p className="div-title">
            Service<i class="fa-solid fa-arrow-down"></i>
            <div className="div-text">
              {/* Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes. */}
            </div>
          </p>
        </div>
        <div className="opening-div">
          <p className="div-title">
            Sécurité<i class="fa-solid fa-arrow-down"></i>
            <div className="div-text">
              {/* Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes. */}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
