import React from "react";
import Slider from "react-slick";
import "./MobBannerComponent.css";

const MobBannerComponent = ({ data }) => {
  // Default banner list
  const bannerList = [
    {
      id: 1,
      url: "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/655b4ac9eaa6f8cf25f08bcf/fnv-banner-new-400x300.png",
      alt: "Default Banner 1",
    },
    {
      id: 2,
      url: "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/655b4ac9eaa6f8cf25f08bcf/fnv-banner-new-400x300.png",
      alt: "Default Banner 2",
    },
    {
      id: 3,
      url: "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/655b345920bb1a5bae30f17a/cut-vegetables-new2-400x300.png",
      alt: "Default Banner 3",
    },
    {
      id: 4,
      url: "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/655b345920bb1a5bae30f17a/cut-vegetables-new2-400x300.png",
      alt: "Default Banner 4",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  // Check if data is valid and has the necessary structure
  const isValidData = data && data.data && data.data[0] && data.data[0].items;

  return (
    <div className="container-fluid">
      <div>
        {isValidData ? (
          <Slider {...settings}>
            {data.data[0].items.map((item) => (
              <div
                key={item.id}
                className="mob-banner-home-image-container p-2"
              >
                <img
                  src={item.image1}
                  className="w-100 h-100"
                  alt={item.name}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {bannerList.map((banner) => (
              <div
                key={banner.id}
                className="mob-banner-home-image-container p-2"
              >
                <img
                  src={banner.url}
                  className="w-100 h-100"
                  alt={banner.alt}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default MobBannerComponent;
