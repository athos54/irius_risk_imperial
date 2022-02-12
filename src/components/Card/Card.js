import React from "react";
import "./Card.scss";
const Card = ({ img, title, subtitle, description, other }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="image">
          <img
            src={img}
            alt={title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "assets/not_found.jpeg";
            }}
          />
        </div>
        <div className="texts">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="description">
            <div>{description}</div>
            <div>{other}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
