import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../logements.json";

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
          <div className="description-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Location;
