import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./PopulationIcon.scss";
const PopulationIcon = () => {
  return (
    <div className="population-icon-container">
      <span className="item">
        <BsPersonCircle />
      </span>
      <span className="item">
        <BsPersonCircle />
      </span>
      <span className="item">
        <BsPersonCircle />
      </span>
    </div>
  );
};

export default PopulationIcon;
