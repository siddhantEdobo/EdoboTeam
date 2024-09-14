import React, { createRef, useRef, useState } from "react";
import "./ProductDetailsImageComponent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";

export const RightNavButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="btn btn-default w-100"
    >
      <FontAwesomeIcon icon={faArrowAltCircleDown} />
    </button>
  );
};

export const LeftNavButton = (props) => (
  <button
    onClick={props.onClick}
    type="button"
    className="btn btn-default w-100"
  >
    <FontAwesomeIcon icon={faArrowAltCircleUp} />
  </button>
);

const ProductDetailsImageComponent = () => {
  const IMAGES_LIST = [
    {
      id: 1,
      url: "https://source.unsplash.com/300x300/?perth,australia",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/300x300/?west-australia",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/300x300/?perth",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/300x300/?quokka,perth",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 7,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia",
    },
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const myImageRef = createRef();
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <RightNavButton />,
    prevArrow: <LeftNavButton />,
  };

  const onImageClickHandler = (value, index) => {
    console.log('"______>', value, index);
    setSelectedImageIndex(index);
    console.log("myImageRef?.current", myImageRef?.current);
  };

  return (
    <div className="container  ">
      <div className="row">
        <div className="col-3  h-100 pt-4 ">
          <div className="product-details-container ">
            <Slider {...settings} ref={myImageRef}>
              {IMAGES_LIST?.map((value, index) => {
                return (
                  <div
                    key={value?.id}
                    className={`product-details-imglist-container ${
                      selectedImageIndex === index && "active-image"
                    }`}
                    onClick={() => {
                      onImageClickHandler(value, index);
                    }}
                  >
                    <img
                      className="product-image"
                      loading="lezy"
                      src={value?.url}
                      alt={""}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="col-8 align-items-center d-flex">
          <div className="product-details-largeimg-container">
            <div className="product-details-largeimg-subcontainer">
              <img
                className="product-image"
                loading="lezy"
                src={
                  IMAGES_LIST?.length > 0 &&
                  IMAGES_LIST[selectedImageIndex]?.url
                }
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="accordion"
        id="accordionExample"
        style={{ marginTop: "10px" }}
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Products Details
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Key Features
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    Made with wholegrains of Corn and Oats to add the perfect
                    crunch to your breakfast. Calcium and Vitamin D combination
                    helps you maintain bone health. Source of Iron, Folic acid,
                    B-Vitamins and Fibre.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Ingredients
                  </h3>
                  <p style={{ fontSize: "12px" }}>some this on key product</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Shelf Life
                  </h3>
                  <p style={{ fontSize: "12px" }}>some this on key product</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Manufacturer Details
                  </h3>
                  <p style={{ fontSize: "12px" }}>some this on key product</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    FSSAI License
                  </h3>
                  <p style={{ fontSize: "12px" }}>11522008000380</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Disclaimer
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div>
                  <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Disclaimer
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    Every effort is made to maintain accuracy of all
                    information. However, actual product packaging and materials
                    may contain more and/or different information. It is
                    recommended not to solely rely on the information presented
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsImageComponent;
