import React from "react";
import "./Spinner.scss";
const Spinner = () => {
  return (
    <div className="spinner-container ">
      <div className="spinner-content">
        <div data-testid="spinner" className="lds-dual-ring"></div>
      </div>
    </div>
  );
};

export default Spinner;
