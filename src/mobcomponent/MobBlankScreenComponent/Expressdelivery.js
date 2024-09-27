import React from "react";
import expressimage from "../../assets/Icon/Express-Delivery.png";

function Expressdelivery() {
  return (
    <>
      <div className="d-block text-center doorstep">
        <img
          src={expressimage}
          alt="Express delivery"
          className="doorstepimg"
        />
      </div>
    </>
  );
}

export default Expressdelivery;
