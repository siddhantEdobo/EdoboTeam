import React from "react";
import "./CollectionProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import AddToCartButtonCustomIcon from "../AddToCartButtonCustomIcon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CollectionProductCard = ({
  imageUrl,
  data,
  title = "",
  description = "",
  logo,

  price = "",
  mrp = "",
  discountAmount = "",
  allRating = "",
  starRating = "",
  quantity = 0,
  isNew = false,
  onClick = () => {},
  onWishlistClick = () => {},
  onDecrement = () => {},
  onIncrement = () => {},
  onAddtoCartClick = () => {},
}) => {
  return (
    <div className="w-100">
      <div className="card collection-product-card-main-container position-relative">
        <div className="d-flex m-1 p-1 gap-1 position-relative">
          <div className="collection-product-card-img-container position-relative">
            {isNew && (
              <div className="position-absolute bg-danger bottom-0 end-0 p-2 collection-product-card-new-container ">
                <div className="collection-product-card-new-rotate">New</div>
              </div>
            )}
            <div
              className="position-absolute bottom-0 start-0 ps-1"
              onClick={onWishlistClick}
            >
              <FontAwesomeIcon icon={faHeart} className="faicons-size" />
            </div>
            <div className="">
              <img src={imageUrl} alt="" className="w-100 h-100" />
            </div>
          </div>
          <div
            className="collection-product-card-details-container"
            onClick={onClick}
          >
            <span className="remove"> {logo}</span>
            <div className="card-title fs-14 fw-bold w-95 two-line-text">
              {title}
              {/* <div className=""></div> */}
            </div>
            <div className="two-line-text">{description}</div>

            <div className=" d-flex mt-1 gap-2">
              {price && <div className="fs-14 fw-bold">{price}</div>}

              {mrp && (
                <div className=" fs-14 text-decoration-line-through text-danger">
                  {mrp}
                </div>
              )}
            </div>

            {starRating && (
              <div className="w-75">
                <p style={{ display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <span className="fw-bold ps-1">{starRating}</span>
                  <span className="ps-1 text-black-50 fs-12">{allRating}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="position-absolute bottom-0 end-0">
          <AddToCartButtonCustomIcon product={data} />
        </div>
        {discountAmount && (
          <div className="position-absolute top-0 end-0 ">
            <div className="bg-danger bottom-0 end-0 collection-product-card-offer-style">
              <p>{discountAmount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionProductCard;
