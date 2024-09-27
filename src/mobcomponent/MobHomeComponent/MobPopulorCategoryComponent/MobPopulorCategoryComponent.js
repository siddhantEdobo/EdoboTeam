import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MobPopulorCategoryComponent.css";

const POPULAR = [
  // Array of popular category images
];

const MobPopulorCategoryComponent = ({ data }) => {
  const settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const hasData =
    data &&
    data.data &&
    // data.data.length > 2 && // Ensure there are enough items in the data array
    data.data[2] &&
    data.data[2].items;

  return (
    <div className="container-lg home-container">
      <h3 className="fs-4 pb-3">Main Header</h3>
      {hasData ? (
        <Slider {...settings}>
          {data.data[2].items.map((item) => (
            <div key={item?.id} className="mob-popular-image-container">
              <div className="ms-3">
                <img
                  className="d-flex h-100 bg-denger w-100 rounded-circle"
                  src={item?.image1}
                  alt="..."
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {POPULAR?.map((item) => (
            <div key={item.id} className="mob-popular-image-container">
              <div className="ms-3">
                <img
                  className="d-flex h-100 bg-denger w-100 rounded-circle"
                  src={item.url}
                  alt="..."
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MobPopulorCategoryComponent;
