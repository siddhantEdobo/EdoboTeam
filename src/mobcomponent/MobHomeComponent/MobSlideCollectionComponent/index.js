import React, { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux';
import { decrementQuantity } from "../../../redux/reducers/addCart"; // Adjust the import path
import "./MobSlideCollectionComponent.css";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import axios from "axios";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ROUTES_NAVIGATION from "../../../routes/routes";
import { addToCart, removeFromCart } from "../../../redux/reducers/addCart";
import Cookies from "universal-cookie";

const MobSlideCollectionComponent = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pincode = useSelector((state) => state.home.pincode);
  const [productQuantities, setProductQuantities] = useState({});
  const cookies = new Cookies();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

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

  const handleAddToCart = async (product) => {
    const token = cookies.get("auth_token");
    console.log("token..1", token);
    if (!token) {
      console.error("No auth token found");
      return;
    }
    try {
      // Get the current quantity or default to 1 if not set
      const quantity = productQuantities[product.id] || 1;
      console.log(quantity);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/add-to-cart",
        {
          product_id: product.id,
          qty: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addToCart(product));
      console.log("id", product.id);
      console.log("Product added successfully", response.data);

      // Update the quantity in state after adding to cart
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: (prevQuantities[product.id] || 0) + 1, // Ensure increment continues properly
      }));
    } catch (error) {
      console.error("Error adding to cart", error.response?.data || error);
    }
  };
  console.log(productQuantities);

  const productHandle = (productId, product_name) => {
    // Navigate to the product detail page, passing the productId as a URL parameter
    console.log("id", productId);
    console.log("pincode", pincode);

    // navigate(`/product-detail/${productId}`);
    navigate(
      `${ROUTES_NAVIGATION.PRODUCT_DETAILS}?productId=${productId}&pincode=${pincode}`
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Check if data is valid and has the necessary structure
  const isValidData =
    data &&
    data.data &&
    data.data[1] &&
    data.data[1].items &&
    data.data[1].items[0] &&
    data.data[1].items[0].products;

  const getItemQuantity = (itemId) => {
    // console.log("itemsid", itemId);
    // console.log(cartItems);
    const item = cartItems.find((item) => item.id === itemId);

    return item ? item.quantity : 0;
  };

  return (
    <div>
      {isValidData ? (
        <div className="container-lg home-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-4">Slide Collection</div>
            <div className="d-flex">
              <div className="fs-14 pb-3 text-danger me-1"> More </div>
              <div className="fs-14 pb-3 text-danger me-2">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
          </div>
          <div className="d-flex hide-scrollbar gap-2 mt-3 ">
            {data.data[1].items[0].products.map((product, index) => {
              const quantity = productQuantities[product.id] || 0;
              return (
                <div
                  key={product.id}
                  className="card mob-combo-product-card-container"
                >
                  <div className="mob-combo-product-image-container position-relative card">
                    <img
                      className="product-image"
                      src={
                        "http://103.165.118.218/edobo/" +
                        product.thumb_image_url
                      }
                      alt={product.product_name}
                      onClick={() => {}}
                    />
                    <div className="mob-product-discount-container">
                      14% Off
                    </div>
                  </div>
                  <div className="card-body mob-combo-product-details">
                    <div className="">
                      <h6
                        className="card-title fs-14 fw-bold"
                        onClick={() =>
                          productHandle(product.id, product.product_name)
                        }
                      >
                        {product.product_name}
                      </h6>
                    </div>
                    <div className="d-flex gap-2">
                      <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                        {product.price}
                      </div>
                      <div className="fs-5 fw-bold text-nowrap text-success">
                        {product.compare_price}
                      </div>
                    </div>
                    <p className="fs-12 fw-bold">{"Combo of 5"}</p>
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <AddToCartButtonCustomIcon
                      product={product}
                      // quantity={getItemQuantity(product.id)}
                      // onAddtoCartClick={() => handleAddToCart(product)}
                      // onDecrement={() => handleDecrement(product)}
                      // onIncrement={() => handleIncrement(product)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container-lg home-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-6">Combo Banner</div>
            <div className="d-flex">
              <div className="fs-14 pb-3 text-danger me-1"> More </div>
              <div className="fs-14 pb-3 text-danger me-2">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
          </div>

          <div className="d-flex hide-scrollbar gap-2 mt-3 ">
            {[...Array(4)].map((value, index) => {
              return (
                <div
                  key={index}
                  className="card mob-combo-product-card-container"
                >
                  <div className="mob-combo-product-image-container position-relative card">
                    <img
                      className="product-image"
                      src={
                        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/products/sliding_image/440148a.jpg?ts=1694431585"
                      }
                      alt={"title"}
                      onClick={() => {}}
                    />
                    <div className="mob-product-discount-container">
                      14% Off
                    </div>
                  </div>
                  <div className="card-body mob-combo-product-details">
                    <h6 className="card-title fs-14 fw-bold">
                      {"Subji Combo"}
                    </h6>
                    <div className="d-flex gap-2">
                      <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                        {"₹ 70"}
                      </div>
                      <div className="fs-5 fw-bold text-nowrap text-success">
                        {"₹ 50"}
                      </div>
                    </div>
                    <p className="fs-12 fw-bold">{"Combo of 5"}</p>
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <AddToCartButtonCustomIcon
                      quantity={"0"}
                      onAddtoCartClick={() => {}}
                      onIncrement={() => {}}
                      onDecrement={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobSlideCollectionComponent;
