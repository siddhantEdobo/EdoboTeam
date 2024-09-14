import React from "react";
import Slider from "react-slick";
import "./MobSlideMultiBanner.css";

const SLIDER_CARDS = [
  {
    id: 1,
    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
  },
  {
    id: 2,
    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
  },
  {
    id: 3,
    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
  },
  {
    id: 4,
    url: "	https://www.edobo.in/s/60a39f1801d30d79c4caa94b/655b4ab70083faa3d6b5148c/wow-momos-new-400x300.png",
  },
];

const MobSlideMultiBanner = () => {
  const settings = {
    // infinite: true,
    speed: 500,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    // autoplay: true,
    // centerMode: true,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    // pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      {/* <Slider {...settings}> */}
      <div className="d-flex hide-scrollbar p-2 gap-2">
        {SLIDER_CARDS.map((value, index) => {
          return (
            <div key={value?.id} className="mob-slider-image-container">
              <img className="d-flex h-100 w-100" src={value?.url} alt="..." />
            </div>
          );
        })}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default MobSlideMultiBanner;
