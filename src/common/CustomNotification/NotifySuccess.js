import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message) =>
  toast.success(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
  });

// const showSuccessToast = () => {
//   toast.success("Hello World", {
//     data: {
//       title: "Success toast",
//       text: "This is a success message",
//     },
//   });
// }

export const CustomModalSuccess = ({ show, handleClose, message }) => {
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
              <div className="modal-body p-5 text-center fs-6 fw-bold text-success">
                {message}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
