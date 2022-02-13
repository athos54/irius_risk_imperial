import React from "react";
import "./ErrorModal.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ErrorModal = ({ close, errorDescription }) => {
  return (
    <div className="error-modal-container">
      <div className="error-modal-content">
        <div className="close-button">
          <AiOutlineCloseCircle onClick={close} />
        </div>

        <h4>An error has ocurred</h4>
        <div>{errorDescription}</div>
      </div>
    </div>
  );
};

export default ErrorModal;
