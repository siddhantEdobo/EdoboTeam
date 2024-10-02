import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../../common/ProductCard";
import BannerImage from "../../../assets/ProductBannerVegitable.png";
import "./ProductBannerList.css";
import ProductFilterModalComponent from "./ProductFilterModalComponent";
import {
  setSortBy,
  setProductType,
  resetFilters,
} from "../../../redux/Slices/Product/productSlice";

const ProductBannerList = () => {
  const { products, filters } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const parsePriceRange = (range) => {
    if (range === "Less than ₹20") return 20;
    if (range === "₹21 to ₹50") return 50;
    if (range === "₹51 to ₹100") return 100;
    if (range === "₹101 to ₹200") return 200;
    if (range === "₹201 to ₹500") return 500;
    return Infinity;
  };

  const sortProducts = (products) => {
    switch (filters.sortBy) {
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "nameAToZ":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "nameZToA":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    const matchesPrice = filters.priceRange
      ? product.price <= parsePriceRange(filters.priceRange)
      : true;
    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesDiscount = filters.discount
      ? product.discount === filters.discount
      : true;
    const matchesVeg = filters.isVeg ? product.isVeg === filters.isVeg : true;
    const matchesProductType =
      filters.productType === "All" ||
      (filters.productType === "Veg" && product.isVeg) ||
      (filters.productType === "Non-Veg" && !product.isVeg) ||
      (filters.productType === "Vegan" && product.category === "Vegan") ||
      (filters.productType === "Eggitarian" &&
        product.category === "Eggitarian");
    const matchesSearch = filters.searchTerm
      ? product.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
      : true;
    const matchesRating = filters.rating
      ? product.rating >= filters.rating
      : true;

    return (
      matchesCategory &&
      matchesPrice &&
      matchesBrand &&
      matchesDiscount &&
      matchesVeg &&
      matchesProductType &&
      matchesSearch &&
      matchesRating
    );
  });

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div>
      <div className="container-xxl">
        <img
          src={BannerImage}
          alt="Special Sale Banner"
          className="banner-image"
        />
      </div>

      <div className="my-4 d-flex justify-content-between ms-2 me-3">
        <div className="fs-6 fw-bold text-danger">
          Buy Fresh Vegetables Online
        </div>

        <div className="d-flex gap-2">
          {["Veg", "Non-Veg", "Vegan", "Eggitarian"].map((type) => (
            <div
              key={type}
              className={`product-card-sort-filter-container ${
                filters.productType === type ? "active" : ""
              }`}
              onClick={() => dispatch(setProductType(type))}
            >
              {type}
            </div>
          ))}
          <div className="product-card-sort-container">
            <select
              className="form-select form-select-sm"
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "1") {
                  dispatch(setSortBy("priceLowToHigh"));
                } else if (selectedValue === "2") {
                  dispatch(setSortBy("priceHighToLow"));
                } else if (selectedValue === "3") {
                  dispatch(setSortBy("nameAToZ"));
                } else if (selectedValue === "4") {
                  dispatch(setSortBy("nameZToA"));
                } else {
                  dispatch(setSortBy("default"));
                }
              }}
            >
              <option value="default" selected>
                Sort By
              </option>
              <option value="1">Price (Low to High)</option>
              <option value="2">Price (High to Low)</option>
              <option value="3">Name (A to Z)</option>
              <option value="4">Name (Z to A)</option>
            </select>
          </div>
          <div
            aria-current="page"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasProductFilter"
            aria-controls="offcanvasRight"
          >
            <div className="product-card-sort-filter-container">Filter</div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasProductFilter"
        aria-labelledby="offcanvasRightLabel"
      >
        <ProductFilterModalComponent />
      </div>

      {sortedProducts.length > 0 ? (
        <div className="row">
          {sortedProducts.map((product) => (
            <div className="col-lg-3 col-4" key={product.id}>
              <div className="editable-product-image-container mt-4">
                <ProductCard
                  product={product}
                  id={product.id}
                  imageSrc={product.imageSrc}
                  title={product.title}
                  price={product.price}
                  mrp={product.mrp}
                  description={product.description}
                  discountValue={product.discount}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products-container">
          <div className="no-products-content">
            <img
              src="https://path-to-your-icon/sad-icon.png"
              alt="No Products"
              className="no-products-icon"
            />
            <h3 className="no-products-message">No Products Found</h3>
            <p className="no-products-submessage">
              Sorry, we couldn't find any products matching your search.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(resetFilters())}
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBannerList;
