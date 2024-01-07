import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../logements.json";
import Star from "../components/Star";

const Location = () => {
  const { id } = useParams();
  const [locations, setLocations] = useState(data);
  const location = locations.find((loc) => loc.id === id);
  console.log(location);
  return (
    <div>
      <Navbar />
      <div className="location-container">
        <div className="location-cover">
          <img src={location.cover} alt={`${location.title} image`} />
        </div>
        <div className="location-description">
          <div className="description-left">
            <h2 className="location-title">{location.title}</h2>
            <h3 className="location-area">{location.location}</h3>
            <div className="location-tags">
              {location.tags &&
                location.tags.map((tag) => (
                  <div key={tag} className="tag-container">
                    <h3 className="location-tag">{tag}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="description-right">
            <div className="location-info">
              <h3 className="location-name">{location.host.name}</h3>
              <img
                src={location.host.picture}
                alt={location.host.name + "location"}
              />
            </div>
            <div className="stars-container">
              {location.rating &&
                Array.from({ length: location.rating }).map((_, index) => (
                  <Star key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
