import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetailsCard.css";
import ProductDetailsImageComponent from "./ProductDetailsImageComponent";
import greenStar from '../../assets/Icon/greenStar.png';
import uv from '../../assets/UV.png'
import affordable from '../../assets/Affordable.png'
import minimum from '../../assets/NoMinimumOrder.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faChevronDown,
faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { flatMap } from "lodash";
import bestSeller from '../../assets/bestSeller.png'

const ProductDetailsComponent = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const rating = queryParams.get("rating") || "N/A";
  const bestseller = queryParams.get("bestseller") || "No";
  const hideWishlist = queryParams.get("hideWishlist") || "false";
  const imageSrc = queryParams.get("imageSrc") || "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg";
  const title = queryParams.get("title") || "Untitled";
  const description = queryParams.get("description") || "No description available.";
  const price = queryParams.get("price") || "0";
  const mrp = queryParams.get("mrp") || "0";
  const quantity = queryParams.get("quantity") || "0";
  const isNew = queryParams.get("isNew") || "No";
  const discount = queryParams.get("discount") || "0";
  const imagesParam = queryParams.get("images") || "";

  const [ProductDetails , setProductDetails] = useState(false)
  const [Description , setDescription] = useState(false)

  const images = imagesParam.split(",").map(url => url.trim()).filter(url => url);

  
  const ratingStars = !isNaN(rating) 
    ? Array.from({ length: parseInt(rating, 10) }, (_, index) => (
        <img key={index} width={'20px'} src={greenStar} alt="Rating star" className="rating-star"/>
      ))
    : <span>{rating}</span>;

  return (
    <div className="product-detail-container">
      <div className="product-image-and-info-container">
        <ProductDetailsImageComponent images={images} />
        <div className="product-info-container">
          <div className="product-title-and-rating">
            {bestseller && (<img className='best-seller-icon' src={bestSeller} width={'80px'}/>)}
            <h2 className="product-title-text">{title}</h2>
            <div className="rating-section">
              {ratingStars}
              <span className="rating-text">({rating})</span>
              <span className="review-count">12 reviews</span>
            </div>
            <span className="review-by">Review all by Modern</span>
          </div>

          <div className="pricing-container">
             <div className="price-and-mrp">
                  <span className="price-text">{price}</span>
                  <span className="mrp-text">{mrp}</span>
                  <div className="discount-text">5% off</div>
             </div>
             <div className="combo-price-container">
                <div className="combo-price-card">
                    <span>2 x 1Kg</span>
          <div style={{display: 'flex' , flexDirection: 'row' , alignItems: 'center' , gap: '5px'}}>
          <span className="combo-price-text">{price}</span>
          <span className="combo-mrp-text">MRP:{mrp}</span>
          </div>
                </div>
             </div>
             <div className="cart-wishlist-container">
              <button className="add-to-cart-btn">
                Add to cart
              </button>
              <button className="add-to-wishlist-btn">
                Add to wishlist
              </button>
             </div>
          </div>

          <div className="edobo-special-container">
            <span className="edobo-special-heading">Why shop from edobo?</span>
            <div className="edobo-special-card">
              <img src={uv} width={'50px'} alt="UV Sanitised" className="edobo-special-image"/>
              <div className="edobo-special-info">
                <span className="special-title">
                  UV Sanitised Products
                </span>
                <span className="special-description">
                  A quality testing team makes sure that all products are gone through UV sanitisation. All products are tested for quality assurance.
                </span>
              </div>
            </div>
            <div className="edobo-special-card">
              <img src={affordable} width={'50px'} alt="Affordable Prices" className="edobo-special-image"/>
              <div className="edobo-special-info">
                <span className="special-title">
                  Affordable Prices & Offers
                </span>
                <span className="special-description">
                  A quality testing team makes sure that all products are gone through UV sanitisation. All products are tested for quality assurance.
                </span>
              </div>
            </div>

            <div className="edobo-special-card">
              <img src={minimum} width={'50px'} alt="No Minimum Order" className="edobo-special-image"/>
              <div className="edobo-special-info">
                <span className="special-title">
                  No Minimum Order
                </span>
                <span className="special-description">
                  A quality testing team makes sure that all products are gone through UV sanitisation. All products are tested for quality assurance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-and-desc-container">
        <div className="product-d-d-conatiner">
        <div className="product-detail-card">
          <span className="product-detail-title">Product Detail</span>
         <button onClick={()=>setProductDetails(!ProductDetails)}> <FontAwesomeIcon   icon={ProductDetails ? faChevronDown: faChevronRight}/></button>
         </div>
         {
          ProductDetails && (
            <span className="description-text">
              {description}
            </span>
          )
         }
           </div>

           <div className="product-d-d-conatiner">
        <div className="product-detail-card">
          <span className="product-detail-title">Description</span>
        <button onClick={()=>setDescription(!Description)}> <FontAwesomeIcon  icon={ Description ? faChevronDown : faChevronRight}/> </button>
         </div>
         {
          Description && (
            <span className="description-text">
              {description}
            </span>
          )
         }
           </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
