import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MobMainHeaderComponent.css";

const POPULAR = [
  // Array of popular category images
];

const MobMainHeaderComponent = ({ data }) => {
  const settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 3, // Show only 3 slides
    slidesToScroll: 3, // Scroll 3 at a time
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const hasData = data && data.data && data.data[2] && data.data[2].items;

  // Use slice to get only the first 3 items
  const itemsToShow = hasData ? data.data[2].items.slice(0, 3) : [];

  return (
    <div className="container-lg home-container">
      <h3 className="fs-4 pb-3">Main Header</h3>
      {hasData ? (
        <div className="d-flex">
          {itemsToShow.map((item) => (
           <div key={item?.id} className="mob-popular-image-container">
           <div className="d-flex ms-3">
             <img
               className="rounded-circle"
               src={item?.image1}
               alt={item?.name}
             />
           </div>
         </div>
         
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {POPULAR?.slice(0, 3).map((item) => (
            <div key={item.id} className="mob-popular-image-container">
              <div className="ms-3">
                <img
                  className="d-flex h-100 w-100 rounded-circle"
                  src={item.url}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MobMainHeaderComponent;
