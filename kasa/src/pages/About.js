import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BgPhoto from "../assets/kalen.png";
import AboutCard from "../components/AboutCard";
import abouts from "../abouts.json";

const About = () => {
  const [aboutsData, setAboutsData] = useState(abouts);
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img src={BgPhoto} alt="title-img" className="about-img" />
      </div>
      <div className="opening-divs">
        {aboutsData &&
          aboutsData.map((about) => {
            return <AboutCard key={about.id} about={about} />;
          })}
      </div>
    </div>
  );
};

export default About;
