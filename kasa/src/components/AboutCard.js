import React, { useState } from "react";
import cross from "../assets/cross-up.svg";
import crossDown from "../assets/cross-down.svg";

const AboutCard = ({ about }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibilty = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="opening-div">
      <div className="open">
        <p className="div-title">{about.title}</p>
        <img
          alt="cross-down"
          className="cross"
          src={isVisible ? crossDown : cross}
          onClick={toggleVisibilty}
        />
      </div>
      <div className={isVisible ? "div-text" : "hide"}>{about.text}</div>
    </div>
  );
};

export default AboutCard;
