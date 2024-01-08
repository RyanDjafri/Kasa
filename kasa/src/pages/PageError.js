import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PageError = () => {
  return (
    <div>
      <Navbar />
      <div className="error-container">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default PageError;
