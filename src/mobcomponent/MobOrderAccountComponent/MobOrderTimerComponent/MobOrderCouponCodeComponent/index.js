import React from "react";
import "./MobOrderCouponCode.css";

function MobOrderCouponCode() {
  return (
    <>
      <div class="card card-coupon-code my-3">
        <div class="card-body coupon-card-body">
          <h5 class="card-title text-center">
            Get up to <span className="fw-bold fs-2">Rs.200/-</span> OFF
          </h5>
          <h3 class="card-title text-center fw-semibold fs-6">
            OVERSTOCKED15
          </h3>
          <spa className="text-end mx-1 ">T&C Apply</spa>
          <div class="card-footer coupon-card-footer">
            <small class="text-body-primary">
              To avail the offer use coupon code
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobOrderCouponCode;
