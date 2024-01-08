import React, { useState } from "react";
import BgPhoto from "../assets/bg.jpg";
import data from "../logements.json";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [locations, setLocations] = useState(data);
  return (
    <div>
      <div className="header-container">
        <Navbar />
      </div>
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" />
      </div>
      <div className="cards-container">
        {locations &&
          locations.map((location) => {
            return <Card key={location.id} location={location} />;
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
