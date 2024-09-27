import React from "react";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../routes/routes";
// https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/ms.files/Empty-Cart.png
const MobEmptyCartComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="mob-cart-component-empty-cart-container">
      <div className="mob-cart-component-empty-cart">
        <img
          loading="lazy"
          src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/ms.files/Empty-Cart.png"
          alt="r"
          className="w-100 h-100"
        />
      </div>
      <div
        className="mob-cart-component-payment-button"
        onClick={() => navigate(ROUTES_NAVIGATION.HOME)}
      >
        Quick, Grab then here!
      </div>
    </div>
  );
};

export default MobEmptyCartComponent;
