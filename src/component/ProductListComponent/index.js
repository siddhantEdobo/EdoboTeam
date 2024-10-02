import React from "react";
import "./ProductListComponent.css";
import ProductFilters from "./ProductFilters";
import ProductBannerList from "./ProductBannerList";

const ProductListComponent = () => {
  return (
    // Main Container for ProductList
    <div className="container-xxl">
      {/* Filter Container for ProductList */}
      <div className="row">
        <div className="col-md-3 custom-bg">
          <div className="filter-bg">
            <ProductFilters />
          </div>
        </div>

        {/* Banner and Show ProductList Container */}
        <div className="col-md-9 custom-bg">
          <div className="Productlist-bg">
            <ProductBannerList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
