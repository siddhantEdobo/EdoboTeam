import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTip } from "../../redux/reducers/tipSlice";
import { setTotalAmount } from "../../redux/reducers/totalAmountPay";
import "./mobCartView.css";

const MobCartBillingComponent = ({
  totalItemPrice,
  savings,
  deliveryFee,
  couponAmount,
  tipAmount,
  amountToPay,
}) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.totalAmount.amount);

  // totalItemPrice + deliveryFee + tipAmount - savings;

  return (
    <div className="mt-3">
      <div className="card mob-cart-component-billing-heading-style">
        You're saving ₹{savings} on this order
      </div>
      <div className="fw-bold mt-3">Bill Details</div>

      <div className="mt-2 d-flex justify-content-between align-items-center mob-cart-component-billing-border">
        <div className="d-flex">
          <div className="fs-10 fw-bold">Item total</div>

          <div className="mob-cart-component-save-bill-style">
            Saved {savings}
          </div>
        </div>
        <div className=" d-flex">
          {/* <div className="text-decoration-line-through pe-2">₹{savings}</div> */}
          <div className="fw-bold">₹{totalItemPrice}</div>
        </div>
      </div>

      <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
        <div>Delivery partner fee for 3km</div>
        <div className="fw-bold">₹{deliveryFee}</div>
      </div>
      {couponAmount > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>
            <span className="ps-1">Coupon discount</span>
          </div>
          <div className="fw-bold">₹{couponAmount}</div>
        </div>
      )}
      {/* {walletAmount > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <span className="ps-1">Wallet</span>
          </div>
          <div className="fw-bold">₹{walletAmount}</div>
        </div>
      )} */}

      {/* <div className="mt-2 d-flex  justify-content-between mob-cart-component-billing-border">
          <div className="">Loyality Points</div>
          <div className="fw-bold">-₹50</div>
        </div> */}
      {/* {tipAmount > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>Delivery Partner Tip</div>
          <div className="fw-bold">₹{selectedTip}</div>
        </div>
      )} */}

      <div className="mt-2 d-flex justify-content-between">
        <div className="fw-bold">You Pay</div>
        <div className="fw-bold">₹{amountToPay}</div>
      </div>
    </div>
  );
};

export default MobCartBillingComponent;
