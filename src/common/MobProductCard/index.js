import React from "react";
import "./MobProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWindowDimensions from "../../utils/dimensionsHelpers";
import AddToCartButtonCustomIcon from "../AddToCartButtonCustomIcon";

const MobProductCard = ({
  hideWishlist = false,
  imageSrc,
  title,
  description = "Product Description",
  packaging = "200ML",
  price,
  mrp,
  quantity = 0,
  onAddtoCartClick = () => {},
  onClickWishlist = () => {},
  onClick = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
  isNew = true,
  discountValue = 1,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className="card mob-product-card-container m-0">
      <div className="mob-product-image-container position-relative">
        <img
          className="mob-product-image"
          src={
            imageSrc ||
            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
          }
          alt={title}
          onClick={onClick}
        />
        {isNew && (
          <div className="mob-product-new-container">
            <div className="mob-product-new-subcontainer">New</div>
          </div>
        )}
        {discountValue > 0 && (
          <div className="mob-product-discount-container">14% Off</div>
        )}
        <div className="position-absolute bottom-0 start-0">
          {!hideWishlist && (
            <FontAwesomeIcon
              icon={faHeart}
              className="fa-2xl"
              onClick={() => {
                onClickWishlist();
              }}
            />
          )}
        </div>
      </div>
      <div className="mob-card-body position-relative">
        <div className="mob-card-title-container">
          <div className="mob-card-title two-line-text">{title} pasta</div>
        </div>
        <div className="one-line-text ps-2 fs-10">{packaging} </div>
        <div className="one-line-text ps-2 fs-10">{description} </div>
        <div className="mob-card-price-container">
          {/* <div className="fs-14 text-decoration-line-through fw-medium text-nowrap">
            {mrp}
          </div> */}
          <div className="fs-6 fw-bold text-nowrap">{price}</div>
        </div>
        <div className="position-absolute bottom-0 end-0">
          <AddToCartButtonCustomIcon
            quantity={quantity}
            onAddtoCartClick={() => {
              onAddtoCartClick();
            }}
            onIncrement={() => {
              onIncrement();
            }}
            onDecrement={() => {
              onDecrement();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobProductCard;
