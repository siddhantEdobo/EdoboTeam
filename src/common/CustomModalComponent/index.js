// CustomModal.js
import React, { useEffect, useState } from "react";
import "./CustomModalComponent.css";

const CustomModalComponent = ({
  headerName = "",
  headerRender = () => {},
  isOpen = false,
  onClose = () => {},
  isCloseButton = true,
  children,
}) => {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    console.log("----------unlockScroll-----------------");
    document.body.style.overflow = "scroll";
  }, []);

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  return (
    <>
      {isOpen && (
        <div className="custommodel-custom-modal-overlay">
          <div className="custommodel-custom-modal">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {headerName}
                {headerRender()}
              </h1>
              {isCloseButton && (
                <button
                  type="button"
                  className="btn-close custommodel-close-button faicons-size"
                  onClick={onClose}
                ></button>
              )}
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModalComponent;
