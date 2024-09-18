import React, { useState } from "react";
import "./MobTabbingCollection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/reducers/addCart";
import { useDispatch } from "react-redux";

const VEGI_TYPE = [
  { id: 1, label: "Combo" },
  { id: 2, label: "Vegitables" },
  { id: 3, label: "Grocery" },
  { id: 4, label: "Baby Care" },
  { id: 5, label: "Non Veg" },
  { id: 6, label: "Medicine" },
];

const MobTabbingCollection = ({ data }) => {
  const [selectedAlias, setSelectedAlias] = useState(null); // State to track selected collection
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch(); // State to track whether to show more products
  const [productQuantities, setProductQuantities] = useState({});

  const handleIncrement = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (value) => {
    dispatch(addToCart(value)); // Dispatch addToCart action with the product
  };
  const handleButton = (alias) => {
    setSelectedAlias(alias);
    setShowMore(false); // Reset to show only 4 products when switching collections
  };

  // Check if data and data.data[4] exist
  const hasCollection = data?.data?.[4]?.items;
  const selectedCollection =
    hasCollection?.find((item) => item?.alias === selectedAlias) ||
    hasCollection?.[0]; // Default to the first collection if no alias is selected

  const visibleProducts = showMore
    ? selectedCollection?.products
    : selectedCollection?.products?.slice(0, 4); // Show only 4 products unless "More" is clicked

  return (
    <div>
      {hasCollection ? (
        <div className="container-lg home-container">
          <div className="fs-6 text-black pt-2 ">Tabbing Collection</div>
          <div className="d-flex gap-2 hide-scrollbar my-2 p-0">
            {hasCollection.map((value) => {
              return (
                <div
                  key={value.id}
                  className={`btn mob-vegitable-list-button rounded-pill bg-white text-pink ${
                    value?.alias === selectedAlias
                      ? "pink-secondry border-1 text-white"
                      : ""
                  }`}
                  onClick={() => handleButton(value?.alias)} // Pass alias to handleButton
                >
                  {value?.alias}
                </div>
              );
            })}
          </div>

          <div className="row row-cols-2 row-cols-md-4 row-cols-sm-4 py-2">
            {visibleProducts?.map((value, index) => {
              const quantity = productQuantities[value.id] || 0;
              return (
                <div
                  key={value?.id}
                  className={`col edititable-product-image-container ${
                    index % 2 !== 0 && "pt-3"
                  }`}
                >
                  <div className="card product-card-container">
                    <div className="product-image-container position-relative p-1 m-0">
                      <img
                        className="product-image"
                        src={
                          "http://103.165.118.218/edobo/" +
                          value?.thumb_image_url
                        }
                        alt={value?.product_name}
                        onClick={() => {}}
                      />
                      {true && (
                        <div className="mob-vegitable-product-discount-container">
                          15% Off
                        </div>
                      )}
                      <div className="position-absolute bottom-0 start-0 ps-3">
                        {true && (
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="fa-2xl"
                            onClick={() => {
                              // onClickWishlist();
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-title-container">
                        <h6 className="card-title fs-13">
                          {value?.product_name}
                        </h6>
                      </div>
                      <div className="d-flex gap-2">
                        <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                          {value.price}
                        </div>
                        <div className="fs-6 fw-bold text-nowrap">
                          {value?.compare_price}
                        </div>
                      </div>
                      <p className="fs-12">{"Combo of 5"}</p>
                      <div className="position-absolute bottom-0 end-0">
                        <AddToCartButtonCustomIcon
                          product={value}
                          // quantity={getItemQuantity(product.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!showMore && selectedCollection?.products?.length > 4 && (
            <div className="text-center ">
              <button
                className="btn text-danger"
                onClick={() => setShowMore(true)}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="container-lg home-container pink-primary">
          <div className="fs-6 text-white pt-2 fw-bold">Tabbing Collection</div>
          <div className="d-flex gap-2 hide-scrollbar my-2 p-0">
            {VEGI_TYPE.map((value, index) => (
              <div
                key={value.id}
                className={`btn mob-vegitable-list-button rounded-pill bg-white text-pink ${
                  index === 0 && "pink-secondry border-1 text-white"
                }`}
              >
                {value?.label}
              </div>
            ))}
          </div>
          <div className="row row-cols-2 row-cols-md-4 row-cols-sm-4 py-2 pink">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`col edititable-product-image-container ${
                  index % 2 !== 0 && "pt-3"
                }`}
              >
                <div className="card product-card-container">
                  <div className="product-image-container position-relative p-1 m-0">
                    <img
                      className="product-image"
                      src={
                        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/products/sliding_image/440148a.jpg?ts=1694431585"
                      }
                      alt={"title"}
                      onClick={() => {}}
                    />
                    {true && (
                      <div className="mob-vegitable-product-discount-container">
                        15% Off
                      </div>
                    )}
                    <div className="position-absolute bottom-0 start-0 ps-3">
                      {true && (
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="fa-2xl"
                          onClick={() => {
                            // onClickWishlist();
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-title-container">
                      <h6 className="card-title fs-13">
                        {"Coriander Bunch + Green Chilli Combo"}
                      </h6>
                    </div>
                    <div className="d-flex gap-2">
                      <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                        {"₹ 70"}
                      </div>
                      <div className="fs-6 fw-bold text-nowrap">{"₹ 50"}</div>
                    </div>
                    <p className="fs-12">{"Combo of 5"}</p>
                    <div className="position-absolute bottom-0 end-0">
                      <AddToCartButtonCustomIcon
                        quantity={"0"}
                        onAddtoCartClick={() => {
                          // onAddtoCartClick();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobTabbingCollection;
