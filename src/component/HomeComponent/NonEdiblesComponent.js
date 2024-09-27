import React from "react";
import ProductCard from "../../common/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NonEdiblesComponent = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
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
      <h3 className="fs-4 pb-3">NonEdibles Food</h3>
      <Slider {...settings}>
        <div className="">
          <div className="edititable-product-image-container">
            <ProductCard
              imageSrc={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991"
              }
              title={"vegetables1"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="edititable-product-image-container ">
            <ProductCard
              imageSrc={
                "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
              }
              title={"Green Masala Milk"}
              // description={"frferf fer[oif erfoiuerfner ferifuref feriufrpef we"}
              price={"₹ 41.3"}
              mrp={"₹ 51.3"}
              onAddtoCartClick={() => {
                console.log("___________________");
              }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default NonEdiblesComponent;
