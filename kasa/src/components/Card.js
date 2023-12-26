import React from "react";

const Card = ({ location }) => {
  return (
    <div className="card">
      <article>
        <img
          src={location.cover}
          alt={"cover of " + location.title}
          className="card-img"
        />
        <h3 className="card-title">{location.title}</h3>
      </article>
    </div>
  );
};

export default Card;
