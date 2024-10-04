import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import "./OrderRescheduleComponent.css";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import AddToCartButton from "../../common/AddToCartButton";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import emptycart from "../../assets/Icon/empty-cart.png";
import { Images } from "../../assets";

const OrderCancel = ({ items }) => {
  const navigate = useNavigate();
  const closeButtonRef = useRef();
  
  // State to track the selected reason and custom input for "Other"
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const cancelReason = [
    "Order not received",
    "Order received but not satisfied",
    "Order received but damaged",
    "Order received but wrong product",
    "Delivery always late",
    "Other",
  ];

  const handleReasonChange = (reason) => {
    setSelectedReason(reason);
    if (reason !== "Other") {
      setCustomReason(""); // Clear custom reason when "Other" is not selected
    }
  };

  return (
    <div className="main-side-view-slot-container">
      <div className="reschedule-header-component offcanvas-header edobo-red">
        <div className="w-100 justify-content-between">
          <div className="fs-5 fw-bold text-white">Cancellation</div>
        </div>

        <button
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="btn-close bg-dark bg-white"
          ref={closeButtonRef}
        ></button>
      </div>

      <div className="cancel-reason-container">
        <span>Cancel Reason: </span>
        {cancelReason.map((reason) => (
          <div className="cancel-reason" key={reason}>
            <input
              type="radio"
              id={reason}
              className="form-check-input"
              name="reason"
              value={reason}
              onChange={() => handleReasonChange(reason)}
              checked={selectedReason === reason}
            />
            <label htmlFor={reason}>{reason}</label>
          </div>
        ))}
 {/* Show input field when "Other" is selected */}
 {selectedReason === "Other" && (
        <div className="other-reason-input">
          <label htmlFor="custom-reason">Please specify: </label>
          <input
            type="text"
            id="custom-reason"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            placeholder="Enter your reason"
            className="form-control"
          />
        </div>
      )}
      </div>

     

      <div className="col">
        <div className="confirm-btn">Cancel My Order</div>
      </div>
    </div>
  );
};

export default OrderCancel;
