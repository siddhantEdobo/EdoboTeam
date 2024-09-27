import React from "react";
import { useParams } from "react-router-dom";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";

const ProductListPage = ({ data }) => {
  const { alias } = useParams(); // Get the alias from the URL
  const hasCollection = data;

  const selectedCollection =
    hasCollection?.find((item) => item?.alias === alias) || hasCollection?.[0];
  console.log(hasCollection);

  return (
    <div className="container-lg home-container">
      <h2>{alias || "All Products"}</h2>
      <div className="row row-cols-2 row-cols-md-4 row-cols-sm-4 py-2">
        {selectedCollection?.products?.map((value, index) => (
          <div
            key={value?.id}
            className="col edititable-product-image-container"
          >
            {/* Render each product */}
            <div className="card product-card-container">
              <img
                src={"http://103.165.118.218/edobo/" + value?.thumb_image_url}
                alt={value?.product_name}
              />
              <h6>{value?.product_name}</h6>
              <p>{value?.compare_price}</p>
              <AddToCartButtonCustomIcon quantity={"0"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
