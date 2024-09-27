import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../common/ProductCard";

const EDITIBLE = [
  {
    id: 1,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 2,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 3,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 4,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 5,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 6,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
];

const MobOptionVarientComponent = (props) => {
  const settings = {
    infinite: false,
    // speed: 500,
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

  return (
    <div className="">
      {/* <div className="d-flex align-items-center justify-content-between">
        <div className="fs-4 pb-3">Your Daily Needs</div>
        <div className="fs-14 pb-3 text-danger">
          More
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
      </div> */}
      <Slider {...settings}>
        {EDITIBLE?.map((value) => {
          return (
            <div key={value?.id} className="">
              <div className="edititable-product-image-container me-2">
                <ProductCard
                  imageSrc={value?.url}
                  title={value?.title}
                  price={value?.price}
                  mrp={value?.mrp}
                  description={value?.description}
                  onAddtoCartClick={() => {}}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobOptionVarientComponent;
