import React, { useEffect, useState } from "react";
import "./AddToCartButton.css";

const AddToCartButton = (props) => {
  const {
    quantity = 0,
    onAddtoCartClick = () => {},
    onIncrement = () => {},
    onDecrement = () => {},
    className = "",
  } = props;
  const [isAddedToCart, setAddedToCart] = useState(false);
  //   const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAddtoCartClick();
  };

  const handleIncrement = () => {
    // setQuantity(quantity + 1);
    console.log("handleIncrement");
    onIncrement(quantity + 1);
  };

  const handleDecrement = () => {
    console.log("handleDecrement");
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
    <div className={`add-to-cart-container`}>
      {!isAddedToCart ? (
        <button
          className={`add-to-cart-button  ${className} `}
          onClick={handleAddToCart}
        >
          Add
        </button>
      ) : (
        <div className={`d-flex m-0 p-0 add-to-cart-input-continer `}>
          <div
            className="addtocart-inc-dec-btn"
            // type="button"
            onClick={handleDecrement}
          >
            -
          </div>
          <div className="add-to-cart-qty bg-white text-danger ">
            {quantity}
          </div>
          <div
            className="addtocart-inc-dec-btn"
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

export default AddToCartButton;
