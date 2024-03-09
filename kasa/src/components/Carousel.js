import React, { useState, useEffect } from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  useEffect(() => {
    if (pictures.length <= 1) {
      setCurrentIndex(0);
    }
  }, [pictures]);

  return (
    <div>
      {pictures.length > 1 ? (
        <>
          <Left className="carousel-arrow left" onClick={goToPrev} />
          <img
            src={pictures[currentIndex]}
            alt={`carousel-image-${currentIndex}`}
            className="carousel-image"
          />
          <Right className="carousel-arrow right" onClick={goToNext} />
        </>
      ) : (
        <img
          src={pictures[0]}
          alt={`carousel-image-0`}
          className="carousel-image"
        />
      )}
    </div>
  );
};

export default Carousel;
