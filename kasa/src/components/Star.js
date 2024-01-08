import React from "react";
import StarIcon from "../assets/star.svg";

const Star = ({ prop }) => {
  return (
    <div className="star">
      <img src={StarIcon} alt="star-icon" />
    </div>
  );
};

export default Star;
