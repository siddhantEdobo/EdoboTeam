import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MobBrowseMainCategoryListComponent = (props) => {
  const {
    categoryProduct,
    onClick = () => {},
    selectedMainCategory,
    // setSelectedMainCategory,
  } = props;

  // const [selectedMainCategory, setSelectedMainCategory] = useState(
  //   categoryProduct[0]
  // );
  console.log("MobBrowseMainCategoryListComponent render");

  console.log("12121", categoryProduct);

  return (
    <div
      className="offcanvas offcanvas-end show offcanvas.show mob-browse-category-right-offcanvas p-0 m-0 shadow"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-23"
      id="mainCategoryProductList"
      aria-labelledby="mainCategoryProductListLabel"
    >
      <div className="offcanvas-header mob-browse-category-right-offcanvas-border">
        <div className="">
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/658a5e026eef9215945a31c5/logo-app-2-240x240.png"
            }
            alt="Ebobo"
            className="uv-image"
          />
          <div className="mob-browse-category-offcanvas-container">
            <FontAwesomeIcon icon={faSearch} className="faicons-size" />
          </div>
        </div>
      </div>
      <div className="offcanvas-body p-0 gap-1 hide-scrollbar overflow-x-hidden mob-browse-category-right-offcanvas-border ">
        {categoryProduct?.map((item) => (
          <div
            key={item.id}
            className={`mob-browse-category-offcanvas-container ${
              item?.id === selectedMainCategory?.id &&
              "mob-browse-category-active"
            }`}
            onClick={() => {
              // setSelectedMainCategory(item);
              onClick(item);
            }}
          >
            <div className="mob-browse-category-offcanvas-img-container">
              <img
                loading="lazy"
                src={item?.icon}
                alt=""
                className="h-100 w-100"
              />
            </div>
            <div className="mob-browe-category-offconvas-text text-wrap two-line-text">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobBrowseMainCategoryListComponent;
