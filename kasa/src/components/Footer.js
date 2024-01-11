import React from "react";
import Vector from "../assets/Vector.svg";
import Group from "../assets/Group.svg";
import S from "../assets/s.svg";
import A from "../assets/a.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-div">
          <div className="logo">
            <img src={Vector} alt="vector-logo" className="vector" />
            <img src={Group} alt="group-icon" className="group" />
            <img src={S} alt="footer-s-icon" className="s-logo" />
            <img src={A} alt="footer-a-icon" className="a-logo" />
          </div>
          <div className="text">
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
