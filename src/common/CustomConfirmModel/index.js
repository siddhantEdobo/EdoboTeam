import React from "react";
import { confirmable, createConfirmation } from "react-confirm";
import useWindowDimensions from "../../utils/dimensionsHelpers";

const Confirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "",
  confirmation,
  show,
  proceed,
  enableEscape = true,
  headerText = "",
}) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {/* // <Modal
    //   open={show}
    //   onClose={() => proceed(false)}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <div
    //     style={{
    //       backgroundColor: "#FFFFFF",
    //       padding: "20px",
    //       borderRadius: "15px",
    //       margin: "10px",
    //       top: 0,
    //       width: "350px",
    //       height: "170px",
    //       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    //     }}
    //   >
    //     <div style={{ fontSize: "20px", fontWeight: 600, marginBottom: "3px" }}>
    //       {confirmation?.title}
    //     </div>
    //     <div
    //       style={{
    //         fontSize: "14px",
    //         fontWeight: 400,
    //         flex: 1,
    //         marginBottom: "30px",
    //       }}
    //     >
    //       {confirmation?.description}
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "flex-end",
    //         gap: "10px",
    //       }}
    //     >
    //       <CustomButton
    //         fullWidth
    //         label={cancelLabel}
    //         fontSize={"12px"}
    //         onClick={() => proceed(false)}
    //         background="white"
    //         style={{
    //           color: "#333333",
    //           width: "150px",
    //           height: "40px",
    //         }}
    //       />
    //       <CustomButton
    //         fullWidth
    //         label={okLabel}
    //         style={{
    //           width: "150px",
    //           height: "40px",
    //         }}
    //         fontSize={"12px"}
    //         onClick={() => proceed(true)}
    //       />
    //     </div>
    //     
    //   </div>
    // </Modal> */}
    </>
  );
};

export function confirm(
  confirmation,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options,
  });
}
