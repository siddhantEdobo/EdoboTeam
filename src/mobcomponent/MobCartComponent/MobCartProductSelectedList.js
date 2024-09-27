import { faTrashCan , faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCartItems } from "../../redux/reducers/addCart";
import Cookies from "universal-cookie";
// import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  addToCart,
  removeFromCart,
} from "../../redux/reducers/addCart";
// import { addToCart, removeFromCart } from "../../../redux/reducers/addCart";

const MobCartProductSelectedList = () => {
  const cookies = new Cookies();
  const cartItems = useSelector((state) => state.cart.items);
  const pincode = useSelector((state) => state.home.pincode);

  const [data, setData] = useState();
  // console.log("redux", cartItems);
  const dispatch = useDispatch();

  const handleIncrement = async (product) => {
    const token = cookies.get("auth_token");
    if (!token) {
      console.error("No auth token found");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/cart/product",
        {
          pincode: pincode,
          product_id: product.id,
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
        {
          pincode: pincode,
          product_id: product.id,
          action: "minus",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = cookies.get("auth_token");
      if (!token) {
        console.error("No auth token found");
        return;
      }
      // const token = cookies.get("auth_token");
      console.log("okokoko", token);
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/cart/details?pincode=400071&device=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ); // Replace with your API URL
        if (response) {
          const data = response.data;
          setData(response.data);
          console.log("cart data", data);
        }
        // Assuming the API response returns the cart items
      } catch (error) {
        console.error("Error fetching cart data", error);
      }
    };

    fetchCartItems(); // Fetch cart data when the component loads
  }, []);

  const handleRemove = async (item) => {
    // Optimistic update: Remove the item from local state
    setData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        items: prevData.data.items.filter((i) => i.id !== item.id),
      },
    }));

    const token = cookies.get("auth_token");
    if (!token) {
      console.error("No auth token found");
      return;
    }

    const requestData = {
      pincode: pincode,
      product_id: item.id,
      action: "remove",
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/cart/product",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Product removed successfully", response.data);

      // Dispatch action to remove item from Redux store
      dispatch(removeFromCart(item.id));
    } catch (error) {
      console.error("Error removing product", error.response?.data || error);

      // Revert optimistic update if API request fails
      setData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          items: [...prevData.data.items, item],
        },
      }));
    }
  };

  // console.log("null??????",   data);

  // console.log("cart data issssss", data.data.items);

  return (
    <div className="card shadow-sm edobo-white">
      {/* {data && data.data.items && data.data.items.length > 0 ? ( */}
      {data && data.data.items && data.data.items.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="p-3">
            <div className="border-bottom d-flex">
              <div className="bg-danger mob-cart-product-img-container">
                <img
                  
                  src={`http://103.165.118.218/edobo/${item.thumb_image_url}`}
                  alt="productimage"
                  width={'80px'}
                />
              </div>
              <div className="d-flex justify-content-between flex-fill">
                <div className="p-2 gap-2">
                  <div className="fw-bold">{item.product_name}</div>
                  <div className="fw-lighter">
                    {item.weight_value} {item.weight_name}
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <div className="fw-bold text-nowrap">
                      ₹ {item.compare_price}
                    </div>
                    <div className="text-decoration-line-through text-nowrap text-grey">
                      ₹ {item.price}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-1 align-items-end justify-content-around">
                  <div>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-danger faicons-size"
                      onClick={() => handleRemove(item)}
                    />
                  </div>
                  <div>
                    {/* <AddToCartButtonCustomIcon quantity={item.quantity} /> */}
                    <AddToCartButtonCustomIcon
                      product={item}
                      // quantity={item.quantity}
                      // onDecrement={() => handleDecrement(item)}
                      // onIncrement={() => handleIncrement(item)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MobCartProductSelectedList;
