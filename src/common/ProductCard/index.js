import React from "react";
import "./ProductCard.css";
import AddToCartButton from "../AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWindowDimensions from "../../utils/dimensionsHelpers";
import { CalcWidthValue } from "../../utils/commonValue";

const ProductCard = ({
  hideWishlist = false,
  imageSrc,
  title,
  description,
  price,
  mrp,
  quantity = 0,
  onAddtoCartClick = () => {},
  onClickWishlist = () => {},
  onClick = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
  isNew = false,
  discountValue = 1,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className="card product-card-container border-0 ">
      {isNew && <div className="product-new-container">New</div>}
      {discountValue > 0 && (
        <div className="product-discount-container">17% Off</div>
      )}
      <div className="product-image-container position-relative">
        <img
          className="product-image"
          src={
            imageSrc ||
            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
          }
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
        {/* <div className="d-flex">
          fnireuf frfeifo erifmoe rifmoemir reifomierf efireofier
        </div> */}
        <p className="card-text">{description}</p>
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
              onClick={() => {
                onClickWishlist();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// ProductCard.js

// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import "./ProductCard.css"; // Import your CSS file

// const ProductCard = ({ imageSrc, title, description, price }) => {
//   return (
//     <Card className="product-card">
//       <Card.Img variant="top" src={imageSrc} alt={title} />
//       <Card.Body className="product-card-body">
//         <Card.Title className="product-title">{title}</Card.Title>
//         <Card.Text className="product-description">{description}</Card.Text>
//         <Card.Text className="product-price">{price}</Card.Text>
//         <Button variant="primary" className="add-to-cart-btn">
//           Add to Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;
