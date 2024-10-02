import React, { useEffect, useState } from "react";
import "./AddToCartButton.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  addToCart,
} from "../../redux/Slices/Cart/cartSlice";

const AddToCartButton = (props) => {
  const { onAddtoCartClick = () => {}, id, product, className = "" } = props;

  const dispatch = useDispatch();

  // Select cartItems from Redux under myCart slice
  const cartItems = useSelector((state) => state.myCart.cartItems);
  const cartItem = cartItems?.find((item) => item.id === id);

  // Determine if the product is already in the cart
  const [isAddedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (cartItem?.quantity && cartItem.quantity > 0) {
      setAddedToCart(true);
    } else {
      setAddedToCart(false);
    }
  }, [cartItem?.quantity]);

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    dispatch(addToCart(product)); // Pass the full product object to the action
    onAddtoCartClick();
  };

  // Increment the product quantity using Redux
  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  // Decrement the product quantity using Redux
  const handleDecrement = () => {
    if (cartItem?.quantity > 1) {
      dispatch(decrementQuantity({ id }));
    } else if (cartItem?.quantity === 1) {
      setAddedToCart(false); // Hide the quantity buttons when quantity is 0
      dispatch(decrementQuantity({ id }));
    }
  };

  return (
    <div className={`add-to-cart-container`}>
      {!isAddedToCart ? (
        <button
          className={`add-to-cart-button ${className}`}
          onClick={handleAddToCart}
        >
          Add
        </button>
      ) : (
        <div className={`d-flex m-0 p-0 add-to-cart-input-continer`}>
          <div className="addtocart-inc-dec-btn" onClick={handleDecrement}>
            -
          </div>
          <div className="add-to-cart-qty bg-white text-danger">
            {cartItem?.quantity || 0} {/* Show the correct quantity here */}
          </div>
          <div className="addtocart-inc-dec-btn" onClick={handleIncrement}>
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
