import React from "react";
import "./MobCartView.css";
import ROUTES_NAVIGATION from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import gift from "../../../assets/Icon/gift.png";
import { useSelector } from "react-redux";

export default function MobCartView() {
  const navigate = useNavigate();
  const onCartClickHandler = () => {
    navigate(ROUTES_NAVIGATION.CART);
  };
  const cartItems = useSelector((state) => state.cart.items);

  const amount = useSelector((state) => state.totalAmount.amount);

  return (
    <div className="view-cart-container">
      <img alt="logo" className="gift-icon" src={gift} width={"50px"} />
      <div className="view-card">
        <span>
          <b>{cartItems.length} items</b>
        </span>
        <button onClick={onCartClickHandler}> View cart</button>
      </div>
    </div>
  );
}
