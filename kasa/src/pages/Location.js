import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
const Location = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Location;
