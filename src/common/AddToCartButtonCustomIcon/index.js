import React, { useEffect, useState } from "react";
import "./AddToCartButtonCustomIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const AddToCartButtonCustomIcon = (props) => {
  const {
    quantity = 0,
    onAddtoCartClick = () => {},
    onIncrement = () => {},
    onDecrement = () => {},
  } = props;
  const [isAddedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAddtoCartClick();
  };

  const handleIncrement = () => {
    // setQuantity(quantity + 1);
    onIncrement(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onDecrement(quantity - 1);
      //   setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (quantity > 0) {
      setAddedToCart(true);
    }
  }, [quantity]);

  return (
    <div className="add-to-cart-container-custom-icon">
      {!isAddedToCart ? (
        <div
          className="add-to-cart-button-custom-icon"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon
            icon={faCartPlus}
            className="faicons-size text-danger"
          />
        </div>
      ) : (
        <div className="d-flex m-0 p-0 add-to-cart-input-continer-custom-icon">
          <div
            className="addtocart-inc-dec-btn-custom-icon text-danger"
            // type="button"
            onClick={handleDecrement}
          >
            –
          </div>
          <div className="add-to-cart-qty-custom-icon">{quantity}</div>
          <div
            className="addtocart-inc-dec-btn-custom-icon text-success"
            // type="button"
            onClick={handleIncrement}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButtonCustomIcon;
