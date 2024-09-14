import React from "react";
import iconImageUV from "../../../assets/Icon/NO MINIMUM ORDER.png";
import iconImageMinimum from "../../../assets/Icon/UV-Tech.png";
import iconImageLowest from "../../../assets/Icon/Onion.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import "./ProductDetailsDescriptionComponent.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../../../common/AddToCartButton";

const ProductDetailsDescriptionComponent = () => {
  return (
    <div className="productDetailsComponent-card w-100">
      <div
        className=" bg-danger justify-content-center p-1"
        style={{
          width: "70px",
          height: "30px",
          marginLeft: "20px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <h6
          style={{
            fontSize: "12px",
            color: "#fff",
          }}
        >
          Best Seller
        </h6>
      </div>

      <div className="productDetailsComponent-card-body">
        <div className="d-flex  align-items-center justify-content-between">
          <h6 style={{ fontSize: "12px" }}>Modern</h6>
          <FontAwesomeIcon icon={faHeart} className="fa-xl" />
        </div>
        <h5 className="productDetailsComponent-card-title">
          Modern 100 % Whole Wheat : 400 Gm
        </h5>
        <p style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faStar} className="text-success" />
          <FontAwesomeIcon icon={faStarHalfStroke} className="text-success" />
          (5) review 20
        </p>
        <h5>₹50</h5>
        <span className="d-flex">
          <h5 style={{ textDecoration: "line-through", color: "#D32F2F" }}>
            ₹52.5
          </h5>
          (5% off)
        </span>
        <div
          style={{
            background: "#D32F2F",
            padding: "6px",
            color: "white",
            width: "80%",
            height: "5%px",
            borderRadius: "5px",
            fontSize: "12px",
          }}
        >
          Subscription Available On This Product
        </div>
        <h5 style={{ marginTop: "15px" }}>Select</h5>
        <AddToCartButton onClick={() => {}} />
        <h5
          style={{
            marginTop: "15px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Why shop with edobo?
        </h5>
        <div
          className="col-md-5 w-75"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={iconImageUV}
            alt="Icon"
            style={{
              marginRight: "10px",
              width: "50px",
              height: "50px",
            }}
          />
          <div>
            <h5
              style={{
                marginTop: "15px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              UV Sanitized Products
            </h5>
            <p style={{ marginTop: "5px", fontSize: "12px" }}>
              demo text xyz lorem ipsum demo text xyz lorem ipsum demo
            </p>
          </div>
        </div>
        <div
          className="col-md-5 w-75"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={iconImageLowest}
            alt="Icon"
            style={{
              marginRight: "10px",
              width: "50px",
              height: "50px",
            }}
          />
          <div>
            <h5
              style={{
                marginTop: "15px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              UV Sanitized Products
            </h5>
            <p style={{ marginTop: "5px", fontSize: "12px" }}>
              demo text xyz lorem ipsum demo text xyz lorem ipsum demo
            </p>
          </div>
        </div>
        <div
          className="col-md-5 w-75"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={iconImageMinimum}
            alt="Icon"
            style={{
              marginRight: "10px",
              width: "50px",
              height: "50px",
            }}
          />
          <div>
            <h5
              style={{
                marginTop: "15px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              UV Sanitized Products
            </h5>
            <p style={{ marginTop: "5px", fontSize: "12px" }}>
              demo text xyz lorem ipsum demo text xyz lorem ipsum demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsDescriptionComponent;
