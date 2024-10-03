import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartBillingComponent = ({ totalPrice, tip, coupon }) => {
  // Calculating final price
  const discount = coupon ? (totalPrice * coupon.discount) / 100 : 0;
  const deliveryFee = 40;
  const walletBalance = -260;
  const loyaltyPoints = -50;
  const finalPrice =
    totalPrice + deliveryFee + walletBalance + loyaltyPoints + tip - discount;
  const aman = totalPrice - discount;
  return (
    <div className="mt-3 p-2 card shadow rounded-4">
      <div className="card mob-cart-component-billing-heading-style">
        You're saving ₹{Math.round(discount)} on this order
      </div>
      <div className="p-2">
        <div className="fw-bold fs-6 mt-3">Bill Details</div>
        <div className="mt-2 d-flex justify-content-between align-items-center mob-cart-component-billing-border">
          <div className="d-flex">
            <div className="fs-10 fs-6 fw-bold">Item total</div>

            <div className="mob-cart-component-save-bill-style">
              Saved ₹{Math.round(discount)}
            </div>
          </div>
          <div className=" d-flex">
            <div className="text-decoration-line-through fs-6 pe-2">
              ₹{totalPrice.toFixed(2)}
            </div>
            <div className="fw-bold fs-6">₹{aman.toFixed(2)}</div>
          </div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>Delivery partner fee for 3km</div>
          <div className="fw-bold">₹{deliveryFee.toFixed(2)}</div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <span className="ps-1">Wallet</span>
          </div>
          <div className="fw-bold">{walletBalance.toFixed(2)}</div>
        </div>

        <div className="mt-2 d-flex  justify-content-between mob-cart-component-billing-border fs-6">
          <div className="">Loyalty Points</div>
          <div className="fw-bold">{loyaltyPoints.toFixed(2)}</div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>Delivery Partner Tip</div>
          <div className="fw-bold">₹{tip}</div>
        </div>

        <div className="mt-2 d-flex justify-content-between fs-6">
          <div className="fw-bold">You Pay</div>
          <div className="fw-bold">₹{finalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartBillingComponent;
