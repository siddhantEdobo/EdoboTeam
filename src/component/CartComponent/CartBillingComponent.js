import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartBillingComponent = () => {
  return (
    <div className="mt-3 card shadow rounded-4">
      <div className="card mob-cart-component-billing-heading-style">
        You're saving ₹1424 on this order
      </div>
      <div className="p-2">
        <div className="fw-bold fs-6 mt-3">Bill Details</div>
        <div className="mt-2 d-flex justify-content-between align-items-center mob-cart-component-billing-border">
          <div className="d-flex">
            <div className="fs-10 fs-6 fw-bold">Item total</div>

            <div className="mob-cart-component-save-bill-style">
              Saved ₹1424
            </div>
          </div>
          <div className=" d-flex">
            <div className="text-decoration-line-through fs-6 pe-2">₹1424</div>
            <div className="fw-bold fs-6">₹2950</div>
          </div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>Delivery partner fee for 3km</div>
          <div className="fw-bold">₹40</div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <span className="ps-1">Wallet</span>
          </div>
          <div className="fw-bold">-₹260</div>
        </div>

        <div className="mt-2 d-flex  justify-content-between mob-cart-component-billing-border fs-6">
          <div className="">Loyality Points</div>
          <div className="fw-bold">-₹50</div>
        </div>

        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border fs-6">
          <div>Delivery Partner Tip</div>
          <div className="fw-bold">₹20</div>
        </div>

        <div className="mt-2 d-flex justify-content-between fs-6">
          <div className="fw-bold">You Pay</div>
          <div className="fw-bold">₹2,974</div>
        </div>
      </div>
    </div>
  );
};

export default CartBillingComponent;
