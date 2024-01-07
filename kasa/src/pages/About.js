import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BgPhoto from "../assets/kalen.png";
import CardComponent from "../components/CardComponent";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" className="about-img" />
      </div>
      <div className="opening-divs">
        <CardComponent
          prop={{
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
          }}
        />
        <CardComponent
          prop={{
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondactrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          }}
        />
        <CardComponent
          prop={{
            title: "Service",
            text: "La bienveillance fait partie des valeurs fondactrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera de notre plateforme.",
          }}
        />
        <CardComponent
          prop={{
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par  . En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          }}
        />
      </div>
    </div>
  );
};

export default About;
