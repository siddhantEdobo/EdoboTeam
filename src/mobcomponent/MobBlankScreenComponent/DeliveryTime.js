import React from "react";
import deliverytimeimage from "../../assets/Icon/Delivery-Rating.png";

function DeliveryTime() {
  return (
    <>
      <div className="d-block text-center doorstep">
        <img
          src={deliverytimeimage}
          alt="delivery Time"
          className="doorstepimg"
        />
      </div>
    </>
  );
}

export default DeliveryTime;
