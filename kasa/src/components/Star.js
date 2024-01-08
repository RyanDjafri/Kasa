import React from "react";
import StarIcon from "../assets/star.svg";
import filledIcon from "../assets/filledStar.svg";

const Star = ({ prop }) => {
  const rating = prop;
  return (
    <div className="star">
      {Array.from({ length: rating }).map((_, index) => (
        <img key={index} src={filledIcon} alt={`star-icon-${index}`} />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <img
          key={index + rating}
          src={StarIcon}
          alt={`star-icon-${index + rating}`}
        />
      ))}
    </div>
  );
};

export default Star;
