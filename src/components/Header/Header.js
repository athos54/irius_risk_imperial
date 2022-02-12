import React from "react";
import { BsBell } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <h1>Imperial destroyers center</h1>
      <div className="header-icons">
        <BsBell />
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
