import React from "react";
import AddToCartButton from "../AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import "./CartUnlockCardComponent.css";

const CartUnlockCardComponent = ({
  name = "",
  imageSrc,
  price = "",
  originalPrice = "",
  quantity = "",
}) => (
  <div className="card bg-danger rounded-4 cart-unlock-card-container">
    <div className="card m-0 p-0 rounded-4">
      <div className="d-flex">
        <div className="">
          <div className="cart-component-unloack-offer-image-container rounded-4">
            <img
              loading="lazy"
              src={imageSrc}
              alt={name}
              className="w-100 h-100 rounded-4"
            />
          </div>
        </div>
        <div className="flex-fill p-2">
          <div className="fs-12 fw-bold">{name}</div>
          <div className="fs-12 text-danger">{quantity}</div>
        </div>
        <div className="p-2 d-flex gap-2 align-items-center">
          <div className="fs-6 fw-bold">₹{price}</div>
          <div className=" fs-13 text-danger text-decoration-line-through">
            ₹{originalPrice}
          </div>
        </div>

        <div className="p-2 ps-0 d-flex align-items-center">
          <AddToCartButton className="bg-white text-danger border border-danger " />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center p-1 text-white gap-2">
      <div>
        <FontAwesomeIcon icon={faUnlock} className="faicon-size" />
      </div>
      <div className="fs-14">Hurray ! Special price unlocked</div>
    </div>
  </div>
);

export default CartUnlockCardComponent;
