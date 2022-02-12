import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      By Athos Orío ({new Date().getFullYear()})
    </div>
  );
};

export default Footer;
