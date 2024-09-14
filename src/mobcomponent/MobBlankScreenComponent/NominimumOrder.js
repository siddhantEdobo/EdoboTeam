import React from "react";
import minimumorder from "../../assets/Icon/No-Minimum-Order.png";

function NominimumOrder() {
  return (
    <>
      <div className="d-block text-center minimumorder">
        <img
          src={minimumorder}
          alt="No Minimum Order"
          className="minimumorder-img"
        />
      </div>
    </>
  );
}

export default NominimumOrder;
