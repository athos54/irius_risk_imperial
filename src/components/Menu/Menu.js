/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "wouter";
import "./Menu.scss";
import { menuItems } from "./menuItems";
import { VscBracketError } from "react-icons/vsc";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo">
        <img src="assets/logo.png" alt="logo" />
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              <a className="menu-item">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </Link>
          );
        })}
        <Link href="/error-example">
          <a className="menu-item">
            <span>
              <VscBracketError />
            </span>
            <span>Error example</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
