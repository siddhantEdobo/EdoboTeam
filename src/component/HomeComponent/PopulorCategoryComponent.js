import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopulorCategoryComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  return (
    <div className="container-lg home-container">
      <h3 className="fs-4 pb-3">POPULAR CATEGORIES</h3>
      <Slider {...settings}>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63289332757e3e326caf93de/_vegetables-240-240-px-1--300X300.png"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63289389757e3e326cafed34/_fresh-fruits-240-240-px-1--300X300.png"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/616657d64f853f76b384c4d0/staple-300X300.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63289332757e3e326caf93de/_vegetables-240-240-px-1--300X300.png"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger w-100 rounded-circle"
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63289389757e3e326cafed34/_fresh-fruits-240-240-px-1--300X300.png"
              alt="..."
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PopulorCategoryComponent;
