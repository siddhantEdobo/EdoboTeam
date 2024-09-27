import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyError = (message, messageType) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: messageType,
  });

export const CustomModalError = ({ show, handleClose, message }) => {
  return (
    <>
      {show && (
        <div
          className={`modal ${show ? " modal-show" : ""}`}
          style={{ display: `${show ? "block" : "none"}` }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content justify-content-center ">
              <div className="modal-body p-5 text-center fs-6 fw-bold text-danger">
                {message}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
