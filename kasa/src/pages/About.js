import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BgPhoto from "../assets/kalen.png";
import cross from "../assets/cross-up.svg";

const About = () => {
  const divTexts = document.querySelectorAll(".div-text");
  // useEffect(() => {
  //   console.log(divTexts);
  //   divTexts.forEach((div) => {
  //     const cross = div.querySelector(".cross");
  //     cross.addEventListener("click", () => {
  //       div.style.display = "block";
  //     });
  //   });
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" className="about-img" />
      </div>
      <div className="opening-divs">
        <div className="opening-div">
          <div className="open">
            <p className="div-title">Fiabilité </p>
            <img src={cross} alt="cross-up" className="cross" />
          </div>
          <div className="div-text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        </div>
        <div className="opening-div">
          <div className="open">
            <p className="div-title">Respect</p>
            <img src={cross} alt="cross-up" className="cross" />
          </div>
          <div className="div-text">
            La bienveillance fait partie des valeurs fondactrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>
        <div className="opening-div">
          <div className="open">
            <p className="div-title">Service </p>
            <img src={cross} alt="cross-up" className="cross" />
          </div>
          <div className="div-text">
            La bienveillance fait partie des valeurs fondactrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera de notre plateforme.
          </div>
        </div>
        <div className="opening-div">
          <div className="open">
            <p className="div-title">Sécurité</p>
            <img src={cross} alt="cross-up" className="cross" />
          </div>
          <div className="div-text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
