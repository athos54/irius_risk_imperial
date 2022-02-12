import React from "react";
import { BiPlanet } from "react-icons/bi";
import { GiSpaceship } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaTruckMonster } from "react-icons/fa";
import "./Menu.scss";
const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo">
        <img src="assets/logo.png" alt="logo" />
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <span>
            <BiPlanet />
          </span>
          <span>Planets</span>
        </div>
        <div className="menu-item">
          <span>
            <GiSpaceship />
          </span>
          <span>Starships</span>
        </div>
        <div className="menu-item">
          <span>
            <BsFillPeopleFill />
          </span>
          <span>People</span>
        </div>
        <div className="menu-item">
          <span>
            <FaTruckMonster />
          </span>
          <span>Vehicles</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
