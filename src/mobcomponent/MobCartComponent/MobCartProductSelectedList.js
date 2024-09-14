import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCartItems } from "../../redux/reducers/addCart";
import Cookies from "universal-cookie";

const MobCartProductSelectedList = () => {
  const cookies = new Cookies();
  const cartItems = useSelector((state) => state.cart.items);

  const [data, setData] = useState();
  console.log("redux", cartItems);
  const dispatch = useDispatch();

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
        // dispatch(setCartItems(response.data)); // Assuming the API response returns the cart items
      } catch (error) {
        console.error("Error fetching cart data", error);
      }
    };

    fetchCartItems(); // Fetch cart data when the component loads
  }, []);
  return (
    <div className=" card shadow-sm edobo-white">
      {cartItems.map((data, index) => {
        return (
          <div key={index} className="p-3">
            <div className="border-bottom d-flex">
              <div className="bg-danger mob-cart-product-img-container">
                <img
                  className="w-100 h-100"
                  src={"http://103.165.118.218/edobo/" + data.thumb_image_url}
                  alt={"productimage"}
                />
              </div>
              <div className=" d-flex justify-content-between flex-fill">
                <div className="p-2 gap-2">
                  <div className="fw-bold">{data.product_name}</div>
                  <div className=" fw-lighter">
                    {data.weight_value}

                    {"" + data.weight_name}
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <div className="fw-bold text-nowrap">
                      ₹ {data.compare_price}
                    </div>
                    <div className="text-decoration-line-through  text-nowrap text-danger">
                      ₹ {data.price}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-1 align-items-end justify-content-around">
                  <div className="">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-danger faicons-size"
                    />
                  </div>
                  <div className="">
                    <AddToCartButtonCustomIcon quantity={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobCartProductSelectedList;
