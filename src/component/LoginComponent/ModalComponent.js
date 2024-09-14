import React, { useContext, useEffect, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";

const ModalComponent = ({
  headerName,
  isOpen = false,
  onClose,
  children,
  closeButton = true,
}) => {
  const showModalRef = useRef();
  const hideModalRef = useRef();
  const { setIsModalOpen } = useContext(GlobalContext);

  useEffect(() => {
    console.log("isOpen", isOpen);
    if (isOpen) {
      console.log("++++isOpen");
      showModalRef?.current?.click();
    } else {
      console.log("++++close");
      onClose();
      hideModalRef?.current?.click();
    }
  }, [isOpen, onClose, setIsModalOpen]);

  return (
    <>
      {isOpen && (
        <>
          <button
            type="button"
            // className="btn btn-primary d-none"
            data-bs-toggle="modal"
            data-bs-target="#loginComponentModel"
            ref={showModalRef}
          ></button>

          <div
            className="modal fade"
            id="loginComponentModel"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="loginComponentModelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="loginComponentModelLabel"
                  >
                    {headerName}
                  </h1>
                  {closeButton && (
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      ref={hideModalRef}
                      onClick={() => {
                        setIsModalOpen(false);
                      }}
                    ></button>
                  )}
                </div>
                <div className="modal-body login-component-modal-container">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalComponent;
