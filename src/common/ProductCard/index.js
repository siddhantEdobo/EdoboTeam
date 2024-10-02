import React from "react";
import "./ProductCard.css";
import AddToCartButton from "../AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/Cart/cartSlice";

const ProductCard = ({
  hideWishlist = false,
  imageSrc,
  title,
  description,
  price,
  mrp,
  id,
  product, // Pass the entire product object as prop
  onClickWishlist = () => {},
  onClick = () => {},
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems?.find((item) => item.id === id); // This ensures only the item with the correct id is checked

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (!cartItem) {
      dispatch(addToCart(product)); // Add the full product to cart
    }
  };

  return (
    <div className="card product-card-container border-0">
      <div className="product-image-container position-relative">
        <img
          className="product-image"
          src={imageSrc}
          alt={title}
          onClick={onClick}
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
        <p className="card-text">{description}</p>

        <div className="product-card-button-container">
          <AddToCartButton
            quantity={cartItem?.quantity || 0}
            onAddtoCartClick={handleAddToCart}
            id={id}
            product={product} // Pass the product object to AddToCartButton
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
