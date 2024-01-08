import React from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";

const Carousel = ({ pictures }) => {
  return (
    <div>
      <Left className="carousel-arrow left" />
      {pictures &&
        pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`carousel-image-${index}`}
            className="carousel-image"
          />
        ))}
      <Right className="carousel-arrow right" />
    </div>
  );
};

export default Carousel;
