import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./PopulationIcon.scss";
const PopulationIcon = () => {
  return (
    <div className="population-icon-container">
      {[0, 0, 0].map((_, index) => (
        <span key={index} className="item">
          <BsPersonCircle />
        </span>
      ))}
    </div>
  );
};

export default PopulationIcon;
