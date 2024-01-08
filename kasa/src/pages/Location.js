import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../logements.json";
import Star from "../components/Star";
import CardComponent from "../components/CardComponent";
import Carousel from "../components/Carousel";

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
          <Carousel pictures={location.pictures} />
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
              <Star prop={location.rating} />
            </div>
          </div>
        </div>
        <div className="description">
          <CardComponent
            prop={{ title: "Description", text: location.description }}
          />
          <div className="equipments">
            <CardComponent
              prop={{
                title: "Equipements",
                equipments: location.equipments,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
