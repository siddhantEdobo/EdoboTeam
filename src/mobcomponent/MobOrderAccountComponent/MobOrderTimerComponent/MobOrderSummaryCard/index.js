import React from "react";
import "./MobOrderSummaryCard.css";

function MobOrderSummaryCard() {
  return (
    <>
      <div className="container">
        <div class="card border-0">
          <div class="card-header rounded-3 mt-2">Order Summary</div>
          <div class="card-body">
            <div className="d-flex justify-content-between my-1 ">
              <p>Order Number</p>
              <p>EDO-12345678-123456</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Invoice Number</p>
              <p>EDO-12345678-123456</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Subscription Invoice No.</p>
              <p className="text-warning ">EDO-12345678-123456</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Subscription Amount</p>
              <p>₹ 10,000</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Payment Mode</p>
              <p>Cash on Delivery</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Order Items</p>
              <p>5 items</p>
            </div>
            <div className="d-flex justify-content-between my-1 ">
              <p>Cart amount</p>
              <p>₹ 2,974</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobOrderSummaryCard;
