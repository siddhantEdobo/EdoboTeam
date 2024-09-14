import React from "react";
import Slider from "react-slick";
import "./MobCategoryBannerComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CATEGORUBANNER = [
  {
    id: 1,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/4c186aa1-9706-46e3-b901-9dfa85b79f17.png",
  },
  {
    id: 2,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/c4b53a40-d74a-4369-ace2-ff70954a7201.png",
  },
  {
    id: 3,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/4c186aa1-9706-46e3-b901-9dfa85b79f17.png",
  },
  {
    id: 4,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/2d8b3b58-ce30-47f7-9670-a23a14a40a2f.png",
  },
  {
    id: 5,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/c4b53a40-d74a-4369-ace2-ff70954a7201.png",
  },
  {
    id: 6,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/4c186aa1-9706-46e3-b901-9dfa85b79f17.png",
  },
  {
    id: 7,
    url: "https://cdn.zeptonow.com/production///tr:w-160,ar-384-588,pr-true,f-webp,q-80/inventory/banner/2d8b3b58-ce30-47f7-9670-a23a14a40a2f.png",
  },
];

const MobCategoryBannerComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container-lg home-container">
      <h3 className="fs-4 pb-3">Explore New Categorie</h3>
      <Slider {...settings}>
        {CATEGORUBANNER?.map((value, index) => {
          return (
            <div key={index} className="mob-category-image-container">
              <img
                className="h-100 w-100 p-1"
                src={value?.url}
                alt={value?.url}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobCategoryBannerComponent;
