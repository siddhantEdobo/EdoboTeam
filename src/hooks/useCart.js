// hooks/useCart.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity } from "../redux/reducers/addCart"; // Adjust path accordingly
import axios from "axios";
import Cookies from "universal-cookie";

const useCart = (pincode) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = async (product) => {
    const token = cookies.get("auth_token");
    if (!token) {
      console.error("No auth token found");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/cart/product",
        { pincode, product_id: product.id, action: "add" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(addToCart(product)); // Update Redux store
      console.log("Product incremented successfully", response.data);
    } catch (error) {
      console.error(
        "Error incrementing product",
        error.response?.data || error
      );
    }
  };

  const handleDecrement = async (product) => {
    const token = cookies.get("auth_token");
    if (!token) {
      console.error("No auth token found");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/cart/product",
        { pincode, product_id: product.id, action: "minus" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(decrementQuantity(product.id)); // Update Redux store
      console.log("Product decremented successfully", response.data);
    } catch (error) {
      console.error(
        "Error decrementing product",
        error.response?.data || error
      );
    }
  };

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return { handleIncrement, handleDecrement, getItemQuantity };
};

export default useCart;
