import React, { useEffect, useState } from "react";
import "./AddToCartButtonCustomIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { addToCart, decrementQuantity } from "../../redux/reducers/addCart";

const AddToCartButtonCustomIcon = ({ product }, props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pincode = useSelector((state) => state.home.pincode);
  const [productQuantities, setProductQuantities] = useState({});
  const cookies = new Cookies();
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);

  const getItemQuantity = (itemId) => {
    // console.log("itemsid", itemId);
    // console.log(cartItems);
    const item = cartItems.find((item) => item.id === itemId);

    return item ? item.quantity : 0;
  };
  const quantity = product?.id ? getItemQuantity(product.id) : 0;

  const {
    onAddtoCartClick = async () => {
      console.log(product);
      const token = cookies.get("auth_token");
      console.log("token..1", token);
      if (!token) {
        console.error("No auth token found");
        return;
      }
      try {
        // Get the current quantity or default to 1 if not set
        const quantity = productQuantities[product?.id] || 1;
        console.log(quantity);
        const response = await axios.post(
          "http://113.61.33.202/api/v2/add-to-cart",
          {
            product_id: product?.id,
            qty: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(addToCart(product));
        // console.log("id", product.id);
        console.log("Product added successfully", response.data);

        // Update the quantity in state after adding to cart
        setProductQuantities((prevQuantities) => ({
          ...prevQuantities,
          [product?.id]: (prevQuantities[product?.id] || 0) + 1, // Ensure increment continues properly
        }));
      } catch (error) {
        console.error("Error adding to cart", error.response?.data || error);
      }
    },
    onIncrement = async () => {
      const token = cookies.get("auth_token");
      if (!token) {
        console.error("No auth token found");
        return;
      }

      try {
        const response = await axios.post(
          "http://13.61.33.202/api/v2/cart/product",
          {
            pincode: pincode,
            product_id: product?.id,
            action: "add",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(addToCart(product)); // Update Redux store
        console.log("Product incremented successfully", response.data);
      } catch (error) {
        console.error(
          "Error incrementing product",
          error.response?.data || error
        );
      }
    },
    onDecrement = async () => {
      const token = cookies.get("auth_token");
      if (!token) {
        console.error("No auth token found");
        return;
      }

      try {
        const response = await axios.post(
          "http://13.61.33.202/api/v2/cart/product",
          {
            pincode: pincode,
            product_id: product?.id,
            action: "minus",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(decrementQuantity(product?.id)); // Update Redux store
        console.log("Product decremented successfully", response.data);
      } catch (error) {
        console.error(
          "Error decrementing product",
          error.response?.data || error
        );
      }
    },
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
      //   setQuantity(quantity - 1)
    } else if (quantity === 1) {
      onDecrement(quantity - 1);
      setAddedToCart(false);
    }
  };

  useEffect(() => {
    if (quantity > 0) {
      setAddedToCart(true);
    }
  }, [quantity]);

  return (
    <div className="add-to-cart-container-custom-icon ">
      {!isAddedToCart ? (
        <div
          className="add-to-cart-button-custom-icon"
          style={{backgroundColor: '#D41A25'}}
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon
            icon={faCartPlus}
            className="faicons-size text-white"
          />
        </div>
      ) : (
        <div className="d-flex m-0 p-0 add-to-cart-input-continer-custom-icon"
        style={{backgroundColor: '#D41A25'}}
        >
          <div
            className="addtocart-inc-dec-btn-custom-icon text-white"
            style={{backgroundColor: '#D41A25'}}
            // type="button"
            onClick={handleDecrement}
          >
            –
          </div>
          <div className="add-to-cart-qty-custom-icon text-white" style={{backgroundColor: '#D41A25'}}>{quantity}</div>
          <div
            className="addtocart-inc-dec-btn-custom-icon text-white"
            style={{backgroundColor: '#D41A25'}}
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
