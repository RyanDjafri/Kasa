import React from "react";
import Vector from "../assets/Vector.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-div">
          <div className="logo">
            <img src={Vector} alt="vector-logo" className="vector" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
