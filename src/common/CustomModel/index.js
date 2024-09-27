import React from "react";
import "./modal.css"; // Assuming you have a CSS file for styling your modal

const CustomModal = ({ isModalOpen, modalContent, onClose }) => {
  if (!isModalOpen) {
    return null; // If modal is not open, return null to render nothing
  }

  return (
    <div className="modal-overlay">
      <div className="custom-modal">
        <div className="modal-content">
          <div className="exit-icon" onClick={onClose}>
            close
          </div>
          <div className="modal-mainContents">
            <h5 className="modal-title">{modalContent.title}</h5>
            <hr />
            <div className="modal-image text-center mt-lg-2">
              <img src={modalContent.image} alt="alt" />
            </div>
            <p className="mt-lg-3 modalText">{modalContent.content}</p>
            <div className="modal-button text-end">
              <button>{modalContent.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
