import React from "react";
import "./MobComboComponent.css";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const MobComboComponent = ({ data }) => {
  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Check if data is valid and has the necessary structure
  const isValidData =
    data &&
    data.data &&
    data.data[1] &&
    data.data[1].items &&
    data.data[1].items[0] &&
    data.data[1].items[0].products;

  return (
    <div>
      {isValidData ? (
        <div className="container-lg home-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-4">Slide Collection</div>
            <div className="d-flex">
              <div className="fs-14 pb-3 text-danger me-1"> More </div>
              <div className="fs-14 pb-3 text-danger me-2">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
          </div>
          <div className="d-flex hide-scrollbar gap-2 mt-3 ">
            {data.data[1].items[0].products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="card mob-combo-product-card-container"
                >
                  <div className="mob-combo-product-image-container position-relative card">
                    <img
                      className="product-image"
                      src={
                        "http://103.165.118.218/edobo/" +
                        product.thumb_image_url
                      }
                      alt={product.product_name}
                      onClick={() => {}}
                    />
                    <div className="mob-product-discount-container">
                      14% Off
                    </div>
                  </div>
                  <div className="card-body mob-combo-product-details">
                    <div className="">
                      <h6 className="card-title fs-14 fw-bold">
                        {product.product_name}
                      </h6>
                    </div>
                    <div className="d-flex gap-2">
                      <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                        {product.price}
                      </div>
                      <div className="fs-5 fw-bold text-nowrap text-success">
                        {product.compare_price}
                      </div>
                    </div>
                    <p className="fs-12 fw-bold">{"Combo of 5"}</p>
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <AddToCartButtonCustomIcon
                      quantity={"0"}
                      onAddtoCartClick={() => {}}
                      onIncrement={() => {}}
                      onDecrement={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container-lg home-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-6">Combo Banner</div>
            <div className="d-flex">
              <div className="fs-14 pb-3 text-danger me-1"> More </div>
              <div className="fs-14 pb-3 text-danger me-2">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
          </div>

          <div className="d-flex hide-scrollbar gap-2 mt-3 ">
            {[...Array(4)].map((value, index) => {
              return (
                <div
                  key={index}
                  className="card mob-combo-product-card-container"
                >
                  <div className="mob-combo-product-image-container position-relative card">
                    <img
                      className="product-image"
                      src={
                        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/products/sliding_image/440148a.jpg?ts=1694431585"
                      }
                      alt={"title"}
                      onClick={() => {}}
                    />
                    <div className="mob-product-discount-container">
                      14% Off
                    </div>
                  </div>
                  <div className="card-body mob-combo-product-details">
                    <h6 className="card-title fs-14 fw-bold">
                      {"Subji Combo"}
                    </h6>
                    <div className="d-flex gap-2">
                      <div className="fs-14 text-decoration-line-through fw-medium text-nowrap text-danger">
                        {"₹ 70"}
                      </div>
                      <div className="fs-5 fw-bold text-nowrap text-success">
                        {"₹ 50"}
                      </div>
                    </div>
                    <p className="fs-12 fw-bold">{"Combo of 5"}</p>
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <AddToCartButtonCustomIcon
                      quantity={"0"}
                      onAddtoCartClick={() => {}}
                      onIncrement={() => {}}
                      onDecrement={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobComboComponent;
