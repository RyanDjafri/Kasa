import React, { useState } from "react";
import cross from "../assets/cross-up.svg";
import crossDown from "../assets/cross-down.svg";

const CardComponent = ({ prop }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibilty = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="opening-div">
      <div className={`open ${prop.size}`}>
        <p className="div-title">{prop.title}</p>
        <img
          alt="cross-down"
          className="cross"
          src={isVisible ? crossDown : cross}
          onClick={toggleVisibilty}
        />
      </div>
      {prop.text && (
        <p className={isVisible ? `div-text ${prop.size}` : "hide"}>
          {prop.text}
        </p>
      )}

      {prop.equipments && prop.equipments.length > 0 && (
        <div className={`equipments-list ${prop.size}`}>
          <ul className={isVisible ? "list" : "hide"}>
            {prop.equipments.map((equip, index) => (
              <li key={index} className="list-item">
                {equip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
