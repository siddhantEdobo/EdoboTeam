// ProductFilters.js

import React, { useState } from "react";
import "./ProductFilters.css";
import filterImage from "../../../assets/Icon/Onion.png";

const categories = [
  "Fresh Vegetables",
  "Exotic Vegetables",
  "Fresh Fruits",
  "Exotic Fruits",
  "Herbs & Leafy Vegetables",
];

const priceCategoriesFilter = [
  "Under ₹50",
  "₹50 - ₹100",
  "₹100 - ₹200",
  "₹200 - ₹500",
  "₹500 and Above",
];

const brands = ["Aachi", "Daawat", "Everst", "Madhur", "Tata Sampann", "edobo"];

const discount = [
  "Upto 10% Off",
  "20% to 30% Off",
  "30% to 40% Off",
  "40% to 50% Off",
  "50% Off or more",
];

// const reviewStars = [
//   { id: 1, start: 4 },
//   { id: 2, start: 3 },
//   { id: 1, start: 2 },
//   { id: 1, start: 1 },
// ];
const reviewStars = Array.from({ length: 4 }, (_, index) => index + 1);

// Add CSS classes for text colors
const blackTextClass = "black-text";
const redTextClass = "red-text";
const brandTextClass = "brand-text"; // New class for brand text
const radioBtnClass = "radio-btn"; // New class for radio button
const starIconClass = "star-icon"; // New class for star icon

const FilterByName = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const priceComponents = priceCategoriesFilter?.map((value, index) => (
    <React.Fragment key={index}>
      <div className={`product-filter-component-row  ${blackTextClass}`}>
        <p className={`product-filter-component-text ${blackTextClass}`}>
          {value}
        </p>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const categoryComponents = categories.map((category, index) => (
    <React.Fragment key={index}>
      <div
        className={`product-filter-component-row ${
          index === 0 ? "fresh-vegetables-bg" : ""
        } ${redTextClass}`}
      >
        <img
          src={filterImage}
          alt={`Filter`}
          className="product-filter-component-image"
        />
        <p className={`product-filter-component-text ${redTextClass}`}>
          {category}
        </p>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const brandComponents = brands.map((brand, index) => (
    <React.Fragment key={index}>
      <div className={`d-flex justify-content-between  ${brandTextClass}`}>
        <label htmlFor={`brand-${index}`} className={` ${brandTextClass}`}>
          {brand}
        </label>
        <div className="">
          <input
            type="radio"
            id={`brand-${index}`}
            name="brand"
            value={brand}
            className={`product-filter-component-radio ${radioBtnClass}`}
            checked={selectedBrand === brand}
            onChange={() => handleBrandChange(brand)}
          />
        </div>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const discountComponents = discount.map((discountItem, index) => (
    <React.Fragment key={index}>
      <div className={`product-filter-component-row ${blackTextClass}`}>
        <p className={`product-filter-component-text ${blackTextClass}`}>
          {discountItem}
        </p>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const reviewComponents = reviewStars.map((star, index) => (
    <React.Fragment key={index}>
      <div className={`product-filter-component-row ${blackTextClass}`}>
        <div className="d-flex cursor-pointer">
          {[...Array(5)]
            .sort((a, b) => b - a)
            .map((_, idx) => (
              <span
                className={`fs-6 me-1 ${starIconClass}`}
                key={idx}
                style={{
                  color: idx < star ? "lightgrey" : "red",
                }}
              >
                ★
              </span>
            ))}
        </div>

        {/* <div className="d-flex">
          {[...Array(5)].map((_, idx) => (
            <span
              className={`fs-6 me-1 ${starIconClass}`}
              key={idx}
              style={{
                color: idx < star ? "red" : "lightgrey",
              }}
            >
              ★
            </span>
          ))}
        </div> */}

        <p className={`product-filter-component-text ${blackTextClass}`}>
          {/* {star} */}
        </p>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    // You can perform additional actions here based on the selected brand
  };

  return (
    <div className="container product-filter-component-container">
      {categoryComponents.length > 0 ? (
        <>
          {categoryComponents}
          <hr className="product-filter-component-divider" />
        </>
      ) : null}
      <p className="product-filter-component-heading">Price</p>
      {priceComponents}
      <hr className="product-filter-component-divider" />
      <p className="product-filter-component-heading">Brands</p>
      {brandComponents}
      <hr className="product-filter-component-divider" />
      <p className="product-filter-component-heading">Discount</p>
      {discountComponents}
      <hr className="product-filter-component-divider" />
      <p className="product-filter-component-heading">Customer Review</p>
      {reviewComponents}
      <hr className="product-filter-component-divider" />
    </div>
  );
};

export default FilterByName;
