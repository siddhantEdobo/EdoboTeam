// ProductCard.js
import React from "react";
import "./ProductCard.css";
import AddToCartButton from "../AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWindowDimensions from "../../utils/dimensionsHelpers";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";

const ProductCard = ({
  rating,
  product_detail,
  bestseller,
  hideWishlist = false,
  images,
  imageSrc,
  title,
  description,
  price,
  mrp,
  quantity = 0,
  isNew = false,
  discount = 0,
  onAddtoCartClick = () => {},
  onClickWishlist = () => {},
  onClick = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
}) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleImageClick = () => {
    const queryParams = new URLSearchParams({
      rating,
      bestseller,
      hideWishlist,
      imageSrc,
      images,
      title,
      description,
      price,
      mrp,
      quantity,
      isNew,
      discount,
    }).toString();

    navigate(`${ROUTES_NAVIGATION.PRODUCT_DETAILS}/?${queryParams}`);
  };

  return (
    <div className="card product-card-container border-0">
      {isNew && <div className="product-new-container">New</div>}
      {discount > 0 && (
        <div className="product-discount-container">{discount} Off</div>
      )}
      <div className="product-image-container position-relative">
        <img
          onClick={handleImageClick}
          className="product-image"
          src={imageSrc || "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"}
          alt={title}
        />
      </div>
      <div className="card-body">
        <div className="card-title-container">
          <h6 className="card-title fs-14">{title}</h6>
        </div>
        <div className="card-price-container">
          <div className="fs-14 text-decoration-line-through fw-medium text-nowrap">
            {mrp}
          </div>
          <div className="fs-6 fw-bold text-nowrap">{price}</div>
        </div>
        <div className="product-card-button-container">
          <AddToCartButton
            quantity={quantity}
            onAddtoCartClick={onAddtoCartClick}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          {!hideWishlist && (
            <FontAwesomeIcon
              icon={faHeart}
              className="fa-2xl"
              onClick={onClickWishlist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
