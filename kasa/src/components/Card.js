import React from "react";
import { Link } from "react-router-dom";

const Card = ({ location }) => {
  return (
    <div className="card">
      <article>
        <Link to={`/locations/${location.id}`}>
          <img
            src={location.cover}
            alt={"cover of " + location.title}
            className="card-img"
          />
        </Link>
        <h3 className="card-title">{location.title}</h3>
      </article>
    </div>
  );
};

export default Card;
