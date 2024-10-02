// // ProductFilters.js

// import React, { useState } from "react";
// import "./ProductFilters.css";
// import filterImage from "../../../assets/Icon/Onion.png";

// const categories = [
//   "Fresh Vegetables",
//   "Exotic Vegetables",
//   "Fresh Fruits",
//   "Exotic Fruits",
//   "Herbs & Leafy Vegetables",
// ];

// const priceCategoriesFilter = [
//   "Under ₹50",
//   "₹50 - ₹100",
//   "₹100 - ₹200",
//   "₹200 - ₹500",
//   "₹500 and Above",
// ];

// const brands = ["Aachi", "Daawat", "Everst", "Madhur", "Tata Sampann", "edobo"];

// const discount = [
//   "Upto 10% Off",
//   "20% to 30% Off",
//   "30% to 40% Off",
//   "40% to 50% Off",
//   "50% Off or more",
// ];

// // const reviewStars = [
// //   { id: 1, start: 4 },
// //   { id: 2, start: 3 },
// //   { id: 1, start: 2 },
// //   { id: 1, start: 1 },
// // ];
// const reviewStars = Array.from({ length: 4 }, (_, index) => index + 1);

// // Add CSS classes for text colors
// const blackTextClass = "black-text";
// const redTextClass = "red-text";
// const brandTextClass = "brand-text"; // New class for brand text
// const radioBtnClass = "radio-btn"; // New class for radio button
// const starIconClass = "star-icon"; // New class for star icon

