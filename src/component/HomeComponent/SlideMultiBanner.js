import React from "react";
import Slider from "react-slick";

const SlideMultiBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-lg home-container">
      <Slider {...settings}>
        <div className="popular-image-container">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container ps-2">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container ps-2">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container ps-2 ">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/fec504e7-9877-49b6-b797-28782ac79781.png"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container ps-2">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/7a4526d3-5906-4172-974d-eeced91dcc24.png"
              alt="..."
            />
          </div>
        </div>
        <div className="popular-image-container ps-2">
          <div className="">
            <img
              className="d-flex h-100 bg-denger w-100 "
              src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/bd4551dc-ace6-4541-88d2-0058c256a0ad.png"
              alt="..."
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideMultiBanner;
