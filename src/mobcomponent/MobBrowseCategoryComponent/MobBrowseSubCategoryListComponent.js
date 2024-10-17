import React from "react";
import "./MobBrowserCategoryComponent.css";
const MobBrowseSubCategoryListComponent = (props) => {
  const { categoryProduct, onClick = () => {}, selectedSubCategory } = props;
  // console.log("subx", categoryProduct[0].sub_categories);
  return (
    <div className="d-flex hide-scrollbar gap-3 mt-2">
      {categoryProduct?.map((items) =>
        items?.sub_categories.map((item) => (
          <div
            key={item.id}
            // className={`mob-browse-category-offcanvas-container bg-info ${
            //   item?.id === selectedSubCategory?.id && "mob-browse-category-active"
            // }`}
            className={`mob-browse-category-sub-category-container  ${
              item?.id === selectedSubCategory?.id &&
              "mob-browse-category-active bg-danger text-white p-1"
            }`}
            onClick={() => {
              onClick(item);
            }}
          >
            <div className="mob-browse-category-offcanvas-img-container">
              <img
                sub_categories
                // src={item?.imageSrc}
                src={item?.icon}
                alt=""
                className="h-100 w-100"
              />
            </div>
            <div className="mob-browe-category-offconvas-text text-wrap two-line-text">
              {item.name}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MobBrowseSubCategoryListComponent;