// const FilterByName = () => {
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const priceComponents = priceCategoriesFilter?.map((value, index) => (
//     <React.Fragment key={index}>
//       <div className={`product-filter-component-row  ${blackTextClass}`}>
//         <p className={`product-filter-component-text ${blackTextClass}`}>
//           {value}
//         </p>
//       </div>
//       <hr className="product-filter-component-divider" />
//     </React.Fragment>
//   ));

//   const categoryComponents = categories.map((category, index) => (
//     <React.Fragment key={index}>
//       <div
//         className={`product-filter-component-row ${
//           index === 0 ? "fresh-vegetables-bg" : ""
//         } ${redTextClass}`}
//       >
//         <img
//           src={filterImage}
//           alt={`Filter`}
//           className="product-filter-component-image"
//         />
//         <p className={`product-filter-component-text ${redTextClass}`}>
//           {category}
//         </p>
//       </div>
//       <hr className="product-filter-component-divider" />
//     </React.Fragment>
//   ));

//   const brandComponents = brands.map((brand, index) => (
//     <React.Fragment key={index}>
//       <div className={`d-flex justify-content-between  ${brandTextClass}`}>
//         <label htmlFor={`brand-${index}`} className={` ${brandTextClass}`}>
//           {brand}
//         </label>
//         <div className="">
//           <input
//             type="radio"
//             id={`brand-${index}`}
//             name="brand"
//             value={brand}
//             className={`product-filter-component-radio ${radioBtnClass}`}
//             checked={selectedBrand === brand}
//             onChange={() => handleBrandChange(brand)}
//           />
//         </div>
//       </div>
//       <hr className="product-filter-component-divider" />
//     </React.Fragment>
//   ));

//   const discountComponents = discount.map((discountItem, index) => (
//     <React.Fragment key={index}>
//       <div className={`product-filter-component-row ${blackTextClass}`}>
//         <p className={`product-filter-component-text ${blackTextClass}`}>
//           {discountItem}
//         </p>
//       </div>
//       <hr className="product-filter-component-divider" />
//     </React.Fragment>
//   ));

//   const reviewComponents = reviewStars.map((star, index) => (
//     <React.Fragment key={index}>
//       <div className={`product-filter-component-row ${blackTextClass}`}>
//         <div className="d-flex cursor-pointer">
//           {[...Array(5)]
//             .sort((a, b) => b - a)
//             .map((_, idx) => (
//               <span
//                 className={`fs-6 me-1 ${starIconClass}`}
//                 key={idx}
//                 style={{
//                   color: idx < star ? "lightgrey" : "red",
//                 }}
//               >
//                 ★
//               </span>
//             ))}
//         </div>

//         {/* <div className="d-flex">
//           {[...Array(5)].map((_, idx) => (
//             <span
//               className={`fs-6 me-1 ${starIconClass}`}
//               key={idx}
//               style={{
//                 color: idx < star ? "red" : "lightgrey",
//               }}
//             >
//               ★
//             </span>
//           ))}
//         </div> */}

//         <p className={`product-filter-component-text ${blackTextClass}`}>
//           {/* {star} */}
//         </p>
//       </div>
//       <hr className="product-filter-component-divider" />
//     </React.Fragment>
//   ));

//   const handleBrandChange = (brand) => {
//     setSelectedBrand(brand);
//     // You can perform additional actions here based on the selected brand
//   };

//   return (
//     <div className="container product-filter-component-container">
//       {categoryComponents.length > 0 ? (
//         <>
//           {categoryComponents}
//           <hr className="product-filter-component-divider" />
//         </>
//       ) : null}
//       <p className="product-filter-component-heading">Price</p>
//       {priceComponents}
//       <hr className="product-filter-component-divider" />
//       <p className="product-filter-component-heading">Brands</p>
//       {brandComponents}
//       <hr className="product-filter-component-divider" />
//       <p className="product-filter-component-heading">Discount</p>
//       {discountComponents}
//       <hr className="product-filter-component-divider" />
//       <p className="product-filter-component-heading">Customer Review</p>
//       {reviewComponents}
//       <hr className="product-filter-component-divider" />
//     </div>
//   );
// };

// export default FilterByName;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByPrice,
  filterByBrand,
  filterByDiscount,
  filterByRating,
  filterByVeg,
} from "../../../redux/Slices/Product/productSlice";
import "./ProductFilters.css";
import filterImage from "../../../assets/Icon/Onion.png";

// Mock Data
const categories = [
  "All Categories", // Added "All" option
  "Fresh Vegetables",
  "Exotic Vegetables",
  "Fresh Fruits",
  "Exotic Fruits",
  "Herbs & Leafy Vegetables",
];

const priceCategoriesFilter = [
  "All Prices", // Added "All" option
  "Under ₹50",
  "₹50 - ₹100",
  "₹100 - ₹200",
  "₹200 - ₹500",
  "₹500 and Above",
];

const brands = [
  "All Brands", // Added "All" option
  "Aachi",
  "Daawat",
  "Everst",
  "Madhur",
  "Tata Sampann",
  "edobo",
];

const discount = [
  "All Discounts", // Added "All" option
  "Upto 10% Off",
  "20% to 30% Off",
  "30% to 40% Off",
  "40% to 50% Off",
  "50% Off or more",
];

const reviewStars = ["All Ratings", 4, 3, 2, 1]; // Added "All Ratings" option

const FilterByName = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("All Brands");

  // Handlers for each filter type
  const handleCategoryChange = (category) => {
    dispatch(filterByCategory(category === "All Categories" ? "" : category)); // If "All", clear the filter
  };

  const handlePriceChange = (priceRange) => {
    dispatch(filterByPrice(priceRange === "All Prices" ? "" : priceRange)); // If "All", clear the filter
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    dispatch(filterByBrand(brand === "All Brands" ? "" : brand)); // If "All", clear the filter
  };

  const handleDiscountChange = (discountRange) => {
    dispatch(
      filterByDiscount(discountRange === "All Discounts" ? "" : discountRange)
    ); // If "All", clear the filter
  };

  const handleRatingChange = (rating) => {
    dispatch(filterByRating(rating === "All Ratings" ? 0 : rating)); // If "All", reset rating to 0
  };

  const handleVegChange = (isVeg) => {
    dispatch(filterByVeg(isVeg));
  };

  // UI Components for Price, Categories, Brands, etc.
  const priceComponents = priceCategoriesFilter.map((value, index) => (
    <React.Fragment key={index}>
      <div className="product-filter-component-row">
        <input
          type="radio"
          name="price"
          value={value}
          onChange={() => handlePriceChange(value)}
        />
        <label>{value}</label>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const categoryComponents = categories.map((category, index) => (
    <React.Fragment key={index}>
      <div className="product-filter-component-row">
        {category !== "All Categories" && (
          <img
            src={filterImage}
            alt={`Filter ${category}`}
            className="product-filter-component-image"
          />
        )}
        <input
          type="radio"
          name="category"
          value={category}
          onChange={() => handleCategoryChange(category)}
        />
        <label>{category}</label>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const brandComponents = brands.map((brand, index) => (
    <React.Fragment key={index}>
      <div className="product-filter-component-row">
        <input
          type="radio"
          name="brand"
          value={brand}
          checked={selectedBrand === brand}
          onChange={() => handleBrandChange(brand)}
        />
        <label>{brand}</label>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const discountComponents = discount.map((discountItem, index) => (
    <React.Fragment key={index}>
      <div className="product-filter-component-row">
        <input
          type="radio"
          name="discount"
          value={discountItem}
          onChange={() => handleDiscountChange(discountItem)}
        />
        <label>{discountItem}</label>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  const reviewComponents = reviewStars.map((star, index) => (
    <React.Fragment key={index}>
      <div className="product-filter-component-row">
        <div className="d-flex">
          {[...Array(5)].map((_, idx) => (
            <span
              key={idx}
              className="fs-6 me-1"
              style={{ color: idx < star ? "red" : "lightgrey" }}
            >
              ★
            </span>
          ))}
        </div>
        <input
          type="radio"
          name="rating"
          value={star}
          onChange={() => handleRatingChange(star)}
        />
        <label>{star}</label>
      </div>
      <hr className="product-filter-component-divider" />
    </React.Fragment>
  ));

  return (
    <div className="container product-filter-component-container">
      <p className="product-filter-component-heading">Category</p>
      {categoryComponents}

      <p className="product-filter-component-heading">Price</p>
      {priceComponents}

      <p className="product-filter-component-heading">Brands</p>
      {brandComponents}

      <p className="product-filter-component-heading">Discount</p>
      {discountComponents}

      <p className="product-filter-component-heading">Customer Review</p>
      {reviewComponents}

      <p className="product-filter-component-heading">Type</p>
      <div className="product-filter-component-row">
        <input
          type="radio"
          name="type"
          value="veg"
          onChange={() => handleVegChange(true)}
        />
        <label>Veg</label>
      </div>
      <div className="product-filter-component-row">
        <input
          type="radio"
          name="type"
          value="non-veg"
          onChange={() => handleVegChange(false)}
        />
        <label>Non-Veg</label>
      </div>
    </div>
  );
};

export default FilterByName;
