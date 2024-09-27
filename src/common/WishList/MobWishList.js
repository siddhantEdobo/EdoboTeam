import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons"; // Use solid heart
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const MobWishList = ({ id }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("auth_token");

  console.log("id", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/wish-list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          // console.log(response);
          // setData(response.data);

          const wishlistItems = response.data?.results?.data;
          const isInWishlist = wishlistItems.some(
            (item) => item.product_id === id
          );
          setIsAddedToWishlist(isInWishlist);
          // setIsAddedToWishlist(true);
        }
      } catch (error) {
        console.error(error);
        // setError("Failed to load wishlist items.");
      }
    };
    fetchData();
  }, [id, token]);

  const addToWishlist = useCallback(async () => {
    try {
      if (!isAddedToWishlist) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v2/wishlist-store",
          { product_id: id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsAddedToWishlist(true);
        if (response) {
          console.log(response.data);
          // Toggle the wishlist state
        }
      } else {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/v2/wishlist-delete?product_id=${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          console.log(response.data);
          // Toggle the wishlist state to indicate it has been removed
          setIsAddedToWishlist(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [id, isAddedToWishlist, token]);

  return (
    <FontAwesomeIcon
      icon={isAddedToWishlist ? SolidHeart : faHeart} // Use solid heart if added
      className="fa-2xl"
      style={{ color: isAddedToWishlist ? "red" : "black" }} // Change color based on state
      onClick={addToWishlist} // Call function when the icon is clicked
    />
  );
};

export default MobWishList;
